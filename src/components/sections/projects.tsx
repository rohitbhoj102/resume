import { ExternalLink, Github, Star } from "lucide-react";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { projects } from "@/data/projects";
import type { Project } from "@/types/content";

const categoryLabels: Record<Project["category"], string> = {
  enterprise: "Enterprise",
  performance: "Performance",
  "machine-learning": "Machine Learning",
  web: "Web",
  analytics: "Analytics",
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="border-gradient flex h-full flex-col transition-shadow duration-300 hover:shadow-glow-sm">
      <CardHeader className="gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="accent" className="font-mono text-[11px]">
            {categoryLabels[project.category]}
          </Badge>
          {project.featured ? (
            <Badge variant="default" className="gap-1 font-mono text-[11px]">
              <Star className="size-3" aria-hidden /> Featured
            </Badge>
          ) : null}
        </div>
        <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
        <p className="text-sm text-muted-foreground">{project.tagline}</p>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-4">
        <p className="text-sm leading-relaxed text-muted-foreground">{project.overview}</p>

        <dl className="space-y-3 text-sm">
          <div>
            <dt className="text-xs font-semibold tracking-wider text-foreground uppercase">
              Architecture
            </dt>
            <dd className="mt-1 leading-relaxed text-muted-foreground">{project.architecture}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold tracking-wider text-foreground uppercase">
              Challenges
            </dt>
            <dd className="mt-1 leading-relaxed text-muted-foreground">{project.challenges}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold tracking-wider text-foreground uppercase">
              Outcome
            </dt>
            <dd className="mt-1 leading-relaxed text-accent">{project.outcome}</dd>
          </div>
        </dl>

        <div className="mt-auto space-y-4 pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="font-mono text-[11px]">
                {tech}
              </Badge>
            ))}
          </div>
          {(project.githubUrl || project.demoUrl) && (
            <div className="flex gap-2">
              {project.githubUrl ? (
                <Button variant="secondary" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github /> GitHub
                  </a>
                </Button>
              ) : null}
              {project.demoUrl ? (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink /> Live Demo
                  </a>
                </Button>
              ) : null}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export function Projects() {
  return (
    <Section id="projects" className="bg-surface/40">
      <SectionHeading
        sectionId="projects"
        eyebrow="04 — Featured Projects"
        title="Systems that shipped and numbers that moved"
        description="National healthcare platforms, production ML and performance engineering — each with measurable outcomes."
      />

      <Stagger interval={0.07} className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <StaggerItem key={project.id}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
