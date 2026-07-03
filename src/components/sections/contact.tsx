import { Github, Globe, Linkedin, Mail, MapPin } from "lucide-react";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig } from "@/config/site";

const channels = [
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: false,
  },
  {
    id: "linkedin",
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/rohitbhojwani",
    href: siteConfig.links.linkedin,
    external: true,
  },
  {
    id: "github",
    icon: Github,
    label: "GitHub",
    value: `github.com/${siteConfig.githubUsername}`,
    href: siteConfig.links.github,
    external: true,
  },
  {
    id: "portfolio",
    icon: Globe,
    label: "Portfolio",
    value: siteConfig.url.replace("https://", ""),
    href: siteConfig.url,
    external: true,
  },
] as const;

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        sectionId="contact"
        eyebrow="11 — Contact"
        title="Let's build something exceptional"
        description="Open to conversations about senior engineering, technical leadership and architecture roles — or interesting problems worth solving."
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div className="space-y-4">
          <Stagger interval={0.06} className="space-y-3">
            {channels.map((channel) => (
              <StaggerItem key={channel.id}>
                <a
                  href={channel.href}
                  {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group block"
                >
                  <Card className="transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-glow-sm">
                    <CardContent className="flex items-center gap-4 p-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <channel.icon className="size-5" aria-hidden />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">{channel.label}</p>
                        <p className="truncate text-sm font-medium">{channel.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </StaggerItem>
            ))}
            <StaggerItem>
              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <MapPin className="size-5" aria-hidden />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm font-medium">
                      {siteConfig.location} · Permanent Resident
                    </p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          </Stagger>
        </div>

        <FadeIn delay={0.15}>
          <Card className="border-gradient">
            <CardContent className="p-6 sm:p-8">
              <ContactForm />
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </Section>
  );
}
