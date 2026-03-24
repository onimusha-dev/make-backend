"use client";
import { useState } from "react";
import Link from "next/link";

// ------- Icons (inline svg) -------
const IconCopy = () => (
    <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
);
const IconCheck = () => (
    <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#5eead4"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polyline points="20 6 9 17 4 12" />
    </svg>
);
const IconArrow = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
);
const IconGithub = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
);

const FEATURES = [
    {
        slug: "git",
        title: "One Command Setup",
        desc: "Prompts → project scaffolded, deps installed, git initialized. Done.",
    },
    {
        slug: "nodedotjs",
        title: "Secure by Default",
        desc: "Helmet + Compression pre-wired. Security headers on every response, zero config.",
    },
    {
        slug: "mongodb",
        title: "Any Database",
        desc: "MongoDB via Mongoose or PostgreSQL via node-postgres, with connection managers.",
    },
    {
        slug: "vitest",
        title: "Tests Included",
        desc: "Vitest + Supertest configured. A working health-check test ships with every project.",
    },
    {
        slug: "typescript",
        title: "TypeScript First",
        desc: "Typed env vars via Zod, tsx in dev, tsc for production. Or vanilla JS if you prefer.",
    },
    {
        slug: "eslint",
        title: "Modern Tooling",
        desc: "ESLint (flat config) + Prettier + EditorConfig — configured and ready.",
    },
    {
        slug: "pnpm",
        title: "Any Package Manager",
        desc: "npm, pnpm, yarn, or bun — your choice is remembered for next time.",
    },
    {
        slug: "express",
        title: "Clean Architecture",
        desc: "controllers · routes · middlewares · models · utils — a real folder structure.",
    },
    {
        slug: "github",
        title: "Git Ready",
        desc: "git init + .gitignore auto-generated. Push-ready from the first scaffold.",
    },
];

const STACK = ["EXPRESS", "HONO", "TYPESCRIPT", "MONGODB", "POSTGRESQL"];

export default function LandingPage() {
    const [copied, setCopied] = useState(false);

    function copy() {
        navigator.clipboard.writeText("npx make-backend");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .lp-root {
          min-height: 100vh;
          background: #0f0f0f;
          color: #e8e8e8;
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        /* ─── NAV ─── */
        .lp-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(15,15,15,0.85);
          backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .lp-nav-inner { width: 100%; max-width: 1400px; padding: 0 32px; display: flex; align-items: center; }
        .lp-nav-logo { display: flex; align-items: center; gap: 12px; text-decoration: none; color: #f4f4f5; font-weight: 700; }
        .lp-nav-logo-icon { width: 32px; height: 32px; background: #5eead4; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-style: italic; font-weight: 900; color: #0c0c0c; box-shadow: 0 0 12px rgba(94,234,212,0.25); }
        .lp-nav-links { display: flex; align-items: center; gap: 8px; margin-left: auto; }
        .lp-nav-link { color: #878787; text-decoration: none; font-size: 14px; font-weight: 500; padding: 8px 16px; border-radius: 8px; transition: color .15s, background .15s; }
        .lp-nav-link:hover { color: #f4f4f5; background: rgba(255,255,255,0.05); }
        .lp-nav-cta { background: #5eead4; color: #0c0c0c; font-weight: 700; font-size: 13px; padding: 8px 20px; border-radius: 9px; text-decoration: none; margin-left: 12px; }

        /* ─── HERO ─── */
        .lp-hero {
          height: 100vh; min-height: 850px;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          text-align: center; padding: 0 24px;
          position: relative; overflow: hidden;
        }
        .lp-hero-grid { position: absolute; inset: 0; background-image: radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px); background-size: 40px 40px; }
        .lp-hero-glow {
          position: absolute; width: 1000px; height: 1000px;
          top: 50%; left: 50%; transform: translate(-50%, -55%);
          background: radial-gradient(circle, rgba(94,234,212,0.12) 0%, transparent 70%);
          animation: lp-pulse 8s ease-in-out infinite alternate;
          pointer-events: none;
        }
        @keyframes lp-pulse {
          0% { opacity: 0.6; transform: translate(-50%, -55%) scale(1); }
          100% { opacity: 1; transform: translate(-50%, -55%) scale(1.1); }
        }
        .lp-hero-inner { position: relative; max-width: 1000px; width: 100%; top: -30px; }
        .lp-badge { display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px; border-radius: 999px; border: 1px solid rgba(94,234,212,0.2); background: rgba(94,234,212,0.05); color: #5eead4; font-size: 12px; font-weight: 600; margin-bottom: 32px; }
        .lp-h1 {
          font-size: clamp(3.5rem, 10vw, 8.5rem);
          font-weight: 1000;
          letter-spacing: -0.06em;
          line-height: 0.95;
          margin-bottom: 32px;
          color: #f4f4f5;
        }
        .lp-h1-accent {
          background: linear-gradient(135deg, #5eead4 0%, #34d399 50%, #60a5fa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 30px rgba(94,234,212,0.15));
        }
        .lp-sub { font-size: clamp(1rem, 2.5vw, 1.25rem); color: #878787; line-height: 1.6; max-width: 580px; margin: 0 auto 56px; }

        /* CTAs */
        .lp-ctas { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 16px; margin-bottom: 72px; }
        .lp-btn-primary { background: #5eead4; color: #0c0c0c; font-weight: 800; font-size: 15px; padding: 14px 32px; border-radius: 12px; text-decoration: none; transition: background .15s, transform .1s; box-shadow: 0 4px 24px rgba(94,234,212,0.2); }
        .lp-btn-primary:hover { background: #2dd4bf; transform: translateY(-2px); }
        .lp-command { display: inline-flex; align-items: center; gap: 12px; background: #050505; border: 1px solid #222; border-radius: 12px; padding: 14px 24px; font-family: ui-monospace, monospace; font-size: 14px; cursor: pointer; color: #71717a; transition: border-color .15s; }
        .lp-command:hover { border-color: #5eead4; }
        .lp-command-text { color: #e4e4e7; }

        /* Tech stack pills */
        .lp-stack { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }
        .lp-stack-pill { font-size: 11px; font-weight: 800; letter-spacing: 0.15em; color: #2e2e2e; padding: 6px 14px; border-radius: 6px; border: 1px solid #222; }

        /* ─── FEATURES ─── */
        .lp-features { padding: 140px 24px; border-top: 1px solid #1a1a1a; }
        .lp-features-inner { max-width: 1200px; margin: 0 auto; }
        .lp-section-title { font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 900; letter-spacing: -0.04em; color: #f4f4f5; text-align: center; margin-bottom: 80px; }
        .lp-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px; }
        .lp-card { background: #141414; border: 1px solid #1f1f1f; padding: 40px; border-radius: 20px; transition: border-color .2s, transform .2s; }
        .lp-card:hover { border-color: #5eead444; transform: translateY(-4px); }
        .lp-card-logo { width: 32px; height: 32px; margin-bottom: 24px; filter: grayscale(1) brightness(1.5); transition: filter 0.2s; }
        .lp-card:hover .lp-card-logo { filter: none; }
        .lp-card-title { font-size: 16px; font-weight: 800; color: #f4f4f5; margin-bottom: 12px; }
        .lp-card-desc { font-size: 15px; color: #71717a; line-height: 1.6; }

        /* ─── FOOTER ─── */
        .lp-footer { border-top: 1px solid #1a1a1a; padding: 60px 32px; text-align: center; }
        .lp-footer-logo { font-size: 16px; font-weight: 800; color: #3f3f46; margin-bottom: 12px; display: block; text-decoration: none; }
        .lp-footer-links { display: flex; justify-content: center; gap: 32px; }
        .lp-footer-link { font-size: 14px; color: #3f3f46; text-decoration: none; transition: color .15s; }
        .lp-footer-link:hover { color: #f4f4f5; }
      `}</style>

            <div className="lp-root mt-24">
                <nav className="lp-nav">
                    <div className="lp-nav-inner">
                        <Link href="/" className="lp-nav-logo">
                            <div className="lp-nav-logo-icon">m</div>
                            make-backend
                        </Link>
                        <div className="lp-nav-links">
                            <Link href="/docs" className="lp-nav-link">
                                Documentation
                            </Link>
                            <a
                                href="https://github.com/onimusha-dev/make-backend"
                                target="_blank"
                                className="lp-nav-link"
                            >
                                GitHub
                            </a>
                            {/* <Link href="/docs" className="lp-nav-cta">Get Started</Link> */}
                        </div>
                    </div>
                </nav>

                <section className="lp-hero">
                    <div className="lp-hero-grid" />
                    <div className="lp-hero-glow" />
                    <div className="lp-hero-inner">
                        <div className="lp-badge">v1.1.0 — Now Live</div>
                        <h1 className="lp-h1">
                            The API
                            <br />
                            <span className="lp-h1-accent">Foundation.</span>
                        </h1>
                        <p className="lp-sub">
                            One command to scaffold a production-ready backend — Express or Hono,
                            MongoDB or Postgres, fully configured.
                        </p>
                        <div className="lp-ctas">
                            <Link href="/docs" className="lp-btn-primary flex items-center gap-2">
                                <span>View Docs </span>
                                <IconArrow />
                            </Link>
                            <div className="lp-command" onClick={copy}>
                                <span style={{ color: "#5eead4" }}>$</span>
                                <span className="lp-command-text">npx make-backend</span>
                                <span style={{ display: "flex" }}>
                                    {copied ? <IconCheck /> : <IconCopy />}
                                </span>
                            </div>
                        </div>
                        <div className="lp-stack">
                            {STACK.map((s) => (
                                <span key={s} className="lp-stack-pill">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="lp-features" id="features">
                    <div className="lp-features-inner">
                        <h2 className="lp-section-title">
                            Everything configured,
                            <br />
                            <span className="lp-h1-accent">nothing to bikeshed.</span>
                        </h2>
                        <div className="lp-grid">
                            {FEATURES.map((f) => (
                                <div key={f.title} className="lp-card">
                                    <img
                                        src={`https://cdn.simpleicons.org/${f.slug}/5eead4`}
                                        className="lp-card-logo"
                                        alt={f.title}
                                    />
                                    <h3 className="lp-card-title">{f.title}</h3>
                                    <p className="lp-card-desc">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <footer className="lp-footer">
                    <Link href="/" className="lp-footer-logo">
                        make-backend
                    </Link>
                    <div className="lp-footer-links">
                        <a
                            href="https://github.com/onimusha-dev/make-backend"
                            target="_blank"
                            className="lp-footer-link"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.npmjs.com/package/make-backend"
                            target="_blank"
                            className="lp-footer-link"
                        >
                            npm
                        </a>
                        <Link href="/docs" className="lp-footer-link">
                            Docs
                        </Link>
                    </div>
                </footer>
            </div>
        </>
    );
}
