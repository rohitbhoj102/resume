"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import * as React from "react";

import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  /** Maximum tilt in degrees. */
  maxTilt?: number;
}

/** Subtle 3D tilt following the pointer. No-ops for touch and reduced motion. */
export function TiltCard({ children, className, maxTilt = 5 }: TiltCardProps) {
  const reduceMotion = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [maxTilt, -maxTilt]), {
    stiffness: 220,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-maxTilt, maxTilt]), {
    stiffness: 220,
    damping: 24,
  });

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion || event.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width);
    py.set((event.clientY - rect.top) / rect.height);
  }

  function onPointerLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={
        reduceMotion
          ? undefined
          : { rotateX, rotateY, transformStyle: "preserve-3d", perspective: 900 }
      }
      className={cn("h-full will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
