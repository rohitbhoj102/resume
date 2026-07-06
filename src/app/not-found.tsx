import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden px-6">
      <div aria-hidden className="bg-grid mask-radial-faded absolute inset-0" />
      <div
        aria-hidden
        className="absolute top-1/4 left-1/3 size-[420px] animate-blob rounded-full bg-primary/20 blur-[140px]"
      />

      <div className="relative flex max-w-md flex-col items-center gap-6 text-center">
        <p className="text-gradient-primary font-mono text-8xl font-bold tracking-tight sm:text-9xl">
          404
        </p>
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">Page not found</h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            This route returned nothing — much like an unindexed query. Let&apos;s get you back to
            something faster.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild>
            <Link href="/">
              <Home /> Back home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/#contact">
              <ArrowLeft /> Contact me
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
