import { Database, Gauge, Layers, RefreshCcw, Repeat, Table2, Waypoints, Zap } from "lucide-react";

import type { SkillIcon } from "@/types/content";

export interface PerformanceCard {
  id: string;
  title: string;
  description: string;
  icon: SkillIcon;
}

export interface PerformanceStat {
  label: string;
  value: number;
  suffix: string;
  detail: string;
}

/** Headline numbers proven in production on NHIPS. */
export const performanceStats: PerformanceStat[] = [
  {
    label: "Faster order creation",
    value: 37,
    suffix: "%",
    detail: "Indexed foreign keys + aggregated SQL functions on medication order workflows",
  },
  {
    label: "Faster grid rendering",
    value: 40,
    suffix: "%",
    detail: "Advanced Ag-Grid configurations for high-volume clinical datasets",
  },
  {
    label: "Lower page load times",
    value: 25,
    suffix: "%",
    detail: "Lazy loading and smart caching across the Angular frontend",
  },
  {
    label: "Technical debt reduced",
    value: 20,
    suffix: "%",
    detail: "Major refactoring efforts eliminating redundant logic",
  },
];

export const performancePractices: PerformanceCard[] = [
  {
    id: "database-optimisation",
    title: "Database Optimisation",
    description:
      "Indexed foreign keys, schema-aware query planning and aggregated SQL functions that turn multi-second workflows into sub-second ones.",
    icon: Database,
  },
  {
    id: "reducing-db-loops",
    title: "Eliminating DB Loop Calls",
    description:
      "Hunting down N+1 query patterns and repeated per-row lookups, replacing loops of database calls with set-based operations and batched fetches.",
    icon: Repeat,
  },
  {
    id: "sql-tuning",
    title: "SQL Tuning",
    description:
      "Execution-plan-driven rewrites: pushing aggregation into the database, trimming over-fetching and making every query earn its latency budget.",
    icon: Table2,
  },
  {
    id: "caching",
    title: "Caching Strategies",
    description:
      "Smart caching of stable reference data and computed results — on both the API and frontend layers — to keep hot paths off the database entirely.",
    icon: Layers,
  },
  {
    id: "api-optimisation",
    title: "API Optimisation",
    description:
      "Right-sizing payloads, collapsing chatty endpoint sequences and profiling response times so high-traffic APIs stay fast under load.",
    icon: Waypoints,
  },
  {
    id: "refactoring",
    title: "Refactoring at Scale",
    description:
      "Large-scale refactors that remove redundant logic and reduce technical debt — making systems faster to run and faster to change.",
    icon: RefreshCcw,
  },
  {
    id: "throughput",
    title: "Throughput Engineering",
    description:
      "Improving application throughput end to end: connection pooling, transaction scoping and eliminating contention on shared resources.",
    icon: Gauge,
  },
  {
    id: "frontend-performance",
    title: "Frontend Performance",
    description:
      "Lazy loading, change-detection discipline and virtualised grids so data-heavy enterprise UIs stay responsive with thousands of rows.",
    icon: Zap,
  },
];
