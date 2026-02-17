"use client";

import { Search as SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <div className={cn("relative flex items-center transition-all duration-300", isOpen ? "w-64" : "w-10")}>
       <Button
        variant="ghost"
        size="icon"
        className={cn("absolute left-0 z-10 hover:bg-transparent", isOpen && "pointer-events-none opacity-50")}
        onClick={() => setIsOpen(!isOpen)}
      >
        <SearchIcon className="h-5 w-5" />
        <span className="sr-only">Search</span>
      </Button>
      
      <div className={cn(
          "bg-background overflow-hidden flex items-center transition-all duration-300 ease-in-out",
          isOpen ? "w-full opacity-100 pl-8" : "w-0 opacity-0"
      )}>
          <Input 
            ref={inputRef}
            placeholder="Search..." 
            className="h-9 border-none bg-transparent focus-visible:ring-0 px-0"
            onBlur={() => {
                if (!inputRef.current?.value) {
                    setIsOpen(false);
                }
            }}
          />
      </div>
      
       {/* Toggle button when closed (to handle click) - Actually the first button handles it. 
           But when open, we might want a close button or just click away/blur. 
           For now, blur handles close if empty. */}
      {isOpen && (
         <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-0 h-8 w-8 text-muted-foreground"
            onClick={() => {
                setIsOpen(false); 
                if(inputRef.current) inputRef.current.value = "";
            }}
         >
             <span className="sr-only">Close</span>
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
         </Button>
      )}
    </div>
  );
}
