"use client";

import { motion, useReducedMotion } from "framer-motion";

import { EASE_OUT } from "@/lib/motion";

interface SkillBarProps {
  /** Proficiency from 0–100. */
  level: number;
  label: string;
}

/** Animated proficiency bar that fills when scrolled into view. */
export function SkillBar({ level, label }: SkillBarProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      role="meter"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={level}
      aria-label={`${label} proficiency`}
      className="h-1.5 w-full overflow-hidden rounded-full bg-muted"
    >
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        initial={{ width: reduceMotion ? `${level}%` : "0%" }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1, ease: EASE_OUT, delay: 0.15 }}
      />
    </div>
  );
}
