import { ArrowDown, ArrowRight } from "lucide-react";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Card, CardContent } from "@/components/ui/card";
import { pipelineStages, releaseResponsibilities } from "@/data/releases";

export function Releases() {
  return (
    <Section id="releases" className="bg-surface/40">
      <SectionHeading
        sectionId="releases"
        eyebrow="06 — Release Management"
        title="Owning the path to production"
        description="Beyond leading development, I coordinate enterprise releases for a national healthcare system — every build promoted deliberately through four gated environments."
      />

      {/* Deployment pipeline diagram */}
      <FadeIn className="mb-14">
        <Card className="border-gradient overflow-hidden">
          <CardContent className="p-6 sm:p-8">
            <h3 className="mb-6 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Deployment pipeline
            </h3>
            <ol className="flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-0">
              {pipelineStages.map((stage, index) => (
                <li key={stage.id} className="flex flex-col gap-3 lg:flex-1 lg:flex-row lg:gap-0">
                  <div
                    className={
                      stage.id === "prod"
                        ? "flex-1 rounded-xl border border-accent/50 bg-accent/10 p-4"
                        : "flex-1 rounded-xl border border-border bg-surface p-4"
                    }
                  >
                    <p
                      className={
                        stage.id === "prod"
                          ? "font-mono text-sm font-bold text-accent"
                          : "font-mono text-sm font-bold text-primary"
                      }
                    >
                      {stage.name}
                    </p>
                    <p className="mt-1 text-xs font-medium">{stage.fullName}</p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {stage.description}
                    </p>
                  </div>
                  {index < pipelineStages.length - 1 ? (
                    <div
                      aria-hidden
                      className="flex items-center justify-center px-1 text-muted-foreground lg:px-2"
                    >
                      <ArrowRight className="hidden size-4 shrink-0 lg:block" />
                      <ArrowDown className="size-4 shrink-0 lg:hidden" />
                    </div>
                  ) : null}
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </FadeIn>

      <Stagger interval={0.05} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {releaseResponsibilities.map((item) => (
          <StaggerItem key={item.id}>
            <Card className="group h-full transition-colors duration-300 hover:border-primary/40">
              <CardContent className="space-y-2.5 p-5">
                <div className="flex size-9 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary">
                  <item.icon className="size-4.5" aria-hidden />
                </div>
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
