import { Award, Cloud, Cpu, HeartPulse, Rocket, Users } from "lucide-react";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Card, CardContent } from "@/components/ui/card";

const focusAreas = [
  {
    icon: HeartPulse,
    title: "Healthcare Systems",
    description: "National-scale pharmacy platform serving Singapore's public healthcare sector",
  },
  {
    icon: Cpu,
    title: "Performance Engineering",
    description: "SQL tuning, caching and refactoring that turn slow workflows into fast ones",
  },
  {
    icon: Cloud,
    title: "Cloud & Microservices",
    description: "Cloud-native services on AWS with Spring Boot microservices architecture",
  },
  {
    icon: Users,
    title: "Technical Leadership",
    description: "Mentoring developers and owning sprint delivery end to end",
  },
  {
    icon: Rocket,
    title: "Release Management",
    description: "Coordinated deployments across SIT, UAT, STG and PROD environments",
  },
  {
    icon: Award,
    title: "AI-Assisted Engineering",
    description: "Claude, Copilot and agentic workflows woven into daily development",
  },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        sectionId="about"
        eyebrow="01 — About"
        title="Engineer first. Lead by example."
        description="Full Stack Software Engineer and Development Lead based in Singapore, specialising in enterprise healthcare systems."
      />

      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <FadeIn className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            I&apos;m a Full Stack Software Engineer with over four years of experience designing,
            building, optimising and leading enterprise software systems — most recently as{" "}
            <span className="font-medium text-foreground">Development Lead at NCS Group</span> on
            Singapore&apos;s National Harmonised Integrated Pharmacy System (NHIPS), a healthcare
            platform supporting more than a thousand daily users.
          </p>
          <p>
            My core expertise is backend engineering with{" "}
            <span className="font-medium text-foreground">Java and Spring Boot</span>, backed by
            strong frontend experience in Angular and React, cloud-native development on AWS, and a
            deep interest in{" "}
            <span className="font-medium text-foreground">performance optimisation</span> — from
            indexed SQL and eliminated N+1 queries to virtualised data grids.
          </p>
          <p>
            Alongside leading development, I own{" "}
            <span className="font-medium text-foreground">release management</span> for the
            platform: coordinating deployments, planning releases and executing production rollouts
            across four environments. I also actively integrate{" "}
            <span className="font-medium text-foreground">AI into engineering workflows</span> —
            certified by NUS-ISS in architecting agentic AI solutions — to raise both productivity
            and quality.
          </p>
          <p>
            I believe in leading by example: writing maintainable code, mentoring engineers,
            delivering predictable sprint outcomes and letting data drive optimisation decisions.
          </p>
        </FadeIn>

        <Stagger interval={0.07} className="grid gap-4 sm:grid-cols-2">
          {focusAreas.map((area) => (
            <StaggerItem key={area.title}>
              <Card className="h-full transition-colors duration-300 hover:border-primary/30">
                <CardContent className="space-y-2 p-5">
                  <area.icon className="size-5 text-accent" aria-hidden />
                  <h3 className="text-sm font-semibold">{area.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
