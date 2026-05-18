"use client";
/**
 * components/animated-section.tsx
 * Upgraded: CSS scroll-reveal class pattern with IntersectionObserver.
 * Supports staggered delays and multiple animation directions.
 */
import type React from "react";
import { useEffect, useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
  threshold?: number;
}

export function AnimatedSection({
  children,
  className = "",
  direction = "up",
  delay = 0,
  threshold = 0.15,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const revealClass =
      direction === "left"
        ? "scroll-reveal-left"
        : direction === "right"
        ? "scroll-reveal-right"
        : "scroll-reveal";

    el.classList.add(revealClass);
    if (delay) el.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [direction, delay, threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
