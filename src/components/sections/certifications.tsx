import { Award, BrainCircuit, CalendarDays, Layers } from "lucide-react";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { certifications } from "@/data/certifications";
import type { Certification } from "@/types/content";

const categoryMeta: Record<
  Certification["category"],
  { label: string; icon: typeof Award; badge: "default" | "accent" | "success" }
> = {
  professional: { label: "Professional", icon: Award, badge: "default" },
  ai: { label: "Artificial Intelligence", icon: BrainCircuit, badge: "accent" },
  "software-engineering": { label: "Software Engineering", icon: Layers, badge: "success" },
};

export function Certifications() {
  return (
    <Section id="certifications" className="bg-surface/40">
      <SectionHeading
        sectionId="certifications"
        eyebrow="08 — Certifications"
        title="Continuously certified, deliberately current"
        description="Scrum, AWS and a deep bench of NUS-ISS and Anthropic credentials across AI and software architecture."
      />

      <Stagger interval={0.05} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((certification) => {
          const meta = categoryMeta[certification.category];
          return (
            <StaggerItem key={certification.id}>
              <Card className="group flex h-full flex-col transition-colors duration-300 hover:border-primary/40">
                <CardContent className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <meta.icon className="size-5" aria-hidden />
                    </div>
                    <Badge variant={meta.badge} className="text-[10px]">
                      {meta.label}
                    </Badge>
                  </div>
                  <h3 className="flex-1 text-sm leading-snug font-semibold">
                    {certification.title}
                  </h3>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <p className="font-medium text-foreground">{certification.issuer}</p>
                    <p className="flex items-center gap-1.5 font-mono">
                      <CalendarDays className="size-3" aria-hidden />
                      {certification.issued}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
