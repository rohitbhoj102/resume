import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { Section } from "@/components/layout/section";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

/**
 * Phase 1 — design system foundation.
 * This page exercises the theme tokens, typography, motion primitives and
 * base components. Phase 2 replaces it with the full portfolio sections.
 */
export default function HomePage() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      {/* Ambient background: engineering grid + brand glow blobs */}
      <div aria-hidden className="bg-grid mask-radial-faded absolute inset-0" />
      <div
        aria-hidden
        className="absolute -top-32 left-1/4 size-[480px] animate-blob rounded-full bg-primary/20 blur-[140px]"
      />
      <div
        aria-hidden
        className="absolute top-40 right-1/5 size-[380px] animate-blob rounded-full bg-accent/15 blur-[120px] [animation-delay:-9s]"
      />

      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between">
          <Link href="/" className="font-mono text-sm font-semibold tracking-tight">
            <span className="text-gradient-primary">{siteConfig.initials}</span>
            <span className="text-muted-foreground">.dev</span>
          </Link>
          <ThemeToggle />
        </Container>
      </header>

      <main className="relative">
        <Section id="hero" className="pt-24 sm:pt-32">
          <div className="flex max-w-3xl flex-col gap-6">
            <FadeIn delay={0.05}>
              <Badge variant="accent" className="font-mono">
                <span className="size-1.5 animate-pulse rounded-full bg-current" />
                {siteConfig.location} · Open to opportunities
              </Badge>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h1 className="text-gradient text-4xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-6xl">
                {siteConfig.name}
              </h1>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="text-lg leading-relaxed text-pretty text-muted-foreground sm:text-xl">
                {siteConfig.headline}
              </p>
            </FadeIn>

            <Stagger delay={0.35} className="flex flex-wrap gap-2">
              {siteConfig.roles.map((role) => (
                <StaggerItem key={role}>
                  <Badge variant="secondary">{role}</Badge>
                </StaggerItem>
              ))}
            </Stagger>

            <FadeIn delay={0.5} className="mt-2 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href={siteConfig.resumeFile} download>
                  <Download /> Download Resume
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#preview">
                  View Projects <ArrowRight />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </Section>

        <Section id="preview">
          <SectionHeading
            sectionId="preview"
            eyebrow="Phase 1 — Design System"
            title="Foundation in place"
            description="Theme tokens, typography, motion primitives and the base component library are ready. Full portfolio sections arrive in Phase 2."
          />

          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Theme & tokens",
                description:
                  "Brand palette wired into Tailwind v4 with dark and light modes, gradient utilities and glow shadows.",
                stat: { value: 2, suffix: " themes" },
              },
              {
                title: "Motion primitives",
                description:
                  "FadeIn, Stagger and AnimatedCounter with reduced-motion support — the vocabulary every section reuses.",
                stat: { value: 3, suffix: " primitives" },
              },
              {
                title: "Component library",
                description:
                  "shadcn-style Button, Badge, Card and layout system with consistent radii, borders and focus rings.",
                stat: { value: 100, suffix: "% typed" },
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <Card className="border-gradient h-full transition-shadow duration-300 hover:shadow-glow-sm">
                  <CardHeader>
                    <span className="text-gradient-primary font-mono text-3xl font-semibold">
                      <AnimatedCounter value={item.stat.value} suffix={item.stat.suffix} />
                    </span>
                    <CardTitle className="mt-2">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>
      </main>

      <footer className="border-t border-border/60 py-8">
        <Container className="flex items-center justify-between font-mono text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}
          </span>
          <span>Built with Next.js 15 · Tailwind v4 · Framer Motion</span>
        </Container>
      </footer>
    </div>
  );
}
