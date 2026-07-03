import { GraduationCap, Medal } from "lucide-react";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { education } from "@/data/education";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading
        sectionId="education"
        eyebrow="09 — Education"
        title="Built on strong academic foundations"
        description="Graduate study in software architecture at NUS on top of an information systems degree from SMU."
      />

      <ol className="relative space-y-10">
        <div
          aria-hidden
          className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent"
        />

        {education.map((entry, index) => (
          <li key={entry.id} className="relative pl-10 sm:pl-14">
            <span
              aria-hidden
              className="absolute top-2 left-0 size-[15px] rounded-full border-2 border-accent/60 bg-background"
            />
            <FadeIn direction={index % 2 === 0 ? "left" : "right"} distance={16}>
              <Card className="border-gradient transition-shadow duration-300 hover:shadow-glow-sm">
                <CardHeader className="gap-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="flex items-center gap-2 text-lg font-semibold tracking-tight">
                      <GraduationCap className="size-5 text-accent" aria-hidden />
                      {entry.institution}
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">{entry.period}</span>
                  </div>
                  <p className="text-sm font-medium">{entry.degree}</p>
                  <p className="text-sm text-muted-foreground">{entry.field}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {entry.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <Medal aria-hidden className="mt-0.5 size-4 shrink-0 text-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          </li>
        ))}
      </ol>
    </Section>
  );
}
