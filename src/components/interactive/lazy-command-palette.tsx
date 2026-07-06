"use client";

import dynamic from "next/dynamic";
import * as React from "react";

const CommandPalette = dynamic(
  () => import("./command-palette").then((module) => module.CommandPalette),
  { ssr: false }
);

/**
 * Defers loading the command palette until the browser is idle, keeping it
 * out of the critical hydration path. If the user reaches for ⌘K (or the
 * navbar trigger) before idle, the palette loads immediately and opens on
 * mount so the first keypress isn't lost.
 */
export function LazyCommandPalette() {
  const [load, setLoad] = React.useState(false);
  const [openOnMount, setOpenOnMount] = React.useState(false);

  React.useEffect(() => {
    // Once loaded, the palette's own listeners take over these events.
    function requestOpen() {
      setOpenOnMount(true);
      setLoad(true);
    }
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") requestOpen();
    }
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("open-command-palette", requestOpen);

    const supportsIdle = typeof window.requestIdleCallback === "function";
    const idle = supportsIdle
      ? window.requestIdleCallback(() => setLoad(true), { timeout: 3000 })
      : window.setTimeout(() => setLoad(true), 2000);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("open-command-palette", requestOpen);
      if (supportsIdle) window.cancelIdleCallback(idle);
      else window.clearTimeout(idle);
    };
  }, []);

  return load ? <CommandPalette initialOpen={openOnMount} /> : null;
}
