import type { Experience } from "@/types/content";

export const experiences: Experience[] = [
  {
    id: "development-lead",
    role: "Development Lead",
    company: "NCS Group",
    project: "National Harmonised Integrated Pharmacy System (NHIPS)",
    location: "Singapore",
    period: "Aug 2024 — Present",
    type: "full-time",
    current: true,
    summary:
      "Leading feature delivery for Singapore's national pharmacy platform — owning sprint outcomes, mentoring engineers and doubling as Release Manager across four deployment environments.",
    responsibilities: [
      "Own end-to-end user story delivery: sprint planning, backlog refinement and task breakdown",
      "Lead technical design discussions and code reviews across the feature team",
      "Mentor a team of 3 developers — assigning tasks, removing blockers and tracking progress",
      "Act as key liaison in sprint demos between Product Owners and engineering",
      "Coordinate release management: deployments, schedules, validation and rollback strategy across SIT, UAT, STG and PROD",
    ],
    achievements: [
      "Consistently achieved 100% sprint completion through disciplined planning and story breakdown",
      "Mitigated project ambiguity by 15% via detailed grooming discussions, minimising downstream rework",
      "Sustained 95% delivery consistency over 12 months while mentoring the team",
      "Improved Product Owner satisfaction by 20% through demo alignment and stakeholder communication",
    ],
    technologies: ["Java", "Spring Boot", "Angular", "SQL", "Jira", "Git", "Jenkins"],
    impact:
      "Predictable, high-quality sprint delivery for a national healthcare system serving pharmacies across Singapore.",
  },
  {
    id: "backend-engineer",
    role: "Software Engineer (Backend)",
    company: "NCS Group",
    project: "National Harmonised Integrated Pharmacy System (NHIPS)",
    location: "Singapore",
    period: "Aug 2022 — Aug 2024",
    type: "full-time",
    summary:
      "Built and optimised the backend services powering a national pharmacy system — robust REST APIs, deep SQL performance work and integrations with physical pharmacy automation.",
    responsibilities: [
      "Design and build RESTful services and scalable Java modules on Spring Boot and Hibernate",
      "Integrate NHIPS with pharmacy machines through API connectors and middleware components",
      "Tune SQL queries and schema design for high-volume medication workflows",
      "Develop automated unit and integration tests with JUnit and JaCoCo",
    ],
    achievements: [
      "Delivered backend services supporting 1,000+ daily users across national pharmacies",
      "Drove integration with 50+ pharmacy machines, enhancing operational interoperability",
      "Cut medication order creation time by 37% via indexed foreign keys and aggregated SQL functions",
      "Ensured 90%+ coverage on new features and maintained project-wide coverage above 80%",
    ],
    technologies: ["Java", "Spring Boot", "Hibernate", "SQL", "REST APIs", "JUnit", "JaCoCo"],
    impact:
      "Faster, safer medication order processing at national scale — with measurable performance and quality gains.",
  },
  {
    id: "frontend-engineer",
    role: "Software Engineer (Frontend)",
    company: "NCS Group",
    project: "National Harmonised Integrated Pharmacy System (NHIPS)",
    location: "Singapore",
    period: "Aug 2022 — Aug 2024",
    type: "full-time",
    summary:
      "Owned frontend engineering across the NHIPS Angular codebase — reusable components, performance strategies and large-scale refactoring of data-heavy healthcare UIs.",
    responsibilities: [
      "Develop modular, reusable Angular components standardising UI behaviour across modules",
      "Engineer frontend performance: lazy loading, smart caching and rendering optimisation",
      "Refactor legacy code paths to eliminate redundant logic and reduce technical debt",
      "Optimise Ag-Grid configurations for high-volume clinical datasets",
    ],
    achievements: [
      "Standardised UI behaviour across 12+ modules with a reusable component library",
      "Achieved a 25% decrease in page load times through lazy loading and smart caching",
      "Reduced technical debt by 20% through major refactoring efforts",
      "Optimised Ag-Grid rendering speeds by 40% for high-volume datasets",
    ],
    technologies: ["TypeScript", "Angular", "Bootstrap", "CSS", "Ag-Grid"],
    impact:
      "A faster, more maintainable frontend for clinicians and pharmacists working with dense, data-heavy screens.",
  },
  {
    id: "ml-intern",
    role: "Machine Learning Intern",
    company: "BeLive Technology",
    project: "BeLive Audience Sentiment Engine (B.A.S.E)",
    location: "Singapore",
    period: "May 2021 — Jan 2022",
    type: "internship",
    summary:
      "Developed BERT-based sentiment models for livestream analytics, turning raw audience chatter into actionable insights for hosts and business users.",
    responsibilities: [
      "Train and evaluate BERT-based sentiment models for livestream analytics",
      "Improve dataset quality through strategic relabelling across model versions",
      "Extend the engine's capabilities to multiple languages with cross-functional teams",
    ],
    achievements: [
      "Achieved 93.9% sentiment model accuracy, delivering actionable insights to business users",
      "Optimised accuracy by over 3% across multiple model versions through dataset relabelling",
      "Multilingual expansion led to a 27% boost in international user engagement",
    ],
    technologies: ["Python", "BERT", "MSSQL", "NLP"],
    impact:
      "Real-time audience understanding for livestream hosts, directly lifting international engagement.",
  },
  {
    id: "data-science-intern",
    role: "Data Science Intern",
    company: "BeLive Technology",
    project: "Question & Language Detection Models",
    location: "Singapore",
    period: "May 2021 — Jan 2022",
    type: "internship",
    summary:
      "Built NLP pipelines for question detection, language identification and automated sentiment analysis over live comment streams.",
    responsibilities: [
      "Detect questions within livestream comments using Regular Expression techniques",
      "Identify comment language across English, Chinese and Bahasa using vectorisation",
      "Relabel comment datasets strategically to fine-tune model precision",
    ],
    achievements: [
      "Attained >91% testing accuracy on question detection within livestream comments",
      "Launched automated sentiment analysis, growing audience engagement by 23%",
      "Fine-tuned models to >96% overall accuracy, providing more precise business insights",
    ],
    technologies: ["Python", "Scikit-Learn", "TF-IDF", "RegEx"],
    impact:
      "Hosts gained real-time, language-aware insight into their audiences without manual review.",
  },
  {
    id: "project-manager",
    role: "Project Manager",
    company: "CitiVentures Innovation Lab",
    project: "Predictive Analysis of Risk Utilisation (Phase II)",
    location: "Singapore",
    period: "Aug — Nov 2021",
    type: "contract",
    summary:
      "Led delivery of a risk analytics platform for Citibank Risk Managers — coordinating UI development, machine learning solution design and stakeholder workshops.",
    responsibilities: [
      "Initiate and coordinate end-to-end development of the application UI",
      "Lead creation of an interactive dashboard tailored to Citibank Risk Managers",
      "Design machine learning solutions harnessing historical trading patterns",
      "Run workshops promoting cross-departmental understanding of the solution",
    ],
    achievements: [
      "Orchestrated a 15% reduction in UI development timeline, ensuring timely delivery",
      "Dashboard accelerated response time to compliance concerns by 40%",
      "Designed 3 ML solutions achieving a 23% rise in risk parameter prediction accuracy",
      "Workshops drove a 27% increase in interdepartmental collaboration",
    ],
    technologies: ["React", "Python", "Flask", "Couchbase"],
    impact:
      "Risk managers responded to compliance concerns dramatically faster, backed by better predictions.",
  },
];
