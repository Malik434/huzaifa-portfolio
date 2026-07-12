# Styling System

Related notes: [[Architecture Map]], [[App Shell]], [[Sections]], [[Assets]]

## Primary Stylesheet

Active stylesheet: [app/globals.css](../../app/globals.css)

[styles/globals.css](../../styles/globals.css) appears to be a starter stylesheet and is not imported by [app/layout.tsx](../../app/layout.tsx).

## Design Tokens

The `:root` block in [app/globals.css](../../app/globals.css) defines:

- background, text, accent, and border colors
- font variables
- radii and shadows
- nav sizing variables
- shadcn-compatible CSS variables

## Reusable Classes

- `.max-container`
- `.section-heading`
- `.section-subheading`
- `.accent-divider`
- `.card`
- `.btn-primary`
- `.btn-outline`
- `.tag-pill`
- `.filter-tab`
- `.form-field`
- `.timeline-line`
- `.timeline-node`

## Animation Classes

Used by [components/animated-section.tsx](../../components/animated-section.tsx):

- `.scroll-reveal`
- `.scroll-reveal-left`
- `.scroll-reveal-right`
- `.is-visible`

## Navigation Classes

Used by [components/sections/navbar.tsx](../../components/sections/navbar.tsx):

- `.brutalist-sidebar`
- `.mobile-brutalist-dock`
- `.mobile-nav-toggle`
- `.mobile-nav-links`
- `.dock-tooltip`
- `.ticker-container`
- `.ticker-text`

## Project Preview Classes

Used by [components/sections/projects.tsx](../../components/sections/projects.tsx):

- `.project-preview-shell`
- `.project-preview-shell-featured`
- `.project-screenshot-frame`
- `.project-screenshot-image`

## Tailwind

Config: [tailwind.config.ts](../../tailwind.config.ts)

Tailwind scans app, components, pages, and root files. The theme extends shadcn-compatible CSS variable colors and uses `tailwindcss-animate`.
