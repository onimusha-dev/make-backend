"use client";
import { useState } from "react";
import { Check, Copy, Terminal, ArrowDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    const [copied, setCopied] = useState(false);
    const command = "npx make-backend";

    const handleCopy = () => {
        navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                padding: "0 24px",
            }}
        >
            {/* Grid */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                    backgroundImage:
                        "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%)",
                    maskImage:
                        "radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%)",
                    pointerEvents: "none",
                }}
            />

            {/* Ambient glow */}
            <div
                className="animate-glow"
                style={{
                    position: "absolute",
                    width: "700px",
                    height: "700px",
                    borderRadius: "50%",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -60%)",
                    background:
                        "radial-gradient(circle, rgba(94,234,212,0.07) 0%, transparent 70%)",
                    pointerEvents: "none",
                    zIndex: 0,
                }}
            />

            {/* Content */}
            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    maxWidth: "680px",
                    width: "100%",
                    textAlign: "center",
                    margin: "0 auto",
                }}
            >
                {/* Badge */}
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "4px 12px",
                        borderRadius: "999px",
                        border: "1px solid rgba(94,234,212,0.2)",
                        background: "rgba(94,234,212,0.05)",
                        color: "#5eead4",
                        fontSize: "12px",
                        fontWeight: 600,
                        marginBottom: "28px",
                    }}
                >
                    <span
                        style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: "#5eead4",
                            boxShadow: "0 0 6px #5eead4",
                            flexShrink: 0,
                        }}
                    />
                    v1.1.0 — Now Live
                </div>

                {/* Heading */}
                <h1
                    style={{
                        fontSize: "clamp(3rem, 8vw, 5.5rem)",
                        fontWeight: 900,
                        lineHeight: 1.05,
                        letterSpacing: "-0.03em",
                        color: "#e8e8e8",
                        marginBottom: "20px",
                    }}
                >
                    The API{" "}
                    <span
                        style={{
                            background: "linear-gradient(135deg, #5eead4 0%, #60a5fa 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Foundation.
                    </span>
                </h1>

                {/* Sub */}
                <p
                    style={{
                        color: "#878787",
                        fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
                        lineHeight: 1.65,
                        marginBottom: "36px",
                        maxWidth: "480px",
                        margin: "0 auto 36px",
                    }}
                >
                    One command to scaffold a production-ready backend — Express or Hono, JS or TS,
                    MongoDB or Postgres, all wired up.
                </p>

                {/* CTAs */}
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "12px",
                        marginBottom: "48px",
                    }}
                >
                    <Link
                        href="/docs"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            background: "#5eead4",
                            color: "#0f0f0f",
                            padding: "10px 22px",
                            borderRadius: "8px",
                            fontWeight: 700,
                            fontSize: "14px",
                            textDecoration: "none",
                            transition: "background 0.15s",
                            boxShadow: "0 0 24px rgba(94,234,212,0.15)",
                        }}
                    >
                        Read the Docs
                    </Link>

                    <div
                        onClick={handleCopy}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            background: "#141414",
                            border: "1px solid #2a2a2a",
                            borderRadius: "8px",
                            padding: "10px 18px",
                            cursor: "pointer",
                            transition: "border-color 0.15s",
                            fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                            fontSize: "13px",
                        }}
                    >
                        <Terminal
                            style={{
                                width: "14px",
                                height: "14px",
                                color: "#5eead4",
                                flexShrink: 0,
                            }}
                        />
                        <span style={{ color: "#9ca3af" }}>{command}</span>
                        <button
                            style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                padding: 0,
                                color: "#525252",
                                display: "flex",
                            }}
                        >
                            {copied ? (
                                <Check
                                    style={{ width: "13px", height: "13px", color: "#5eead4" }}
                                />
                            ) : (
                                <Copy style={{ width: "13px", height: "13px" }} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Tech stack pills */}
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "8px",
                    }}
                >
                    {["Express", "Hono", "TypeScript", "MongoDB", "PostgreSQL"].map((item) => (
                        <span
                            key={item}
                            style={{
                                fontSize: "10px",
                                fontWeight: 700,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: "#2e2e2e",
                                padding: "4px 10px",
                                borderRadius: "4px",
                                border: "1px solid #1e1e1e",
                            }}
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* Scroll cue */}
            <div
                style={{
                    position: "absolute",
                    bottom: "32px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    opacity: 0.25,
                }}
            >
                <ArrowDown
                    style={{ width: "18px", height: "18px", animation: "bounce 2s infinite" }}
                />
            </div>
        </section>
    );
}
