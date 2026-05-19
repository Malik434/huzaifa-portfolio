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
import { Skills }     from "@/components/sections/skills";
import { Projects }   from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Outreach }   from "@/components/sections/outreach";
import { Contact }    from "@/components/sections/contact";
import { Footer }     from "@/components/sections/footer";
import { CustomCursor, BackToTop } from "@/components/cursor";

export default function Portfolio() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Outreach />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
