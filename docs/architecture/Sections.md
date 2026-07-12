# Sections

Related notes: [[Architecture Map]], [[App Shell]], [[Styling System]], [[Assets]], [[Agent Workflows]]

## Section Directory

Code directory: [components/sections](../../components/sections)

## Section Index

- [navbar.tsx](../../components/sections/navbar.tsx): fixed ticker, desktop sidebar navigation, mobile dock, active section tracking.
- [hero.tsx](../../components/sections/hero.tsx): first viewport, profile image, intro copy, typewriter roles.
- [about.tsx](../../components/sections/about.tsx): bio, education, languages, certifications, counters.
- [affiliations.tsx](../../components/sections/affiliations.tsx): associated company, ecosystem, institution, and incubator logo grid.
- [skills.tsx](../../components/sections/skills.tsx): logo-led Technical Arsenal groups backed by [public/tech](../../public/tech).
- [projects.tsx](../../components/sections/projects.tsx): `PROJECTS`, filters, links, screenshot previews.
- [press.tsx](../../components/sections/press.tsx): `PRESS_ITEMS` coverage/social proof.
- [initiatives.tsx](../../components/sections/initiatives.tsx): `INITIATIVES` current work and roadmap.
- [experience.tsx](../../components/sections/experience.tsx): `ENTRIES` timeline and `EntryCard`.
- [outreach.tsx](../../components/sections/outreach.tsx): R&D, devrel, and video content grids.
- [contact.tsx](../../components/sections/contact.tsx): contact details, social links, simulated contact form.
- [footer.tsx](../../components/sections/footer.tsx): footer links and copyright.

## Content Model

Most content is colocated with its component as local constants. This keeps editing simple, but large future changes may benefit from extracting data to a dedicated `data` directory.

## Navigation Contract

Each scrollable section must have an `id` matching a link in [navbar.tsx](../../components/sections/navbar.tsx).

Current section IDs:

- `about`
- `affiliations`
- `skills`
- `projects`
- `press`
- `initiatives`
- `experience`
- `outreach`
- `contact`

## Project Preview Contract

Project preview data lives in [projects.tsx](../../components/sections/projects.tsx). Images live in [[Assets]] under `public`.

Preview styles live in [app/globals.css](../../app/globals.css):

- `.project-preview-shell`
- `.project-preview-shell-featured`
- `.project-screenshot-frame`
- `.project-screenshot-image`

Keep preview borders aligned to actual image dimensions unless the design explicitly requires cropping.
