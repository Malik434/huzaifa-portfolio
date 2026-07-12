# Assets

Related notes: [[Architecture Map]], [[Sections]], [[Styling System]], [[Agent Workflows]]

## Directory

Static assets live in [public](../../public).

They are referenced from components with root-relative paths such as `/profilepic.jpg`.

## Portfolio Images

- [profilepic.jpg](../../public/profilepic.jpg)
- [yieldsense-preview.png](../../public/yieldsense-preview.png)
- [dentavyro-preview.jpg](../../public/dentavyro-preview.jpg)
- [taskwiser-preview.png](../../public/taskwiser-preview.png)
- [NexiClaw.png](../../public/NexiClaw.png)
- [foodfusion.png](../../public/foodfusion.png)
- [EVM-Wallet-preview.png](../../public/EVM-Wallet-preview.png)
- [VideoEditingAutomation-preview.png](../../public/VideoEditingAutomation-preview.png)
- [MeetingArchival-preview.png](../../public/MeetingArchival-preview.png)

## Placeholder Images

- [placeholder.svg](../../public/placeholder.svg)
- [placeholder.jpg](../../public/placeholder.jpg)
- [placeholder-user.jpg](../../public/placeholder-user.jpg)
- [placeholder-logo.svg](../../public/placeholder-logo.svg)
- [placeholder-logo.png](../../public/placeholder-logo.png)

## Affiliation Logos

Local logo marks live in [public/affiliations](../../public/affiliations) and are rendered by [components/sections/affiliations.tsx](../../components/sections/affiliations.tsx). Use PNG first, JPG second, and SVG only when no raster logo exists.

- [singularitynet.svg](../../public/affiliations/singularitynet.svg)
- [Acurast.svg](../../public/affiliations/Acurast.svg)
- [peaq.png](../../public/affiliations/peaq.png)
- [comsats.png](../../public/affiliations/comsats.png)
- [nicl.png](../../public/affiliations/nicl.png)
- [n8n.svg](../../public/affiliations/n8n.svg)
- [cardano.svg](../../public/affiliations/cardano.svg)
- [base.svg](../../public/affiliations/base.svg)

## Technical Arsenal Logos

Technology logos live in [public/tech](../../public/tech) and are rendered by [components/sections/skills.tsx](../../components/sections/skills.tsx).

- [python.svg](../../public/tech/python.svg)
- [javascript.svg](../../public/tech/javascript.svg)
- [nodedotjs.svg](../../public/tech/nodedotjs.svg)
- [mysql.svg](../../public/tech/mysql.svg)
- [c.svg](../../public/tech/c.svg)
- [openjdk.svg](../../public/tech/openjdk.svg)
- [react.svg](../../public/tech/react.svg)
- [nextdotjs.svg](../../public/tech/nextdotjs.svg)
- [html5.svg](../../public/tech/html5.svg)
- [css3.svg](../../public/tech/css3.svg)
- [bootstrap.svg](../../public/tech/bootstrap.svg)
- [php.svg](../../public/tech/php.svg)
- [firebase.svg](../../public/tech/firebase.svg)
- [googlecloud.svg](../../public/tech/googlecloud.svg)
- [solidity.svg](../../public/tech/solidity.svg)
- [metamask.svg](../../public/tech/metamask.svg)
- [ipfs.svg](../../public/tech/ipfs.svg)
- [n8n.svg](../../public/tech/n8n.svg)
- [flask.svg](../../public/tech/flask.svg)
- [scikitlearn.svg](../../public/tech/scikitlearn.svg)
- [ffmpeg.svg](../../public/tech/ffmpeg.svg)
- [zoom.svg](../../public/tech/zoom.svg)
- [youtube.svg](../../public/tech/youtube.svg)
- [git.svg](../../public/tech/git.svg)
- [github.svg](../../public/tech/github.svg)
- [docker.svg](../../public/tech/docker.svg)
- [gitlab.svg](../../public/tech/gitlab.svg)

## Project Preview Workflow

1. Add the image to [public](../../public).
2. Reference it in `PROJECTS[].screenshot` inside [components/sections/projects.tsx](../../components/sections/projects.tsx).
3. Keep preview styles in [app/globals.css](../../app/globals.css) from forcing unwanted crops or whitespace.
4. Run `npx tsc --noEmit`.
