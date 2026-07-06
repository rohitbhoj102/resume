"use client";

import * as React from "react";

/**
 * Scroll-spy: returns the id of the section currently most in view.
 * Observes the given element ids with a viewport band biased to the
 * upper-middle of the screen.
 */
export function useActiveSection(ids: readonly string[]): string | null {
  const [activeId, setActiveId] = React.useState<string | null>(null);

  React.useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5] }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
