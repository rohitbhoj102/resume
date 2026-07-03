import {
  CalendarClock,
  GitBranch,
  History,
  Rocket,
  ServerCog,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";

import type { PipelineStage, SkillIcon } from "@/types/content";

export const pipelineStages: PipelineStage[] = [
  {
    id: "dev",
    name: "DEV",
    fullName: "Developer",
    description: "Feature branches built, unit-tested and peer-reviewed before promotion",
  },
  {
    id: "sit",
    name: "SIT",
    fullName: "System Integration Testing",
    description: "Services and machine integrations validated together end to end",
  },
  {
    id: "uat",
    name: "UAT",
    fullName: "User Acceptance Testing",
    description: "Product owners and testers verify features against real workflows",
  },
  {
    id: "stg",
    name: "STG",
    fullName: "Staging",
    description: "Production-like rehearsal: final validation of build, config and data",
  },
  {
    id: "prod",
    name: "PROD",
    fullName: "Production",
    description: "Coordinated national release with monitoring and rollback readiness",
  },
];

export interface ReleaseResponsibility {
  id: string;
  title: string;
  description: string;
  icon: SkillIcon;
}

export const releaseResponsibilities: ReleaseResponsibility[] = [
  {
    id: "deployment-coordination",
    title: "Deployment Coordination",
    description:
      "Owning the deployment calendar across four environments — sequencing builds, dependencies and downtime windows.",
    icon: CalendarClock,
  },
  {
    id: "release-planning",
    title: "Release Planning",
    description:
      "Planning release scope with product owners and testers, ensuring every build promoted upward is validated and traceable.",
    icon: Workflow,
  },
  {
    id: "rollback-strategy",
    title: "Rollback Strategy",
    description:
      "Defining rollback paths before every production release, so recovery is a rehearsed procedure — not an improvisation.",
    icon: History,
  },
  {
    id: "production-releases",
    title: "Production Releases",
    description:
      "Executing production deployments for a national healthcare system, with release validation and post-deployment monitoring.",
    icon: Rocket,
  },
  {
    id: "environment-management",
    title: "Environment Management",
    description:
      "Keeping SIT, UAT, STG and PROD consistent and stable — configuration, data readiness and environment health.",
    icon: ServerCog,
  },
  {
    id: "ci-cd",
    title: "Jenkins & CI/CD",
    description:
      "Jenkins pipelines building, testing and packaging every release candidate, with Git-based version control discipline.",
    icon: GitBranch,
  },
  {
    id: "risk-management",
    title: "Deployment Risk Management",
    description:
      "Assessing release risk, coordinating mitigations with stakeholders and gating promotion on validation results.",
    icon: ShieldCheck,
  },
  {
    id: "stakeholders",
    title: "Stakeholder Alignment",
    description:
      "Working closely with testers and product owners so releases land predictably for everyone downstream.",
    icon: Users,
  },
];
