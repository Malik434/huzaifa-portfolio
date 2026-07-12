# Huzaifa Portfolio Agent Index

This repository is a single-page Next.js portfolio for Huzaifa Bin Hamid. Use this file as the Obsidian-friendly starting point for agent work.

## Obsidian Usage

Open the repository root as an Obsidian vault. Obsidian reads this `README.md` as a note because it is a Markdown file.

For the graph view, use the architecture bridge notes under [[docs/architecture/Architecture Map]]. Obsidian graphs Markdown notes more reliably than source files, so the bridge notes connect the project architecture with `[[wikilinks]]` and point to real code with normal relative Markdown links.

Start here:
- [[docs/architecture/Architecture Map]]
- [[docs/architecture/App Shell]]
- [[docs/architecture/Sections]]
- [[docs/architecture/Styling System]]
- [[docs/architecture/Assets]]
- [[docs/architecture/Agent Workflows]]

## Quick Map

- App entry: [[docs/architecture/App Shell]] - [app/page.tsx](app/page.tsx)
- Root layout and metadata: [[docs/architecture/App Shell]] - [app/layout.tsx](app/layout.tsx)
- Global design system and responsive CSS: [[docs/architecture/Styling System]] - [app/globals.css](app/globals.css)
- Tailwind config: [[docs/architecture/Styling System]] - [tailwind.config.ts](tailwind.config.ts)
- Next config: [[docs/architecture/App Shell]] - [next.config.mjs](next.config.mjs)
- Shared class utility: [lib/utils.ts](lib/utils.ts)
- Public assets: [[docs/architecture/Assets]] - [public](public)
- Section components: [[docs/architecture/Sections]] - [components/sections](components/sections)
- Shared interaction helpers: [[docs/architecture/App Shell]] - [components](components)
- UI primitives: [components/ui](components/ui)
- Hooks: [hooks](hooks)

## Runtime

- Framework: Next.js 15 with App Router.
- React: React 19.
- Styling: Tailwind CSS plus a large custom token system in [[app/globals.css]].
- Icons: `lucide-react`.
- UI primitives: shadcn/Radix-style components in [[components/ui]].
- Images: static files served from [[public]].

## Commands

```bash
npm run dev
npm run build
npm run start
npm run lint
npx tsc --noEmit
```

Notes:
- `npm run build` uses `next build`.
- [[next.config.mjs]] currently ignores build-time ESLint and TypeScript errors and sets images to `unoptimized: true`.
- Prefer `npx tsc --noEmit` for a strict local TypeScript check.

## Main Render Flow

[[app/page.tsx]] is the complete page assembly. It renders:

1. [[components/cursor.tsx|CustomCursor]]
2. [[components/sections/navbar.tsx|Navbar]]
3. [[components/sections/hero.tsx|Hero]]
4. [[components/sections/affiliations.tsx|Affiliations]]
5. [[components/sections/services.tsx|Services]]
6. [[components/sections/projects.tsx|Projects]]
7. [[components/sections/skills.tsx|Skills]]
8. [[components/sections/about.tsx|About]]
9. [[components/sections/press.tsx|Press]]
10. [[components/sections/initiatives.tsx|Initiatives]]
11. [[components/sections/experience.tsx|Experience]]
12. [[components/sections/outreach.tsx|Outreach]]
13. [[components/sections/contact.tsx|Contact]]
14. [[components/sections/footer.tsx|Footer]]
15. [[components/cursor.tsx|BackToTop]]

The navbar intentionally links only to the client-critical stops: proof, services, projects, stack, and contact. Other sections remain available by scrolling.

## Where To Edit Content

### Hero

File: [[components/sections/hero.tsx]]

Purpose:
- First viewport.
- Profile photo from [[public/profilepic.jpg]].
- Typewriter roles via [[components/typewriter.tsx]].
- Primary CTA to `#projects`.

Edit here for:
- Headline, role copy, short intro, GitHub link, profile image behavior, hero visual accents.

### About

File: [[components/sections/about.tsx]]

Purpose:
- Bio copy.
- Availability badge.
- Education, languages, certifications.
- Stats rendered with [[components/stat-counter.tsx]].

Edit here for:
- Personal positioning, education dates, certification links, language levels, counters.

### Skills

File: [[components/sections/skills.tsx]]

Purpose:
- Skill categories and visible technology pills.
- `TECH_DATA` maps skill names to icons and brand colors.
- `SKILLS` controls category cards and displayed skill names.

Edit here for:
- Adding/removing technologies, changing category labels, updating icon/color mappings.

Important:
- If a skill name is added to `SKILLS` but not `TECH_DATA`, it falls back to the default code icon and accent color.

### Projects

File: [[components/sections/projects.tsx]]

Purpose:
- Project catalog.
- Category filters.
- Links to live apps, code, spotlight coverage.
- Screenshot previews from [[public]].

Primary data:
- `PROJECTS`
- `FILTERS`
- `CAT_MAP`
- `ProjectScreenshot`

Edit here for:
- Adding projects, changing tags/descriptions, updating preview images, adjusting filters, changing project cards.

Preview image assets currently used:
- [[public/yieldsense-preview.png]]
- [[public/dentavyro-preview.jpg]]
- [[public/taskwiser-preview.png]]
- [[public/NexiClaw.png]]
- [[public/foodfusion.png]]
- [[public/EVM-Wallet-preview.png]]
- [[public/VideoEditingAutomation-preview.png]]
- [[public/MeetingArchival-preview.png]]

Affiliation logo assets:
- [[public/affiliations/singularitynet.svg]]
- [[public/affiliations/Acurast.svg]]
- [[public/affiliations/peaq.png]]
- [[public/affiliations/comsats.png]]
- [[public/affiliations/nicl.png]]
- [[public/affiliations/n8n.svg]]
- [[public/affiliations/cardano.svg]]
- [[public/affiliations/base.svg]]

Technical Arsenal logo assets:
- [[public/tech]]

Preview rendering CSS:
- `.project-preview-shell`
- `.project-preview-shell-featured`
- `.project-screenshot-frame`
- `.project-screenshot-image`

These classes live in [[app/globals.css]]. Keep preview borders synchronized with image dimensions and avoid forced aspect ratios unless intentionally reintroducing crop/letterbox behavior.

### Press

File: [[components/sections/press.tsx]]

Purpose:
- External coverage and social proof.
- Data lives in `PRESS_ITEMS`.

Edit here for:
- Builder spotlight links, social features, incubation announcements, badges, dates.

### Initiatives

File: [[components/sections/initiatives.tsx]]

Purpose:
- Current startup, grant, and protocol work.
- Data lives in `INITIATIVES`.

Edit here for:
- Active roadmap items, startup incubation status, protocol proposals.

### Experience

File: [[components/sections/experience.tsx]]

Purpose:
- Timeline layout for work/community roles.
- Data lives in `ENTRIES`.
- Cards render through local `EntryCard`.

Edit here for:
- Role periods, organizations, descriptions, tags, optional links.

### Outreach

File: [[components/sections/outreach.tsx]]

Purpose:
- Newspaper-style content grid for R&D, devrel/media, and videos.
- Data arrays:
  - `RD_PROJECTS`
  - `DEVREL_OUTREACH`
  - `VIDEO_LECTURES`

Edit here for:
- Case studies, posts, tutorials, lectures, platform badges.

### Contact

File: [[components/sections/contact.tsx]]

Purpose:
- Contact details.
- Social links.
- Client-side simulated form submission.

Important:
- The form does not send to an API. It only simulates loading, sets `sent`, and resets the form.

Edit here for:
- Email, location, social links, form behavior, real API integration.

### Footer

File: [[components/sections/footer.tsx]]

Purpose:
- Copyright line.
- Footer social links.

Edit here for:
- Footer links and branding.

## Shared Components

- [[components/animated-section.tsx]]: IntersectionObserver reveal wrapper. Used by most sections.
- [[components/cursor.tsx]]: custom cursor and back-to-top button.
- [[components/typewriter.tsx]]: rotating typewriter text.
- [[components/stat-counter.tsx]]: animated numeric counters.
- [[components/tech-particles.tsx]]: available visual component, not currently part of the main render flow unless imported elsewhere.
- [[components/theme-provider.tsx]]: theme provider wrapper available for theme support.

## Hooks

- [[hooks/use-mobile.tsx]]: viewport breakpoint hook using `window.matchMedia`.
- [[hooks/use-toast.ts]]: toast state/helper hook.
- [[components/ui/use-mobile.tsx]]: duplicate-style mobile hook under UI primitives.
- [[components/ui/use-toast.ts]]: duplicate-style toast hook under UI primitives.

Agent note:
- Check both top-level hooks and UI hooks before changing shared behavior. Avoid modifying one duplicate while leaving the other inconsistent unless the call sites are known.

## Styling System

Primary file: [[app/globals.css]]

Key areas:
- CSS variables under `:root` define color tokens, fonts, sizing, nav dimensions, and shadows.
- Base reset and body behavior.
- Scroll reveal classes used by [[components/animated-section.tsx]].
- Hero animation and mesh background classes.
- Buttons: `.btn-primary`, `.btn-outline`.
- Cards: `.card`.
- Skill layout: `.bento-grid`, `.bento-wide`.
- Project filters: `.filter-tab`.
- Timeline: `.timeline-line`, `.timeline-node`.
- Form fields: `.form-field`.
- Shared wrappers: `.max-container`, `.section-heading`, `.tag-pill`.
- Navigation/mobile dock classes.
- Project screenshot preview classes.

Secondary file: [[styles/globals.css]]

Note:
- [[styles/globals.css]] appears to be a starter/global stylesheet but is not imported by [[app/layout.tsx]]. The active stylesheet is [[app/globals.css]].

## Assets

All static assets live in [[public]] and are referenced with root-relative paths, for example `/profilepic.jpg`.

Current portfolio assets:
- [[public/profilepic.jpg]]
- [[public/yieldsense-preview.png]]
- [[public/dentavyro-preview.jpg]]
- [[public/taskwiser-preview.png]]
- [[public/NexiClaw.png]]
- [[public/foodfusion.png]]
- [[public/EVM-Wallet-preview.png]]
- [[public/VideoEditingAutomation-preview.png]]
- [[public/MeetingArchival-preview.png]]

Placeholder assets:
- [[public/placeholder.svg]]
- [[public/placeholder.jpg]]
- [[public/placeholder-user.jpg]]
- [[public/placeholder-logo.svg]]
- [[public/placeholder-logo.png]]

Guidelines:
- Keep screenshot previews high resolution enough for card display.
- Avoid forced `height` plus `object-fit: cover` for UI screenshots where text must remain visible.
- For project previews, update both `PROJECTS[].screenshot` in [[components/sections/projects.tsx]] and the matching file in [[public]].

## Configuration

### TypeScript

File: [[tsconfig.json]]

Important settings:
- `strict: true`
- path alias: `@/*` maps to project root
- `noEmit: true`
- `moduleResolution: bundler`

### Tailwind

File: [[tailwind.config.ts]]

Important settings:
- content scans `app`, `components`, `pages`, and root files.
- theme extends shadcn-compatible CSS variable colors.
- uses `tailwindcss-animate`.

### Next

File: [[next.config.mjs]]

Current behavior:
- ESLint ignored during build.
- TypeScript build errors ignored during build.
- Next Image optimization disabled.

Agent note:
- Do not assume `npm run build` catches type errors in this project. Run `npx tsc --noEmit` when validating TypeScript.

## Architecture Notes

- This is a client-heavy static portfolio. Most files begin with `"use client"` because they use browser APIs, animations, hooks, or interactive state.
- There is no backend API route in the current app.
- Contact form submission is local UI state only.
- Navigation depends on section `id` attributes matching the `LINKS` array in [[components/sections/navbar.tsx]].
- Content is mostly colocated with presentation inside section modules. If the content grows, extract arrays like `PROJECTS`, `SKILLS`, and `PRESS_ITEMS` into a dedicated `data` directory.
- Many components use inline styles. Existing project style favors this pattern plus global CSS tokens. Prefer moving repeated or responsive behavior into [[app/globals.css]].

## Common Agent Tasks

### Add A New Project

1. Add the preview image to [[public]].
2. Add a new object to `PROJECTS` in [[components/sections/projects.tsx]].
3. Pick a valid category: `frontend`, `backend`, `fullstack`, or `automation`.
4. Add `live`, `code`, and `spotlight` only when available.
5. Run `npx tsc --noEmit`.

### Add A New Section

1. Create a file in [[components/sections]].
2. Export the section component.
3. Import and render it in [[app/page.tsx]].
4. Add an entry to `LINKS` in [[components/sections/navbar.tsx]].
5. Ensure the section root has a matching `id`.
6. Add relevant styles to [[app/globals.css]] if reused or responsive.

### Change Branding Or Visual Theme

1. Start with CSS variables in [[app/globals.css]].
2. Update button/card/tag classes in the same file.
3. Check section-specific inline styles for hardcoded colors.
4. Verify desktop and mobile nav visibility.

### Make Contact Form Real

1. Decide the backend target or email service.
2. Add server/API handling instead of only changing UI state in [[components/sections/contact.tsx]].
3. Validate inputs and handle loading, success, and error states.
4. Do not hardcode secrets in client components.

## Quality Checklist For Agents

- Keep section IDs and navbar links synchronized.
- Preserve accessibility labels on icon-only links and buttons.
- Keep external links using `target="_blank"` with `rel="noopener noreferrer"`.
- Keep text readable on mobile and desktop.
- Run `npx tsc --noEmit` after TypeScript/React changes.
- Run `npm run build` when possible, but remember the config ignores TypeScript and ESLint errors.
- Avoid unrelated refactors when editing portfolio content.
- Do not remove existing user assets from [[public]] unless explicitly requested.

## Known Issues And Follow-Ups

- Several comments and strings show mojibake characters from encoding issues. Clean them only as a focused copy/encoding task.
- [[styles/globals.css]] is likely unused with the App Router layout importing [[app/globals.css]].
- Build config ignores TypeScript and ESLint errors. This is convenient but weakens production safeguards.
- Contact form is simulated and does not deliver messages.
- Some section cards still use slight CSS rotation. This is part of the current zine/brutalist visual language but can soften text on some displays.
