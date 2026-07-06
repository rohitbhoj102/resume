"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";

/** Floating button that appears after scrolling past the hero. */
export function BackToTop() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="fixed right-5 bottom-5 z-50 sm:right-8 sm:bottom-8"
        >
          <Button
            variant="secondary"
            size="icon"
            aria-label="Back to top"
            className="rounded-full shadow-glow-sm"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp className="size-[18px]" />
          </Button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
