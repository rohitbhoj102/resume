"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import * as React from "react";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { TiltCard } from "@/components/motion/tilt-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { projectCategories, projects } from "@/data/projects";
import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/content";

type CategoryId = (typeof projectCategories)[number]["id"];

const categoryLabels: Record<Project["category"], string> = {
  enterprise: "Enterprise",
  performance: "Performance",
  "machine-learning": "Machine Learning",
  web: "Web",
  analytics: "Analytics",
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <TiltCard maxTilt={4}>
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
    </TiltCard>
  );
}

export function Projects() {
  const reduceMotion = useReducedMotion();
  const [category, setCategory] = React.useState<CategoryId>("all");

  const visibleProjects =
    category === "all" ? projects : projects.filter((project) => project.category === category);

  return (
    <Section id="projects" className="bg-surface/40">
      <SectionHeading
        sectionId="projects"
        eyebrow="04 — Featured Projects"
        title="Systems that shipped and numbers that moved"
        description="National healthcare platforms, production ML and performance engineering — each with measurable outcomes."
      />

      {/* Category filter */}
      <div
        role="group"
        aria-label="Filter projects by category"
        className="mb-10 flex flex-wrap gap-2"
      >
        {projectCategories.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={category === item.id}
            onClick={() => setCategory(item.id)}
            className={cn(
              "cursor-pointer rounded-full border px-4 py-1.5 font-mono text-xs transition-all duration-200",
              category === item.id
                ? "border-primary/60 bg-primary/15 text-primary dark:text-blue-400"
                : "border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
            )}
          >
            {item.label}
            <span className="ml-1.5 text-muted-foreground/70">
              {item.id === "all"
                ? projects.length
                : projects.filter((project) => project.category === item.id).length}
            </span>
          </button>
        ))}
      </div>

      <motion.div layout={!reduceMotion} className="grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              layout={!reduceMotion}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: EASE_OUT }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
