/**
 * layout.tsx
 * Updated: improved metadata, Google Fonts preconnect, SEO tags
 */
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Huzaifa Bin Hamid — Full-Stack & Blockchain Developer",
  description:
    "CS student and software developer specializing in blockchain, AI integration, and full-stack web apps. Currently seeking internship opportunities.",
  keywords: ["Huzaifa Bin Hamid", "Full Stack Developer", "Blockchain", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Huzaifa Bin Hamid" }],
  openGraph: {
    title: "Huzaifa Bin Hamid — Developer Portfolio",
    description: "Full-Stack & Blockchain Developer | CS Student at COMSATS University",
    type: "website",
  },
  other: {
    "base:app_id": "69f692b1ffffb1a0ba553eff",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
