import {
    Zap,
    Shield,
    Database,
    TestTube,
    Lock,
    Code2,
    Package,
    GitBranch,
    Layers,
} from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "One Command Setup",
        description:
            "Answer a few prompts. Project scaffolded, deps installed, git initialized — in seconds.",
        color: "#5eead4",
    },
    {
        icon: Shield,
        title: "Secure by Default",
        description:
            "Helmet and Compression are pre-configured. Protect your API without any extra effort.",
        color: "#60a5fa",
    },
    {
        icon: Database,
        title: "Any Database",
        description:
            "First-class MongoDB (Mongoose) and PostgreSQL (node-postgres) with connection managers built in.",
        color: "#a78bfa",
    },
    {
        icon: TestTube,
        title: "Tests Included",
        description:
            "Vitest + Supertest pre-configured. A working health-check test ships with every project.",
        color: "#fb923c",
    },
    {
        icon: Lock,
        title: "TypeScript First",
        description:
            "Full TS support with typed env vars via Zod, tsx in dev, and tsc for production.",
        color: "#5eead4",
    },
    {
        icon: Code2,
        title: "Modern Tooling",
        description:
            "ESLint (flat config) + Prettier + EditorConfig — configured and ready. Just write code.",
        color: "#f472b6",
    },
    {
        icon: Package,
        title: "Any Package Manager",
        description:
            "npm, pnpm, yarn, or bun. Your choice is cached and pre-selected on future runs.",
        color: "#60a5fa",
    },
    {
        icon: Layers,
        title: "Clean Architecture",
        description:
            "Controllers, routes, middlewares, models, utils — a folder structure ready for production.",
        color: "#a78bfa",
    },
    {
        icon: GitBranch,
        title: "Git Ready",
        description:
            "Git auto-initialized on every project. .gitignore generated, env files excluded.",
        color: "#fb923c",
    },
];

export default function Features() {
    return (
        <section
            id="features"
            style={{
                padding: "96px 0",
                borderTop: "1px solid #1a1a1a",
            }}
        >
            <div
                style={{
                    maxWidth: "960px",
                    margin: "0 auto",
                    padding: "0 24px",
                }}
            >
                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "56px" }}>
                    <p
                        style={{
                            fontSize: "11px",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.12em",
                            color: "#5eead4",
                            marginBottom: "12px",
                        }}
                    >
                        Why make-backend?
                    </p>
                    <h2
                        style={{
                            fontSize: "clamp(1.8rem, 4vw, 2.75rem)",
                            fontWeight: 900,
                            color: "#e8e8e8",
                            letterSpacing: "-0.02em",
                            marginBottom: "12px",
                            lineHeight: 1.15,
                        }}
                    >
                        Everything configured,{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #5eead4 0%, #60a5fa 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            nothing to bikeshed.
                        </span>
                    </h2>
                    <p
                        style={{
                            color: "#878787",
                            fontSize: "15px",
                            maxWidth: "420px",
                            margin: "0 auto",
                        }}
                    >
                        Stop wasting afternoons on boilerplate. Pick your stack, run one command,
                        ship features.
                    </p>
                </div>

                {/* Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                        gap: "12px",
                    }}
                >
                    {features.map((f) => (
                        <div
                            key={f.title}
                            style={{
                                background: "#111",
                                border: "1px solid #1e1e1e",
                                borderRadius: "12px",
                                padding: "20px",
                                transition: "border-color 0.18s, transform 0.18s",
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget;
                                el.style.borderColor = "rgba(94,234,212,0.2)";
                                el.style.transform = "translateY(-2px)";
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget;
                                el.style.borderColor = "#1e1e1e";
                                el.style.transform = "translateY(0)";
                            }}
                        >
                            <div
                                style={{
                                    width: "32px",
                                    height: "32px",
                                    borderRadius: "8px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "14px",
                                    background: `${f.color}12`,
                                }}
                            >
                                <f.icon style={{ width: "15px", height: "15px", color: f.color }} />
                            </div>
                            <h3
                                style={{
                                    fontSize: "13px",
                                    fontWeight: 600,
                                    color: "#e8e8e8",
                                    marginBottom: "6px",
                                }}
                            >
                                {f.title}
                            </h3>
                            <p style={{ fontSize: "12px", color: "#525252", lineHeight: 1.6 }}>
                                {f.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
