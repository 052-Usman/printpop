import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative h-10 w-32">
         {/* Adjust width/height based on SVGs aspect ratio. Using fill for responsiveness if needed, or fixed dimensions */}
         <Image 
            src="/printpop-logo.svg" 
            alt="Printpop Logo" 
            width={120} 
            height={40} 
            className="object-contain"
            priority
         />
      </div>
    </Link>
  );
}
