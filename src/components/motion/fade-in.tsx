"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import * as React from "react";

import { defaultViewport, EASE_OUT } from "@/lib/motion";

type Direction = "up" | "down" | "left" | "right" | "none";

interface FadeInProps extends HTMLMotionProps<"div"> {
  /** Direction the element travels from. */
  direction?: Direction;
  /** Seconds to wait before starting. */
  delay?: number;
  /** Travel distance in px. */
  distance?: number;
  duration?: number;
}

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 1 },
  down: { x: 0, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
  none: { x: 0, y: 0 },
};

/** Scroll-triggered fade with optional directional slide. Animates once. */
export function FadeIn({
  direction = "up",
  delay = 0,
  distance = 20,
  duration = 0.6,
  children,
  ...props
}: FadeInProps) {
  const reduceMotion = useReducedMotion();
  const offset = offsets[direction];

  return (
    <motion.div
      initial={
        reduceMotion
          ? { opacity: 0 }
          : { opacity: 0, x: offset.x * distance, y: offset.y * distance }
      }
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={defaultViewport}
      transition={{ duration, delay, ease: EASE_OUT }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
