"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import * as React from "react";

/**
 * Subtle spotlight that trails the pointer — desktop, fine-pointer devices
 * only. Purely decorative: pointer-events are disabled and it renders
 * beneath all content overlays.
 */
export function CursorGlow() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = React.useState(false);

  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const springX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 });

  React.useEffect(() => {
    if (reduceMotion) return;
    const finePointer = window.matchMedia("(pointer: fine)");
    if (!finePointer.matches) return;

    setEnabled(true);
    const onMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduceMotion, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{ x: springX, y: springY }}
      className="pointer-events-none fixed top-0 left-0 z-30 -translate-x-1/2 -translate-y-1/2"
    >
      <div
        className="size-[360px] rounded-full opacity-[0.07] dark:opacity-10"
        style={{
          background:
            "radial-gradient(circle, var(--primary) 0%, var(--accent) 35%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
