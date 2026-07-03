import { ExternalLink, Github } from "lucide-react";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

const username = siteConfig.githubUsername;

/**
 * Live GitHub statistics rendered via public stats services.
 * Transparent backgrounds + brand colours keep them native in both themes.
 */
const statParams =
  "hide_border=true&bg_color=00000000&title_color=2563eb&icon_color=06b6d4&text_color=94a3b8&ring_color=2563eb";

const embeds = [
  {
    id: "stats",
    title: "Overview",
    src: `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&rank_icon=github&${statParams}`,
    alt: `GitHub statistics overview for ${username}`,
  },
  {
    id: "streak",
    title: "Contribution streak",
    src: `https://streak-stats.demolab.com?user=${username}&hide_border=true&background=00000000&ring=2563EB&fire=06B6D4&currStreakLabel=2563EB&sideLabels=94A3B8&currStreakNum=06B6D4&sideNums=94A3B8&dates=64748B&stroke=94A3B8`,
    alt: `GitHub contribution streak for ${username}`,
  },
  {
    id: "languages",
    title: "Most used languages",
    src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&langs_count=8&${statParams}`,
    alt: `Most used programming languages for ${username}`,
  },
];

export function GithubActivity() {
  return (
    <Section id="github" className="bg-surface/40">
      <SectionHeading
        sectionId="github"
        eyebrow="10 — GitHub"
        title="Open source footprint"
        description="Live statistics pulled straight from my GitHub profile — commits, streaks and language usage."
      />

      <Stagger interval={0.08} className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {embeds.map((embed) => (
          <StaggerItem key={embed.id}>
            <Card className="h-full transition-colors duration-300 hover:border-primary/30">
              <CardHeader>
                <CardTitle className="text-sm">{embed.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element -- dynamic external SVGs; next/image cannot optimise these */}
                <img
                  src={embed.src}
                  alt={embed.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full max-w-[420px]"
                />
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>

      <FadeIn delay={0.2} className="mt-8">
        <Card className="transition-colors duration-300 hover:border-primary/30">
          <CardHeader>
            <CardTitle className="text-sm">Contribution graph</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            {/* eslint-disable-next-line @next/next/no-img-element -- dynamic external SVG; next/image cannot optimise this */}
            <img
              src={`https://ghchart.rshah.org/2563EB/${username}`}
              alt={`GitHub contribution graph for ${username}`}
              loading="lazy"
              decoding="async"
              className="min-w-[640px]"
            />
          </CardContent>
        </Card>
      </FadeIn>

      <FadeIn delay={0.3} className="mt-8 flex flex-wrap gap-3">
        <Button variant="secondary" asChild>
          <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
            <Github /> Visit my GitHub
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a
            href={`${siteConfig.links.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink /> Browse repositories
          </a>
        </Button>
      </FadeIn>
    </Section>
  );
}
