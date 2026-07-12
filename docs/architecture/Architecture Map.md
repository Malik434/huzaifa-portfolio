# Architecture Map

This note is the Obsidian graph entry point for the portfolio codebase.

## Core Notes

- [[App Shell]]
- [[Sections]]
- [[Styling System]]
- [[Assets]]
- [[Agent Workflows]]

## Code Entry Points

- [app/page.tsx](../../app/page.tsx) assembles the single-page portfolio.
- [app/layout.tsx](../../app/layout.tsx) defines metadata, fonts, and the root HTML shell.
- [app/globals.css](../../app/globals.css) owns the active design system.
- [next.config.mjs](../../next.config.mjs) configures Next.js.
- [tailwind.config.ts](../../tailwind.config.ts) configures Tailwind and shadcn-compatible tokens.

## High-Level Flow

[[App Shell]] renders the page structure, imports [[Sections]], and uses shared interaction components such as cursor, back-to-top, reveal animations, and typewriter text.

[[Sections]] own most portfolio content. Each section usually contains its own data constants and JSX.

[[Styling System]] controls the visual language through global CSS variables, reusable classes, animations, responsive layout, and project preview styles.

[[Assets]] documents static images in `public` and how they connect to project preview data.

[[Agent Workflows]] describes safe update paths for common changes.
