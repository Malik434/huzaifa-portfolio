"use client";
import { Github } from "lucide-react";
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

      {/* Floating code card — desktop only (Zine Collage Style) */}
      <div
        className="hidden lg:block hero-stack-card"
        style={{
          position: "absolute",
          right: "5%",
          top: "20%",
          maxWidth: 290,
          zIndex: 2,
          background: "#ffffff",
          border: "3px solid var(--color-border)",
          padding: "1.25rem",
          boxShadow: "5px 5px 0px var(--color-border)",
          transform: "rotate(-3deg)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.78rem",
        }}
      >
        <div style={{ borderBottom: "2px dashed var(--color-border)", paddingBottom: "0.4rem", marginBottom: "0.6rem", fontWeight: 700, textTransform: "uppercase", fontSize: "0.7rem", color: "var(--color-accent-primary)" }}>
          ◆ Terminal Collage // Stack ◆
        </div>
        {CODE_SNIPPET.split("\n").map((line, i) => (
          <div key={i} style={{ whiteSpace: "pre", color: i === 0 ? "var(--color-text-muted)" : "var(--color-text-primary)", fontWeight: 600 }}>
            {line}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="max-container" style={{ textAlign: "center", position: "relative", zIndex: 3, width: "100%" }}>
        <div className="hero-img" style={{ marginBottom: "2.5rem", display: "inline-block", position: "relative" }}>
          {/* Collage sticker accent */}
          <span style={{
            position: "absolute",
            top: "-10px",
            right: "-20px",
            background: "var(--color-accent-primary)",
            color: "#ffffff",
            padding: "0.25rem 0.6rem",
            fontSize: "0.65rem",
            fontWeight: 700,
            fontFamily: "var(--font-mono)",
            border: "2px solid var(--color-border)",
            transform: "rotate(6deg)",
            zIndex: 10,
            boxShadow: "2px 2px 0px var(--color-border)",
          }}>
            CS GRAD 2026
          </span>
          <div style={{
            display: "inline-block",
            background: "#ffffff",
            border: "4px solid var(--color-border)",
            padding: "0.5rem",
            boxShadow: "6px 6px 0px var(--color-border)",
          }}>
            <img
              src="/profilepic.jpg"
              alt="Huzaifa Bin Hamid"
              loading="eager"
              style={{
                width: 150,
                height: 150,
                objectFit: "cover",
                borderRadius: "0px",
                display: "block",
              }}
            />
          </div>
        </div>

        <p className="hero-line hero-line-1" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "clamp(0.8rem,1.5vw,0.95rem)", marginBottom: "1rem", letterSpacing: "0.12em" }}>
          Hello World, I&apos;m
        </p>

        <div style={{
          display: "inline-block",
          border: "3.5px solid var(--color-border)",
          background: "#ffffff",
          padding: "1rem 2.25rem",
          boxShadow: "7px 7px 0px var(--color-border)",
          marginBottom: "1.5rem",
          transform: "rotate(-1deg)",
          position: "relative",
          zIndex: 2,
        }}>
          <h1 className="hero-line hero-line-2 gradient-text" style={{ 
            fontSize: "clamp(1.8rem, 6.5vw, 4.5rem)", 
            fontWeight: 900, 
            lineHeight: 1, 
            margin: 0,
            textTransform: "uppercase",
            letterSpacing: "-0.01em"
          }}>
            Huzaifa Bin Hamid
          </h1>
        </div>

        <p className="hero-line hero-line-3" style={{ fontSize: "clamp(1.1rem,2.5vw,1.5rem)", color: "var(--color-text-secondary)", marginBottom: "2.5rem", fontWeight: 500 }}>
          <Typewriter words={["Full-Stack Developer", "Blockchain Engineer", "AI Integrations Dev"]} />
        </p>

        <p className="hero-line hero-line-4" style={{ fontSize: "clamp(0.95rem,1.8vw,1.1rem)", color: "var(--color-text-secondary)", maxWidth: 620, margin: "0 auto 2.5rem", lineHeight: 1.8 }}>
          Solo developer building scalable full-stack, blockchain, and AI-powered products. Open to serious opportunities, contract work, and collaborations that turn strong ideas into shipped software.
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
    </section>
  );
}
