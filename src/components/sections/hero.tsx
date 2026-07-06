import { ArrowRight, Download, MapPin } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { RotatingText } from "@/components/motion/rotating-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const heroStats = [
  { value: 4, suffix: "+", label: "Years enterprise experience" },
  { value: 37, suffix: "%", label: "Faster medication orders" },
  { value: 50, suffix: "+", label: "Pharmacy machines integrated" },
  { value: 100, suffix: "%", label: "Sprint completion as Lead" },
];

/**
 * Above-the-fold entrances are pure CSS (anim-fade-up) so the headline —
 * the LCP element — paints without waiting for hydration. The headline and
 * tagline render statically; supporting elements cascade in around them.
 */
export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
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

      <Container className="relative">
        <div className="flex max-w-3xl flex-col gap-6">
          <div className="anim-fade-up [animation-delay:0.05s]">
            <Badge variant="accent" className="font-mono">
              <MapPin className="size-3" aria-hidden />
              {siteConfig.location} · Development Lead @ NCS Group
            </Badge>
          </div>

          {/* LCP element — no entrance animation, paints immediately */}
          <h1 className="text-gradient text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {siteConfig.name}
          </h1>

          <p className="anim-fade-up font-mono text-sm text-accent [animation-delay:0.15s] sm:text-base">
            <span aria-hidden className="text-muted-foreground select-none">
              ${" "}
            </span>
            <RotatingText items={siteConfig.roles} />
          </p>

          <p className="max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground sm:text-xl">
            Building scalable software.{" "}
            <span className="text-foreground">Optimising enterprise systems.</span> Leading
            high-performing engineering teams.
          </p>

          <div className="flex flex-wrap gap-2">
            {siteConfig.roles.map((role, index) => (
              <div
                key={role}
                className="anim-fade-up"
                style={{ animationDelay: `${0.25 + index * 0.06}s` }}
              >
                <Badge variant="secondary">{role}</Badge>
              </div>
            ))}
          </div>

          <div className="anim-fade-up mt-2 flex flex-wrap gap-3 [animation-delay:0.55s]">
            <Button size="lg" asChild>
              <a href={siteConfig.resumeFile} download>
                <Download /> Download Resume
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#projects">
                View Projects <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-border/60 pt-8 sm:mt-20 lg:grid-cols-4">
          {heroStats.map((stat, index) => (
            <div
              key={stat.label}
              className="anim-fade-up space-y-1"
              style={{ animationDelay: `${0.65 + index * 0.08}s` }}
            >
              <p className="text-gradient-primary font-mono text-3xl font-semibold sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
