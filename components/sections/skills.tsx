"use client";
import React, { useState } from "react";
import { AnimatedSection } from "@/components/animated-section";
import { 
  Terminal, Code2, Database, Cpu, Globe, 
  Workflow, GitBranch, Flame, Layers, ShieldCheck, 
  FileCode2, Box, CpuIcon, Network, KeyRound
} from "lucide-react";

// Curated elite tech mapping with brand colors & SVGs
const TECH_DATA: Record<string, { icon: React.ReactNode; color: string }> = {
  // Programming Languages
  "Python": {
    color: "#3776AB",
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
        <path d="M14.25.18a5.25 5.25 0 00-4.3-.18L4.62 1.84a3 3 0 00-1.8 2.76v3.15h3V6.25c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2h-5.5A2.75 2.75 0 004 11v5.5a2.75 2.75 0 002.75 2.75h1.5v-3c0-.69.56-1.25 1.25-1.25h5.5c.69 0 1.25-.56 1.25-1.25v-4A2.75 2.75 0 0013.5 7h-1.25V5c0-.69-.56-1.25-1.25-1.25H7c-.69 0-1.25.56-1.25 1.25v.75h-3V5.5A5.25 5.25 0 018 .25h5.5c.33 0 .66.07.75.18z" />
      </svg>
    )
  },
  "JavaScript (Node.js/Express)": {
    color: "#EAA800", // Gold-tangerine for better print contrast
    icon: (
      <span style={{ fontFamily: "var(--font-mono)", fontWeight: 900, fontSize: "0.6rem", background: "#0a0a0c", color: "#ffffff", padding: "1px 3px", border: "1px solid currentColor", display: "inline-block", lineHeight: 1 }}>JS</span>
    )
  },
  "SQL": {
    color: "#00758F",
    icon: <Database size={14} />
  },
  "C": {
    color: "#659AD2",
    icon: <Code2 size={14} />
  },
  "Java (OOP)": {
    color: "#E76F00",
    icon: <Terminal size={14} />
  },
  "MATLAB": {
    color: "#D1211B",
    icon: <Cpu size={14} />
  },

  // Web Development
  "React.js": {
    color: "#00A8D8", // Enhanced brand contrast
    icon: (
      <svg viewBox="-11.5 -10.23 23 20.46" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </svg>
    )
  },
  "Next.js": {
    color: "#0a0a0c",
    icon: (
      <svg viewBox="0 0 180 180" width="14" height="14" fill="currentColor">
        <path d="M90 0a90 90 0 100 180 90 90 0 000-180zm43 134l-48-62v62H73V53h12l42 55V53h12v81z"/>
      </svg>
    )
  },
  "HTML5": {
    color: "#E34F26",
    icon: <Globe size={14} />
  },
  "CSS3": {
    color: "#1572B6",
    icon: <Layers size={14} />
  },
  "Bootstrap": {
    color: "#7952B3",
    icon: <Box size={14} />
  },
  "PHP": {
    color: "#777BB4",
    icon: <FileCode2 size={14} />
  },

  // Databases & Cloud
  "MySQL": {
    color: "#00758F",
    icon: <Database size={14} />
  },
  "Firebase (Firestore, Realtime, Auth, Storage)": {
    color: "#FFA000",
    icon: <Flame size={14} />
  },

  // Web3 & Blockchain
  "Solidity": {
    color: "#363636",
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
        <path d="M12 1.5L4.5 9l7.5 7.5L19.5 9zM12 16.5L4.5 12l7.5 10.5L19.5 12z" />
      </svg>
    )
  },
  "Acurast TEE": {
    color: "#FF5400",
    icon: <CpuIcon size={14} />
  },
  "Base Mainnet": {
    color: "#0052FF",
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="5" fill="currentColor" />
      </svg>
    )
  },
  "EVM": {
    color: "#8C8C8C",
    icon: <Layers size={14} />
  },
  "EIP-712": {
    color: "#FF5400",
    icon: <ShieldCheck size={14} />
  },
  "RIP-7212": {
    color: "#E29F00",
    icon: <KeyRound size={14} />
  },
  "MetaMask": {
    color: "#E2761B",
    icon: <Box size={14} />
  },
  "IPFS": {
    color: "#359289",
    icon: <Network size={14} />
  },
  "Infura API": {
    color: "#FF5400",
    icon: <Globe size={14} />
  },

  // Workflow Automation & AI
  "n8n (Level 2 Certified)": {
    color: "#FF6D5A",
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3" fill="currentColor"/>
        <circle cx="5" cy="19" r="3"/>
        <circle cx="19" cy="19" r="3"/>
        <path d="M5 16V9a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v7"/>
      </svg>
    )
  },
  "AI Automation": {
    color: "#FF5400",
    icon: <Workflow size={14} />
  },
  "Flask (Python)": {
    color: "#0a0a0c",
    icon: <Terminal size={14} />
  },
  "Scikit-Learn": {
    color: "#F89939",
    icon: <Cpu size={14} />
  },
  "NLP / NLTK": {
    color: "#1572B6",
    icon: <Code2 size={14} />
  },
  "FFmpeg": {
    color: "#00DF89",
    icon: <FileCode2 size={14} />
  },
  "Zoom & YouTube APIs": {
    color: "#E52D27",
    icon: <Globe size={14} />
  },

  // Mobile & DevOps
  "React Native": {
    color: "#00A8D8",
    icon: (
      <svg viewBox="-11.5 -10.23 23 20.46" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </svg>
    )
  },
  "Git/GitHub": {
    color: "#F05032",
    icon: <GitBranch size={14} />
  },
  "Docker": {
    color: "#2496ED",
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
        <path d="M13.98 8.87h-2v1.93c0 .08.06.14.14.14h1.86c.08 0 .14-.06.14-.14V8.87zm-3 0h-2v1.93c0 .08.06.14.14.14h1.86c.08 0 .14-.06.14-.14V8.87zm-3 0h-2v1.93c0 .08.06.14.14.14h1.86c.08 0 .14-.06.14-.14V8.87zm-3 0h-2v1.93c0 .08.06.14.14.14h1.86c.08 0 .14-.06.14-.14V8.87zM2.02 10.8a.14.14 0 00.14.14h1.86a.14.14 0 00.14-.14V8.87h-2.14v1.93zm16.96-1.93v1.93c0 .08.06.14.14.14h1.86c.08 0 .14-.06.14-.14V8.87h-2.14zM9 5.88h-2v1.93c0 .08.06.14.14.14h1.86c.08 0 .14-.06.14-.14V5.88zm-3 0h-2v1.93c0 .08.06.14.14.14h1.86c.08 0 .14-.06.14-.14V5.88zm3-3H7v1.93c0 .08.06.14.14.14h1.86c.08 0 .14-.06.14-.14V2.88z" />
      </svg>
    )
  },
  "GitLab": {
    color: "#FC6D26",
    icon: <GitBranch size={14} />
  }
};

function TechPill({ item }: { item: string }) {
  const [hovered, setHovered] = useState(false);
  const data = TECH_DATA[item] || { color: "var(--color-accent-primary)", icon: <Code2 size={14} /> };

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.45rem",
        padding: "0.35rem 0.8rem",
        border: hovered ? `1.5px solid ${data.color}` : "1.5px solid var(--color-border)",
        background: hovered ? "var(--color-bg-tertiary)" : "transparent",
        color: "var(--color-text-primary)",
        fontSize: "0.76rem",
        fontWeight: 700,
        fontFamily: "var(--font-mono)",
        boxShadow: hovered ? `3.5px 3.5px 0px ${data.color}` : "2px 2px 0px var(--color-border)",
        transform: hovered ? "translate(-1.5px, -1.5px)" : "translate(0, 0)",
        transition: "all 0.18s cubic-bezier(0.19, 1, 0.22, 1)",
        cursor: "default",
      }}
    >
      <span style={{ 
        color: hovered ? data.color : "var(--color-text-muted)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "color 0.15s ease"
      }}>
        {data.icon}
      </span>
      {item}
    </span>
  );
}

const SKILLS = [
  { category: "Programming Languages", icon: "{ }", items: ["Python", "JavaScript (Node.js/Express)", "SQL", "C", "Java (OOP)", "MATLAB"], wide: true },
  { category: "Web Development", icon: "</>", items: ["React.js", "Next.js", "HTML5", "CSS3", "Bootstrap", "PHP"], wide: false },
  { category: "Databases & Cloud", icon: "⬡", items: ["MySQL", "Firebase (Firestore, Realtime, Auth, Storage)"], wide: false },
  { category: "Web3 & Blockchain", icon: "⬢", items: ["Solidity", "Acurast TEE", "Base Mainnet", "EVM", "EIP-712", "RIP-7212", "MetaMask", "IPFS", "Infura API"], wide: true },
  { category: "Workflow Automation & AI", icon: "⚙", items: ["n8n (Level 2 Certified)", "AI Automation", "Flask (Python)", "Scikit-Learn", "NLP / NLTK", "FFmpeg", "Zoom & YouTube APIs"], wide: true },
  { category: "Mobile & DevOps", icon: "◈", items: ["React Native", "Git/GitHub", "Docker", "GitLab"], wide: false },
];

export function Skills() {
  return (
    <section id="skills" style={{ padding: "6rem 0" }} className="subtle-grid-bg">
      <div className="max-container">
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 className="section-heading gradient-text">Technical Arsenal</h2>
            <div className="accent-divider" />
          </div>
        </AnimatedSection>

        <div className="bento-grid">
          {SKILLS.map((skill, i) => {
            const rot = i % 2 === 0 ? (i % 3 === 0 ? -1.2 : 0.8) : -0.6;
            return (
              <AnimatedSection key={skill.category} delay={i * 70} className={skill.wide ? "bento-wide" : ""}>
                <div
                  className="card"
                  style={{
                    padding: "1.75rem",
                    height: "100%",
                    minHeight: 180,
                    transform: `rotate(${rot}deg)`,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                    <span style={{
                      fontFamily: "var(--font-mono)", fontSize: "1.4rem",
                      color: "var(--color-accent-primary)", lineHeight: 1,
                    }}>{skill.icon}</span>
                    <h3 style={{ fontWeight: 700, color: "var(--color-text-primary)", fontSize: "0.95rem", letterSpacing: "0.02em" }}>
                      {skill.category}
                    </h3>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {skill.items.map((item) => (
                      <TechPill key={item} item={item} />
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
