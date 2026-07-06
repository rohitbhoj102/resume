import { siteConfig } from "@/config/site";

/**
 * Person + WebSite structured data for rich search results.
 * Rendered once on the home page.
 */
export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    email: `mailto:${siteConfig.email}`,
    jobTitle: "Development Lead & Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "NCS Group",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Singapore",
      addressCountry: "SG",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "National University of Singapore",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Singapore Management University",
      },
    ],
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
    knowsAbout: [
      "Java",
      "Spring Boot",
      "Microservices",
      "AWS",
      "Angular",
      "Performance Optimisation",
      "Release Management",
      "AI Engineering",
      "Healthcare Systems",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} — Portfolio`,
    url: siteConfig.url,
    description: siteConfig.description,
    author: { "@type": "Person", name: siteConfig.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
