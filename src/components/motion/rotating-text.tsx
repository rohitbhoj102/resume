"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import * as React from "react";

import { cn } from "@/lib/utils";

interface RotatingTextProps {
  items: readonly string[];
  /** Milliseconds each item stays on screen. */
  interval?: number;
  className?: string;
}

/** Cycles through short phrases with a vertical slide transition. */
export function RotatingText({ items, interval = 2600, className }: RotatingTextProps) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (reduceMotion || items.length <= 1) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % items.length), interval);
    return () => clearInterval(timer);
  }, [items.length, interval, reduceMotion]);

  return (
    <span
      className={cn("relative inline-grid h-[1.6em] items-center overflow-hidden", className)}
      aria-live="off"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={items[index]}
          initial={reduceMotion ? { opacity: 0 } : { y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="col-start-1 row-start-1 whitespace-nowrap"
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
      <span className="sr-only">{items.join(", ")}</span>
    </span>
  );
}
