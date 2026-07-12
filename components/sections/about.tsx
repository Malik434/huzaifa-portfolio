"use client";
import { BookOpen, Award } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { StatCounter } from "@/components/stat-counter";

export function About() {
  return (
    <section id="about" style={{ padding: "6rem 0", background: "var(--color-bg-secondary)" }}>
      <div className="max-container">
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 className="section-heading gradient-text">About</h2>
            <div className="accent-divider" />
          </div>
        </AnimatedSection>

        <div style={{ display: "grid", gap: "4rem", alignItems: "start" }} className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left — bio */}
          <AnimatedSection direction="left">
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div className="open-badge" style={{ alignSelf: "flex-start" }}>
                <span className="green-dot" />
                Available for Project Builds
              </div>

              <p style={{ fontSize: "clamp(0.95rem,1.6vw,1.05rem)", color: "var(--color-text-secondary)", lineHeight: 1.9 }}>
                I work best where product thinking and hands-on engineering meet: shaping the scope, choosing the right technical path, and shipping software that can be used by real people.
              </p>
              <p style={{ fontSize: "clamp(0.95rem,1.6vw,1.05rem)", color: "var(--color-text-secondary)", lineHeight: 1.9 }}>
                My strongest work sits across full-stack apps, Web3 infrastructure, and automation systems, with a focus on practical delivery over unnecessary complexity.
              </p>

              {/* Stats Box — Zine Fact Card */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: "1rem",
                marginTop: "1.5rem",
                padding: "1.25rem",
                background: "#ffffff",
                borderRadius: "0px",
                border: "3px solid var(--color-border)",
                boxShadow: "4px 4px 0px var(--color-border)",
              }}>
                <StatCounter target={9} suffix="+" label="Projects" />
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
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.82rem" }}>Feb 2022 – Feb 2026 </p>
              </div>

              {/* Languages */}
              <div className="card" style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <Award size={22} style={{ color: "var(--color-accent-primary)", flexShrink: 0 }} />
                  <h3 style={{ fontWeight: 700, color: "var(--color-text-primary)", fontSize: "1.05rem" }}>Languages</h3>
                </div>
                {[["English", "Professional"], ["Urdu", "Native"], ["Punjabi", "Native"]].map(([lang, level]) => (
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
                      <span style={{ color: "var(--color-accent-primary)", fontSize: "0.8rem", fontWeight: 700, fontFamily: "var(--font-mono)", textTransform: "uppercase" }}>{cert.issuer}</span>
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.72rem", color: "var(--color-text-primary)", textDecoration: "underline", fontWeight: 700, textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>Verify ↗</a>
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
