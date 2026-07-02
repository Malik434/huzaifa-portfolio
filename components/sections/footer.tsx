"use client";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="brutalist-footer">
      <div
        className="max-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
        }}
      >
        <div>
          <p
            style={{
              color: "var(--color-text-primary)",
              fontSize: "0.875rem",
              fontWeight: 700,
              fontFamily: "var(--font-mono)",
              textTransform: "uppercase",
            }}
          >
            © {new Date().getFullYear()}{" "}
            <span style={{ color: "var(--color-accent-primary)" }}>
              Huzaifa Bin Hamid
            </span>
            .
          </p>
        </div>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          {[
            {
              href: "https://github.com/Malik434",
              icon: <Github size={18} />,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/malikhuzaifa434/",
              icon: <Linkedin size={18} />,
              label: "LinkedIn",
            },
            {
              href: "https://twitter.com/ruhn_r",
              icon: <Twitter size={18} />,
              label: "Twitter / X",
            },
            {
              href: "mailto:malikhuzaifa043@gmail.com",
              icon: <Mail size={18} />,
              label: "Email",
            },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              aria-label={label}
              style={{
                textDecoration: "none",
                padding: "0.5rem",
                minWidth: "40px",
                minHeight: "40px",
                justifyContent: "center",
              }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
