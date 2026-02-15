"use client";

import Link from "next/link";
import { ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  currentStep?: "select" | "customize" | "checkout";
}

export function Navbar({ currentStep = "select" }: NavbarProps) {
  const steps = [
    { id: "select", label: "Select Model", number: 1 },
    { id: "customize", label: "Customize", number: 2 },
    { id: "checkout", label: "Checkout", number: 3 },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex max-w-none h-16 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-blue-600 rounded-full p-1">
            <span className="text-white font-bold text-lg px-2">P</span>
          </div>
          <span className="text-xl font-bold hidden sm:inline-block">
            Printpop
          </span>
        </Link>

        {/* Stepper Implementation */}
        <nav className="hidden md:flex items-center gap-4">
          {steps.map((step, index) => {
            const isActive = step.id === currentStep;
            const isCompleted =
              steps.findIndex((s) => s.id === currentStep) > index;
            const isFuture = !isActive && !isCompleted;

            return (
              <div key={step.id} className="flex items-center">
                <div
                  className={cn(
                    "flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium transition-colors",
                    isActive
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                      : isCompleted
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-muted-foreground"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-6 w-6 items-center justify-center rounded-full text-xs box-border border",
                      isActive
                        ? "bg-blue-600 text-white border-blue-600"
                        : isCompleted
                        ? "bg-blue-600 text-white border-blue-600"
                        : "border-muted-foreground/30 bg-transparent"
                    )}
                  >
                    {isCompleted ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3 h-3"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      step.number
                    )}
                  </span>
                  <span>{step.label}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-8 h-[1px] bg-border mx-2" />
                )}
              </div>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-blue-600" />
            <span className="sr-only">Cart</span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
