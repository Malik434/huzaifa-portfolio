"use client";

import { AnimatedSection } from "@/components/animated-section";

type SkillItem = {
  name: string;
  logo: string;
};

type SkillGroup = {
  category: string;
  items: SkillItem[];
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Product Engineering",
    items: [
      { name: "Next.js", logo: "/tech/nextdotjs.svg" },
      { name: "React", logo: "/tech/react.svg" },
      { name: "Node.js", logo: "/tech/nodedotjs.svg" },
      { name: "JavaScript", logo: "/tech/javascript.svg" },
      { name: "Python", logo: "/tech/python.svg" },
    ],
  },
  {
    category: "Automation & Data",
    items: [
      { name: "n8n", logo: "/tech/n8n.svg" },
      { name: "Firebase", logo: "/tech/firebase.svg" },
      { name: "Google Cloud", logo: "/tech/googlecloud.svg" },
      { name: "Flask", logo: "/tech/flask.svg" },
      { name: "Scikit-learn", logo: "/tech/scikitlearn.svg" },
      { name: "FFmpeg", logo: "/tech/ffmpeg.svg" },
    ],
  },
  {
    category: "Web3 Infrastructure",
    items: [
      { name: "Solidity", logo: "/tech/solidity.svg" },
      { name: "Base", logo: "/affiliations/base.svg" },
      { name: "MetaMask", logo: "/tech/metamask.svg" },
      { name: "IPFS", logo: "/tech/ipfs.svg" },
    ],
  },
  {
    category: "Delivery Tooling",
    items: [
      { name: "Git", logo: "/tech/git.svg" },
      { name: "GitHub", logo: "/tech/github.svg" },
      { name: "Docker", logo: "/tech/docker.svg" },
    ],
  },
];

function SkillLogo({ item }: { item: SkillItem }) {
  return (
    <li className="tech-logo-item">
      <span className="tech-logo-mark" aria-hidden="true">
        <img
          src={item.logo}
          alt=""
          className="tech-logo-image"
          loading="lazy"
        />
      </span>
      <span className="tech-logo-label">{item.name}</span>
    </li>
  );
}

export function Skills() {
  return (
    <section id="skills" className="technical-arsenal-section subtle-grid-bg">
      <div className="max-container">
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 className="section-heading gradient-text">Technical Arsenal</h2>
            <div className="accent-divider" />
          </div>
        </AnimatedSection>

        <div className="tech-logo-groups">
          {SKILL_GROUPS.map((group, index) => (
            <AnimatedSection key={group.category} delay={index * 70}>
              <section
                className="tech-logo-group"
                aria-labelledby={`skill-${index}`}
              >
                <h3 id={`skill-${index}`} className="tech-logo-heading">
                  {group.category}
                </h3>
                <ul className="tech-logo-list">
                  {group.items.map((item) => (
                    <SkillLogo
                      key={`${group.category}-${item.name}`}
                      item={item}
                    />
                  ))}
                </ul>
              </section>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
