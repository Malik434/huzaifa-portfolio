/**
 * app/page.tsx
 * World-class portfolio — all sections assembled.
 * Upgraded: new design system, 8 sections, animations, bento grid,
 * filterable projects, timeline, floating-label form, custom cursor.
 */
"use client";

import { Navbar }     from "@/components/sections/navbar";
import { Hero }       from "@/components/sections/hero";
import { About }      from "@/components/sections/about";
import { Affiliations } from "@/components/sections/affiliations";
import { Skills }     from "@/components/sections/skills";
import { Projects }   from "@/components/sections/projects";
import { Press }      from "@/components/sections/press";
import { Initiatives } from "@/components/sections/initiatives";
import { Experience } from "@/components/sections/experience";
import { Outreach }   from "@/components/sections/outreach";
import { Contact }    from "@/components/sections/contact";
import { Footer }     from "@/components/sections/footer";
import { BackToTop } from "@/components/cursor";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Affiliations />
        <About />
        <Skills />
        <Projects />
        <Press />
        <Initiatives />
        <Experience />
        <Outreach />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
