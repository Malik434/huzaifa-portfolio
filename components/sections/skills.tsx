"use client";
import { AnimatedSection } from "@/components/animated-section";

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
          {SKILLS.map((skill, i) => (
            <AnimatedSection key={skill.category} delay={i * 70} className={skill.wide ? "bento-wide" : ""}>
              <div
                className="card"
                style={{ padding: "1.75rem", height: "100%", minHeight: 180 }}
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
                    <span key={item} className="tag-pill">{item}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
