"use client";
/**
 * components/typewriter.tsx
 * Cycles through an array of strings with a typewriter effect.
 */
import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  speed?: number;       // ms per character
  deleteSpeed?: number; // ms per character on delete
  pause?: number;       // ms to wait at full word
}

export function Typewriter({ words, speed = 80, deleteSpeed = 45, pause = 1800 }: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words, speed, deleteSpeed, pause]);

  return (
    <span>
      {displayed}
      <span
        style={{
          display: "inline-block",
          width: "2px",
          height: "1.1em",
          background: "var(--color-accent-primary)",
          marginLeft: "2px",
          verticalAlign: "text-bottom",
          animation: "blink 1s step-end infinite",
        }}
      />
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </span>
  );
}
