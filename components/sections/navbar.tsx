"use client";
import { useEffect, useState } from "react";
import { User, Cpu, FolderGit, Briefcase, Mail } from "lucide-react";

const LINKS = [
  { label: "About", id: "about", icon: User },
  { label: "Skills", id: "skills", icon: Cpu },
  { label: "Projects", id: "projects", icon: FolderGit },
  { label: "Experience", id: "experience", icon: Briefcase },
  { label: "Contact", id: "contact", icon: Mail },
];

export function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      
      for (const link of LINKS) {
        const el = document.getElementById(link.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        // A section is active if the 35% mark from top of viewport lies within its boundaries
        const centerOffset = window.innerHeight * 0.35;
        if (rect.top <= centerOffset && rect.bottom >= centerOffset) {
          currentSection = link.id;
          break;
        }
      }

      if (currentSection) {
        setActive(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial call to set correct highlight on load
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* 📰 TOP INFINITE SCROLLING TICKER */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "2.5rem",
          background: "var(--color-text-primary)", /* Solid ink black */
          borderBottom: "3px solid var(--color-accent-primary)", /* Tangerine rail */
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          boxShadow: "0 4px 0px rgba(0,0,0,0.15)",
        }}
      >
        <div className="ticker-container" style={{ display: "flex", whiteSpace: "nowrap" }}>
          <div className="ticker-text">
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "var(--color-accent-secondary)", /* Neon Yellow print */
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  paddingRight: "3rem",
                  display: "inline-block",
                }}
              >
                ✦ HUZAIFA BIN HAMID // WEB3 & AUTOMATION ENGINEER ✦ COMSATS CS GRADUATE (JAN 2026) ✦ SHIPPED YIELDSENSE ON BASE MAINNET ✦ AVAILABLE FOR INTERNSHIPS & CONTRACTS ✦
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── DESKTOP: Brutalist Left Sidebar Dock ── */}
      <nav
        className="hidden md:flex brutalist-sidebar"
        style={{
          position: "fixed",
          left: "2rem",
          top: "calc(50% + 1.25rem)",
          transform: "translateY(-50%)",
          zIndex: 50,
          flexDirection: "column",
          alignItems: "center",
          gap: "1.25rem",
          padding: "1.75rem 0.75rem",
          borderRadius: "0px", /* Brutalist sharp */
          background: "var(--color-bg-secondary)", /* Cream paper shaded */
          border: "3px solid var(--color-border)", /* Bold ink outline */
          boxShadow: "5px 5px 0px var(--color-border)", /* Flat offset drop shadow */
          transition: "all var(--transition-smooth)",
        }}
      >
        {/* Editorial Stamp Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            width: 44,
            height: 44,
            borderRadius: "0px",
            background: "var(--color-accent-primary)", /* Tangerine stamp */
            border: "2px solid var(--color-border)",
            color: "#ffffff",
            fontFamily: "var(--font-heading)",
            fontSize: "1.1rem",
            fontWeight: 900,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "0.5rem",
            transition: "all var(--transition-fast)",
            boxShadow: "2px 2px 0px var(--color-border)",
          }}
          className="brutalist-logo-btn"
          aria-label="Scroll to top"
        >
          H
        </button>

        {/* Separator */}
        <div style={{ width: "24px", height: "3px", borderTop: "2px dashed var(--color-border)", marginBottom: "0.5rem" }} />

        {/* Nav Links Stack */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
          {LINKS.map(({ label, id, icon: Icon }) => {
            const isActive = active === id;
            return (
              <div key={id} style={{ position: "relative" }} className="nav-dock-item">
                <button
                  onClick={() => scrollTo(id)}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "0px", /* Brutalist sharp */
                    border: "2px solid var(--color-border)",
                    background: isActive ? "var(--color-accent-secondary)" : "#ffffff", /* Neon Yellow / White print */
                    color: "var(--color-text-primary)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all var(--transition-fast)",
                    boxShadow: isActive ? "3px 3px 0px var(--color-border)" : "1px 1px 0px var(--color-border)",
                    transform: isActive ? "translate(-2px, -2px)" : "none",
                  }}
                  className="dock-icon-button"
                  aria-label={`Go to ${label}`}
                >
                  <Icon size={18} strokeWidth={2.5} />
                </button>

                {/* Floating Monospaced Tooltip */}
                <span className="dock-tooltip">
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </nav>

      {/* ── MOBILE: Floating Bottom Brutalist Dock ── */}
      <nav
        className="flex md:hidden"
        style={{
          position: "fixed",
          bottom: "1.25rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 50,
          flexDirection: "row",
          alignItems: "center",
          gap: "0.75rem",
          padding: "0.5rem 0.85rem",
          borderRadius: "0px", /* Brutalist sharp */
          background: "var(--color-bg-secondary)", /* Shaded paper */
          border: "3px solid var(--color-border)", /* Ink outline */
          boxShadow: "4px 4px 0px var(--color-border)", /* Solid drop shadow */
          width: "max-content",
          maxWidth: "94vw",
        }}
      >
        {/* Mobile Mini Stamp */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            width: 44,
            height: 44,
            borderRadius: "0px",
            background: "var(--color-accent-primary)", /* Tangerine */
            border: "2px solid var(--color-border)",
            color: "#ffffff",
            fontFamily: "var(--font-heading)",
            fontSize: "1.05rem",
            fontWeight: 900,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "2px 2px 0px var(--color-border)",
          }}
          aria-label="Scroll to top"
        >
          H
        </button>

        {/* Separator */}
        <div style={{ width: "3px", height: "24px", borderLeft: "2px dashed var(--color-border)", margin: "0 0.25rem" }} />

        {/* Horizontal Mobile Buttons */}
        <div style={{ display: "flex", gap: "0.4rem" }}>
          {LINKS.map(({ label, id, icon: Icon }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "0px",
                  border: "2px solid var(--color-border)",
                  background: isActive ? "var(--color-accent-secondary)" : "#ffffff", /* Neon yellow highlight */
                  color: "var(--color-text-primary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: isActive ? "2px 2px 0px var(--color-border)" : "1px 1px 0px var(--color-border)",
                  transform: isActive ? "translate(-1px, -1px)" : "none",
                }}
                aria-label={`Go to ${label}`}
              >
                <Icon size={18} strokeWidth={2.5} />
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
