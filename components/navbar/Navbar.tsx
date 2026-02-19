"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "./nav-data";
import { UserActions } from "./user-actions";
import { Search } from "./search";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#373737] backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        
        {/* Left Section: Mobile Menu + Logo */}
        <div className="flex items-center gap-2">
            <MobileMenu />
            <div className="hidden md:flex">
                <Logo />
            </div>
             {/* Logo visible on mobile too, but maybe centered or next to burger? 
                 Design usually has logo always visible. 
                 Let's make logo visible on both, but MobileMenu handles the burger.
             */}
            <div className="md:hidden">
                <Logo />
            </div>
        </div>

        {/* Center Section: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "p-2 text-base font-medium font-comic-sans transition-colors hover:text-primary hover:bg-primary/10 rounded-[10px]",
                pathname === link.href ? "text-primary" : "text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Section: Search + Actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          <Search />
          <UserActions />
        </div>
      </div>
    </header>
  );
}
