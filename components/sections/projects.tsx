"use client";
import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

const PROJECTS = [
  {
    title: "YieldSense, An Autonomous DeFi Yield & TEE Trading Protocol",
    desc: "Designed and deployed a trust-minimized yield compounding and grid-trading engine on Base Mainnet, running inside hardware-isolated Acurast TEE enclaves. Implemented native P-256 attestation verification (RIP-7212) in Solidity, EIP-712 intent signing for MEV protection, and a resilient RPC failover transport — featured in the Acurast Builder Spotlight.",
    tags: ["Solidity", "Acurast TEE", "Base Mainnet", "EIP-712", "Viem/Wagmi", "Next.js", "Gnosis Safe"],
    category: "fullstack",
    live: "https://yieldsense.huzaifamalik.tech",
    github: "https://github.com/Malik434/yieldsense",
    featured: true,
    spotlight: "https://acurast.com/blog/builder-spotlight/yieldsense/",
  },
  {
    title: "Task Wiser, A Web3 AI Project Management Platform",
    desc: "Engineered a high-performance project management dApp featuring real-time Firebase syncing, a Python (Flask) Machine Learning microservice for task duration estimation, and Solidity escrow smart contracts for secure task completion payouts.",
    tags: ["React", "Solidity", "Firebase", "Flask", "Scikit-Learn", "Ethers.js", "MetaMask"],
    category: "fullstack",
    live: "https://taskwiser.huzaifamalik.tech",
    github: "https://github.com/Malik434",
    featured: true,
    spotlight: "",
  },
  {
    title: "EVM Mobile Wallet Manager",
    desc: "React Native mobile-first wallet manager enabling secure private key handling, transaction signing, and real-time wallet balance tracking by integrating Infura APIs with a modular provider pattern for EVM testnets and mainnets.",
    tags: ["React Native", "Blockchain", "EVM", "Infura API", "Mobile Security"],
    category: "frontend",
    live: "",
    github: "https://github.com/Malik434/Semester-Project-MAD.-main",
    featured: false,
    spotlight: "",
  },
  {
    title: "Portfolio Performance Analytics Engine",
    desc: "Developed a professional crypto portfolio tracker using PHP and MySQL. Compares purchase price basis with real-time market data to calculate ROI and performance metrics, featuring an XML-based data CRUD interface and a custom SQL database schema.",
    tags: ["PHP", "MySQL", "XML", "CRUD", "SQL Database", "Portfolio Analytics"],
    category: "backend",
    live: "",
    github: "https://github.com/Malik434",
    featured: false,
    spotlight: "",
  },
  {
    title: "Predictive Task Inference & NLP Microservice",
    desc: "Engineered a high-throughput Python (Flask) backend REST API for predictive task allocation. Implemented Scikit-Learn regression models to forecast project duration/cost metrics with 85%+ accuracy, and utilized NLTK-based Natural Language Processing to parse task descriptions and auto-recommend developers based on historical skill vectors.",
    tags: ["Python", "Flask", "Scikit-Learn", "NLP", "RESTful API", "Machine Learning"],
    category: "backend",
    live: "",
    github: "https://github.com/Malik434",
    featured: false,
    spotlight: "",
  },
  {
    title: "Automated Town Hall Editor & Scheduler",
    desc: "Built a robust n8n workflow that automatically fetches raw weekly meeting recordings, processes/trims the videos using programmatic FFmpeg scripts, and schedules distribution across social channels, cutting work hours by 90%.",
    tags: ["n8n", "FFmpeg", "YouTube API", "Workflow Automation"],
    category: "automation",
    live: "",
    github: "https://github.com/Malik434",
    featured: false,
    spotlight: "",
  },
  {
    title: "Automated Meeting Archival System",
    desc: "Designed an automated corporate archival pipeline utilizing n8n that captures Zoom recordings, transcripts, and metadata upon meeting completion, auto-organizing files into a structured Google Drive hierarchy.",
    tags: ["n8n", "Zoom API", "Google Drive API", "Cloud Archiving"],
    category: "automation",
    live: "",
    github: "https://github.com/Malik434",
    featured: false,
    spotlight: "",
  },
];

const FILTERS = ["All", "Frontend", "Backend", "Full Stack", "Automation"] as const;
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

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
          gap: "1.25rem",
          gridAutoFlow: "dense" // Dynamically packs smaller cards into holes next to featured cards
        }}>
          {filtered.map((p, i) => (
            <AnimatedSection
              key={p.title}
              delay={i * 100}
              className={p.featured ? "lg:col-span-2" : ""}
            >
              <div
                className="card"
                style={{
                  padding: "1.75rem",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                  transform: `rotate(${i % 2 === 0 ? 0.6 : -0.7}deg)`,
                }}
              >
                {p.featured && (
                  <span style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    background: "var(--color-accent-secondary)", /* Neon Yellow print */
                    border: "2px solid var(--color-border)",
                    color: "#000000",
                    fontSize: "0.68rem",
                    fontWeight: 800,
                    padding: "0.25rem 0.6rem",
                    borderRadius: "0px",
                    letterSpacing: "0.08em",
                    fontFamily: "var(--font-mono)",
                    boxShadow: "2px 2px 0px var(--color-border)",
                    transform: "rotate(3deg)",
                  }}>FEATURED</span>
                )}
                <h3 className="glitch-hover" style={{ fontWeight: 800, color: "var(--color-text-primary)", fontSize: "1.1rem", marginBottom: "0.75rem", paddingRight: p.featured ? "5.5rem" : 0 }}>
                  {p.title}
                </h3>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem", lineHeight: 1.65, flex: 1, marginBottom: "1.25rem" }}>
                  {p.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
                  {p.tags.map((t) => <span key={t} className="tag-pill" style={{ fontSize: "0.72rem" }}>{t}</span>)}
                </div>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", flexWrap: "wrap" }}>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-outline" aria-label="GitHub repo" style={{ textDecoration: "none", padding: "0.4rem 0.8rem", fontSize: "0.75rem", minHeight: "auto" }}>
                    <Github size={14} /> &nbsp; Code
                  </a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn-primary" aria-label="Live demo" style={{ textDecoration: "none", padding: "0.4rem 0.8rem", fontSize: "0.75rem", minHeight: "auto" }}>
                      <ExternalLink size={14} /> &nbsp; Live
                    </a>
                  )}
                  {p.spotlight && (
                    <a
                      href={p.spotlight}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{
                        textDecoration: "none",
                        padding: "0.4rem 0.8rem",
                        fontSize: "0.72rem",
                        minHeight: "auto",
                        background: "var(--color-accent-secondary)",
                        color: "#000000",
                      }}
                      aria-label="Acurast Builder Spotlight"
                    >
                      ✦ Spotlight
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
