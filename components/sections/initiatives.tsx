"use client";

import { AnimatedSection } from "@/components/animated-section";
import { Building2, GitBranch, ShieldCheck, Stethoscope, Users } from "lucide-react";

const INITIATIVES = [
  {
    title: "NICL Cohort 4 Incubation",
    status: "Accepted - July 2026",
    desc: "Accepted into NICL Cohort 4 for startup incubation, adding mentorship, validation, and structured execution support around current product and business-building work.",
    tags: ["NICL", "Startup Incubation", "Founder Track", "Product Validation"],
    icon: Building2,
  },
  {
    title: "DentaVyro",
    status: "Live business website",
    desc: "Building a dental billing business for US practices, with a public site focused on eligibility verification, EOB/ERA payment posting, HIPAA-conscious workflows, and outsourced revenue cycle support.",
    tags: ["Dental Billing", "Revenue Cycle Management", "HIPAA", "Operations"],
    icon: Stethoscope,
  },
  {
    title: "Project Echo",
    status: "Grant proposal submitted - May 19, 2026",
    desc: "Decentralized messaging protocol in development, proposed for Acurast and Base funding to extend secure off-chain coordination into user-facing communication flows.",
    tags: ["Acurast", "Base", "Decentralized Messaging", "Protocol Design"],
    icon: GitBranch,
  },
  {
    title: "TEE-Native Automation Roadmap",
    status: "Active architecture track",
    desc: "Continuing the YieldSense pattern: hardware-verified off-chain logic with on-chain integrity, reducing exposed strategy infrastructure and centralized automation assumptions.",
    tags: ["TEEs", "DePIN", "Autonomous Systems", "On-chain Integrity"],
    icon: ShieldCheck,
  },
  {
    title: "Distributed Builder Collaboration",
    status: "Team execution",
    desc: "Leading development with Shehroze and Huzaifa Umer, coordinating protocol architecture, implementation, and ecosystem-facing grant work.",
    tags: ["Leadership", "Team Delivery", "Grant Strategy", "Decentralized Development"],
    icon: Users,
  },
];

export function Initiatives() {
  return (
    <section id="initiatives" style={{ padding: "6rem 0", background: "var(--color-bg-secondary)" }}>
      <div className="max-container">
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 className="section-heading gradient-text">In Development</h2>
            <p className="section-subheading" style={{ marginTop: "1rem", fontFamily: "var(--font-mono)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Current initiatives, grants, and protocol momentum beyond YieldSense
            </p>
            <div className="accent-divider" />
          </div>
        </AnimatedSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
          {INITIATIVES.map((item, index) => {
            const Icon = item.icon;

            return (
              <AnimatedSection key={item.title} delay={index * 100}>
                <article className="card" style={{ padding: "1.5rem", height: "100%" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.9rem" }}>
                    <span style={{ width: 40, height: 40, display: "inline-flex", alignItems: "center", justifyContent: "center", background: "var(--color-accent-secondary)", border: "2px solid var(--color-border)", boxShadow: "2px 2px 0px var(--color-border)" }}>
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="glitch-hover" style={{ fontSize: "1rem", fontWeight: 900, textTransform: "uppercase", lineHeight: 1.15 }}>
                        {item.title}
                      </h3>
                      <p style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent-primary)", fontSize: "0.68rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", marginTop: "0.25rem" }}>
                        {item.status}
                      </p>
                    </div>
                  </div>
                  <p style={{ color: "var(--color-text-secondary)", fontSize: "0.86rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                    {item.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {item.tags.map((tag) => (
                      <span key={tag} className="tag-pill" style={{ fontSize: "0.68rem" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
