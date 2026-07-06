# Rohit Bhojwani — Portfolio

Premium portfolio website for a Senior Software Engineer / Development Lead, built with Next.js 15, TypeScript, Tailwind CSS v4 and Framer Motion.

**Live:** [rohit-bhojwani-portfolio.vercel.app](https://rohit-bhojwani-portfolio.vercel.app)

## Tech Stack

| Layer      | Technology                                       |
| ---------- | ------------------------------------------------ |
| Framework  | Next.js 15 (App Router, React 19), fully static  |
| Language   | TypeScript (strict)                              |
| Styling    | Tailwind CSS v4 (CSS-first theme config)         |
| Animation  | Framer Motion + CSS entrance animations          |
| Components | shadcn/ui-style primitives, Lucide, React Icons  |
| Fonts      | Geist Sans & Geist Mono (self-hosted, zero CLS)  |
| Theming    | next-themes (dark default, light mode, no flash) |

## Features

- **13 sections** — Hero, About, Experience timeline, Skills (proficiency bars), Featured Projects, Performance Engineering, Release Management (DEV → SIT → UAT → STG → PROD pipeline diagram), AI Experience, Certifications, Education, GitHub activity, Contact, Footer
- **Command palette** — ⌘K / Ctrl+K, fuzzy search across sections and actions, loaded lazily at browser idle
- **Project filtering** with animated layout transitions and 3D card tilt
- **Scroll experience** — progress bar, scroll-spy navbar, back-to-top, staggered scroll-triggered reveals (all `prefers-reduced-motion` aware)
- **Print-friendly resume** at [`/resume`](https://rohit-bhojwani-portfolio.vercel.app/resume), rendered from the same typed data as the site, plus a downloadable PDF
- **PWA** — installable, offline-capable via a minimal hand-written service worker
- **SEO** — metadata, OpenGraph/Twitter card image, JSON-LD (Person + WebSite), robots.txt, sitemap.xml, canonical URLs
- **Quality** — Lighthouse 100 Accessibility / 100 Best Practices / 100 SEO, CLS 0, ~178 kB first-load JS, fully static prerender

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build         # production build
npm run start         # serve the production build
npm run lint          # ESLint
npm run format        # Prettier (writes)
npm run format:check  # Prettier (verify only)
```

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Design tokens + Tailwind v4 theme (single source of styling truth)
│   ├── layout.tsx           # Root layout: fonts, metadata, theme, global interactive layers
│   ├── page.tsx             # Home page assembling all sections
│   ├── resume/              # Print-friendly resume page
│   ├── not-found.tsx        # Branded 404
│   ├── loading.tsx          # Animated loading screen
│   ├── robots.ts / sitemap.ts / manifest.ts
│   └── icon.svg             # Favicon (SVG)
├── components/
│   ├── interactive/         # Command palette, scroll progress, back-to-top, cursor glow
│   ├── layout/              # Navbar, Footer, Container, Section, SectionHeading
│   ├── motion/              # FadeIn, Stagger, AnimatedCounter, TiltCard, RotatingText
│   ├── pwa/                 # Service worker registration
│   ├── sections/            # One component per portfolio section
│   ├── seo/                 # JSON-LD structured data
│   ├── theme/               # ThemeProvider, ThemeToggle
│   └── ui/                  # Button, Badge, Card, Separator, SkillBar
├── config/
│   └── site.ts              # ← All personal data, links & SEO defaults live here
├── data/                    # Typed content: experience, projects, skills, certs, education,
│                            #   performance practices, release pipeline, AI capabilities
├── hooks/                   # useActiveSection (scroll spy)
├── lib/                     # cn(), fonts, shared motion variants
└── types/                   # Content type definitions
public/
├── resume/Rohit_Bhojwani_Resume.pdf   # Downloadable resume
├── og.png                             # Social share card (1200×630)
├── icons/                             # PWA + apple-touch icons
├── favicon.ico
└── sw.js                              # Offline service worker
```

## Updating Content

Everything editable lives in two places:

1. **`src/config/site.ts`** — name, email, links, GitHub username, canonical URL, SEO keywords, nav sections.
2. **`src/data/*.ts`** — experience entries, projects (set `githubUrl`/`demoUrl` per project), skills and proficiency levels, certifications, education, performance stats, release responsibilities, AI capabilities.

The home page, the print resume and the SEO output all render from this data, so one edit updates everything. To replace the downloadable PDF, overwrite `public/resume/Rohit_Bhojwani_Resume.pdf`.

## Design System

The brand palette is defined once in `src/app/globals.css` and consumed everywhere
through Tailwind semantic tokens (`bg-background`, `text-muted-foreground`, ...):

| Token      | Dark (default) | Light     |
| ---------- | -------------- | --------- |
| Primary    | `#2563EB`      | `#2563EB` |
| Secondary  | `#0F172A`      | `#E2E8F0` |
| Accent     | `#06B6D4`      | `#0891B2` |
| Background | `#020617`      | `#F8FAFC` |
| Card       | `#111827`      | `#FFFFFF` |
| Text       | `#F8FAFC`      | `#0F172A` |
| Muted      | `#94A3B8`      | `#475569` |

Tailwind v4 uses CSS-first configuration, so there is no `tailwind.config.ts` —
tokens, keyframes, custom utilities and the dark-mode variant are all declared in
`globals.css`.

## Performance Notes

- The hero headline (LCP element) renders statically; above-the-fold entrances are pure CSS so first paint never waits for hydration.
- The command palette is code-split and loaded at browser idle (a ⌘K pressed earlier still opens it on mount).
- Below-the-fold animations are scroll-triggered and animate once.
- GitHub statistics are lazy-loaded images from public stats services (github-readme-stats, streak-stats, ghchart); those cards degrade gracefully if a service is down.
- Audit with [PageSpeed Insights](https://pagespeed.web.dev/) after deploying — container-based local audits under-report performance.

## Deployment

### Deploy to Vercel

1. Push the project to GitHub.
2. Create a [Vercel](https://vercel.com) account (sign in with GitHub).
3. Click **Add New → Project** and import this repository.
4. Configure environment variables if required (none are needed by default).
5. Keep the default Next.js build settings (Vercel auto-detects them).
6. Click **Deploy**.
7. Configure a custom domain under **Settings → Domains**, then update
   `siteConfig.url` in `src/config/site.ts` and redeploy.
8. Enable **Analytics** in the project dashboard.
9. Enable **Speed Insights** in the project dashboard.
10. Automatic deployments from `main` are on by default — every push redeploys.

### Deploy to Netlify

1. Push the project to GitHub.
2. Create a [Netlify](https://netlify.com) account.
3. Click **Add new site → Import an existing project** and select the repository.
4. Configure the build:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - Netlify's Next.js Runtime is enabled automatically for Next.js projects;
     no `netlify.toml` is required for the default setup.
5. Add environment variables if required (none are needed by default).
6. Click **Deploy site**.
7. Configure redirects if required (not needed for the default setup).
8. Configure a custom domain under **Domain management**, then update
   `siteConfig.url` in `src/config/site.ts` and redeploy.
9. Enable Netlify Forms if you switch the contact form to Netlify Forms
   (it currently composes an email client draft, so no backend is required).
10. Continuous deployment from the connected branch is enabled by default.

## Build Phases

- [x] **Phase 1** — Architecture & design system (theme, tokens, typography, base components, motion primitives)
- [x] **Phase 2** — Core pages & reusable section components
- [x] **Phase 3** — Animations & interactions (command palette, filtering, tilt, scroll-spy, 404, loading)
- [x] **Phase 4** — Performance optimisation & SEO (robots, sitemap, JSON-LD, OG image, PWA + offline, print resume; Lighthouse 100 Accessibility / 100 SEO / 100 Best Practices)
- [x] **Phase 5** — Deployment docs, cross-viewport & light-mode testing, polish
