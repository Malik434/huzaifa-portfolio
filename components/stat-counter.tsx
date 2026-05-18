"use client";
/**
 * components/stat-counter.tsx
 * Animates a number from 0 to target when scrolled into view.
 */
import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  target: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export function StatCounter({ target, suffix = "", label, duration = 1600 }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutExpo
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div
        style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 800,
          fontFamily: "var(--font-heading)",
          background: "linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          lineHeight: 1,
        }}
      >
        {count}{suffix}
      </div>
      <div
        style={{
          fontSize: "0.82rem",
          color: "var(--color-text-muted)",
          marginTop: "0.4rem",
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        {label}
      </div>
    </div>
  );
}
