'use client';

import { useRef, useState, useEffect } from 'react';
import {
  CloudUpload,
  Maximize2,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Eraser,
  Minus,
  Plus,
  RefreshCcw as RotateIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  addImageToCanvas,
  addTextToCanvas,
  updateObjectScale,
  updateObjectRotation,
  updateObjectColor,
  centerObject,
  moveObject,
  deleteObject,
  clearCanvas,
} from '@/lib/canvas-utils';
import { cn } from '@/lib/utils';
import ImageCropper from './ImageCropper'; // Import the new component

interface EditorControlsProps {
  canvas: any | null;
  selectedObject: any | null;
  textColor?: string;
  onObjectAdded?: () => void;
}

export default function EditorControls({
  canvas,
  selectedObject,
  textColor,
  onObjectAdded,
}: EditorControlsProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);

  // Cropper State
  const [cropperOpen, setCropperOpen] = useState(false);
  const [selectedImageSrc, setSelectedImageSrc] = useState<string | null>(null);

  // Sync text color
  useEffect(() => {
    if (canvas && selectedObject && selectedObject.type === 'i-text' && textColor) {
      updateObjectColor(canvas, selectedObject, textColor);
    }
  }, [canvas, selectedObject, textColor]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        setSelectedImageSrc(reader.result as string);
        setCropperOpen(true);
      }
    };
    reader.readAsDataURL(file);
    e.target.value = ''; // Reset input
  };

  const handleCropComplete = (croppedImage: string) => {
    if (!canvas) return;

    const safeArea = (canvas as any).safeArea;
    if (!safeArea) {
      alert('Please wait for the phone case to load first!');
      return;
    }

    // Pass the cropped image URL to the canvas
    addImageToCanvas(canvas, croppedImage, safeArea);
    if (onObjectAdded) onObjectAdded();

    // Reset
    setSelectedImageSrc(null);
    setCropperOpen(false);
  };

  const handleZoomChange = (value: number) => {
    setZoom(value);
    if (canvas && selectedObject) {
      updateObjectScale(canvas, selectedObject, value);
    }
  };

  const handleRotationChange = (value: number) => {
    setRotation(value);
    if (canvas && selectedObject) {
      updateObjectRotation(canvas, selectedObject, value);
    }
  };

  const handleTextAdd = () => {
    if (!canvas) return;
    const safeArea = (canvas as any).safeArea;
    if (!safeArea) {
      alert('Please wait for the phone case to load first!');
      return;
    }
    addTextToCanvas(canvas, 'YOUR TEXT', safeArea, { fill: textColor || '#FFFFFF' });
    if (onObjectAdded) onObjectAdded();
  };

  const handleDelete = () => {
    if (canvas && selectedObject) deleteObject(canvas, selectedObject);
  };

  const handleReset = () => {
    if (canvas && confirm('Are you sure you want to clear all designs?')) {
      clearCanvas(canvas, true);
      setZoom(100);
      setRotation(0);
    }
  };

  return (
    <div className="space-y-6">
      {/* Cropper Modal */}
      <ImageCropper
        isOpen={cropperOpen}
        onClose={() => setCropperOpen(false)}
        imageSrc={selectedImageSrc}
        onCropComplete={handleCropComplete}
      />

      {/* Action Buttons (Add Art / Add Text) */}
      <div className="grid grid-cols-2 gap-3">
        <div
          onClick={() => fileInputRef.current?.click()}
          className="bg-black/40 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group active:scale-[0.98]"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
          <CloudUpload className="w-5 h-5 text-muted-foreground group-hover:text-primary mb-2 transition-colors" />
          <p className="text-[10px] font-black tracking-widest uppercase text-white">Upload Art</p>
        </div>
        <div
          onClick={handleTextAdd}
          className="bg-black/40 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group active:scale-[0.98]"
        >
          <span className="text-xl font-black text-muted-foreground group-hover:text-primary mb-1.5 transition-colors">T</span>
          <p className="text-[10px] font-black tracking-widest uppercase text-white">Add Text</p>
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <p className="text-[9px] text-muted-foreground font-black uppercase tracking-wider">Editor Settings</p>
          <button
            onClick={handleReset}
            disabled={!canvas}
            className="text-[10px] text-primary/60 hover:text-primary font-black uppercase tracking-widest transition-all px-2 py-1 rounded-lg hover:bg-primary/10 disabled:opacity-20 active:scale-95"
          >
            Clear All
          </button>
        </div>

        <div className={cn("space-y-5 transition-all duration-500", !selectedObject && "opacity-20 pointer-events-none grayscale blur-[1px]")}>
          <div className="flex items-center justify-between">
            <p className="text-[9px] text-muted-foreground font-black uppercase tracking-wider">Transform Art</p>
          </div>

          {/* Sliders */}
          <div className="space-y-5">
            {/* Zoom */}
            <div className="space-y-3">
              <div className="flex justify-between text-[9px] font-black uppercase tracking-widest text-muted-foreground">
                <span>Scale</span>
                <span>{zoom}%</span>
              </div>
              <div className="flex items-center gap-3">
                <Minus
                  className="w-3.5 h-3.5 text-muted-foreground cursor-pointer hover:text-primary hover:scale-110 transition-all active:scale-90"
                  onClick={() => handleZoomChange(Math.max(10, zoom - 10))}
                />
                <input
                  type="range"
                  min="10"
                  max="200"
                  value={zoom}
                  onChange={(e) => handleZoomChange(Number(e.target.value))}
                  disabled={!selectedObject}
                  className="flex-1 h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary disabled:opacity-30 hover:bg-white/20 transition-all"
                />
                <Plus
                  className="w-3.5 h-3.5 text-muted-foreground cursor-pointer hover:text-primary hover:scale-110 transition-all active:scale-90"
                  onClick={() => handleZoomChange(Math.min(200, zoom + 10))}
                />
              </div>
            </div>

            {/* Rotation */}
            <div className="space-y-3">
              <div className="flex justify-between text-[9px] font-black uppercase tracking-widest text-muted-foreground">
                <span>Rotate</span>
                <span>{rotation}°</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateIcon
                  className="w-3.5 h-3.5 text-muted-foreground cursor-pointer hover:text-primary hover:scale-110 transition-all active:scale-90 hover:-rotate-45"
                  onClick={() => handleRotationChange((rotation - 90 + 360) % 360)}
                />
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={rotation}
                  onChange={(e) => handleRotationChange(Number(e.target.value))}
                  disabled={!selectedObject}
                  className="flex-1 h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary disabled:opacity-30 hover:bg-white/20 transition-all"
                />
                <RotateIcon
                  className="w-3.5 h-3.5 text-muted-foreground cursor-pointer hover:text-primary hover:scale-110 transition-all active:scale-90 scale-x-[-1] hover:rotate-45"
                  onClick={() => handleRotationChange((rotation + 90) % 360)}
                />
              </div>
            </div>
          </div>

          {/* Direction Controls & Actions */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            {/* D-Pad */}
            <div className="bg-black/40 border border-white/10 rounded-xl p-3 flex flex-col items-center justify-center gap-1.5 backdrop-blur-sm">
              <Button variant="ghost" size="sm" className="h-7 w-7 p-0 hover:bg-primary/20 hover:text-primary transition-all rounded-lg" onClick={() => moveObject(canvas, selectedObject, 'up')} disabled={!selectedObject}>
                <ArrowUp className="w-3.5 h-3.5" />
              </Button>
              <div className="flex gap-1.5">
                <Button variant="ghost" size="sm" className="h-7 w-7 p-0 hover:bg-primary/20 hover:text-primary transition-all rounded-lg" onClick={() => moveObject(canvas, selectedObject, 'left')} disabled={!selectedObject}>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </Button>
                <Button variant="ghost" size="sm" className="h-7 w-7 p-0 hover:bg-primary/20 hover:text-primary transition-all rounded-lg" onClick={() => moveObject(canvas, selectedObject, 'down')} disabled={!selectedObject}>
                  <ArrowDown className="w-3.5 h-3.5" />
                </Button>
                <Button variant="ghost" size="sm" className="h-7 w-7 p-0 hover:bg-primary/20 hover:text-primary transition-all rounded-lg" onClick={() => moveObject(canvas, selectedObject, 'right')} disabled={!selectedObject}>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2">
              <Button
                variant="outline"
                className="flex-1 h-9 bg-black/40 hover:bg-primary/20 text-white border-white/10 hover:border-primary/50 hover:text-primary transition-all rounded-xl text-[10px] font-black tracking-widest uppercase"
                onClick={() => { if (canvas && selectedObject) centerObject(canvas, selectedObject); }}
                disabled={!selectedObject}
              >
                <Maximize2 className="w-3 h-3 mr-2" />
                Center
              </Button>
              <Button
                variant="outline"
                className="flex-1 h-9 bg-black/40 hover:bg-secondary/20 text-white border-white/10 hover:border-secondary/50 hover:text-secondary transition-all rounded-xl text-[10px] font-black tracking-widest uppercase"
                onClick={handleDelete}
                disabled={!selectedObject}
              >
                <Eraser className="w-3 h-3 mr-2" />
                Remove
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
