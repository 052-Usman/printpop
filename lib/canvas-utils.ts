import * as fabric from 'fabric';
import { SafeArea } from '@/types/phone';

export const initializeCanvas = (
  canvasId: string,
  width: number = 360,
  height: number = 720
): any => {
  const canvas = new fabric.Canvas(canvasId, {
    width,
    height,
    backgroundColor: 'transparent',
    preserveObjectStacking: true,
  });

  return canvas;
};

export const loadCaseImage = (
  canvas: any,
  imageUrl: string,
  borderRadius?: number,
  onLoaded?: (safeArea: SafeArea) => void
): Promise<any> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      const fabricImg = new fabric.Image(img, {
        selectable: false,
        evented: false,
      });

      // Scale image to fit canvas (same logic as HTML example)
      let scale: number;
      if (img.width > img.height) {
        fabricImg.scaleToWidth(canvas.width);
        scale = canvas.width / img.width;
      } else {
        scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        fabricImg.scale(scale);
      }

      // Center the image
      canvas.centerObject(fabricImg);

      // Calculate safe area based on scaled image dimensions (like HTML example)
      const scaledWidth = img.width * scale;
      const scaledHeight = img.height * scale;
      
      // Use provided border radius or default to 8% of width
      const radius = borderRadius !== undefined ? borderRadius : scaledWidth * 0.08;

      const safeArea: SafeArea = {
        left: fabricImg.left || 0,
        top: fabricImg.top || 0,
        width: scaledWidth,
        height: scaledHeight,
        rx: radius,
        ry: radius,
      };

      // Create black background layer clamped to safe area
      // const backgroundLayer = new fabric.Rect({
      //   left: safeArea.left,
      //   top: safeArea.top,
      //   width: safeArea.width,
      //   height: safeArea.height,
      //   rx: safeArea.rx,
      //   ry: safeArea.ry,
      //   fill: '#000000',
      //   selectable: false,
      //   evented: false,
      //   id: 'background-layer',
      // });

      // // Apply clip path to background so it doesn't overflow rounded corners
      // const backgroundClipPath = new fabric.Rect({
      //   left: safeArea.left,
      //   top: safeArea.top,
      //   width: safeArea.width,
      //   height: safeArea.height,
      //   rx: safeArea.rx,
      //   ry: safeArea.ry,
      //   absolutePositioned: true,
      // });
      // backgroundLayer.clipPath = backgroundClipPath;

      // canvas.add(backgroundLayer);
      canvas.add(fabricImg);
      fabricImg.set('id', 'phone-overlay');
      
      reorderLayers(canvas);
      canvas.renderAll();

      if (onLoaded) onLoaded(safeArea);
      resolve({ image: fabricImg, safeArea });
    };

    img.onerror = () => {
      console.error('Failed to load phone image:', imageUrl);
      reject(new Error('Failed to load image'));
    };

    img.src = imageUrl;
  });
};

export const reorderLayers = (canvas: any): void => {
  const objects = canvas.getObjects();
  const backgroundLayer = objects.find((obj: any) => obj.id === 'background-layer');
  const phoneCase = objects.find((obj: any) => obj.id === 'phone-overlay');
  const safeArea = objects.find((obj: any) => obj.id === 'safe-area');
  
  if (backgroundLayer) {
    canvas.sendObjectToBack(backgroundLayer);
  }

  // Ensure other objects (user content) are above background but below phone case
  
  if (phoneCase) {
    canvas.bringObjectToFront(phoneCase);
  }
  
  if (safeArea) {
    canvas.bringObjectToFront(safeArea);
  }
  
  canvas.renderAll();
};

export const createSafeAreaOutline = (
  safeArea: SafeArea
): any => {
  return new fabric.Rect({
    left: safeArea.left,
    top: safeArea.top,
    width: safeArea.width,
    height: safeArea.height,
    rx: safeArea.rx,
    ry: safeArea.ry,
    fill: 'rgba(0,0,0,0)',
    stroke: '#4f46e5',
    strokeWidth: 2,
    strokeDashArray: [6, 4],
    selectable: false,
    evented: false,
    absolutePositioned: true,
    id: 'safe-area',
  });
};

export const createClipPath = (safeArea: SafeArea): any => {
  return new fabric.Rect({
    left: safeArea.left,
    top: safeArea.top,
    width: safeArea.width,
    height: safeArea.height,
    rx: safeArea.rx,
    ry: safeArea.ry,
    absolutePositioned: true,
  });
};

export const addImageToCanvas = (
  canvas: any,
  imageUrl: string,
  safeArea: SafeArea
): Promise<any> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      const fabricImg = new fabric.Image(img, {
        scaleX: 0.5,
        scaleY: 0.5,
      });

      fabricImg.scaleToWidth(200);

      // Position at center of canvas
      fabricImg.set({
        left: canvas.width / 2 - fabricImg.getScaledWidth() / 2,
        top: canvas.height / 2 - fabricImg.getScaledHeight() / 2,
        cornerColor: '#4f46e5',
        cornerSize: 10,
        transparentCorners: false,
      });

      // Apply safe area clipping (like HTML example)
      const clipPath = new fabric.Rect({
        left: safeArea.left,
        top: safeArea.top,
        width: safeArea.width,
        height: safeArea.height,
        rx: safeArea.rx,
        ry: safeArea.ry,
        absolutePositioned: true,
      });

      fabricImg.clipPath = clipPath;

      canvas.add(fabricImg);
      canvas.setActiveObject(fabricImg);
      reorderLayers(canvas);
      
      resolve(fabricImg);
    };

    img.onerror = () => {
      reject(new Error('Failed to load image'));
    };

    img.src = imageUrl;
  });
};

export const addTextToCanvas = (
  canvas: any,
  text: string = 'Double click to edit',
  safeArea: SafeArea,
  options: any = {}
): any => {
  const fabricText = new fabric.IText(text, {
    left: canvas.width / 2,
    top: canvas.height / 2,
    fontSize: 24,
    fill: '#000000',
    fontFamily: 'Arial',
    textAlign: 'center',
    originX: 'center',
    originY: 'center',
    cornerColor: '#4f46e5',
    cornerSize: 10,
    transparentCorners: false,
    ...options,
  });

  // Apply safe area clipping
  const clipPath = new fabric.Rect({
    left: safeArea.left,
    top: safeArea.top,
    width: safeArea.width,
    height: safeArea.height,
    rx: safeArea.rx,
    ry: safeArea.ry,
    absolutePositioned: true,
  });

  fabricText.clipPath = clipPath;

  canvas.add(fabricText);
  canvas.setActiveObject(fabricText);
  reorderLayers(canvas);

  return fabricText;
};

export const updateObjectScale = (
  canvas: any,
  object: any,
  scale: number
): void => {
  object.scale(scale / 100);
  canvas.renderAll();
};

export const updateObjectRotation = (
  canvas: any,
  object: any,
  angle: number
): void => {
  object.rotate(angle);
  canvas.renderAll();
};

export const updateObjectColor = (
  canvas: any,
  object: any,
  color: string
): void => {
  object.set({ fill: color });
  canvas.renderAll();
};

export const centerObject = (
  canvas: any,
  object: any
): void => {
  canvas.centerObject(object);
  canvas.renderAll();
};

export const moveObject = (
  canvas: any,
  object: any,
  direction: 'up' | 'down' | 'left' | 'right',
  step: number = 10
): void => {
  const left = object.left || 0;
  const top = object.top || 0;

  switch (direction) {
    case 'up':
      object.set({ top: top - step });
      break;
    case 'down':
      object.set({ top: top + step });
      break;
    case 'left':
      object.set({ left: left - step });
      break;
    case 'right':
      object.set({ left: left + step });
      break;
  }

  object.setCoords();
  canvas.renderAll();
};

export const deleteObject = (
  canvas: any,
  object: any
): void => {
  canvas.remove(object);
  canvas.renderAll();
};

export const clearCanvas = (
  canvas: any,
  keepCaseImage: boolean = true
): void => {
  if (keepCaseImage) {
    const objects = canvas.getObjects();
    const caseImage = objects[0]; // First object is case image
    canvas.clear();
    if (caseImage) {
      canvas.add(caseImage);
    }
  } else {
    canvas.clear();
  }
  canvas.renderAll();
};

export const exportCanvasAsImage = (
  canvas: any,
  format: 'png' | 'jpeg' = 'png',
  quality: number = 1
): string => {
  return canvas.toDataURL({
    format,
    quality,
    multiplier: 2, // 2x resolution for better print quality
  });
};
