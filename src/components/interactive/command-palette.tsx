"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Copy,
  Download,
  Github,
  Linkedin,
  Mail,
  MoonStar,
  Search,
  SquareArrowOutUpRight,
} from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

import { navSections, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface Command {
  id: string;
  label: string;
  hint: string;
  icon: React.ComponentType<{ className?: string }>;
  keywords: string;
  run: () => void;
}

/**
 * Lightweight, dependency-free command palette.
 * Open with ⌘K / Ctrl+K; navigate with ↑↓, run with Enter, close with Esc.
 */
export function CommandPalette() {
  const { resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [active, setActive] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);

  const close = React.useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  const commands = React.useMemo<Command[]>(
    () => [
      ...navSections.map((section) => ({
        id: `nav-${section.id}`,
        label: `Go to ${section.label}`,
        hint: "Section",
        icon: SquareArrowOutUpRight,
        keywords: `navigate section ${section.label}`,
        run: () => document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" }),
      })),
      {
        id: "download-resume",
        label: "Download Resume",
        hint: "Action",
        icon: Download,
        keywords: "resume cv pdf download",
        run: () => {
          const link = document.createElement("a");
          link.href = siteConfig.resumeFile;
          link.download = "";
          link.click();
        },
      },
      {
        id: "toggle-theme",
        label: "Toggle Theme",
        hint: "Action",
        icon: MoonStar,
        keywords: "theme dark light mode toggle appearance",
        run: () => setTheme(resolvedTheme === "dark" ? "light" : "dark"),
      },
      {
        id: "copy-email",
        label: "Copy Email Address",
        hint: "Action",
        icon: Copy,
        keywords: "email copy contact address",
        run: () => void navigator.clipboard?.writeText(siteConfig.email),
      },
      {
        id: "open-github",
        label: "Open GitHub Profile",
        hint: "Link",
        icon: Github,
        keywords: "github repositories code profile",
        run: () => window.open(siteConfig.links.github, "_blank", "noopener,noreferrer"),
      },
      {
        id: "open-linkedin",
        label: "Open LinkedIn Profile",
        hint: "Link",
        icon: Linkedin,
        keywords: "linkedin connect network profile",
        run: () => window.open(siteConfig.links.linkedin, "_blank", "noopener,noreferrer"),
      },
      {
        id: "send-email",
        label: "Send an Email",
        hint: "Link",
        icon: Mail,
        keywords: "email contact mail message",
        run: () => {
          window.location.href = `mailto:${siteConfig.email}`;
        },
      },
    ],
    [resolvedTheme, setTheme]
  );

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (command) =>
        command.label.toLowerCase().includes(q) || command.keywords.toLowerCase().includes(q)
    );
  }, [commands, query]);

  // Global ⌘K / Ctrl+K shortcut + custom event from the navbar trigger
  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
    }
    function onOpenEvent() {
      setOpen(true);
    }
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("open-command-palette", onOpenEvent);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("open-command-palette", onOpenEvent);
    };
  }, []);

  // Focus input and lock scroll while open
  React.useEffect(() => {
    if (open) {
      inputRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Keep the active option scrolled into view
  React.useEffect(() => {
    listRef.current
      ?.querySelector(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [active]);

  function onInputKeyDown(event: React.KeyboardEvent) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((value) => Math.min(value + 1, filtered.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((value) => Math.max(value - 1, 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      const command = filtered[active];
      if (command) {
        close();
        command.run();
      }
    } else if (event.key === "Escape") {
      close();
    }
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[70] flex items-start justify-center bg-black/50 px-4 pt-[14vh] backdrop-blur-sm"
          onClick={close}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.18 }}
            className="w-full max-w-lg overflow-hidden rounded-xl border border-border bg-popover shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-border px-4">
              <Search className="size-4 shrink-0 text-muted-foreground" aria-hidden />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setActive(0);
                }}
                onKeyDown={onInputKeyDown}
                placeholder="Type a command or search…"
                aria-label="Search commands"
                role="combobox"
                aria-expanded="true"
                aria-controls="command-list"
                aria-activedescendant={
                  filtered[active] ? `command-${filtered[active].id}` : undefined
                }
                className="h-12 w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground/70"
              />
              <kbd className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                ESC
              </kbd>
            </div>

            <div
              ref={listRef}
              id="command-list"
              role="listbox"
              aria-label="Commands"
              className="max-h-[320px] overflow-y-auto p-2"
            >
              {filtered.length === 0 ? (
                <p className="px-3 py-8 text-center text-sm text-muted-foreground">
                  No results for “{query}”
                </p>
              ) : (
                filtered.map((command, index) => (
                  <button
                    key={command.id}
                    id={`command-${command.id}`}
                    role="option"
                    aria-selected={index === active}
                    data-index={index}
                    onMouseEnter={() => setActive(index)}
                    onClick={() => {
                      close();
                      command.run();
                    }}
                    className={cn(
                      "flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
                      index === active
                        ? "bg-primary/15 text-foreground"
                        : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    <command.icon className="size-4 shrink-0" aria-hidden />
                    <span className="flex-1">{command.label}</span>
                    <span className="font-mono text-[10px] text-muted-foreground/70 uppercase">
                      {command.hint}
                    </span>
                  </button>
                ))
              )}
            </div>

            <div className="flex items-center gap-4 border-t border-border px-4 py-2 font-mono text-[10px] text-muted-foreground">
              <span>↑↓ navigate</span>
              <span>↵ select</span>
              <span>esc close</span>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
