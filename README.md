# Rohit Bhojwani — Portfolio

Premium portfolio website for a Senior Software Engineer / Development Lead, built with Next.js 15, TypeScript, Tailwind CSS v4 and Framer Motion.

## Tech Stack

| Layer      | Technology                                        |
| ---------- | ------------------------------------------------- |
| Framework  | Next.js 15 (App Router, React 19)                 |
| Language   | TypeScript (strict)                               |
| Styling    | Tailwind CSS v4 (CSS-first theme config)          |
| Animation  | Framer Motion                                     |
| Components | shadcn/ui-style primitives, Lucide, React Icons   |
| Fonts      | Geist Sans & Geist Mono (self-hosted, zero CLS)   |
| Theming    | next-themes (dark default, light mode, no flash)  |

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
├── app/                    # App Router pages, layout, global styles
│   ├── globals.css         # Design tokens + Tailwind v4 theme (single source of styling truth)
│   ├── layout.tsx          # Root layout: fonts, metadata, theme provider
│   └── page.tsx            # Home page
├── components/
│   ├── layout/             # Container, Section, SectionHeading
│   ├── motion/             # FadeIn, Stagger, AnimatedCounter (reduced-motion aware)
│   ├── theme/              # ThemeProvider, ThemeToggle
│   └── ui/                 # Button, Badge, Card, Separator (shadcn-style)
├── config/
│   └── site.ts             # ← All personal data, links & SEO defaults live here
├── data/                   # Typed portfolio content (experience, projects, skills, ...)
├── lib/                    # cn(), fonts, shared motion variants
└── types/                  # Content type definitions
```

> **Updating personal details:** edit `src/config/site.ts` — name, email, links,
> GitHub username, canonical URL and SEO keywords are all centralised there.
> The downloadable resume lives at `public/resume/Rohit_Bhojwani_Resume.pdf`.

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
9. Enable Netlify Forms if you switch the contact form to Netlify Forms.
10. Continuous deployment from the connected branch is enabled by default.

## Build Phases

- [x] **Phase 1** — Architecture & design system (theme, tokens, typography, base components, motion primitives)
- [x] **Phase 2** — Core pages & reusable section components
- [x] **Phase 3** — Animations & interactions
- [x] **Phase 4** — Performance optimisation & SEO (robots, sitemap, JSON-LD, OG image, PWA + offline, print resume; Lighthouse 100 Accessibility / 100 SEO / 100 Best Practices)
- [ ] **Phase 5** — Deployment, testing & polish
