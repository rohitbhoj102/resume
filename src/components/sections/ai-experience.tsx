import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { aiCapabilities } from "@/data/ai";

export function AiExperience() {
  return (
    <Section id="ai">
      <SectionHeading
        sectionId="ai"
        eyebrow="07 — AI Experience"
        title="AI as a force multiplier, not a shortcut"
        description="From BERT models in production to Claude in the daily workflow — AI is integrated across how I plan, build, review and optimise software."
      />

      <Stagger interval={0.06} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {aiCapabilities.map((capability) => (
          <StaggerItem key={capability.id}>
            <Card className="border-gradient flex h-full flex-col transition-shadow duration-300 hover:shadow-glow-accent">
              <CardContent className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/15 to-accent/15 text-accent">
                  <capability.icon className="size-5" aria-hidden />
                </div>
                <h3 className="text-sm font-semibold">{capability.title}</h3>
                <p className="flex-1 text-xs leading-relaxed text-muted-foreground">
                  {capability.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {capability.tools.map((tool) => (
                    <Badge key={tool} variant="secondary" className="text-[10px]">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
