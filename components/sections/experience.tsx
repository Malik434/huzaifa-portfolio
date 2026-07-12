"use client";
import { AnimatedSection } from "@/components/animated-section";

const ENTRIES = [
  {
    period: "Jun 2023 – Present",
    title: "Core Contributor",
    org: "SingularityNET Ambassadors Program",
    desc: "Streamlining decentralized workflows and API-based integrations using low-code tools. Managing content scheduling, campaign distributions, AI product outreach, and organizing ecosystem announcements.",
    tags: ["n8n", "Ecosystem Management", "Automation", "API Integrations", "AI Outreach"],
    link: "",
  },
  {
    period: "Oct 2024 – Dec 2025",
    title: "Ecosystem Ambassador",
    org: "peaq Network (Layer-1 Blockchain for DePIN)",
    desc: "Built a localized DePIN community in Pakistan. Simplifed peaq L1 technology, updates, and ecosystem developments by crafting engaging educational threads. Provided technical guidance and community support.",
    tags: ["peaq Network", "DePIN", "Community Growth", "Technical Education", "Web3"],
    link: "",
  },
  {
    period: "Jun 2022 – Jun 2023",
    title: "Bounty Board Manager",
    org: "Catalyst Swarm (Cardano Protocol)",
    desc: "Managed the community bounty board using Dework for Cardano Catalyst Swarm. Designed actionable technical bounties, coordinated task prioritization with project leads, verified submissions, and transparently handled token rewards.",
    tags: ["Dework", "Task Management", "Escrow Payments", "Cardano", "Community Coordination"],
    link: "",
  },
];

export function Experience() {
  return (
    <section id="experience" style={{ padding: "6rem 0" }} className="subtle-grid-bg">
      <div className="max-container">
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 className="section-heading gradient-text">Experience</h2>
            <div className="accent-divider" />
          </div>
        </AnimatedSection>

        <div style={{ position: "relative", maxWidth: 800, margin: "0 auto" }}>
          {/* Glowing center line */}
          <div className="timeline-line" />

          <div style={{ display: "flex", flexDirection: "column", gap: "3rem", paddingBottom: "1rem" }}>
            {ENTRIES.map((entry, i) => {
              const isLeft = i % 2 === 0;
              return (
                <AnimatedSection
                  key={entry.title}
                  direction={isLeft ? "left" : "right"}
                  delay={i * 120}
                >
                  <div className="hidden md:grid" style={{
                    gridTemplateColumns: "1fr 40px 1fr",
                    gap: "1rem", alignItems: "start",
                  }}>
                    <div style={{ ...(isLeft ? {} : { visibility: "hidden" }) }}>
                      {isLeft && <EntryCard entry={entry} />}
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", paddingTop: "1.2rem" }}>
                      <div className="timeline-node" />
                    </div>
                    <div style={{ ...(!isLeft ? {} : { visibility: "hidden" }) }}>
                      {!isLeft && <EntryCard entry={entry} />}
                    </div>
                  </div>
                  {/* Mobile: stacked */}
                  <div className="flex md:hidden" style={{ gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "1.2rem", flexShrink: 0 }}>
                      <div className="timeline-node" />
                    </div>
                    <div style={{ flex: 1 }}><EntryCard entry={entry} /></div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function EntryCard({ entry }: { entry: typeof ENTRIES[0] }) {
  return (
    <div
      className="card"
      style={{
        padding: "1.5rem",
      }}
    >
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: 700, color: "var(--color-accent-primary)", marginBottom: "0.4rem", letterSpacing: "0.08em" }}>
        // {entry.period}
      </p>
      <h3 className="glitch-hover" style={{ fontWeight: 800, color: "var(--color-text-primary)", fontSize: "1.05rem", marginBottom: "0.25rem" }}>
        {entry.title}
      </h3>
      <p style={{ color: "var(--color-text-primary)", fontSize: "0.85rem", marginBottom: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
        {entry.org}
      </p>
      <p style={{ color: "var(--color-text-secondary)", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1rem" }}>
        {entry.desc}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: entry.link ? "0.75rem" : 0 }}>
        {entry.tags.map((t) => <span key={t} className="tag-pill" style={{ fontSize: "0.7rem" }}>{t}</span>)}
      </div>
      {entry.link && (
        <a
          href={entry.link} target="_blank" rel="noopener noreferrer"
          className="btn-primary"
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.35rem",
            fontSize: "0.72rem", fontWeight: 700,
            textDecoration: "none", padding: "0.4rem 0.8rem", borderRadius: "0px",
            minHeight: "auto",
            background: "var(--color-accent-secondary)",
            color: "#000000",
          }}
        >
          ✦ View Spotlight
        </a>
      )}
    </div>
  );
}
