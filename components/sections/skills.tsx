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
    category: "Programming Languages",
    items: [
      { name: "Python", logo: "/tech/python.svg" },
      { name: "JavaScript", logo: "/tech/javascript.svg" },
      { name: "Node.js", logo: "/tech/nodedotjs.svg" },
    ],
  },
  {
    category: "Web Development",
    items: [
      { name: "React", logo: "/tech/react.svg" },
      { name: "Next.js", logo: "/tech/nextdotjs.svg" },
      { name: "HTML5", logo: "/tech/html5.svg" },
      { name: "CSS3", logo: "/tech/css3.svg" },
      { name: "Bootstrap", logo: "/tech/bootstrap.svg" },
      { name: "PHP", logo: "/tech/php.svg" },
    ],
  },
  {
    category: "Databases & Cloud",
    items: [
      { name: "MySQL", logo: "/tech/mysql.svg" },
      { name: "Firebase", logo: "/tech/firebase.svg" },
      { name: "Google Cloud", logo: "/tech/googlecloud.svg" },
    ],
  },
  {
    category: "Web3 & Blockchain",
    items: [
      { name: "Solidity", logo: "/tech/solidity.svg" },
      { name: "Acurast", logo: "/affiliations/Acurast.svg" },
      { name: "Base", logo: "/affiliations/base.svg" },
      { name: "MetaMask", logo: "/tech/metamask.svg" },
      { name: "IPFS", logo: "/tech/ipfs.svg" },
    ],
  },
  {
    category: "Automation & AI",
    items: [
      { name: "n8n", logo: "/tech/n8n.svg" },
      { name: "Flask", logo: "/tech/flask.svg" },
      { name: "Scikit-learn", logo: "/tech/scikitlearn.svg" },
      { name: "FFmpeg", logo: "/tech/ffmpeg.svg" },
      { name: "Zoom API", logo: "/tech/zoom.svg" },
      { name: "YouTube API", logo: "/tech/youtube.svg" },
    ],
  },
  {
    category: "Mobile & DevOps",
    items: [
      { name: "Git", logo: "/tech/git.svg" },
      { name: "GitHub", logo: "/tech/github.svg" },
      { name: "Docker", logo: "/tech/docker.svg" },
      { name: "GitLab", logo: "/tech/gitlab.svg" },
    ],
  },
];

function SkillLogo({ item }: { item: SkillItem }) {
  return (
    <li className="tech-logo-item">
      <span className="tech-logo-mark" aria-hidden="true">
        <img src={item.logo} alt="" className="tech-logo-image" loading="lazy" />
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
              <section className="tech-logo-group" aria-labelledby={`skill-${index}`}>
                <h3 id={`skill-${index}`} className="tech-logo-heading">
                  {group.category}
                </h3>
                <ul className="tech-logo-list">
                  {group.items.map((item) => (
                    <SkillLogo key={`${group.category}-${item.name}`} item={item} />
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
