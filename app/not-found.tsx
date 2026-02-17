import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <h2 className="text-2xl font-semibold">Page Not Found</h2>
      <p className="text-muted-foreground">
        The page you are looking for does not exist.
      </p>
      <div className="mt-4">
        <Button asChild className="btn-brand-gradient shadow-glow-cyan border-0 text-primary-foreground hover:opacity-90 transition-opacity rounded-[10px]">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
