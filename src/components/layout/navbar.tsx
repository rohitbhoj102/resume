"use client";

import { Download, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import * as React from "react";

import { Container } from "@/components/layout/container";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { navSections, siteConfig } from "@/config/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

/** Primary anchors shown on desktop; the rest live in the mobile menu. */
const desktopLinks = navSections.filter((section) =>
  ["about", "experience", "skills", "projects", "contact"].includes(section.id)
);

const allSectionIds = ["hero", ...navSections.map((section) => section.id)];

export function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const activeSection = useActiveSection(allSectionIds);

  // Prevent background scroll while the mobile menu is open
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function openCommandPalette() {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between gap-4">
          <Link
            href="#hero"
            className="font-mono text-sm font-semibold tracking-tight"
            aria-label={`${siteConfig.name} — back to top`}
            onClick={() => setMenuOpen(false)}
          >
            <span className="text-gradient-primary">{siteConfig.initials}</span>
            <span className="text-muted-foreground">.dev</span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {desktopLinks.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                aria-current={activeSection === section.id ? "true" : undefined}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm transition-colors",
                  activeSection === section.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {section.label}
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-primary to-accent transition-opacity duration-300",
                    activeSection === section.id ? "opacity-100" : "opacity-0"
                  )}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="hidden items-center gap-2 text-muted-foreground lg:inline-flex"
              onClick={openCommandPalette}
              aria-label="Open command palette"
            >
              <Search className="size-3.5" />
              <span className="text-xs">Search</span>
              <kbd className="rounded border border-border bg-surface-elevated px-1.5 py-0.5 font-mono text-[10px]">
                ⌘K
              </kbd>
            </Button>
            <Button size="sm" className="hidden sm:inline-flex" asChild>
              <a href={siteConfig.resumeFile} download>
                <Download /> Resume
              </a>
            </Button>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </Container>
      </header>

      {/* Mobile menu — a sibling of the header: backdrop-filter on the header
          makes it the containing block for fixed descendants, which would
          collapse this panel to zero height if nested inside. */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-border/60 bg-background/95 backdrop-blur-lg transition-all duration-200 md:hidden",
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <Container className="flex flex-col gap-1 py-6">
          {navSections.map((section, index) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setMenuOpen(false)}
              aria-current={activeSection === section.id ? "true" : undefined}
              className={cn(
                "flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-colors",
                activeSection === section.id
                  ? "bg-primary/10 text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <span className="font-mono text-xs text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              {section.label}
            </Link>
          ))}
          <Button className="mt-4" asChild>
            <a href={siteConfig.resumeFile} download onClick={() => setMenuOpen(false)}>
              <Download /> Download Resume
            </a>
          </Button>
        </Container>
      </div>
    </>
  );
}
