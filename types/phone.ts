export interface SafeArea {
  left: number;
  top: number;
  width: number;
  height: number;
  rx: number; // border radius x
  ry: number; // border radius y
}

export interface PhoneModel {
  id: string;
  name: string;
  displayName: string;
  image: string; // Path to phone case image
  safeArea: SafeArea; // Printable area coordinates
  canvasWidth: number;
  canvasHeight: number;
  price: number;
}

export interface DesignElement {
  id: string;
  type: 'image' | 'text';
  fabricObject?: any; // Fabric.js object reference
}

export interface CanvasState {
  caseImage: any | null; // Fabric.js Image object
  safeArea: SafeArea;
  elements: DesignElement[];
  selectedElement: DesignElement | null;
}

export type CaseType = 'standard' | 'magsafe' | 'impact' | 'bio';
