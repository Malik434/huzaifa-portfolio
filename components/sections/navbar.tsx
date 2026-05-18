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
    const observers: IntersectionObserver[] = [];
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) setActive(id);
        },
        { threshold: 0.3, rootMargin: "-15% 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* DESKTOP: Floating Left Glass Dock */}
      <nav
        className="hidden md:flex"
        style={{
          position: "fixed",
          left: "2rem",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 50,
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          padding: "1.75rem 0.85rem",
          borderRadius: "32px",
          background: "rgba(10, 10, 15, 0.45)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Creative Top Logo Indicator */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "var(--color-bg-tertiary)",
            border: "1px solid var(--color-border)",
            color: "var(--color-accent-primary)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.85rem",
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "0.75rem",
            transition: "all var(--transition-smooth)",
            boxShadow: "0 0 12px var(--color-accent-glow)",
          }}
          className="logo-btn"
          aria-label="Scroll to top"
        >
          H
        </button>

        {/* Separator */}
        <div style={{ width: "24px", height: "1px", background: "var(--color-border)", marginBottom: "0.5rem" }} />

        {/* Nav Links Stack */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {LINKS.map(({ label, id, icon: Icon }) => {
            const isActive = active === id;
            return (
              <div key={id} style={{ position: "relative" }} className="nav-dock-item">
                <button
                  onClick={() => scrollTo(id)}
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: "50%",
                    border: "none",
                    background: isActive ? "var(--color-accent-primary)" : "transparent",
                    color: isActive ? "#ffffff" : "var(--color-text-secondary)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all var(--transition-fast)",
                  }}
                  className="dock-icon-button"
                  aria-label={`Go to ${label}`}
                >
                  <Icon size={20} strokeWidth={2.2} />
                </button>

                {/* Floating Tooltip Label */}
                <span className="dock-tooltip">
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </nav>

      {/* MOBILE: Floating Bottom Glass Dock */}
      <nav
        className="flex md:hidden"
        style={{
          position: "fixed",
          bottom: "1.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 50,
          flexDirection: "row",
          alignItems: "center",
          gap: "1.25rem",
          padding: "0.65rem 1.25rem",
          borderRadius: "999px",
          background: "rgba(10, 10, 15, 0.65)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "0 15px 35px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          width: "max-content",
          maxWidth: "90vw",
        }}
      >
        {/* Mobile Mini Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.06)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            color: "var(--color-accent-primary)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.85rem",
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Scroll to top"
        >
          H
        </button>

        {/* Separator */}
        <div style={{ width: "1px", height: "20px", background: "rgba(255,255,255,0.15)" }} />

        {/* Horizontal Mobile Buttons */}
        <div style={{ display: "flex", gap: "0.65rem" }}>
          {LINKS.map(({ label, id, icon: Icon }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  border: "none",
                  background: isActive ? "var(--color-accent-primary)" : "transparent",
                  color: isActive ? "#ffffff" : "var(--color-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all var(--transition-fast)",
                }}
                aria-label={`Go to ${label}`}
              >
                <Icon size={18} strokeWidth={2.2} />
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
