import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

/**
 * Self-hosted variable fonts (no external requests at runtime).
 * Exposed as CSS variables consumed by the Tailwind theme in globals.css.
 */
export const fontSans = GeistSans;
export const fontMono = GeistMono;

export const fontVariables = `${GeistSans.variable} ${GeistMono.variable}`;
