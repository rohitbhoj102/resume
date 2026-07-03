import type { IconType } from "react-icons";

/** A single role on the experience timeline. */
export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  project?: string;
  location: string;
  period: string;
  type: "full-time" | "internship" | "contract";
  current?: boolean;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  impact: string;
}

/** A featured project card. */
export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "enterprise" | "performance" | "machine-learning" | "web" | "analytics";
  overview: string;
  technologies: string[];
  architecture: string;
  challenges: string;
  outcome: string;
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

/** One technology inside a skill group. */
export interface Skill {
  name: string;
  /** Proficiency from 0–100 used to render the bar. */
  level: number;
  icon?: IconType;
}

/** A grouped skill card (Programming, Backend, Cloud, ...). */
export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

/** A certification card. */
export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issued: string;
  category: "professional" | "ai" | "software-engineering";
  credentialUrl?: string;
}

/** An education timeline entry. */
export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  highlights: string[];
}

/** A performance engineering case/practice card. */
export interface PerformancePractice {
  id: string;
  title: string;
  description: string;
  metric?: string;
}

/** A stage in the release pipeline diagram. */
export interface PipelineStage {
  id: string;
  name: string;
  fullName: string;
  description: string;
}
