"use client";

import { Github, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="hero-section-clean subtle-grid-bg"
      aria-labelledby="hero-heading"
    >
      <div className="max-container">
        <div className="hero-content-clean">
          <div className="hero-img hero-portrait-clean">
            <img
              src="/profilepic.jpg"
              alt="Huzaifa Bin Hamid"
              loading="eager"
              className="hero-portrait-image"
            />
          </div>

          <p className="hero-line hero-line-1 hero-eyebrow">
            Full-stack developer · automation engineer · Web3 builder
          </p>

          <h1 id="hero-heading" className="hero-line hero-line-2 hero-title-clean">
            Huzaifa Bin Hamid
          </h1>

          <p className="hero-line hero-line-3 hero-positioning">
            I build reliable web apps, workflow automation systems, and Web3
            products for founders, teams, and serious product ideas.
          </p>

          <div className="hero-line hero-line-4 hero-proof-row" aria-label="Key proof points">
            <span>YieldSense on Base Mainnet</span>
            <span>Acurast Builder Spotlight</span>
            <span>NICL Cohort 4</span>
          </div>

          <div className="hero-line hero-line-5 hero-actions-clean">
            <button
              className="btn-primary"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </button>
            <a
              href="mailto:malikhuzaifa043@gmail.com"
              className="btn-outline"
              style={{ textDecoration: "none" }}
            >
              <Mail size={16} /> Contact
            </a>
            <a
              href="https://github.com/Malik434"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ textDecoration: "none" }}
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
