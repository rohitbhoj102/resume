import {
  Bot,
  BrainCircuit,
  FileSearch,
  Gauge,
  MessageSquareCode,
  Blocks,
  Sparkles,
  Workflow,
} from "lucide-react";

import type { SkillIcon } from "@/types/content";

export interface AiCapability {
  id: string;
  title: string;
  description: string;
  icon: SkillIcon;
  tools: string[];
}

export const aiCapabilities: AiCapability[] = [
  {
    id: "ai-assisted-development",
    title: "AI-Assisted Development",
    description:
      "Claude, ChatGPT and GitHub Copilot are part of my daily loop — drafting implementations, exploring unfamiliar code and accelerating routine engineering without lowering the quality bar.",
    icon: MessageSquareCode,
    tools: ["Claude", "ChatGPT", "GitHub Copilot"],
  },
  {
    id: "prompt-engineering",
    title: "Prompt Engineering",
    description:
      "Structured, context-rich prompting: providing constraints, examples and acceptance criteria so AI output lands close to production-ready on the first pass.",
    icon: Sparkles,
    tools: ["System prompts", "Few-shot patterns", "Constraint design"],
  },
  {
    id: "agentic-ai",
    title: "Agentic AI",
    description:
      "Certified in Architecting Agentic AI Solutions (NUS-ISS) — designing systems where AI agents plan, call tools and execute multi-step engineering workflows.",
    icon: Bot,
    tools: ["Agent architectures", "Tool use", "Orchestration"],
  },
  {
    id: "ai-code-review",
    title: "AI Code Review",
    description:
      "Using AI as a second reviewer: surfacing edge cases, spotting concurrency issues and challenging design decisions before human review.",
    icon: FileSearch,
    tools: ["Claude", "Copilot"],
  },
  {
    id: "ai-performance",
    title: "Performance Optimisation with AI",
    description:
      "Pairing profiler output and query plans with AI analysis to find optimisation candidates faster — then validating every change with measurements.",
    icon: Gauge,
    tools: ["Query analysis", "Profiling", "Benchmark validation"],
  },
  {
    id: "ai-architecture",
    title: "AI Software Architecture",
    description:
      "Certified in Integrating and Deploying AI Solutions and Explainable & Responsible AI — building AI features with deployment, safety and explainability designed in.",
    icon: Blocks,
    tools: ["NUS-ISS certified", "Responsible AI", "Deployment patterns"],
  },
  {
    id: "ml-foundations",
    title: "Machine Learning Foundations",
    description:
      "Hands-on model work from BeLive and CitiVentures: BERT sentiment models at 93.9% accuracy, NLP pipelines and predictive risk analytics.",
    icon: BrainCircuit,
    tools: ["BERT", "Scikit-Learn", "TensorFlow"],
  },
  {
    id: "ai-workflow",
    title: "AI in the Engineering Workflow",
    description:
      "AI woven through planning, story breakdown, test generation and documentation — measured by team delivery outcomes, not novelty.",
    icon: Workflow,
    tools: ["Sprint planning", "Test generation", "Documentation"],
  },
];
