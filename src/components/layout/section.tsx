import * as React from "react";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Anchor id used by the navbar and command palette. */
  id: string;
  /** Render without the inner Container (for full-bleed layouts). */
  fullBleed?: boolean;
}

/**
 * Standard page section: consistent vertical rhythm, anchor offset for the
 * fixed navbar, and an inner Container unless fullBleed is set.
 */
export function Section({ id, fullBleed = false, className, children, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-20 sm:py-28", className)}
      aria-labelledby={`${id}-heading`}
      {...props}
    >
      {fullBleed ? children : <Container>{children}</Container>}
    </section>
  );
}
