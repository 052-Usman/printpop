"use client";

import { ShoppingCart, User } from "lucide-react"; // Using ShoppingCart often looks better for 'Cart'
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function UserActions() {
  // Dummy cart count
  const cartCount = 2;

  return (
    <div className="flex items-center gap-1 sm:gap-2">
      <Button variant="ghost" size="icon" className="relative rounded-full" aria-label="Cart">
        <ShoppingCart className="h-5 w-5" />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-white animate-in zoom-in">
            {cartCount}
          </span>
        )}
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full border border-[#373737] hover:border-[#5CE1E64D] shadow-glow-cyan">
            <User className="h-5 w-5" />
            <span className="sr-only">User menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-black border border-[#373737] shadow-glow-cyan">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-zinc-800" />
          <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Orders</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
          <DropdownMenuSeparator className="bg-zinc-800" />
          <DropdownMenuItem className="cursor-pointer" variant="destructive">Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
