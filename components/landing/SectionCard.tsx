import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionCardProps {
  children: ReactNode;
  className?: string;
}

export const SectionCard = ({ children, className }: SectionCardProps) => {
  return (
    <div
      className={cn(
        "bg-[#112238] rounded-[1rem] p-4 md:p-8 lg:p-16",
        "border-t-[0.75px] border-t-[#1F2937] border-x border-x-white/5 border-b border-b-white/5",
        "backdrop-blur-sm shadow-[0px_0px_30px_0px_rgba(0,0,0,0.5)]",
        "transition-all duration-500 hover:border-primary/20",
        className
      )}
    >
      {children}
    </div>
  );
};
