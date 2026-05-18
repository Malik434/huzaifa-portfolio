"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = ["About","Skills","Projects","Experience","Contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    LINKS.forEach((id) => {
      const el = document.getElementById(id.toLowerCase());
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActive(id.toLowerCase()); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? "rgba(10,10,15,0.85)" : "rgba(10,10,15,0.6)",
        backdropFilter: "blur(16px)",
        borderBottom: `1px solid var(--color-border)`,
        transition: "all var(--transition-smooth)",
        padding: scrolled ? "0.6rem 0" : "1rem 0",
      }}
    >
      <div className="max-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: "1.2rem",
            color: "var(--color-accent-primary)", background: "none", border: "none",
            cursor: "pointer", letterSpacing: "-0.02em",
          }}
          aria-label="Back to top"
        >
          &lt;HBH /&gt;
        </button>

        <div style={{ gap: "2rem" }} className="hidden md:flex">
          {LINKS.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l.toLowerCase())}
              className={`nav-link${active === l.toLowerCase() ? " active" : ""}`}
              aria-label={`Go to ${l} section`}
            >
              {l}
            </button>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "var(--color-text-primary)", padding: "0.5rem", minHeight: 44, minWidth: 44,
              alignItems: "center", justifyContent: "center", display: "flex",
            }}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          style={{
            background: "var(--color-bg-secondary)", borderTop: `1px solid var(--color-border)`,
            padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.25rem",
          }}
        >
          {LINKS.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l.toLowerCase())}
              style={{
                padding: "0.75rem 0", background: "none", border: "none",
                color: active === l.toLowerCase() ? "var(--color-accent-primary)" : "var(--color-text-secondary)",
                fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: 500,
                textAlign: "left", cursor: "pointer", minHeight: 44, width: "100%",
              }}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
