'use client';

import { useRef, useState } from 'react';
import {
  Upload,
  RotateCw,
  Move,
  Maximize2,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Eraser,
  Crop,
  Minus,
  Plus,
  RefreshCcw as RotateIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  addImageToCanvas,
  addTextToCanvas,
  updateObjectScale,
  updateObjectRotation,
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
  onObjectAdded?: () => void;
}

export default function EditorControls({
  canvas,
  selectedObject,
  onObjectAdded,
}: EditorControlsProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);
  
  // Cropper State
  const [cropperOpen, setCropperOpen] = useState(false);
  const [selectedImageSrc, setSelectedImageSrc] = useState<string | null>(null);

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
    <div className="space-y-8">
      {/* Cropper Modal */}
      <ImageCropper
        isOpen={cropperOpen}
        onClose={() => setCropperOpen(false)}
        imageSrc={selectedImageSrc}
        onCropComplete={handleCropComplete}
      />

      {/* 1. Upload your art */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          <span className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shadow-sm">
            1
          </span>
          Upload your art
        </h3>

        <div 
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50/50 dark:hover:bg-blue-900/10 hover:border-blue-400 dark:hover:border-blue-700 transition-all duration-200 group active:scale-[0.99]"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
          <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-full mb-3 group-hover:scale-110 transition-transform duration-200 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40">
             <Upload className="w-6 h-6 text-blue-500 group-hover:text-blue-600" />
          </div>
          <p className="font-medium text-gray-900 dark:text-white mb-1">Click to upload image</p>
          <p className="text-xs text-gray-500">JPG, PNG up to 10MB</p>
        </div>
      </div>

      {/* 2. Adjust Position */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <span className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shadow-sm">
              2
            </span>
            Adjust Position
          </h3>
          <button 
            onClick={handleReset}
            className="text-xs text-blue-500 hover:text-blue-700 font-medium transition-colors px-2 py-1 rounded hover:bg-blue-50 cursor-pointer active:scale-95"
          >
            Reset
          </button>
        </div>

        {/* Sliders */}
        <div className="space-y-6 px-1">
          {/* Zoom */}
          <div className="space-y-3">
             <div className="flex justify-between text-xs text-gray-500">
                <span>Zoom</span>
                <span>{zoom}%</span>
             </div>
             <div className="flex items-center gap-3">
                <Minus 
                  className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-900 hover:scale-125 transition-all active:scale-90" 
                  onClick={() => handleZoomChange(Math.max(10, zoom - 10))} 
                />
                <input
                  type="range"
                  min="10"
                  max="200"
                  value={zoom}
                  onChange={(e) => handleZoomChange(Number(e.target.value))}
                  disabled={!selectedObject}
                  className="flex-1 h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-blue-500 disabled:opacity-50 hover:accent-blue-600 transition-all"
                />
                <Plus 
                  className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-900 hover:scale-125 transition-all active:scale-90" 
                  onClick={() => handleZoomChange(Math.min(200, zoom + 10))} 
                />
             </div>
          </div>

          {/* Rotation */}
           <div className="space-y-3">
             <div className="flex justify-between text-xs text-gray-500">
                <span>Rotation</span>
                <span>{rotation}°</span>
             </div>
             <div className="flex items-center gap-3">
                <RotateIcon 
                  className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-900 hover:scale-110 transition-all active:scale-90 hover:rotate-[-45deg]" 
                  onClick={() => handleRotationChange((rotation - 90 + 360) % 360)} 
                />
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={rotation}
                  onChange={(e) => handleRotationChange(Number(e.target.value))}
                  disabled={!selectedObject}
                  className="flex-1 h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-blue-500 disabled:opacity-50 hover:accent-blue-600 transition-all"
                />
                <RotateIcon 
                  className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-900 hover:scale-110 transition-all active:scale-90 scale-x-[-1] hover:rotate-45" 
                  onClick={() => handleRotationChange((rotation + 90) % 360)} 
                />
             </div>
          </div>
        </div>

        {/* Direction Controls & Actions */}
        <div className="grid grid-cols-2 gap-4">
           {/* D-Pad */}
           <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-4 flex flex-col items-center justify-center gap-2">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-white shadow-sm" onClick={() => moveObject(canvas, selectedObject, 'up')} disabled={!selectedObject}>
                 <ArrowUp className="w-4 h-4 text-gray-600" />
              </Button>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-white shadow-sm" onClick={() => moveObject(canvas, selectedObject, 'left')} disabled={!selectedObject}>
                   <ArrowLeft className="w-4 h-4 text-gray-600" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-white shadow-sm" onClick={() => moveObject(canvas, selectedObject, 'down')} disabled={!selectedObject}>
                   <ArrowDown className="w-4 h-4 text-gray-600" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-white shadow-sm" onClick={() => moveObject(canvas, selectedObject, 'right')} disabled={!selectedObject}>
                   <ArrowRight className="w-4 h-4 text-gray-600" />
                </Button>
              </div>
           </div>

           {/* Action Buttons */}
           <div className="flex flex-col gap-3">
              <Button 
                variant="secondary" 
                className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 shadow-none border border-transparent hover:border-gray-200"
                onClick={() => { if(canvas && selectedObject) centerObject(canvas, selectedObject); }}
                disabled={!selectedObject}
              >
                 <Maximize2 className="w-4 h-4 mr-2" />
                 Center
              </Button>
              <Button 
                variant="secondary" 
                className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 shadow-none border border-transparent hover:border-gray-200"
                onClick={handleDelete}
                disabled={!selectedObject}
              >
                 <Eraser className="w-4 h-4 mr-2" />
                 Remove
              </Button>
           </div>
        </div>
      </div>
    </div>
  );
}
