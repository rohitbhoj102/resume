/**
 * Central site configuration — the single place to update personal details,
 * links, and SEO defaults. Every component reads from here.
 */
export const siteConfig = {
  name: "Rohit Bhojwani",
  initials: "RB",
  headline:
    "Building scalable software. Optimising enterprise systems. Leading high-performing engineering teams.",
  roles: [
    "Software Engineer",
    "Development Lead",
    "Backend Engineer",
    "Release Manager",
    "Cloud Engineer",
    "AI Engineer",
  ],
  title: "Rohit Bhojwani — Software Engineer & Development Lead",
  description:
    "Full Stack Software Engineer and Development Lead in Singapore specialising in enterprise healthcare systems, Java, Spring Boot, cloud-native architecture, performance optimisation, release management and AI-assisted engineering.",
  /** Production URL — update after deploying and configuring the custom domain. */
  url: "https://rohitbhojwani.vercel.app",
  location: "Singapore",
  email: "rohitbhoj102@gmail.com",
  resumeFile: "/resume/Rohit_Bhojwani_Resume.pdf",
  links: {
    github: "https://github.com/rohitbhoj102",
    linkedin: "https://www.linkedin.com/in/rohit-bhojwani",
  },
  /** Username used by the GitHub statistics embeds. */
  githubUsername: "rohitbhoj102",
  keywords: [
    "Rohit Bhojwani",
    "Software Engineer",
    "Development Lead",
    "Backend Engineer",
    "Java",
    "Spring Boot",
    "Microservices",
    "AWS",
    "Release Management",
    "Performance Optimisation",
    "AI Engineering",
    "Singapore",
    "Healthcare Systems",
  ],
} as const;

export type SiteConfig = typeof siteConfig;

/** Section anchors used by the navbar, command palette and scroll spy. */
export const navSections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "performance", label: "Performance" },
  { id: "releases", label: "Releases" },
  { id: "ai", label: "AI" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "github", label: "GitHub" },
  { id: "contact", label: "Contact" },
] as const;

export type NavSection = (typeof navSections)[number];
