"use client";

import { AnimatedSection } from "@/components/animated-section";

type Affiliation = {
  name: string;
  relationship: string;
  logo: string;
  href: string;
};

const AFFILIATIONS: Affiliation[] = [
  {
    name: "SingularityNET",
    relationship: "Core Contributor / Ambassador Program",
    logo: "/affiliations/singularitynet.svg",
    href: "https://singularitynet.io",
  },
  {
    name: "Acurast",
    relationship: "Builder Spotlight / TEE Automation",
    logo: "/affiliations/Acurast.svg",
    href: "https://acurast.com",
  },
  {
    name: "peaq",
    relationship: "Ecosystem Ambassador / DePIN",
    logo: "/affiliations/peaq.png",
    href: "https://peaq.network",
  },
  {
    name: "COMSATS University Islamabad",
    relationship: "BS Computer Science",
    logo: "/affiliations/comsats.png",
    href: "https://comsats.edu.pk",
  },
  {
    name: "NIC Lahore",
    relationship: "Cohort 4 Startup Incubation",
    logo: "/affiliations/nicl.png",
    href: "https://niclahore.lums.edu.pk",
  },
  {
    name: "n8n",
    relationship: "Certified Workflow Automation",
    logo: "/affiliations/n8n.svg",
    href: "https://n8n.io",
  },
  {
    name: "Cardano Catalyst Swarm",
    relationship: "Bounty Board Management",
    logo: "/affiliations/cardano.png",
    href: "https://projectcatalyst.io",
  },
  {
    name: "Base",
    relationship: "YieldSense Mainnet Deployment",
    logo: "/affiliations/base.svg",
    href: "https://base.org",
  },
];

export function Affiliations() {
  return (
    <section
      id="affiliations"
      className="affiliations-section"
      aria-labelledby="affiliations-heading"
    >
      <div className="max-container">
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2
              id="affiliations-heading"
              className="section-heading gradient-text"
            >
              Associated With
            </h2>
            <p
              className="section-subheading"
              style={{
                marginTop: "1rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Ecosystems, institutions, incubators, and tooling connected to my
              work
            </p>
            <div className="accent-divider" />
          </div>
        </AnimatedSection>

        <div className="affiliations-grid">
          {AFFILIATIONS.map((item, index) => (
            <AnimatedSection key={item.name} delay={index * 60}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="affiliation-card"
                aria-label={`${item.name}: ${item.relationship}`}
              >
                <span className="affiliation-logo-shell">
                  <img
                    src={item.logo}
                    alt={`${item.name} logo`}
                    className="affiliation-logo"
                    loading="lazy"
                  />
                </span>
                <span className="affiliation-copy">
                  <span className="affiliation-name">{item.name}</span>
                  <span className="affiliation-relationship">
                    {item.relationship}
                  </span>
                </span>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
