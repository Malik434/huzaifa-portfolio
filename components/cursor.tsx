"use client";
import { useEffect } from "react";

export function CustomCursor() {
  useEffect(() => {
    const dot  = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    if (!dot || !ring) return;

    let rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => {
      dot.style.left  = e.clientX + "px";
      dot.style.top   = e.clientY + "px";
      rx += (e.clientX - rx) * 0.12;
      ry += (e.clientY - ry) * 0.12;
      ring.style.left = rx + "px";
      ring.style.top  = ry + "px";
    };

    let raf: number;
    const smooth = () => { raf = requestAnimationFrame(smooth); };
    smooth();
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div id="cursor-dot" />
      <div id="cursor-ring" />
    </>
  );
}

export function BackToTop() {
  useEffect(() => {
    const btn = document.getElementById("back-to-top");
    if (!btn) return;
    const onScroll = () => {
      if (window.scrollY > 300) btn.classList.add("visible");
      else btn.classList.remove("visible");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button id="back-to-top" aria-label="Back to top">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </button>
  );
}
