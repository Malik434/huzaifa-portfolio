"use client";

import { Bot, Code2, Globe2, Workflow } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

const SERVICES = [
  {
    title: "Full-stack product builds",
    desc: "Plan, build, and ship responsive web apps with clear user flows, clean frontend architecture, and practical backend integrations.",
    icon: Code2,
  },
  {
    title: "Workflow automation",
    desc: "Turn repeated operational work into reliable n8n, API, and media-processing automations that save time and reduce manual handoffs.",
    icon: Workflow,
  },
  {
    title: "Web3 integrations",
    desc: "Build EVM-facing apps, wallet flows, Solidity integrations, and automation patterns for products that need on-chain execution.",
    icon: Globe2,
  },
  {
    title: "AI-enabled tooling",
    desc: "Design focused AI and data-assisted tools for internal workflows, content operations, knowledge extraction, and decision support.",
    icon: Bot,
  },
];

export function Services() {
  return (
    <section id="services" className="services-section" aria-labelledby="services-heading">
      <div className="max-container">
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 id="services-heading" className="section-heading gradient-text">
              How I Can Help
            </h2>
            <p className="section-subheading services-subheading">
              Practical build support for teams that need working software, not just prototypes.
            </p>
            <div className="accent-divider" />
          </div>
        </AnimatedSection>

        <div className="services-grid">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <AnimatedSection key={service.title} delay={index * 80}>
                <article className="service-item">
                  <Icon className="service-icon" size={24} strokeWidth={2.4} />
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </article>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
