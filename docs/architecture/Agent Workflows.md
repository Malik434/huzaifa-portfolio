# Agent Workflows

Related notes: [[Architecture Map]], [[App Shell]], [[Sections]], [[Styling System]], [[Assets]]

## Add A Project

1. Add the preview image to [public](../../public).
2. Add the project object to `PROJECTS` in [components/sections/projects.tsx](../../components/sections/projects.tsx).
3. Use one valid category: `frontend`, `backend`, `fullstack`, or `automation`.
4. Add `live`, `code`, and `spotlight` only when available.
5. Run `npx tsc --noEmit`.

## Add A Section

1. Create a new section file in [components/sections](../../components/sections).
2. Export the section component.
3. Import and render it in [app/page.tsx](../../app/page.tsx).
4. Add the section link to `LINKS` in [components/sections/navbar.tsx](../../components/sections/navbar.tsx).
5. Ensure the section root has the matching `id`.
6. Add shared responsive styles to [app/globals.css](../../app/globals.css).

## Change Theme Or Layout

1. Start with tokens in [app/globals.css](../../app/globals.css).
2. Update reusable classes before editing many inline styles.
3. Check desktop and mobile navigation.
4. Check project screenshot previews after layout changes.

## Make Contact Form Real

1. Replace the simulated submit logic in [components/sections/contact.tsx](../../components/sections/contact.tsx).
2. Add an API/service integration with input validation.
3. Keep secrets out of client components.
4. Add success and error states.

## Validation Checklist

- Run `npx tsc --noEmit`.
- Keep navbar IDs synchronized with section IDs.
- Preserve `aria-label` on icon-only controls.
- Keep external links as `target="_blank"` with `rel="noopener noreferrer"`.
- Do not remove public assets unless explicitly requested.
- Avoid unrelated refactors.
