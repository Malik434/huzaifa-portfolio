"use client";
import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

const PROJECTS = [
  {
    title: "YieldSense — Autonomous DeFi Yield & TEE Trading Protocol",
    desc: "Designed and deployed a trust-minimized yield compounding and grid-trading engine on Base Mainnet, running inside hardware-isolated Acurast TEE enclaves. Implemented native P-256 attestation verification (RIP-7212) in Solidity, EIP-712 intent signing for MEV protection, and a resilient RPC failover transport — featured in the Acurast Builder Spotlight.",
    tags: ["Solidity","Acurast TEE","Base Mainnet","EIP-712","Viem/Wagmi","Next.js","Gnosis Safe"],
    category: "fullstack",
    live: "https://yieldsense.huzaifamalik.tech",
    github: "https://github.com/Malik434/yieldsense",
    featured: true,
    spotlight: "https://acurast.com/blog/builder-spotlight/yieldsense/",
  },
  {
    title: "WEB3 Project Management Tool (TaskWiser)",
    desc: "Comprehensive Web3 PM platform with AI integrations, real-time DB sync, EVM wallet integration, and IPFS storage support.",
    tags: ["Web3","AI Integration","Firebase","EVM","React"],
    category: "fullstack",
    live: "https://taskwiser.netlify.app",
    github: "https://github.com/Malik434",
    featured: false,
    spotlight: "",
  },
  {
    title: "AI-Powered Kanban Board",
    desc: "Responsive Kanban with AI-powered task time estimation, pricing prediction, and productivity analytics.",
    tags: ["React.js","AI Integration","Real-time Sync"],
    category: "frontend",
    live: "",
    github: "https://github.com/Malik434",
    featured: false,
    spotlight: "",
  },
  {
    title: "EVM Wallet Manager",
    desc: "EVM-based wallet manager for onchain payments, balance checking, and secure token transfers via Infura API.",
    tags: ["Blockchain","EVM","Infura API","Web3"],
    category: "backend",
    live: "",
    github: "https://github.com/Malik434",
    featured: false,
    spotlight: "",
  },
  {
    title: "Portfolio Management System",
    desc: "PHP + MySQL + XML CRUD app with structured database connectivity for efficient portfolio management.",
    tags: ["PHP","MySQL","XML","CRUD"],
    category: "fullstack",
    live: "",
    github: "https://github.com/Malik434",
    featured: false,
    spotlight: "",
  },
  {
    title: "Airbnb + PakWheels Clone",
    desc: "Responsive UI clone demonstrating advanced frontend design, layout structuring, and cross-device responsiveness.",
    tags: ["HTML5","CSS3","JavaScript","Bootstrap"],
    category: "frontend",
    live: "",
    github: "https://github.com/Malik434",
    featured: false,
    spotlight: "",
  },
];

const FILTERS = ["All","Frontend","Backend","Full Stack"] as const;
type Filter = typeof FILTERS[number];

const CAT_MAP: Record<Filter, string> = { "All": "", "Frontend": "frontend", "Backend": "backend", "Full Stack": "fullstack" };

export function Projects() {
  const [active, setActive] = useState<Filter>("All");
  const filtered = active === "All" ? PROJECTS : PROJECTS.filter(p => p.category === CAT_MAP[active]);

  return (
    <section id="projects" style={{ padding: "6rem 0", background: "var(--color-bg-secondary)" }}>
      <div className="max-container">
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2 className="section-heading gradient-text">Featured Projects</h2>
            <div className="accent-divider" />
          </div>
          {/* Filter tabs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center", marginBottom: "3rem" }}>
            {FILTERS.map((f) => (
              <button key={f} className={`filter-tab${active === f ? " active" : ""}`} onClick={() => setActive(f)}>
                {f}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
          {filtered.map((p, i) => (
            <AnimatedSection
              key={p.title}
              delay={i * 100}
              className={p.featured ? "lg:col-span-2" : ""}
            >
              <div
                className="card"
                style={{
                  padding: "1.75rem", height: "100%", display: "flex", flexDirection: "column",
                  position: "relative", overflow: "hidden",
                }}
              >
                {p.featured && (
                  <span style={{
                    position: "absolute", top: "1rem", right: "1rem",
                    background: "var(--color-accent-glow)", border: "1px solid var(--color-accent-primary)",
                    color: "var(--color-accent-primary)", fontSize: "0.7rem", fontWeight: 700,
                    padding: "0.2rem 0.6rem", borderRadius: "999px", letterSpacing: "0.08em",
                  }}>FEATURED</span>
                )}
                <h3 style={{ fontWeight: 700, color: "var(--color-text-primary)", fontSize: "1.05rem", marginBottom: "0.75rem", paddingRight: p.featured ? "5rem" : 0 }}>
                  {p.title}
                </h3>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem", lineHeight: 1.7, flex: 1, marginBottom: "1.25rem" }}>
                  {p.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
                  {p.tags.map((t) => <span key={t} className="tag-pill" style={{ fontSize: "0.72rem" }}>{t}</span>)}
                </div>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", flexWrap: "wrap" }}>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub repo" style={{ textDecoration: "none" }}>
                    <Github size={16} />
                  </a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Live demo" style={{ textDecoration: "none" }}>
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {p.spotlight && (
                    <a
                      href={p.spotlight} target="_blank" rel="noopener noreferrer"
                      style={{
                        textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.35rem",
                        padding: "0.3rem 0.75rem", borderRadius: "999px", fontSize: "0.72rem", fontWeight: 600,
                        background: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.35)",
                        color: "var(--color-accent-secondary)", transition: "all var(--transition-fast)",
                      }}
                      aria-label="Acurast Builder Spotlight"
                    >
                      ✦ Builder Spotlight
                    </a>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
