"use client";
import { AnimatedSection } from "@/components/animated-section";
import { ExternalLink, Youtube, Twitter, Linkedin, FileText, Video, Compass } from "lucide-react";

const RD_PROJECTS = [
  {
    title: "Town Hall Editing Automation",
    platform: "LinkedIn",
    link: "https://www.linkedin.com/posts/malikhuzaifa434_how-i-turned-a-2-day-video-bottleneck-into-activity-7366871061482631168-U6zc?utm_source=share&utm_medium=member_desktop&rcm=ACoAACz_uC0BCssX-rAoidZ7jdvmMarfJQ9yTps",
    desc: "Built a fully automated serverless pipeline using Google Cloud Run, n8n webhook triggers, and programmatic FFmpeg script commands to automatically process weekly raw meetings, saving hours of manual workflow. Shared an in-depth architecture breakdown post.",
    icon: Linkedin,
    badgeColor: "#0a66c2",
    badgeText: "Case Study",
  },
  {
    title: "Roblox Ambassador Environment",
    platform: "Drive Link",
    link: "https://drive.google.com/file/d/19Zuf2ojKnM94bvYUFa7IYxdGpFx5WpTC/view?usp=sharing",
    desc: "Designed and developed an immersive, interactive Roblox 3D hub environment for the SingularityNET Ambassador Program. Recorded a comprehensive high-fidelity walkthrough video demonstrating the spatial UI and gamified community mechanics.",
    icon: Video,
    badgeColor: "#ff3e3e",
    badgeText: "3D Hub Video",
  },
  {
    title: "NFT Minting on Cardano",
    platform: "Medium",
    link: "https://medium.com/@malikhuzaifa043/minting-nft-on-cardano-without-installing-cardano-node-and-cardano-cli-on-your-pc-05b9224826db",
    desc: "Authored an advanced, step-by-step developer tutorial for the Cardano Core Contributors Certification Program. Teaches how to programmatically mint NFTs without executing bulky CLI nodes by utilizing cloud providers.",
    icon: FileText,
    badgeColor: "#121212",
    badgeText: "Dev Article",
  },
];

const DEVREL_OUTREACH = [
  {
    title: "Managing peaq pakistan",
    platform: "Twitter / X",
    link: "https://x.com/peaq_Pakistan",
    desc: "Organizing and scaling the official peaq pakistan Twitter account, driving DePIN community development, educational localized content, and managing technical ambassador operations in the region.",
    icon: Twitter,
    badgeColor: "#000000",
    badgeText: "Official Handle",
  },
  {
    title: "Dework Ambassador Profile",
    platform: "Dework",
    link: "https://app.dework.xyz/profile/Malik",
    desc: "Interactive decentralized identity displaying verified bounty contributions, community coordination logs, and smart contract escrow payouts managed during Catalyst Swarm ambassador operations.",
    icon: Compass,
    badgeColor: "#5865f2",
    badgeText: "Proof of Work",
  },
  {
    title: "Messari peaq Q1 Report Breakdown",
    platform: "Twitter / X",
    link: "https://x.com/ruhn_r/status/1919613923122102767",
    desc: "Deconstructs peaq's Q1 blockchain report by Messari into a clear, high-engagement educational narrative on DePIN fundamentals and network activity metrics.",
    icon: Twitter,
    badgeColor: "#000000",
    badgeText: "Market Report",
  },
  {
    title: "Reflex DAO Hardware Unboxing",
    platform: "Twitter / X",
    link: "https://x.com/ruhn_r/status/1934457281036341554",
    desc: "A raw community unboxing review and DePIN hardware presentation post, translating physical device setups into digestible Web3 infrastructure insights.",
    icon: Twitter,
    badgeColor: "#000000",
    badgeText: "Hardware Review",
  },
];

const VIDEO_LECTURES = [
  {
    title: "AI-Powered Smart Contracts",
    platform: "YouTube",
    link: "https://www.youtube.com/watch?v=_hafODHtgMs",
    desc: "Deep-dive lecture examining the intersection of autonomous agents, TEE compute enclaves, and Solidity logic to build next-generation trustless DeFi triggers.",
    icon: Youtube,
    badgeColor: "#ff0000",
    badgeText: "Lecture Video",
  },
  {
    title: "Rise of Conscious AI & AGI",
    platform: "YouTube",
    link: "https://www.youtube.com/watch?v=lSd-ux2XGmA",
    desc: "Explores the philosophical and architectural frameworks of conscious machine intelligence and the roadmap toward AGI safety protocols.",
    icon: Youtube,
    badgeColor: "#ff0000",
    badgeText: "AI Ethics",
  },
  {
    title: "Acurast Vibe Code Walkthrough",
    platform: "Twitter / X",
    link: "https://x.com/ruhn_r/status/1926957432464384106",
    desc: "High-end visual platform walkthrough breaking down how Acurast TEE enclaves interface securely with public RPC endpoints for decentralized computation.",
    icon: Twitter,
    badgeColor: "#000000",
    badgeText: "Walkthrough",
  },
  {
    title: "SNET Marketplace Walkthrough",
    platform: "Twitter / X",
    link: "https://x.com/SNET_Ambassador/status/1786828291585826925",
    desc: "Comprehensive product walkthrough for the SingularityNET ambassador program, guiding users through decentralized AI agent marketplace integrations.",
    icon: Twitter,
    badgeColor: "#000000",
    badgeText: "Tutorial",
  },
];

export function Outreach() {
  return (
    <section id="outreach" style={{ padding: "6rem 0", background: "var(--color-bg-secondary)" }}>
      <div className="max-container">
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 className="section-heading gradient-text">THE DAILY BULLETIN</h2>
            <p className="section-subheading" style={{ marginTop: "1rem", fontFamily: "var(--font-mono)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              ✦ DEVREL // R&D RESEARCH // ECOSYSTEM OUTREACH ✦
            </p>
            <div className="accent-divider" />
          </div>
        </AnimatedSection>

        {/* 3-Column Newspaper Zine Layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          alignItems: "start",
        }}>
          {/* COLUMN 1: R&D & TECHNICAL SPINOFFS */}
          <AnimatedSection delay={100}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{
                borderBottom: "3px double var(--color-border)",
                paddingBottom: "0.5rem",
                marginBottom: "0.5rem"
              }}>
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.25rem",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                  color: "var(--color-text-primary)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}>
                  <span>01 / TECH R&D</span>
                  <span style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)", color: "var(--color-accent-primary)" }}>[ RESEARCH ]</span>
                </h3>
              </div>
              {RD_PROJECTS.map((item, i) => (
                <OutreachCard key={item.title} item={item} index={i} />
              ))}
            </div>
          </AnimatedSection>

          {/* COLUMN 2: DEVREL & COMMUNITY GROWTH */}
          <AnimatedSection delay={200}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{
                borderBottom: "3px double var(--color-border)",
                paddingBottom: "0.5rem",
                marginBottom: "0.5rem"
              }}>
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.25rem",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                  color: "var(--color-text-primary)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}>
                  <span>02 / DEVREL & MEDIA</span>
                  <span style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)", color: "var(--color-accent-primary)" }}>[ ADVOCACY ]</span>
                </h3>
              </div>
              {DEVREL_OUTREACH.map((item, i) => (
                <OutreachCard key={item.title} item={item} index={i} />
              ))}
            </div>
          </AnimatedSection>

          {/* COLUMN 3: WEB3 & AI CHRONICLES */}
          <AnimatedSection delay={300}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{
                borderBottom: "3px double var(--color-border)",
                paddingBottom: "0.5rem",
                marginBottom: "0.5rem"
              }}>
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.25rem",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                  color: "var(--color-text-primary)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}>
                  <span>03 / VIDEO CHRONICLES</span>
                  <span style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)", color: "var(--color-accent-primary)" }}>[ LECTURES ]</span>
                </h3>
              </div>
              {VIDEO_LECTURES.map((item, i) => (
                <OutreachCard key={item.title} item={item} index={i} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function OutreachCard({ item, index }: { item: typeof RD_PROJECTS[0] | typeof DEVREL_OUTREACH[0]; index: number }) {
  const Icon = item.icon;
  const rotation = index % 2 === 0 ? 0.5 : -0.6;

  return (
    <div
      className="card"
      style={{
        padding: "1.25rem",
        transform: `rotate(${rotation}deg)`,
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        height: "100%",
        position: "relative"
      }}
    >
      {/* Platform badge */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{
          background: item.badgeColor,
          color: "#ffffff",
          fontFamily: "var(--font-mono)",
          fontSize: "0.6rem",
          fontWeight: 800,
          padding: "0.2rem 0.5rem",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          border: "1px solid var(--color-border)",
        }}>
          {item.badgeText}
        </span>
        <span style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.62rem",
          color: "var(--color-text-muted)"
        }}>
          {item.platform}
        </span>
      </div>

      <div>
        <h4 className="glitch-hover" style={{
          fontFamily: "var(--font-heading)",
          fontSize: "1rem",
          fontWeight: 800,
          textTransform: "uppercase",
          color: "var(--color-text-primary)",
          lineHeight: 1.2,
          marginBottom: "0.35rem"
        }}>
          {item.title}
        </h4>
        <p style={{
          fontSize: "0.82rem",
          color: "var(--color-text-secondary)",
          lineHeight: 1.5
        }}>
          {item.desc}
        </p>
      </div>

      {/* Action Button */}
      <div style={{ marginTop: "auto", paddingTop: "0.5rem" }}>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
          style={{
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            fontSize: "0.7rem",
            padding: "0.35rem 0.65rem",
            minHeight: "auto"
          }}
        >
          <Icon size={12} />
          <span>Launch Content</span>
          <ExternalLink size={10} />
        </a>
      </div>
    </div>
  );
}
