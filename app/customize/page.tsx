'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { PhoneModel, CaseType } from '@/types/phone';
import { getPhoneModelById } from '@/data/phones';
import CanvasEditor from '@/components/CanvasEditor';
import EditorControls from '@/components/EditorControls';
import { exportCanvasAsImage } from '@/lib/canvas-utils';
import { Navbar } from '@/components/navbar/Navbar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, Eye, Zap, RefreshCcw, Truck, MoveLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

function CustomizeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [phoneModel, setPhoneModel] = useState<PhoneModel | null>(null);
  const [canvas, setCanvas] = useState<any | null>(null);
  const [selectedObject, setSelectedObject] = useState<any | null>(null);
  const [caseType, setCaseType] = useState<CaseType>('standard');
  
  useEffect(() => {
    const modelId = searchParams.get('model');
    if (modelId) {
      const model = getPhoneModelById(modelId);
      if (model) {
        setPhoneModel(model);
        localStorage.setItem('selectedPhoneModel', JSON.stringify(model));
      } else {
        router.push('/');
      }
    } else {
      const storedModel = localStorage.getItem('selectedPhoneModel');
      if (storedModel) {
        setPhoneModel(JSON.parse(storedModel));
      } else {
        router.push('/');
      }
    }
  }, [searchParams, router]);

  const handleCanvasReady = (canvasInstance: any) => {
    setCanvas(canvasInstance);
  };

  const handlePreview = () => {
    if (canvas) {
      const imageData = exportCanvasAsImage(canvas, 'png', 1);
      const win = window.open();
      if (win) {
        win.document.write(`
          <html>
            <head><title>Preview - ${phoneModel?.displayName}</title></head>
            <body style="margin:0;display:flex;align-items:center;justify-center;min-height:100vh;background:#f0f0f0;">
              <img src="${imageData}" alt="Preview" style="max-width:100%;max-height:100vh;" />
            </body>
          </html>
        `);
      }
    }
  };

  const handleAddToCart = () => {
    if (canvas) {
      const imageData = exportCanvasAsImage(canvas, 'png', 1);
      console.log('Adding to cart:', {
        phoneModel: phoneModel?.id,
        caseType,
        designImage: imageData,
      });
      alert('Added to cart! (This is a demo)');
    }
  };

  if (!phoneModel) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-background overflow-hidden">
      <Navbar currentStep="customize" />

      <div className="flex flex-1 flex-col lg:flex-row overflow-hidden">
        {/* LEFT AREA - CANVAS */}
        <div className="flex-1 relative bg-slate-100 dark:bg-slate-900/50 flex flex-col items-center justify-center p-4 lg:p-8 overflow-hidden touch-none">
           
           {/* Back Button */}
           <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 left-4 z-10 hover:bg-white/50"
              onClick={() => router.back()}
           >
              <MoveLeft className="w-6 h-6 text-gray-700 dark:text-gray-200" />
           </Button>

           {/* Canvas Container */}
           <div 
              className="scale-[0.85] sm:scale-90 md:scale-100 transition-transform relative bg-white overflow-hidden"
              style={{ borderRadius: phoneModel.safeArea.rx }}
           >
             <CanvasEditor
                phoneModel={phoneModel}
                onCanvasReady={handleCanvasReady}
                onObjectSelected={setSelectedObject}
              />
           </div>

           {/* Floating Info Badge */}
           <div className="mt-4 lg:mt-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur px-4 py-2 rounded-full shadow-sm border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-600 dark:text-gray-300">
              {phoneModel.displayName} • 6.7" Display
           </div>
        </div>

        {/* RIGHT SIDEBAR - CONTROLS */}
        <div className="w-full lg:w-[420px] bg-white dark:bg-gray-950 border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-gray-800 flex flex-col shadow-xl z-20 h-[50vh] lg:h-auto">
          
          {/* Header Section */}
          <div className="p-4 lg:p-6 pb-2">
             <div className="flex justify-between items-start mb-1">
                <h1 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">Custom Tough Case</h1>
                <span className="text-lg lg:text-xl font-bold text-blue-600 dark:text-blue-400">${phoneModel.price.toFixed(2)}</span>
             </div>
             <p className="text-sm text-gray-500 dark:text-gray-400">Designed for {phoneModel.displayName}</p>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <div className="p-4 lg:p-6 pt-2 space-y-6 lg:space-y-8">
              
              {/* Tools Section */}
              <EditorControls
                canvas={canvas}
                selectedObject={selectedObject}
              />
              
              <Separator className="bg-gray-100 dark:bg-gray-800" />
              
              {/* Case Type Section */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shadow-sm">
                    3
                  </span>
                  Select Case Type
                </h3>

                 <div className="grid grid-cols-2 gap-3">
                  <div
                    onClick={() => setCaseType('standard')}
                    className={cn(
                      "cursor-pointer rounded-xl border p-3 lg:p-4 transition-all duration-200 relative overflow-hidden group active:scale-[0.98]",
                      caseType === 'standard' 
                        ? "border-blue-500 bg-blue-50/50 dark:bg-blue-900/10 shadow-sm" 
                        : "border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md bg-white dark:bg-gray-900"
                    )}
                  >
                    <div className="flex flex-col items-center gap-2 text-center">
                      <Zap className={cn("w-5 h-5 transition-colors", caseType === 'standard' ? "text-blue-500" : "text-gray-400 group-hover:text-blue-400")} />
                      <span className="text-sm font-medium">Standard</span>
                    </div>
                    {caseType === 'standard' && (
                       <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-500 animate-in fade-in zoom-in duration-300" />
                    )}
                  </div>

                  <div
                    onClick={() => setCaseType('magsafe')}
                    className={cn(
                      "cursor-pointer rounded-xl border p-3 lg:p-4 transition-all duration-200 relative overflow-hidden group active:scale-[0.98]",
                      caseType === 'magsafe' 
                        ? "border-purple-500 bg-purple-50/50 dark:bg-purple-900/10 shadow-sm" 
                        : "border-gray-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-md bg-white dark:bg-gray-900"
                    )}
                  >
                    <div className="flex flex-col items-center gap-2 text-center">
                      <RefreshCcw className={cn("w-5 h-5 transition-colors", caseType === 'magsafe' ? "text-purple-500" : "text-gray-400 group-hover:text-purple-400")} />
                      <span className="text-sm font-medium">MagSafe</span>
                    </div>
                     {caseType === 'magsafe' && (
                       <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-purple-500 animate-in fade-in zoom-in duration-300" />
                    )}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 lg:p-6 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 z-10 space-y-3 shrink-0">
             <div className="flex gap-3">
               <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex-1 h-12 text-base font-medium rounded-xl border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800"
                  onClick={handlePreview} 
                  disabled={!canvas}
               >
                  <Eye className="mr-2 h-4 w-4" />
                  Preview
               </Button>
               
               <Button 
                  size="lg" 
                  className="flex-[2] h-12 text-base font-bold bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-500/20" 
                  onClick={handleAddToCart} 
                  disabled={!canvas}
               >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
               </Button>
             </div>

             <div className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400 pt-1">
                <Truck className="w-3 h-3" />
                <span>Free shipping on orders over $50</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default function CustomizePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
         <div className="flex flex-col items-center gap-4">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
         </div>
      </div>
    }>
      <CustomizeContent />
    </Suspense>
  );
}
