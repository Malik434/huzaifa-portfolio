"use client";
import { BookOpen, Award } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { StatCounter } from "@/components/stat-counter";

const TAGS = ["Blockchain Enthusiast","Full-Stack Developer","AI Integration","Open Source"];

export function About() {
  return (
    <section id="about" style={{ padding: "6rem 0", background: "var(--color-bg-secondary)" }}>
      <div className="max-container">
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 className="section-heading gradient-text">About Me</h2>
            <div className="accent-divider" />
          </div>
        </AnimatedSection>

        <div style={{ display: "grid", gap: "4rem", alignItems: "start" }} className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left — bio */}
          <AnimatedSection direction="left">
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div className="open-badge" style={{ alignSelf: "flex-start" }}>
                <span className="green-dot" />
                Currently Open to Work
              </div>

              <p style={{ fontSize: "clamp(0.95rem,1.6vw,1.05rem)", color: "var(--color-text-secondary)", lineHeight: 1.9 }}>
                I&apos;m a <strong style={{ color: "var(--color-text-primary)" }}>CS graduate from COMSATS University Islamabad</strong> with a passion for cutting-edge technologies. My expertise spans blockchain/DeFi development, AI integration, and full-stack web applications.
              </p>
              <p style={{ fontSize: "clamp(0.95rem,1.6vw,1.05rem)", color: "var(--color-text-secondary)", lineHeight: 1.9 }}>
                I built and shipped <strong style={{ color: "var(--color-accent-secondary)" }}>YieldSense</strong> — a production DeFi protocol on Base Mainnet inside Acurast TEEs, featured in the Acurast Builder Spotlight — alongside multiple Web3 and AI-integrated products.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", paddingTop: "0.5rem" }}>
                {TAGS.map((t) => <span key={t} className="tag-pill">{t}</span>)}
              </div>

              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem", marginTop: "1rem", padding: "1.5rem", background: "var(--color-bg-tertiary)", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)" }}>
                <StatCounter target={6} suffix="+" label="Projects" />
                <StatCounter target={4} suffix="yr" label="Experience" />
                <StatCounter target={3} suffix="+" label="Tech Stacks" />
              </div>
            </div>
          </AnimatedSection>

          {/* Right — cards */}
          <AnimatedSection direction="right" delay={100}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {/* Education */}
              <div className="card" style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <BookOpen size={22} style={{ color: "var(--color-accent-primary)", flexShrink: 0 }} />
                  <h3 style={{ fontWeight: 700, color: "var(--color-text-primary)", fontSize: "1.05rem" }}>Education</h3>
                </div>
                <p style={{ fontWeight: 600, color: "var(--color-accent-primary)", marginBottom: "0.25rem" }}>BS Computer Science — Graduated</p>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem", marginBottom: "0.25rem" }}>COMSATS University Islamabad, Lahore Campus</p>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.82rem" }}>Feb 2022 – Jan 2026 &nbsp;|&nbsp; CGPA: 2.81 / 4.00</p>
              </div>

              {/* Languages */}
              <div className="card" style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <Award size={22} style={{ color: "var(--color-accent-primary)", flexShrink: 0 }} />
                  <h3 style={{ fontWeight: 700, color: "var(--color-text-primary)", fontSize: "1.05rem" }}>Languages</h3>
                </div>
                {[["English","Professional"],["Urdu","Native"],["Punjabi","Native"]].map(([lang, level]) => (
                  <div key={lang} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.5rem 0", borderBottom: "1px solid var(--color-border)" }}>
                    <span style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>{lang}</span>
                    <span className="tag-pill" style={{ fontSize: "0.72rem" }}>{level}</span>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="card" style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <Award size={22} style={{ color: "var(--color-accent-primary)", flexShrink: 0 }} />
                  <h3 style={{ fontWeight: 700, color: "var(--color-text-primary)", fontSize: "1.05rem" }}>Certifications</h3>
                </div>
                {[
                  {
                    name: "n8n Workflow Automation (Level 2)",
                    issuer: "n8n.io",
                    date: "Jan 2026",
                    link: "https://community.n8n.io/badges/105/completed-n8n-course-level-2?username=malik434"
                  },
                  {
                    name: "Intermediate Python Analytics",
                    issuer: "DataCamp",
                    date: "Aug 2024",
                    link: "https://datacamp.com/completed/statement-of-accomplishment/course/fdf8a2e9025b825e3798b6a070ab27654c2a04fb"
                  }
                ].map((cert) => (
                  <div key={cert.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "0.6rem 0", borderBottom: "1px solid var(--color-border)", flexDirection: "column", gap: "0.25rem" }}>
                    <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ color: "var(--color-text-primary)", fontSize: "0.9rem", fontWeight: 600 }}>{cert.name}</span>
                      <span style={{ color: "var(--color-text-muted)", fontSize: "0.75rem" }}>{cert.date}</span>
                    </div>
                    <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ color: "var(--color-accent-secondary)", fontSize: "0.8rem", fontWeight: 500 }}>{cert.issuer}</span>
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.72rem", color: "var(--color-accent-primary)", textDecoration: "none", fontWeight: 600 }}>Verify ↗</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
