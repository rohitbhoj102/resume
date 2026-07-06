import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SkillBar } from "@/components/ui/skill-bar";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        sectionId="skills"
        eyebrow="03 — Technical Skills"
        title="A full-stack, full-lifecycle toolkit"
        description="From Java backends and Angular frontends to AWS, CI/CD pipelines and AI-assisted engineering."
      />

      <Stagger interval={0.06} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <StaggerItem key={group.id}>
            <Card className="h-full transition-colors duration-300 hover:border-primary/30">
              <CardHeader>
                <CardTitle className="text-base">{group.title}</CardTitle>
                <CardDescription>{group.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3.5">
                  {group.skills.map((skill) => (
                    <li key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="flex items-center gap-2 text-sm">
                          {skill.icon ? (
                            <skill.icon
                              className="size-4 shrink-0 text-muted-foreground"
                              aria-hidden
                            />
                          ) : null}
                          {skill.name}
                        </span>
                        <span className="font-mono text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <SkillBar level={skill.level} label={skill.name} />
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
