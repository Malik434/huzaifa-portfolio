"use client";

import { Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

const CONTACT_LINKS = [
  {
    href: "mailto:malikhuzaifa043@gmail.com?subject=Project%20Inquiry%20for%20Huzaifa",
    label: "Email",
    value: "malikhuzaifa043@gmail.com",
    icon: Mail,
  },
  {
    href: "https://www.linkedin.com/in/malikhuzaifa434/",
    label: "LinkedIn",
    value: "malikhuzaifa434",
    icon: Linkedin,
  },
  {
    href: "https://github.com/Malik434",
    label: "GitHub",
    value: "Malik434",
    icon: Github,
  },
  {
    href: "https://twitter.com/ruhn_r",
    label: "Twitter / X",
    value: "@ruhn_r",
    icon: Twitter,
  },
];

export function Contact() {
  return (
    <section id="contact" className="contact-section-clean">
      <div className="max-container">
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "3.25rem" }}>
            <h2 className="section-heading gradient-text">Let&apos;s Build</h2>
            <div className="accent-divider" />
            <p className="section-subheading contact-subheading">
              Have a product, automation workflow, or Web3 integration that needs
              a practical builder? Send the context and I&apos;ll reply directly.
            </p>
          </div>
        </AnimatedSection>

        <div className="contact-layout-clean">
          <AnimatedSection direction="left">
            <div className="contact-primary-panel">
              <Mail size={28} className="contact-primary-icon" />
              <h3>Fastest way to reach me</h3>
              <p>
                Email is the most reliable path for project inquiries, contract
                work, collaboration, and technical scoping.
              </p>
              <a
                href="mailto:malikhuzaifa043@gmail.com?subject=Project%20Inquiry%20for%20Huzaifa"
                className="btn-primary"
                style={{ textDecoration: "none", width: "fit-content" }}
              >
                <Mail size={16} /> Email Huzaifa
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={100}>
            <div className="contact-link-list">
              <div className="contact-location">
                <MapPin size={18} />
                <span>Lahore, Pakistan · Remote-friendly</span>
              </div>
              {CONTACT_LINKS.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="contact-link-row"
                  >
                    <Icon size={18} />
                    <span>
                      <strong>{item.label}</strong>
                      <small>{item.value}</small>
                    </span>
                  </a>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
