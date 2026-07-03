import { ArrowRight, Download, MapPin } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const heroStats = [
  { value: 4, suffix: "+", label: "Years enterprise experience" },
  { value: 37, suffix: "%", label: "Faster medication orders" },
  { value: 50, suffix: "+", label: "Pharmacy machines integrated" },
  { value: 100, suffix: "%", label: "Sprint completion as Lead" },
];

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
          <FadeIn delay={0.05}>
            <Badge variant="accent" className="font-mono">
              <MapPin className="size-3" aria-hidden />
              {siteConfig.location} · Development Lead @ NCS Group
            </Badge>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h1 className="text-gradient text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              {siteConfig.name}
            </h1>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground sm:text-xl">
              Building scalable software.{" "}
              <span className="text-foreground">Optimising enterprise systems.</span> Leading
              high-performing engineering teams.
            </p>
          </FadeIn>

          <Stagger delay={0.35} interval={0.06} className="flex flex-wrap gap-2">
            {siteConfig.roles.map((role) => (
              <StaggerItem key={role}>
                <Badge variant="secondary">{role}</Badge>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeIn delay={0.55} className="mt-2 flex flex-wrap gap-3">
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
          </FadeIn>
        </div>

        <Stagger
          delay={0.7}
          interval={0.08}
          className="mt-16 grid grid-cols-2 gap-6 border-t border-border/60 pt-8 sm:mt-20 lg:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <StaggerItem key={stat.label} className="space-y-1">
              <p className="text-gradient-primary font-mono text-3xl font-semibold sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
