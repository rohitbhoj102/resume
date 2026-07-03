import * as React from "react";

import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Matches the parent Section id — wires up aria-labelledby. */
  sectionId: string;
  /** Small mono eyebrow label, e.g. "01 — About". */
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/** Uniform heading block: eyebrow, title, optional description. */
export function SectionHeading({
  sectionId,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <FadeIn
      className={cn(
        "mb-12 flex max-w-2xl flex-col gap-3 sm:mb-16",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      <span className="font-mono text-xs font-medium tracking-[0.2em] text-accent uppercase">
        {eyebrow}
      </span>
      <h2
        id={`${sectionId}-heading`}
        className="text-gradient text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}
