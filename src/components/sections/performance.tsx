import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Card, CardContent } from "@/components/ui/card";
import { performancePractices, performanceStats } from "@/data/performance";

export function Performance() {
  return (
    <Section id="performance">
      <SectionHeading
        sectionId="performance"
        eyebrow="05 — Performance Engineering"
        title="Making enterprise systems measurably faster"
        description="The work I enjoy most: profiling slow paths, tuning SQL, killing redundant database calls and proving every improvement with numbers."
      />

      {/* Production-proven headline metrics */}
      <Stagger interval={0.08} className="mb-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {performanceStats.map((stat) => (
          <StaggerItem key={stat.label}>
            <Card className="border-gradient h-full">
              <CardContent className="space-y-2 p-5">
                <p className="text-gradient-primary font-mono text-3xl font-semibold sm:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm font-medium">{stat.label}</p>
                <p className="text-xs leading-relaxed text-muted-foreground">{stat.detail}</p>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>

      <Stagger interval={0.05} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {performancePractices.map((practice) => (
          <StaggerItem key={practice.id}>
            <Card className="group h-full transition-colors duration-300 hover:border-accent/40">
              <CardContent className="space-y-2.5 p-5">
                <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-accent/10 group-hover:text-accent">
                  <practice.icon className="size-4.5" aria-hidden />
                </div>
                <h3 className="text-sm font-semibold">{practice.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {practice.description}
                </p>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
