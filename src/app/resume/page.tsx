import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { certifications } from "@/data/certifications";
import { education } from "@/data/education";
import { experiences } from "@/data/experience";
import { skillGroups } from "@/data/skills";

import { ResumeToolbar } from "./print-button";

export const metadata: Metadata = {
  title: "Resume",
  description: `Print-friendly resume of ${siteConfig.name} — Software Engineer & Development Lead in Singapore.`,
  alternates: { canonical: "/resume" },
};

/**
 * Print-friendly resume: a clean, paper-styled document rendered from the
 * same data that powers the portfolio. Optimised for A4 via print styles.
 */
export default function ResumePage() {
  return (
    <main className="min-h-dvh px-4 py-8 print:p-0">
      <ResumeToolbar />

      <article className="mx-auto w-full max-w-3xl rounded-xl bg-white p-8 text-slate-900 shadow-xl sm:p-10 print:max-w-none print:rounded-none print:p-0 print:shadow-none">
        {/* Header */}
        <header className="border-b border-slate-300 pb-4">
          <h1 className="text-3xl font-bold tracking-tight">{siteConfig.name}</h1>
          <p className="mt-1 text-sm font-medium text-slate-600">
            Software Engineer · Development Lead · Release Manager
          </p>
          <p className="mt-2 text-xs text-slate-500">
            {siteConfig.location} · Singapore Permanent Resident · {siteConfig.email} ·{" "}
            {siteConfig.links.linkedin.replace("https://www.", "")} ·{" "}
            {siteConfig.links.github.replace("https://", "")}
          </p>
        </header>

        {/* Summary */}
        <section aria-labelledby="resume-summary" className="mt-5">
          <h2
            id="resume-summary"
            className="text-xs font-bold tracking-widest text-blue-700 uppercase"
          >
            Professional Summary
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Full Stack Software Engineer with 4+ years of experience building scalable,
            enterprise-grade systems across public-sector and product environments. Skilled in
            RESTful APIs, microservices and cloud-native applications with Java, Spring Boot,
            Angular, SQL and AWS. Specialises in system performance, code quality and delivery speed
            within Agile teams, with a strong record of leading development initiatives, managing
            releases across four environments and integrating AI into engineering workflows.
          </p>
        </section>

        {/* Skills */}
        <section aria-labelledby="resume-skills" className="mt-5">
          <h2
            id="resume-skills"
            className="text-xs font-bold tracking-widest text-blue-700 uppercase"
          >
            Technical Skills
          </h2>
          <dl className="mt-2 space-y-1">
            {skillGroups.map((group) => (
              <div key={group.id} className="flex gap-2 text-sm">
                <dt className="w-40 shrink-0 font-semibold text-slate-800">{group.title}</dt>
                <dd className="text-slate-600">
                  {group.skills.map((skill) => skill.name).join(", ")}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Experience */}
        <section aria-labelledby="resume-experience" className="mt-5">
          <h2
            id="resume-experience"
            className="text-xs font-bold tracking-widest text-blue-700 uppercase"
          >
            Work Experience
          </h2>
          <div className="mt-2 space-y-4">
            {experiences.map((experience) => (
              <div key={experience.id} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <h3 className="text-sm font-bold text-slate-900">{experience.role}</h3>
                  <span className="text-xs font-medium text-slate-500">{experience.period}</span>
                </div>
                <p className="text-xs font-medium text-slate-600">
                  {experience.company}, {experience.location}
                  {experience.project ? ` · ${experience.project}` : ""}
                </p>
                <ul className="mt-1.5 list-disc space-y-1 pl-4 text-sm leading-snug text-slate-700">
                  {experience.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section aria-labelledby="resume-education" className="mt-5">
          <h2
            id="resume-education"
            className="text-xs font-bold tracking-widest text-blue-700 uppercase"
          >
            Education
          </h2>
          <div className="mt-2 space-y-3">
            {education.map((entry) => (
              <div key={entry.id} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <h3 className="text-sm font-bold text-slate-900">{entry.institution}</h3>
                  <span className="text-xs font-medium text-slate-500">{entry.period}</span>
                </div>
                <p className="text-xs text-slate-600">
                  {entry.degree} — {entry.field}
                </p>
                <ul className="mt-1 list-disc space-y-0.5 pl-4 text-sm leading-snug text-slate-700">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section aria-labelledby="resume-certifications" className="mt-5">
          <h2
            id="resume-certifications"
            className="text-xs font-bold tracking-widest text-blue-700 uppercase"
          >
            Certifications
          </h2>
          <ul className="mt-2 grid gap-x-6 gap-y-1 text-sm text-slate-700 sm:grid-cols-2">
            {certifications.map((certification) => (
              <li key={certification.id} className="flex justify-between gap-2">
                <span>{certification.title}</span>
                <span className="shrink-0 text-xs text-slate-500">{certification.issued}</span>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
