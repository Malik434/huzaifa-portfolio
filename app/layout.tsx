/**
 * layout.tsx
 * Updated: improved metadata, Google Fonts preconnect, SEO tags
 */
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Huzaifa Bin Hamid — Brutalist Tech Portfolio",
  description:
    "CS graduate and Automation & Web3 Engineer. Shipped YieldSense DeFi protocol on Base inside Acurast TEEs. Specialized in n8n automation, Solidity, and React.",
  keywords: ["Huzaifa Bin Hamid", "Automation Engineer", "n8n", "Web3 Developer", "Solidity", "Next.js", "Portfolio"],
  authors: [{ name: "Huzaifa Bin Hamid" }],
  openGraph: {
    title: "Huzaifa Bin Hamid — Brutalist Tech Portfolio",
    description: "Automation & Web3 Engineer | CS Graduate from COMSATS",
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
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
