"use client";

import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

type ProjectCategory = "frontend" | "backend" | "fullstack" | "automation";

type ProjectLink = {
  href: string;
  label: string;
  ariaLabel: string;
};

type Project = {
  title: string;
  tagline?: string;
  role?: string;
  desc: string;
  highlights?: Array<{
    label: string;
    text: string;
  }>;
  tags: string[];
  category: ProjectCategory;
  live?: ProjectLink;
  code?: ProjectLink;
  featured: boolean;
  spotlight?: string;
  screenshot: string;
  stamp: string;
};

const PROJECTS: Project[] = [
  {
    title: "YieldSense",
    tagline: "Hardware-Verified Autonomous Yield Harvester",
    role: "Founder & Lead Blockchain Engineer",
    desc: "Flagship live Base Mainnet application: an Aerodrome USDC/AERO autocompounder that moves DeFi automation away from centralized keepers and exposed strategy servers.",
    tags: [
      "Base Network",
      "Acurast TEEs",
      "Aerodrome",
      "Solidity",
      "EIP-712",
      "RIP-7212",
      "Next.js",
    ],
    category: "fullstack",
    live: {
      href: "https://yieldsense.huzaifamalik.tech",
      label: "Live MVP",
      ariaLabel: "YieldSense live application",
    },
    code: {
      href: "https://github.com/Malik434/yieldsense",
      label: "Code",
      ariaLabel: "YieldSense GitHub repo",
    },
    featured: true,
    spotlight:
      "https://acurast.com/blog/builder-spotlight/yieldsense/?utm_source=x&utm_medium=social&utm_campaign=builderspotlight&utm_content=blog",
    screenshot: "/yieldsense-preview.png",
    stamp: "LIVE MVP // AERODROME USDC/AERO // BASE MAINNET",
  },
  {
    title: "Task Wiser, A Web3 AI Project Management Platform",
    desc: "Engineered a high-performance project management dApp featuring real-time Firebase syncing, a Python Flask machine-learning microservice for task duration estimation, and Solidity escrow contracts for secure task completion payouts.",
    tags: [
      "React",
      "Solidity",
      "Firebase",
      "Flask",
      "Scikit-Learn",
      "Ethers.js",
      "MetaMask",
    ],
    category: "fullstack",
    live: {
      href: "https://taskwiser.huzaifamalik.tech",
      label: "Live App",
      ariaLabel: "Task Wiser live application",
    },
    code: {
      href: "https://github.com/Malik434",
      label: "Code",
      ariaLabel: "Task Wiser GitHub profile link",
    },
    featured: false,
    spotlight: "",
    screenshot: "/taskwiser-preview.png",
    stamp: "SOLIDITY ESCROW // PLATFORM ACTIVE",
  },
  {
    title: "NexiClaw",
    tagline: "Transcript-to-MeTTa Knowledge Graph Ingestion",
    desc: "Built a Gradio-based qualitative transcript ingestion tool that extracts values, frictions, and power imbalances from interviews, then synthesizes the findings into MeTTa expressions for AtomSpace-style knowledge graphs.",
    tags: [
      "Python",
      "Gradio",
      "Hugging Face Spaces",
      "MeTTa",
      "AtomSpace",
      "ASI Cloud",
      "Knowledge Graphs",
    ],
    category: "fullstack",
    live: {
      href: "https://huggingface.co/spaces/Malik434/NexiClaw",
      label: "Hugging Face Space",
      ariaLabel: "NexiClaw Hugging Face Space",
    },
    featured: false,
    spotlight: "",
    screenshot: "/NexiClaw.png",
    stamp: "GRADIO INGESTION // METTA GRAPH OUTPUT",
  },
  {
    title: "Food Fusion",
    tagline: "Modern Food Ordering Web App",
    desc: "Developed a responsive food ordering experience where customers browse fusion dishes, filter menu categories, manage a persistent cart, complete checkout, and review order confirmation details.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Zod",
      "Radix UI",
    ],
    category: "fullstack",
    live: {
      href: "https://food-fusion-swart.vercel.app/",
      label: "Live Demo",
      ariaLabel: "Food Fusion live demo",
    },
    featured: false,
    spotlight: "",
    screenshot: "/foodfusion.png",
    stamp: "NEXT.JS ORDERING FLOW // VERCEL DEPLOYED",
  },
  {
    title: "EVM Mobile Wallet Manager",
    desc: "React Native mobile-first wallet manager enabling secure private key handling, transaction signing, and real-time wallet balance tracking by integrating Infura APIs with a modular provider pattern for EVM testnets and mainnets.",
    tags: [
      "React Native",
      "Blockchain",
      "EVM",
      "Infura API",
      "Mobile Security",
    ],
    category: "frontend",
    code: {
      href: "https://github.com/Malik434/Semester-Project-MAD.-main",
      label: "Code",
      ariaLabel: "EVM Mobile Wallet Manager GitHub repo",
    },
    featured: false,
    spotlight: "",
    screenshot: "/EVM-Wallet-preview.png",
    stamp: "EVM KEYSTORE // SECURE CLIENT",
  },
  {
    title: "Portfolio Performance Analytics Engine",
    desc: "Developed a professional crypto portfolio tracker using PHP and MySQL. Compares purchase price basis with real-time market data to calculate ROI and performance metrics, featuring an XML-based data CRUD interface and a custom SQL database schema.",
    tags: [
      "PHP",
      "MySQL",
      "XML",
      "CRUD",
      "SQL Database",
      "Portfolio Analytics",
    ],
    category: "backend",
    code: {
      href: "https://github.com/Malik434",
      label: "Code",
      ariaLabel: "Portfolio Performance Analytics Engine GitHub profile link",
    },
    featured: false,
    spotlight: "",
    screenshot: "",
    stamp: "DATA INTEGRITY VERIFIED // SQL SECURE",
  },
  {
    title: "Predictive Task Inference & NLP Microservice",
    desc: "Engineered a high-throughput Python Flask REST API for predictive task allocation. Implemented Scikit-Learn regression models to forecast project duration and cost metrics with 85%+ accuracy, plus NLTK parsing for skill-based developer recommendations.",
    tags: [
      "Python",
      "Flask",
      "Scikit-Learn",
      "NLP",
      "RESTful API",
      "Machine Learning",
    ],
    category: "backend",
    code: {
      href: "https://github.com/Malik434",
      label: "Code",
      ariaLabel:
        "Predictive Task Inference and NLP Microservice GitHub profile link",
    },
    featured: false,
    spotlight: "",
    screenshot: "",
    stamp: "85%+ PREDICTIVE INFERENCE // NLP TRAINED",
  },
  {
    title: "Automated Town Hall Editor & Scheduler",
    desc: "Built an n8n workflow that automatically fetches raw weekly meeting recordings, processes and trims videos using programmatic FFmpeg scripts, and schedules distribution across social channels, cutting manual work by 90%.",
    tags: ["n8n", "FFmpeg", "YouTube API", "Workflow Automation"],
    category: "automation",
    code: {
      href: "https://github.com/Malik434",
      label: "Code",
      ariaLabel: "Automated Town Hall Editor and Scheduler GitHub profile link",
    },
    featured: false,
    spotlight: "",
    screenshot: "/VideoEditingAutomation-preview.png",
    stamp: "FFMPEG PIPELINE // n8N SCHEDULED",
  },
  {
    title: "Automated Meeting Archival System",
    desc: "Designed an automated corporate archival pipeline using n8n to capture Zoom recordings, transcripts, and metadata after each meeting and organize the outputs into a structured Google Drive hierarchy.",
    tags: ["n8n", "Zoom API", "Google Drive API", "Cloud Archiving"],
    category: "automation",
    code: {
      href: "https://github.com/Malik434",
      label: "Code",
      ariaLabel: "Automated Meeting Archival System GitHub profile link",
    },
    featured: false,
    spotlight: "",
    screenshot: "/MeetingArchival-preview.png",
    stamp: "GOOGLE CLOUD SECURE // n8N FLOW",
  },
];

const FILTERS = [
  "All",
  "Frontend",
  "Backend",
  "Full Stack",
  "Automation",
] as const;
type Filter = (typeof FILTERS)[number];

const CAT_MAP: Record<Filter, string> = {
  All: "",
  Frontend: "frontend",
  Backend: "backend",
  "Full Stack": "fullstack",
  Automation: "automation",
};

function ProjectScreenshot({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className="screenshot-placeholder"
        style={{
          width: "100%",
          height: "100%",
          minHeight: "150px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "3px dashed var(--color-border)",
          background: "var(--color-bg-primary)",
          padding: "1.25rem",
          textAlign: "center",
          transition: "all var(--transition-fast)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            fontWeight: 700,
            color: "var(--color-text-primary)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          [ Insert Preview ]
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6rem",
            color: "var(--color-text-muted)",
            marginTop: "0.3rem",
          }}
        >
          public{src}
        </span>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        border: "3px solid var(--color-border)",
        boxShadow: "4px 4px 0px var(--color-border)",
        overflow: "hidden",
        background: "#ffffff",
      }}
    >
      <img
        src={src}
        alt={alt}
        onError={() => setHasError(true)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
}

export function Projects() {
  const [active, setActive] = useState<Filter>("All");
  const filtered =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === CAT_MAP[active]);

  return (
    <section
      id="projects"
      style={{ padding: "6rem 0", background: "var(--color-bg-secondary)" }}
    >
      <div className="max-container">
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2 className="section-heading gradient-text">Featured Projects</h2>
            <div className="accent-divider" />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              justifyContent: "center",
              marginBottom: "3rem",
            }}
          >
            {FILTERS.map((filter) => (
              <button
                key={filter}
                className={`filter-tab${active === filter ? " active" : ""}`}
                onClick={() => setActive(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.25rem",
            gridAutoFlow: "dense",
          }}
        >
          {filtered.map((project, index) => (
            <AnimatedSection
              key={project.title}
              delay={index * 100}
              className={project.featured ? "lg:col-span-2" : ""}
            >
              <article
                className="card"
                style={{
                  padding: "1.75rem",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                  transform: `rotate(${index % 2 === 0 ? 0.6 : -0.7}deg)`,
                }}
              >
                {!project.featured && project.screenshot && (
                  <div
                    style={{
                      width: "100%",
                      height: "145px",
                      marginBottom: "1.25rem",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <ProjectScreenshot
                      src={project.screenshot}
                      alt={project.title}
                    />
                  </div>
                )}

                {project.featured && (
                  <span
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      background: "var(--color-accent-secondary)",
                      border: "2px solid var(--color-border)",
                      color: "#000000",
                      fontSize: "0.68rem",
                      fontWeight: 800,
                      padding: "0.25rem 0.6rem",
                      letterSpacing: "0.08em",
                      fontFamily: "var(--font-mono)",
                      boxShadow: "2px 2px 0px var(--color-border)",
                      transform: "rotate(3deg)",
                      zIndex: 10,
                    }}
                  >
                    FLAGSHIP LIVE MAINNET
                  </span>
                )}

                <div
                  className={
                    project.featured
                      ? "lg:flex lg:flex-row lg:items-stretch lg:gap-6"
                      : ""
                  }
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    gap: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      flex: project.featured ? "1 1 58%" : "1 1 auto",
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <div style={{ marginBottom: "1rem" }}>
                      <h3
                        className="glitch-hover"
                        style={{
                          fontWeight: 800,
                          color: "var(--color-text-primary)",
                          fontSize: "1.1rem",
                          marginBottom: "0.75rem",
                          paddingRight: project.featured ? "7.5rem" : 0,
                        }}
                      >
                        {project.title}
                      </h3>
                      {"tagline" in project && project.tagline && (
                        <p
                          style={{
                            fontFamily: "var(--font-mono)",
                            color: "var(--color-accent-primary)",
                            fontSize: "0.78rem",
                            fontWeight: 800,
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            marginBottom: "0.45rem",
                          }}
                        >
                          {project.tagline}
                        </p>
                      )}
                      {"role" in project && project.role && (
                        <p
                          style={{
                            color: "var(--color-text-primary)",
                            fontSize: "0.82rem",
                            fontWeight: 800,
                            marginBottom: "0.6rem",
                          }}
                        >
                          Role: {project.role}
                        </p>
                      )}
                      <p
                        style={{
                          color: "var(--color-text-secondary)",
                          fontSize: "0.9rem",
                          lineHeight: 1.65,
                        }}
                      >
                        {project.desc}
                      </p>
                      {"highlights" in project && project.highlights && (
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns:
                              "repeat(auto-fit, minmax(180px, 1fr))",
                            gap: "0.75rem",
                            marginTop: "1rem",
                          }}
                        >
                          {project.highlights.map((item) => (
                            <div
                              key={item.label}
                              style={{
                                border: "2px solid var(--color-border)",
                                padding: "0.75rem",
                                background: "var(--color-bg-primary)",
                              }}
                            >
                              <p
                                style={{
                                  fontFamily: "var(--font-mono)",
                                  fontSize: "0.68rem",
                                  fontWeight: 900,
                                  color: "var(--color-accent-primary)",
                                  textTransform: "uppercase",
                                  letterSpacing: "0.08em",
                                  marginBottom: "0.35rem",
                                }}
                              >
                                {item.label}
                              </p>
                              <p
                                style={{
                                  color: "var(--color-text-secondary)",
                                  fontSize: "0.78rem",
                                  lineHeight: 1.5,
                                }}
                              >
                                {item.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div
                      style={{
                        marginTop: "auto",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "0.4rem",
                            marginBottom: "1rem",
                          }}
                        >
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="tag-pill"
                              style={{ fontSize: "0.72rem" }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            gap: "0.75rem",
                            alignItems: "center",
                            flexWrap: "wrap",
                          }}
                        >
                          {project.code && (
                            <a
                              href={project.code.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-outline"
                              aria-label={project.code.ariaLabel}
                              style={{
                                textDecoration: "none",
                                padding: "0.4rem 0.8rem",
                                fontSize: "0.75rem",
                                minHeight: "auto",
                              }}
                            >
                              <Github size={14} /> {project.code.label}
                            </a>
                          )}
                          {project.live && (
                            <a
                              href={project.live.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-primary"
                              aria-label={project.live.ariaLabel}
                              style={{
                                textDecoration: "none",
                                padding: "0.4rem 0.8rem",
                                fontSize: "0.75rem",
                                minHeight: "auto",
                              }}
                            >
                              <ExternalLink size={14} /> {project.live.label}
                            </a>
                          )}
                          {project.spotlight && (
                            <a
                              href={project.spotlight}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-primary"
                              style={{
                                textDecoration: "none",
                                padding: "0.4rem 0.8rem",
                                fontSize: "0.72rem",
                                minHeight: "auto",
                                background: "var(--color-accent-secondary)",
                                color: "#000000",
                              }}
                              aria-label="Acurast Builder Spotlight"
                            >
                              Spotlight
                            </a>
                          )}
                        </div>
                      </div>

                      {project.stamp && (
                        <div
                          style={{
                            paddingTop: "0.85rem",
                            borderTop: "2px dotted var(--color-border)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "0.75rem",
                            marginTop: "0.25rem",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.65rem",
                              fontWeight: 700,
                              color: "var(--color-accent-primary)",
                              textTransform: "uppercase",
                              letterSpacing: "0.08em",
                            }}
                          >
                            {project.stamp}
                          </span>
                          <span
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.62rem",
                              color: "var(--color-text-muted)",
                            }}
                          >
                            [ SECURE ]
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {project.featured && (
                    <div
                      style={{
                        flex: "1 1 42%",
                        minWidth: "200px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <ProjectScreenshot
                        src={project.screenshot || ""}
                        alt={project.title}
                      />
                    </div>
                  )}
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
