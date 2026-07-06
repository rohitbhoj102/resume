import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { JsonLd } from "@/components/seo/json-ld";
import { About } from "@/components/sections/about";
import { AiExperience } from "@/components/sections/ai-experience";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { GithubActivity } from "@/components/sections/github-activity";
import { Hero } from "@/components/sections/hero";
import { Performance } from "@/components/sections/performance";
import { Projects } from "@/components/sections/projects";
import { Releases } from "@/components/sections/releases";
import { Skills } from "@/components/sections/skills";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Performance />
        <Releases />
        <AiExperience />
        <Certifications />
        <Education />
        <GithubActivity />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
