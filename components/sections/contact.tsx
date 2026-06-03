"use client";
import { useState, useRef } from "react";
import { Mail, Linkedin, Github, MapPin, Send, Twitter } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      formRef.current?.reset();
    }, 1800);
  };

  return (
    <section id="contact" style={{ padding: "6rem 0", background: "var(--color-bg-secondary)" }}>
      <div className="max-container">
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 className="section-heading gradient-text">Let&apos;s Connect</h2>
            <div className="accent-divider" />
            <p className="section-subheading" style={{ maxWidth: 560, margin: "1.5rem auto 0" }}>
              Open to new opportunities, contract builds, and product collaborations. Let&apos;s discuss how I can help turn your idea into reliable, production-ready software.
            </p>
          </div>
        </AnimatedSection>

        <div style={{ gap: "4rem", alignItems: "start" }} className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left — info */}
          <AnimatedSection direction="left">
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                { icon: <Mail size={20} />, label: "Email", value: "malikhuzaifa043@gmail.com", href: "mailto:malikhuzaifa043@gmail.com" },
                { icon: <MapPin size={20} />, label: "Location", value: "Lahore, Pakistan", href: "" },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="card" style={{ padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ color: "var(--color-accent-primary)", flexShrink: 0 }}>{icon}</div>
                  <div>
                    <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.15rem" }}>{label}</p>
                    {href ? (
                      <a href={href} style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem", textDecoration: "none" }}>{value}</a>
                    ) : (
                      <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
                {[
                  { href: "https://github.com/Malik434", icon: <Github size={18} />, label: "GitHub" },
                  { href: "https://www.linkedin.com/in/malikhuzaifa434/", icon: <Linkedin size={18} />, label: "LinkedIn" },
                  { href: "https://twitter.com/ruhn_r", icon: <Twitter size={18} />, label: "Twitter / X" },
                  { href: "mailto:malikhuzaifa043@gmail.com", icon: <Mail size={18} />, label: "Email" },
                ].map(({ href, icon, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="btn-outline" aria-label={label} style={{ textDecoration: "none", padding: "0.6rem", minWidth: "44px", minHeight: "44px", justifyContent: "center" }}>
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right — form */}
          <AnimatedSection direction="right" delay={100}>
            {sent ? (
              <div className="card" style={{ padding: "3rem", textAlign: "center" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
                <h3 style={{ color: "var(--color-text-primary)", fontWeight: 700, marginBottom: "0.5rem" }}>Message Sent!</h3>
                <p style={{ color: "var(--color-text-secondary)" }}>Thanks for reaching out. I&apos;ll get back to you soon.</p>
                <button onClick={() => setSent(false)} className="btn-outline" style={{ marginTop: "1.5rem" }}>Send Another</button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div className="form-field">
                  <input type="text" id="name" placeholder=" " required aria-label="Your name" />
                  <label htmlFor="name">Your Name</label>
                </div>
                <div className="form-field">
                  <input type="email" id="email" placeholder=" " required aria-label="Your email" />
                  <label htmlFor="email">Email Address</label>
                </div>
                <div className="form-field">
                  <input type="text" id="subject" placeholder=" " required aria-label="Subject" />
                  <label htmlFor="subject">Subject</label>
                </div>
                <div className="form-field">
                  <textarea id="message" placeholder=" " required rows={5} aria-label="Your message" />
                  <label htmlFor="message">Message</label>
                </div>
                <button type="submit" className="btn-primary" disabled={loading} style={{ justifyContent: "center" }}>
                  {loading ? (
                    <><span className="spinner" /> Sending…</>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
