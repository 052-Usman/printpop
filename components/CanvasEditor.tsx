'use client';

import { useEffect, useRef, useState } from 'react';
import * as fabric from 'fabric';
import { PhoneModel } from '@/types/phone';
import {
  initializeCanvas,
  loadCaseImage,
  createSafeAreaOutline,
} from '@/lib/canvas-utils';

interface CanvasEditorProps {
  phoneModel: PhoneModel;
  onCanvasReady?: (canvas: any) => void;
  onObjectSelected?: (obj: any | null) => void;
}

export default function CanvasEditor({
  phoneModel,
  onCanvasReady,
  onObjectSelected,
}: CanvasEditorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricCanvasRef = useRef<any | null>(null);
  const onCanvasReadyRef = useRef(onCanvasReady);
  const onObjectSelectedRef = useRef(onObjectSelected);
  const [isLoading, setIsLoading] = useState(true);

  // Update refs when callbacks change
  useEffect(() => {
    onCanvasReadyRef.current = onCanvasReady;
    onObjectSelectedRef.current = onObjectSelected;
  });

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize canvas with fixed 360x720 dimensions
    const canvas = initializeCanvas('customization-canvas', 320, 720);

    fabricCanvasRef.current = canvas;

    // Load phone case image
    setIsLoading(true);
    loadCaseImage(canvas, phoneModel.image, phoneModel.safeArea.rx, (safeArea) => {
      // Add safe area outline AFTER image loads with dynamic safe area
      const outline = createSafeAreaOutline(safeArea);
      canvas.add(outline);
      canvas.bringObjectToFront(outline);

      // Store safe area on canvas for use by editor controls
      (canvas as any).safeArea = safeArea;

      canvas.renderAll();
      setIsLoading(false);
    }).catch((error) => {
      console.error('Failed to load case image:', error);
      setIsLoading(false);
    });

    // Handle object selection
    canvas.on('selection:created', (e: any) => {
      if (onObjectSelectedRef.current && e.selected && e.selected[0]) {
        onObjectSelectedRef.current(e.selected[0]);
      }
    });

    canvas.on('selection:updated', (e: any) => {
      if (onObjectSelectedRef.current && e.selected && e.selected[0]) {
        onObjectSelectedRef.current(e.selected[0]);
      }
    });

    canvas.on('selection:cleared', () => {
      if (onObjectSelectedRef.current) {
        onObjectSelectedRef.current(null);
      }
    });

    // Notify parent component
    if (onCanvasReadyRef.current) {
      onCanvasReadyRef.current(canvas);
    }

    return () => {
      canvas.dispose();
    };
  }, [phoneModel]);

  return (
    <div className="relative">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-10 rounded-xl border border-white/5">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin shadow-[0_0_15px_rgba(92,225,230,0.5)]" />
            <p className="text-sm font-medium text-primary">
              Loading case...
            </p>
          </div>
        </div>
      )}

      {/* Canvas Container */}
      <canvas
        id="customization-canvas"
        ref={canvasRef}
        className="max-w-full h-auto shadow-lg"
      />
    </div>
  );
}
