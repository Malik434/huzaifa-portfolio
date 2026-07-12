# App Shell

Related notes: [[Architecture Map]], [[Sections]], [[Styling System]], [[Agent Workflows]]

## Purpose

The app shell is the single-page portfolio composition layer. It wires together the global layout, metadata, navigation, sections, cursor, and back-to-top behavior.

## Important Files

- [app/page.tsx](../../app/page.tsx)
- [app/layout.tsx](../../app/layout.tsx)
- [next.config.mjs](../../next.config.mjs)
- [tsconfig.json](../../tsconfig.json)
- [components/cursor.tsx](../../components/cursor.tsx)
- [components/animated-section.tsx](../../components/animated-section.tsx)
- [components/typewriter.tsx](../../components/typewriter.tsx)
- [components/stat-counter.tsx](../../components/stat-counter.tsx)

## Render Order

1. `Navbar`
2. `Hero`
3. `Affiliations`
4. `Services`
5. `Projects`
6. `Skills`
7. `About`
8. `Press`
9. `Initiatives`
10. `Experience`
11. `Outreach`
12. `Contact`
13. `Footer`
14. `BackToTop`

## Architecture Rules

- Keep section imports and render order in [app/page.tsx](../../app/page.tsx).
- Keep metadata and fonts in [app/layout.tsx](../../app/layout.tsx).
- Keep section DOM IDs synchronized with the `LINKS` array in [components/sections/navbar.tsx](../../components/sections/navbar.tsx).
- Browser APIs require client components. Most interactive files use `"use client"`.

## Validation

Run:

```bash
npx tsc --noEmit
```

`npm run build` is useful, but [next.config.mjs](../../next.config.mjs) currently ignores build-time TypeScript and ESLint failures.
