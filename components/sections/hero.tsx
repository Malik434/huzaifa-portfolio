"use client";
import { ChevronDown, Github } from "lucide-react";
import { Typewriter } from "@/components/typewriter";

const CODE_SNIPPET = `// Huzaifa's stack
const dev = {
  lang: ["Python","JS","Java"],
  web:  ["React","Next.js"],
  web3: ["EVM","IPFS","Web3"],
  db:   ["MySQL","Firebase"],
};`;

export function Hero() {
  const scrollToAbout = () =>
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      style={{
        position: "relative", minHeight: "100dvh", display: "flex",
        alignItems: "center", justifyContent: "center",
        overflow: "hidden", paddingTop: "5rem",
      }}
    >
      {/* Mesh blobs */}
      <div className="hero-mesh">
        <div className="hero-mesh-blob hero-mesh-blob-1" />
        <div className="hero-mesh-blob hero-mesh-blob-2" />
        <div className="hero-mesh-blob hero-mesh-blob-3" />
      </div>
      <div className="subtle-grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.6 }} />

      {/* Floating code card — desktop only */}
      <div
        className="code-card hidden lg:block"
        style={{
          position: "absolute", right: "5%", top: "22%", maxWidth: 280, zIndex: 2,
        }}
      >
        {CODE_SNIPPET.split("\n").map((line, i) => (
          <div key={i} style={{ whiteSpace: "pre", color: i === 0 ? "var(--color-text-muted)" : i === 1 ? "var(--color-accent-secondary)" : "var(--color-text-secondary)" }}>
            {line}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="max-container" style={{ textAlign: "center", position: "relative", zIndex: 3, width: "100%" }}>
        <div className="hero-img" style={{ marginBottom: "2rem" }}>
          <div className="profile-ring" style={{ display: "inline-block" }}>
            <img
              src="/profilepic.jpg"
              alt="Huzaifa Bin Hamid"
              loading="eager"
              style={{
                width: 160, height: 160, objectFit: "cover", borderRadius: "50%",
                display: "block",
              }}
            />
          </div>
        </div>

        <p className="hero-line hero-line-1" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "clamp(0.8rem,1.5vw,0.95rem)", marginBottom: "0.75rem", letterSpacing: "0.12em" }}>
          Hello World, I&apos;m
        </p>

        <h1 className="hero-line hero-line-2 gradient-text" style={{ fontSize: "clamp(2.6rem,7vw,5.5rem)", fontWeight: 900, lineHeight: 1.05, marginBottom: "0.75rem" }}>
          Huzaifa Bin Hamid
        </h1>

        <p className="hero-line hero-line-3" style={{ fontSize: "clamp(1.1rem,2.5vw,1.5rem)", color: "var(--color-text-secondary)", marginBottom: "2.5rem", fontWeight: 500 }}>
          <Typewriter words={["Full-Stack Developer", "Blockchain Engineer", "AI Integrations Dev"]} />
        </p>

        <p className="hero-line hero-line-4" style={{ fontSize: "clamp(0.95rem,1.8vw,1.1rem)", color: "var(--color-text-secondary)", maxWidth: 620, margin: "0 auto 2.5rem", lineHeight: 1.8 }}>
          Passionate about blockchain, AI, and building scalable full-stack applications. Seeking software development internships to create innovative impact.
        </p>

        <div className="hero-line hero-line-5" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
          <button className="btn-primary" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            View My Work
          </button>
          <a href="https://github.com/Malik434" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ textDecoration: "none" }}>
            <Github size={16} /> GitHub
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="bounce-arrow"
        aria-label="Scroll down"
        style={{
          position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
          background: "none", border: "none", cursor: "pointer",
          color: "var(--color-text-muted)", zIndex: 3,
        }}
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
