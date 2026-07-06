"use client";

import * as React from "react";

/** Registers the offline service worker in production builds only. */
export function ServiceWorkerRegistration() {
  React.useEffect(() => {
    if (
      process.env.NODE_ENV !== "production" ||
      typeof window === "undefined" ||
      !("serviceWorker" in navigator)
    ) {
      return;
    }
    navigator.serviceWorker.register("/sw.js").catch(() => {
      // Offline support is progressive enhancement — ignore registration failures
    });
  }, []);

  return null;
}
