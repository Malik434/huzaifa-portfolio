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
    title: "Task Wiser — Web3 AI Project Management Platform",
    desc: "Engineered a high-performance project management dApp featuring real-time Firebase syncing, a Python (Flask) Machine Learning microservice for task duration estimation, and Solidity escrow smart contracts for secure task completion payouts.",
    tags: ["React","Solidity","Firebase","Flask","Scikit-Learn","Ethers.js","MetaMask"],
    category: "fullstack",
    live: "https://taskwiser.huzaifamalik.tech",
    github: "https://github.com/Malik434",
    featured: true,
    spotlight: "",
  },
  {
    title: "EVM Mobile Wallet Manager",
    desc: "React Native mobile-first wallet manager enabling secure private key handling, transaction signing, and real-time wallet balance tracking by integrating Infura APIs with a modular provider pattern for EVM testnets and mainnets.",
    tags: ["React Native","Blockchain","EVM","Infura API","Mobile Security"],
    category: "frontend",
    live: "",
    github: "https://github.com/Malik434/Semester-Project-MAD.-main",
    featured: false,
    spotlight: "",
  },
  {
    title: "Portfolio Performance Analytics Engine",
    desc: "Developed a professional crypto portfolio tracker using PHP and MySQL. Compares purchase price basis with real-time market data to calculate ROI and performance metrics, featuring an XML-based data CRUD interface.",
    tags: ["PHP","MySQL","XML","CRUD","Portfolio Analytics"],
    category: "fullstack",
    live: "",
    github: "https://github.com/Malik434",
    featured: false,
    spotlight: "",
  },
  {
    title: "Automated Town Hall Editor & Scheduler",
    desc: "Built a robust n8n workflow that automatically fetches raw weekly meeting recordings, processes/trims the videos using programmatic FFmpeg scripts, and schedules distribution across social channels, cutting work hours by 90%.",
    tags: ["n8n","FFmpeg","YouTube API","Workflow Automation"],
    category: "automation",
    live: "",
    github: "https://github.com/Malik434",
    featured: false,
    spotlight: "",
  },
  {
    title: "Automated Meeting Archival System",
    desc: "Designed an automated corporate archival pipeline utilizing n8n that captures Zoom recordings, transcripts, and metadata upon meeting completion, auto-organizing files into a structured Google Drive hierarchy.",
    tags: ["n8n","Zoom API","Google Drive API","Cloud Archiving"],
    category: "automation",
    live: "",
    github: "https://github.com/Malik434",
    featured: false,
    spotlight: "",
  },
];

const FILTERS = ["All","Frontend","Backend","Full Stack","Automation"] as const;
type Filter = typeof FILTERS[number];

const CAT_MAP: Record<Filter, string> = { 
  "All": "", 
  "Frontend": "frontend", 
  "Backend": "backend", 
  "Full Stack": "fullstack",
  "Automation": "automation"
};

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
