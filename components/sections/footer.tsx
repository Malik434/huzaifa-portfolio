"use client";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer style={{
      background: "var(--color-bg-primary)",
      borderTop: "1px solid var(--color-border)",
      padding: "2.5rem 0",
    }}>
      <div className="max-container" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
        <div>
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>
            © {new Date().getFullYear()} <span style={{ color: "var(--color-text-secondary)" }}>Huzaifa Bin Hamid</span>. All rights reserved.
          </p>
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.8rem", marginTop: "0.2rem" }}>
            Crafted with precision & passion
          </p>
        </div>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          {[
            { href: "https://github.com/Malik434", icon: <Github size={18} />, label: "GitHub" },
            { href: "https://www.linkedin.com/in/malikhuzaifa434/", icon: <Linkedin size={18} />, label: "LinkedIn" },
            { href: "https://twitter.com/ruhn_r", icon: <Twitter size={18} />, label: "Twitter / X" },
            { href: "mailto:malikhuzaifa043@gmail.com", icon: <Mail size={18} />, label: "Email" },
          ].map(({ href, icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              className="social-icon-btn" aria-label={label} style={{ textDecoration: "none" }}>
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
