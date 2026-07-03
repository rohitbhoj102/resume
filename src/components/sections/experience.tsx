import { Briefcase, CheckCircle2, TrendingUp } from "lucide-react";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { experiences } from "@/data/experience";

const typeLabels = {
  "full-time": "Full-time",
  internship: "Internship",
  contract: "Contract",
} as const;

export function Experience() {
  return (
    <Section id="experience" className="bg-surface/40">
      <SectionHeading
        sectionId="experience"
        eyebrow="02 — Experience"
        title="From engineer to development lead"
        description="Four years of enterprise delivery across healthcare, livestream AI and financial risk — with growing scope from code to team to releases."
      />

      <ol className="relative space-y-10 lg:space-y-12">
        {/* Timeline spine */}
        <div
          aria-hidden
          className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent"
        />

        {experiences.map((experience, index) => (
          <li key={experience.id} className="relative pl-10 sm:pl-14">
            {/* Timeline node */}
            <span
              aria-hidden
              className={
                experience.current
                  ? "absolute top-2 left-0 flex size-[15px] items-center justify-center rounded-full border-2 border-accent bg-accent/20"
                  : "absolute top-2 left-0 size-[15px] rounded-full border-2 border-primary/60 bg-background"
              }
            >
              {experience.current ? (
                <span className="size-1.5 animate-pulse-soft rounded-full bg-accent" />
              ) : null}
            </span>

            <FadeIn direction={index % 2 === 0 ? "left" : "right"} distance={16}>
              <Card className="border-gradient transition-shadow duration-300 hover:shadow-glow-sm">
                <CardHeader className="gap-3">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h3 className="text-lg font-semibold tracking-tight">{experience.role}</h3>
                    {experience.current ? <Badge variant="accent">Current</Badge> : null}
                    <Badge variant="secondary">{typeLabels[experience.type]}</Badge>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
                      <Briefcase className="size-3.5" aria-hidden />
                      {experience.company}
                    </span>
                    <span aria-hidden>·</span>
                    <span>{experience.location}</span>
                    <span aria-hidden>·</span>
                    <span className="font-mono text-xs">{experience.period}</span>
                  </div>
                  {experience.project ? (
                    <p className="font-mono text-xs text-accent">{experience.project}</p>
                  ) : null}
                </CardHeader>

                <CardContent className="space-y-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {experience.summary}
                  </p>

                  <div className="grid gap-5 lg:grid-cols-2">
                    <div className="space-y-2.5">
                      <h4 className="text-xs font-semibold tracking-wider text-foreground uppercase">
                        Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {experience.responsibilities.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                          >
                            <span
                              aria-hidden
                              className="mt-[7px] size-1 shrink-0 rounded-full bg-current text-primary"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-2.5">
                      <h4 className="text-xs font-semibold tracking-wider text-foreground uppercase">
                        Achievements
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                          >
                            <CheckCircle2
                              aria-hidden
                              className="mt-0.5 size-4 shrink-0 text-accent"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 border-t border-border/60 pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {experience.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="font-mono text-[11px]">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <p className="flex items-start gap-2 text-sm text-muted-foreground italic">
                      <TrendingUp aria-hidden className="mt-0.5 size-4 shrink-0 text-primary" />
                      {experience.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </li>
        ))}
      </ol>
    </Section>
  );
}
