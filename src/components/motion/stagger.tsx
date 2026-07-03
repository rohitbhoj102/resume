"use client";

import { motion, useReducedMotion, type HTMLMotionProps, type Variants } from "framer-motion";
import * as React from "react";

import { defaultViewport, EASE_OUT } from "@/lib/motion";

interface StaggerProps extends HTMLMotionProps<"div"> {
  /** Seconds between each child's entrance. */
  interval?: number;
  delay?: number;
}

/**
 * Parent that staggers its <StaggerItem> children as they scroll into view.
 */
export function Stagger({ interval = 0.08, delay = 0.1, children, ...props }: StaggerProps) {
  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: interval, delayChildren: delay },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Child of <Stagger>. Fades up in sequence with its siblings. */
export function StaggerItem({ children, ...props }: HTMLMotionProps<"div">) {
  const reduceMotion = useReducedMotion();

  const item: Variants = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: EASE_OUT },
    },
  };

  return (
    <motion.div variants={item} {...props}>
      {children}
    </motion.div>
  );
}
