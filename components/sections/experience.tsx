"use client";
import { AnimatedSection } from "@/components/animated-section";

const ENTRIES = [
  {
    period: "2024 – 2025",
    title: "YieldSense — Acurast Builder Spotlight",
    org: "Independent / Featured by Acurast Protocol",
    desc: "Built a trust-minimized DeFi yield & grid-trading engine running in hardware-isolated Acurast TEE enclaves on Base Mainnet. Implemented P-256 attestation (RIP-7212) in Solidity, EIP-712 intent signing for MEV protection, and a resilient RPC failover transport. Project was featured in the Acurast Builder Spotlight.",
    tags: ["Solidity","Acurast TEE","EIP-712","Base Mainnet","Viem/Wagmi","Gnosis Safe"],
    link: "https://acurast.com/blog/builder-spotlight/yieldsense/",
  },
  {
    period: "Feb 2022 – Jan 2026",
    title: "BS Computer Science — Graduated",
    org: "COMSATS University Islamabad, Lahore Campus",
    desc: "Graduated with a focus on blockchain, AI integration, and full-stack development. Built production-grade projects covering Web3, AI, mobile, and database engineering. CGPA: 2.81/4.00.",
    tags: ["C","Python","Java","Algorithms","Web Dev","Databases"],
    link: "",
  },
  {
    period: "2023 – 2024",
    title: "Full-Stack & Web3 Developer",
    org: "Self-Directed / Open Source",
    desc: "Delivered multiple production-grade projects: a Web3 project management platform (TaskWiser) with EVM wallet integration & IPFS storage, an AI-powered Kanban board with task estimation, and an EVM wallet manager using Infura API.",
    tags: ["React","Next.js","Web3","Firebase","EVM","AI APIs"],
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
                    gap: "1rem", alignItems: "start", display: "grid",
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
                  <div className="md:hidden" style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
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
    <div className="card" style={{ padding: "1.5rem" }}>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--color-accent-secondary)", marginBottom: "0.4rem", letterSpacing: "0.08em" }}>
        {entry.period}
      </p>
      <h3 style={{ fontWeight: 700, color: "var(--color-text-primary)", fontSize: "1rem", marginBottom: "0.25rem" }}>
        {entry.title}
      </h3>
      <p style={{ color: "var(--color-accent-primary)", fontSize: "0.82rem", marginBottom: "0.75rem", fontWeight: 500 }}>
        {entry.org}
      </p>
      <p style={{ color: "var(--color-text-secondary)", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1rem" }}>
        {entry.desc}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: entry.link ? "0.75rem" : 0 }}>
        {entry.tags.map((t) => <span key={t} className="tag-pill" style={{ fontSize: "0.7rem" }}>{t}</span>)}
      </div>
      {entry.link && (
        <a
          href={entry.link} target="_blank" rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.35rem",
            fontSize: "0.75rem", fontWeight: 600, color: "var(--color-accent-secondary)",
            textDecoration: "none", padding: "0.3rem 0.75rem", borderRadius: "999px",
            background: "rgba(0,212,170,0.08)", border: "1px solid rgba(0,212,170,0.3)",
            transition: "all var(--transition-fast)",
          }}
        >
          ✦ View Spotlight
        </a>
      )}
    </div>
  );
}

