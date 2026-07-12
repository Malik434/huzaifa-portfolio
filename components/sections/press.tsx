"use client";

import { AnimatedSection } from "@/components/animated-section";
import { ExternalLink, Linkedin, Newspaper, Twitter } from "lucide-react";

const PRESS_ITEMS = [
  {
    title: "Acurast Builder Spotlight: YieldSense",
    source: "Acurast Blog",
    date: "May 15, 2026",
    link: "https://acurast.com/blog/builder-spotlight/yieldsense/?utm_source=x&utm_medium=social&utm_campaign=builderspotlight&utm_content=blog",
    icon: Newspaper,
    badge: "Official Coverage",
    desc: "Spotlight on Huzaifa's work removing single points of failure in DeFi automation and bringing hardware-backed off-chain logic to the Base network.",
  },
  {
    title: "Acurast X Builder Spotlight",
    source: "X / Twitter",
    date: "May 15, 2026",
    link: "https://x.com/Acurast/status/2055333666201510181",
    icon: Twitter,
    badge: "Social Feature",
    desc: "Acurast's public announcement highlighting YieldSense as a live builder project using trusted execution for autonomous DeFi infrastructure.",
  },
  {
    title: "NICL Cohort 4 Startup Incubation Acceptance",
    source: "LinkedIn",
    date: "July 2026",
    link: "https://www.linkedin.com/posts/malikhuzaifa434_okay-this-one-actually-feels-good-to-share-share-7479759829821984768-Z-uG/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACz_uC0BCssX-rAoidZ7jdvmMarfJQ9yTps",
    icon: Linkedin,
    badge: "Startup Incubation",
    desc: "Founder update announcing acceptance into NICL Cohort 4, adding structured incubation support around Huzaifa's startup and product-building track.",
  },
  {
    title: "YieldSense Launch Update",
    source: "LinkedIn",
    date: "May 2026",
    link: "https://www.linkedin.com/posts/malikhuzaifa434_i-am-excited-to-share-that-yieldsense-has-share-7461106243076505600-DEaa/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACz_uC0BCssX-rAoidZ7jdvmMarfJQ9yTps",
    icon: Linkedin,
    badge: "Founder Update",
    desc: "Personal launch post sharing the active YieldSense deployment and the architecture behind hardware-verified DeFi automation.",
  },
  {
    title: "Acurast LinkedIn Spotlight",
    source: "LinkedIn",
    date: "May 2026",
    link: "https://www.linkedin.com/posts/builder-spotlight-yieldsense-by-huzaifa-share-7461099348463067137-vqCA/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACz_uC0BCssX-rAoidZ7jdvmMarfJQ9yTps",
    icon: Linkedin,
    badge: "Ecosystem Signal",
    desc: "Official ecosystem post amplifying the Builder Spotlight and YieldSense's TEE-backed automation approach.",
  },
];

export function Press() {
  return (
    <section id="press" style={{ padding: "6rem 0" }} className="subtle-grid-bg">
      <div className="max-container">
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 className="section-heading gradient-text">Featured In</h2>
            <p className="section-subheading" style={{ marginTop: "1rem", fontFamily: "var(--font-mono)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Official coverage for YieldSense and hardware-backed DeFi automation
            </p>
            <div className="accent-divider" />
          </div>
        </AnimatedSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
          {PRESS_ITEMS.map((item, index) => {
            const Icon = item.icon;

            return (
              <AnimatedSection key={item.title} delay={index * 90}>
                <article className="card" style={{ padding: "1.5rem", height: "100%", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "0.75rem", alignItems: "center" }}>
                    <span className="tag-pill tag-pill-green" style={{ fontSize: "0.65rem" }}>
                      {item.badge}
                    </span>
                    <span style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", fontSize: "0.68rem", fontWeight: 700 }}>
                      {item.date}
                    </span>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent-primary)", fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.35rem" }}>
                      {item.source}
                    </p>
                    <h3 className="glitch-hover" style={{ fontSize: "1.05rem", lineHeight: 1.2, fontWeight: 900, textTransform: "uppercase", marginBottom: "0.55rem" }}>
                      {item.title}
                    </h3>
                    <p style={{ color: "var(--color-text-secondary)", fontSize: "0.85rem", lineHeight: 1.55 }}>
                      {item.desc}
                    </p>
                  </div>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ marginTop: "auto", width: "fit-content", textDecoration: "none", padding: "0.4rem 0.75rem", fontSize: "0.72rem", minHeight: "auto" }}>
                    <Icon size={14} />
                    Open
                    <ExternalLink size={11} />
                  </a>
                </article>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
