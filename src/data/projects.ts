import type { Project } from "@/types/content";

import { siteConfig } from "@/config/site";

export const projectCategories = [
  { id: "all", label: "All" },
  { id: "enterprise", label: "Enterprise" },
  { id: "performance", label: "Performance" },
  { id: "machine-learning", label: "Machine Learning" },
  { id: "web", label: "Web" },
  { id: "analytics", label: "Analytics" },
] as const;

export const projects: Project[] = [
  {
    id: "nhips",
    title: "NHIPS",
    tagline: "Singapore's National Harmonised Integrated Pharmacy System",
    category: "enterprise",
    featured: true,
    overview:
      "A large-scale public healthcare platform harmonising pharmacy operations across Singapore. I progressed from engineer to Development Lead on this system, building backend services, frontend modules and eventually owning sprint delivery and releases.",
    technologies: ["Java", "Spring Boot", "Hibernate", "Angular", "SQL", "JUnit", "Jenkins"],
    architecture:
      "Enterprise REST services on Spring Boot and Hibernate with an Angular frontend, integrated with 50+ physical pharmacy machines through API connectors and middleware components.",
    challenges:
      "National scale and safety-critical medication workflows: 1,000+ daily users, high-volume data grids, and interoperability with heterogeneous pharmacy automation hardware.",
    outcome:
      "37% faster medication order creation, 25% faster page loads, 80%+ sustained test coverage and 100% sprint completion under my delivery leadership.",
  },
  {
    id: "performance-optimisation",
    title: "Enterprise Performance Optimisation",
    tagline: "Systematic latency reduction across a national healthcare system",
    category: "performance",
    featured: true,
    overview:
      "A sustained performance engineering effort across NHIPS: profiling slow paths, eliminating redundant database calls, tuning SQL and optimising rendering for data-heavy clinical screens.",
    technologies: ["SQL", "Hibernate", "Java", "Ag-Grid", "Angular", "Caching"],
    architecture:
      "Query-level optimisation (indexed foreign keys, aggregated SQL functions), ORM tuning to remove N+1 loops, smart caching layers and lazy loading on the frontend.",
    challenges:
      "Optimising live production workflows without regressions — every change validated against automated test suites and real clinical usage patterns.",
    outcome:
      "37% faster medication order creation, 40% faster Ag-Grid rendering on high-volume datasets, 25% lower page load times and 20% technical debt reduction.",
  },
  {
    id: "base",
    title: "B.A.S.E — Audience Sentiment Engine",
    tagline: "BERT-powered livestream sentiment analytics",
    category: "machine-learning",
    featured: true,
    overview:
      "BeLive's Audience Sentiment Engine processes livestream comments in real time to give hosts and businesses actionable insight into how their audience feels.",
    technologies: ["Python", "BERT", "MSSQL", "NLP"],
    architecture:
      "Transformer-based sentiment models over a comment ingestion pipeline, with dataset relabelling loops feeding continuous model improvement across versions.",
    challenges:
      "Noisy, informal, multilingual livestream text — extended the engine across languages while protecting model accuracy.",
    outcome:
      "93.9% sentiment accuracy and a 27% boost in international user engagement after multilingual expansion.",
  },
  {
    id: "risk-analytics-dashboard",
    title: "Risk Analytics Dashboard",
    tagline: "Predictive risk utilisation platform for Citibank Risk Managers",
    category: "analytics",
    featured: true,
    overview:
      "Phase II of CitiVentures' Predictive Analysis of Risk Utilisation — an interactive dashboard combining historical trading patterns with machine learning to sharpen risk parameter predictions.",
    technologies: ["React", "Python", "Flask", "Couchbase", "Machine Learning"],
    architecture:
      "React dashboard over a Flask API with Couchbase storage, serving three distinct ML models trained on historical trading patterns.",
    challenges:
      "Translating compliance workflows into an interface risk managers could act on quickly, while coordinating delivery across departments as Project Manager.",
    outcome:
      "40% faster response to compliance concerns and a 23% rise in risk parameter prediction accuracy.",
  },
  {
    id: "project-peter",
    title: "Project Peter",
    tagline: "Question-answering chatbot built on pre-trained BERT",
    category: "machine-learning",
    overview:
      "A question-answering chatbot using pre-trained BERT model architectures and natural language processing to answer free-form questions over source text.",
    technologies: ["Python", "BERT", "NLP", "Transformers"],
    architecture:
      "Pre-trained transformer QA heads over tokenised context passages, with an inference pipeline that extracts and ranks candidate answers.",
    challenges:
      "Balancing answer precision against inference speed when working with large transformer architectures.",
    outcome: "A working QA chatbot demonstrating practical transfer learning with BERT.",
    githubUrl: siteConfig.links.github,
  },
  {
    id: "auto-artist",
    title: "Auto Artist",
    tagline: "Denoising autoencoder that repairs damaged images",
    category: "machine-learning",
    overview:
      "A deep learning model that detects and patches cracks in damaged images — trained as a denoising autoencoder to reconstruct clean images from corrupted inputs.",
    technologies: ["Python", "TensorFlow", "Keras", "Computer Vision"],
    architecture:
      "Convolutional encoder-decoder trained on paired clean/corrupted images, learning to reconstruct undamaged regions.",
    challenges:
      "Generating realistic synthetic damage for training while keeping reconstructions faithful to the original image.",
    outcome: "A model that convincingly detects and repairs cracked regions in photographs.",
    githubUrl: siteConfig.links.github,
  },
  {
    id: "open-world-tourism",
    title: "Open World Tourism",
    tagline: "Explorable 3D Singapore landmarks in the browser",
    category: "web",
    overview:
      "An interactive 3D web experience recreating significant Singapore landmarks — including the Merlion — as an explorable open world.",
    technologies: ["React", "React Three Fiber", "Three.js", "GLTF", "JavaScript"],
    architecture:
      "GLTF models converted into declarative, reusable JSX components rendered with React Three Fiber, composed into a navigable scene graph.",
    challenges:
      "Keeping frame rates smooth in the browser while loading and rendering detailed 3D landmark models.",
    outcome: "A performant, declarative 3D world showcasing reusable R3F component patterns.",
    githubUrl: siteConfig.links.github,
  },
  {
    id: "seah-kim-cheok",
    title: "Real-Time Accident Detection",
    tagline: "Rule-based analysis of live vehicular telemetry",
    category: "analytics",
    overview:
      "Advanced rule-based algorithms analysing incoming, real-time vehicular data for Seah Kim Cheok Construction — identifying accidents as they happen.",
    technologies: ["Python", "Data Analytics", "Real-Time Processing"],
    architecture:
      "Streaming rule engine evaluating vehicular signals against calibrated accident signatures.",
    challenges:
      "Distinguishing genuine accidents from noisy sensor data and abrupt-but-normal driving behaviour.",
    outcome: "92% accident identification accuracy on real-time vehicular data.",
    githubUrl: siteConfig.links.github,
  },
];
