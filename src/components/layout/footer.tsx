import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { navSections, siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60">
      <Container className="py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-3">
            <Link href="#hero" className="font-mono text-sm font-semibold tracking-tight">
              <span className="text-gradient-primary">{siteConfig.initials}</span>
              <span className="text-muted-foreground">.dev</span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">{siteConfig.headline}</p>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                >
                  <Github className="size-[18px]" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="size-[18px]" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={`mailto:${siteConfig.email}`} aria-label="Send email">
                  <Mail className="size-[18px]" />
                </a>
              </Button>
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-2 sm:grid-cols-3">
            {navSections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {section.label}
              </Link>
            ))}
          </nav>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 font-mono text-xs text-muted-foreground sm:flex-row">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </span>
          <span>Next.js 15 · Tailwind v4 · Framer Motion</span>
          <Button variant="outline" size="sm" asChild>
            <Link href="#hero" aria-label="Back to top">
              <ArrowUp /> Top
            </Link>
          </Button>
        </div>
      </Container>
    </footer>
  );
}
