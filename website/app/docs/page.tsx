import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Copy } from "lucide-react";

// ─── Left sidebar nav ─────────────────────────────────────────────────────────
const sidebarSections = [
    {
        title: "Getting Started",
        links: [
            { label: "Introduction", href: "#overview" },
            { label: "Quick Start", href: "#quick-start" },
            { label: "Usage", href: "#usage" },
        ],
    },
    {
        title: "Configuration",
        links: [
            { label: "Frameworks", href: "#frameworks" },
            { label: "Languages", href: "#languages" },
            { label: "Databases", href: "#databases" },
            { label: "Optional Packages", href: "#optional" },
            { label: "Package Managers", href: "#pkg-managers" },
        ],
    },
    {
        title: "Included Features",
        links: [
            { label: "What's Included", href: "#included" },
            { label: "Project Structure", href: "#structure" },
        ],
    },
    {
        title: "Guides",
        links: [
            { label: "Local Installation", href: "#local-install" },
            { label: "Contributing", href: "#contributing" },
        ],
    },
];

// ─── Right "On this page" rail ────────────────────────────────────────────────
// const onThisPage = [
//   { label: "Introduction", href: "#overview" },
//   { label: "Quick Start", href: "#quick-start" },
//   { label: "Usage", href: "#usage" },
//   { label: "Project Structure", href: "#structure" },
//   { label: "Frameworks", href: "#frameworks" },
//   { label: "Languages", href: "#languages" },
//   { label: "Databases", href: "#databases" },
//   { label: "What's Included", href: "#included" },
//   { label: "Optional Packages", href: "#optional" },
//   { label: "Package Managers", href: "#pkg-managers" },
//   { label: "Local Installation", href: "#local-install" },
//   { label: "Contributing", href: "#contributing" },
// ];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function Code({ children }: { children: string }) {
    return (
        <code
            style={{
                background: "#1a1a1a",
                border: "1px solid #2a2a2a",
                borderRadius: "4px",
                padding: "0.1em 0.4em",
                fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                fontSize: "0.8em",
                color: "#5eead4",
            }}
        >
            {children}
        </code>
    );
}

function CodeBlock({ children, filename }: { children: string; filename?: string }) {
    return (
        <div
            style={{
                background: "#0a0a0a",
                border: "1px solid #222",
                borderRadius: "8px",
                marginBlock: "1.25rem",
                overflow: "hidden",
            }}
        >
            {filename && (
                <div
                    style={{
                        padding: "0.5rem 1rem",
                        borderBottom: "1px solid #1e1e1e",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <span style={{ fontSize: "0.7rem", color: "#525252", fontFamily: "monospace" }}>
                        {filename}
                    </span>
                    <Copy
                        style={{ width: "12px", height: "12px", color: "#444", cursor: "pointer" }}
                    />
                </div>
            )}
            <pre
                style={{
                    padding: "1.25rem 1.5rem",
                    overflowX: "auto",
                    fontFamily: '"JetBrains Mono", "Fira Code", ui-monospace, monospace',
                    fontSize: "0.8rem",
                    lineHeight: "1.75",
                    color: "#7dd3fc",
                    whiteSpace: "pre",
                }}
            >
                <code>{children.trim()}</code>
            </pre>
        </div>
    );
}

function DocH2({ id, children }: { id: string; children: React.ReactNode }) {
    return (
        <h2
            id={id}
            style={{
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "#e8e8e8",
                marginBottom: "0.75rem",
                marginTop: "2.5rem",
                paddingBottom: "0.6rem",
                borderBottom: "1px solid #1f1f1f",
                scrollMarginTop: "80px",
            }}
        >
            {children}
        </h2>
    );
}

function P({ children }: { children: React.ReactNode }) {
    return (
        <p
            style={{
                color: "#878787",
                lineHeight: "1.75",
                marginBottom: "0.9rem",
                fontSize: "0.925rem",
            }}
        >
            {children}
        </p>
    );
}

function DocTable({ headers, rows }: { headers: string[]; rows: (string | React.ReactNode)[][] }) {
    return (
        <div
            style={{
                overflowX: "auto",
                border: "1px solid #222",
                borderRadius: "8px",
                marginBlock: "1.25rem",
            }}
        >
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.825rem" }}>
                <thead>
                    <tr style={{ background: "#141414", borderBottom: "1px solid #222" }}>
                        {headers.map((h) => (
                            <th
                                key={h}
                                style={{
                                    textAlign: "left",
                                    padding: "0.6rem 1rem",
                                    color: "#525252",
                                    fontWeight: 600,
                                    fontSize: "0.7rem",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.07em",
                                }}
                            >
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr
                            key={i}
                            style={{
                                borderBottom: i < rows.length - 1 ? "1px solid #1a1a1a" : "none",
                            }}
                        >
                            {row.map((cell, j) => (
                                <td
                                    key={j}
                                    style={{
                                        padding: "0.6rem 1rem",
                                        color: j === 0 ? "#e8e8e8" : "#878787",
                                        fontFamily:
                                            j === 0 ? '"JetBrains Mono", monospace' : "inherit",
                                        fontSize: j === 0 ? "0.78rem" : "0.825rem",
                                    }}
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function Callout({ children }: { children: React.ReactNode }) {
    return (
        <div
            style={{
                background: "rgba(94,234,212,0.05)",
                border: "1px solid rgba(94,234,212,0.15)",
                borderLeft: "3px solid #5eead4",
                borderRadius: "6px",
                padding: "0.9rem 1.2rem",
                marginBlock: "1.25rem",
                color: "#878787",
                fontSize: "0.875rem",
                lineHeight: "1.7",
            }}
        >
            {children}
        </div>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function DocsPage() {
    return (
        <div style={{ background: "#0f0f0f", minHeight: "100vh" }}>
            <Navbar />

            <div
                style={{
                    display: "flex",
                    maxWidth: "1400px",
                    margin: "0 auto",
                    paddingTop: "56px" /* navbar height */,
                }}
            >
                {/* ── Left sidebar ──────────────────── */}
                <aside
                    style={{
                        width: "240px",
                        flexShrink: 0,
                        position: "sticky",
                        top: "56px",
                        height: "calc(100vh - 56px)",
                        overflowY: "auto",
                        padding: "2rem 1.25rem",
                        borderRight: "1px solid #1a1a1a",
                        background: "#0f0f0f",
                    }}
                    className="hidden lg:block"
                >
                    {/* back to home */}
                    <Link
                        href="/"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            color: "#525252",
                            textDecoration: "none",
                            fontSize: "0.8rem",
                            marginBottom: "1.5rem",
                            transition: "color 0.15s",
                        }}
                        className="hover:text-[#878787]"
                    >
                        ← Home
                    </Link>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
                        {sidebarSections.map((section) => (
                            <div key={section.title}>
                                <p
                                    style={{
                                        fontSize: "0.65rem",
                                        fontWeight: 700,
                                        color: "#3a3a3a",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.12em",
                                        marginBottom: "0.5rem",
                                        paddingLeft: "0.5rem",
                                    }}
                                >
                                    {section.title}
                                </p>
                                <ul
                                    style={{
                                        listStyle: "none",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "1px",
                                    }}
                                >
                                    {section.links.map((link) => (
                                        <li key={link.label}>
                                            <a
                                                href={link.href}
                                                style={{
                                                    display: "block",
                                                    padding: "0.35rem 0.6rem",
                                                    fontSize: "0.82rem",
                                                    color: "#878787",
                                                    textDecoration: "none",
                                                    borderRadius: "5px",
                                                    transition: "color 0.15s, background 0.15s",
                                                }}
                                                className="hover:text-[#e8e8e8] hover:bg-white/[0.04]"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </aside>

                {/* ── Main content ──────────────────── */}
                <main
                    style={{
                        flex: 1,
                        minWidth: 0,
                        padding: "3rem 3rem 6rem",
                        maxWidth: "820px",
                    }}
                >
                    {/* Page title */}
                    <div style={{ marginBottom: "2rem" }}>
                        <p
                            style={{
                                fontSize: "0.7rem",
                                fontWeight: 700,
                                color: "#5eead4",
                                textTransform: "uppercase",
                                letterSpacing: "0.12em",
                                marginBottom: "0.5rem",
                            }}
                        >
                            Documentation
                        </p>
                        <h1
                            style={{
                                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                                fontWeight: 900,
                                color: "#e8e8e8",
                                lineHeight: 1.15,
                                marginBottom: "0.75rem",
                            }}
                        >
                            make-backend
                        </h1>
                        <p style={{ color: "#878787", fontSize: "1rem", lineHeight: 1.7 }}>
                            An interactive CLI to scaffold production-ready backend projects in
                            seconds.
                        </p>
                    </div>

                    <hr
                        style={{
                            border: "none",
                            borderTop: "1px solid #1a1a1a",
                            marginBottom: "2rem",
                        }}
                    />

                    {/* ── Overview ── */}
                    <section
                        id="overview"
                        style={{ scrollMarginTop: "80px", marginBottom: "2.5rem" }}
                    >
                        <DocH2 id="overview">Introduction</DocH2>
                        <P>
                            <Code>make-backend</Code> is a production-ready CLI that generates fully
                            configured backend applications with your choice of framework, language,
                            database, and utility packages. It handles dependency installation, Git
                            initialization, and produces a clean project structure following
                            industry best practices.
                        </P>
                        <Callout>
                            No more copy-pasting boilerplate. Run one command and start building
                            features immediately.
                        </Callout>
                    </section>

                    {/* ── Quick Start ── */}
                    <section
                        id="quick-start"
                        style={{ scrollMarginTop: "80px", marginBottom: "2.5rem" }}
                    >
                        <DocH2 id="quick-start">Quick Start</DocH2>
                        <P>Run directly without installing anything:</P>
                        <CodeBlock filename="terminal">{`npx make-backend`}</CodeBlock>
                        <P>Or install globally with your preferred package manager:</P>
                        <CodeBlock>{`# npm
npm install -g make-backend

# pnpm
pnpm add -g make-backend

# yarn
yarn global add make-backend

# bun
bun add -g make-backend`}</CodeBlock>
                        <P>Then run from anywhere:</P>
                        <CodeBlock>{`make-backend`}</CodeBlock>
                    </section>

                    {/* ── Usage ── */}
                    <section id="usage" style={{ scrollMarginTop: "80px", marginBottom: "2.5rem" }}>
                        <DocH2 id="usage">Usage</DocH2>
                        <P>The CLI walks you through an interactive setup with these prompts:</P>
                        <CodeBlock>{`1. Enter project name        →  my-api
2. Select framework           →  Express / Hono
3. Select language            →  JavaScript / TypeScript
4. Select database            →  MongoDB / PostgreSQL / None
5. Select additional packages →  bcrypt, jwt, zod, nodemailer
6. Select package manager     →  npm / pnpm / yarn / bun`}</CodeBlock>
                        <P>After you confirm, the CLI will:</P>
                        <ul
                            style={{
                                listStyle: "none",
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.5rem",
                                marginBottom: "1rem",
                            }}
                        >
                            {[
                                "Scaffold the project directory from your selected template",
                                "Merge database configuration and models (if a database was selected)",
                                "Install all dependencies with your chosen package manager",
                                "Initialize a Git repository and generate .gitignore",
                                "Print the next steps to get your server running",
                            ].map((step, i) => (
                                <li
                                    key={i}
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: "10px",
                                        fontSize: "0.9rem",
                                    }}
                                >
                                    <span
                                        style={{
                                            marginTop: "2px",
                                            width: "18px",
                                            height: "18px",
                                            borderRadius: "50%",
                                            background: "rgba(94,234,212,0.1)",
                                            border: "1px solid rgba(94,234,212,0.2)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                            fontSize: "10px",
                                            color: "#5eead4",
                                            fontWeight: 700,
                                        }}
                                    >
                                        {i + 1}
                                    </span>
                                    <span style={{ color: "#878787" }}>{step}</span>
                                </li>
                            ))}
                        </ul>
                        <P>Start your dev server:</P>
                        <CodeBlock>{`cd my-api
npm run dev   # or: pnpm dev / yarn dev / bun dev`}</CodeBlock>
                        <Callout>
                            Your server starts at <Code>http://localhost:3000</Code> by default with
                            a working <Code>GET /api/health</Code> endpoint.
                        </Callout>
                    </section>

                    {/* ── Structure ── */}
                    <section
                        id="structure"
                        style={{ scrollMarginTop: "80px", marginBottom: "2.5rem" }}
                    >
                        <DocH2 id="structure">Project Structure</DocH2>
                        <P>Every scaffolded project follows this opinionated folder structure:</P>
                        <CodeBlock>{`my-api/
├── src/
│   ├── config/         # Database connection setup
│   ├── constants/      # HTTP status codes and shared constants
│   ├── controllers/    # Route handler logic
│   ├── middlewares/    # Error handlers, auth guards, etc.
│   ├── models/         # Database models (Mongoose / PG)
│   ├── routes/         # Route definitions
│   ├── utils/          # ApiResponse, ApiError, asyncHandler
│   ├── types/          # TypeScript declarations (TS only)
│   ├── app.ts          # Middleware stack, routes, error handling
│   └── index.ts        # Entry point — env vars, server listen
├── .env                # Environment variables (auto-generated)
├── .env.example        # Environment template
├── .gitignore
├── package.json
└── tsconfig.json       # TypeScript config (TS only)`}</CodeBlock>
                    </section>

                    {/* ── Frameworks ── */}
                    <section
                        id="frameworks"
                        style={{ scrollMarginTop: "80px", marginBottom: "2.5rem" }}
                    >
                        <DocH2 id="frameworks">Frameworks</DocH2>
                        <P>Choose between two production-tested Node.js frameworks:</P>
                        <DocTable
                            headers={["Framework", "Description", "Docs"]}
                            rows={[
                                [
                                    "Express",
                                    "Fast, minimalist web framework — the industry standard for Node.js APIs.",
                                    "expressjs.com",
                                ],
                                [
                                    "Hono",
                                    "Ultrafast, lightweight framework built for any runtime including the edge.",
                                    "hono.dev",
                                ],
                            ]}
                        />
                    </section>

                    {/* ── Languages ── */}
                    <section
                        id="languages"
                        style={{ scrollMarginTop: "80px", marginBottom: "2.5rem" }}
                    >
                        <DocH2 id="languages">Languages</DocH2>
                        <DocTable
                            headers={["Language", "Notes"]}
                            rows={[
                                [
                                    "JavaScript",
                                    'ES Modules ("type": "module"), runs directly with Node.js. No build step.',
                                ],
                                [
                                    "TypeScript",
                                    "Dev via tsx, production builds via tsc. Typed env vars via Zod (if selected).",
                                ],
                            ]}
                        />
                    </section>

                    {/* ── Databases ── */}
                    <section
                        id="databases"
                        style={{ scrollMarginTop: "80px", marginBottom: "2.5rem" }}
                    >
                        <DocH2 id="databases">Databases</DocH2>
                        <DocTable
                            headers={["Database", "Driver", "What's scaffolded"]}
                            rows={[
                                [
                                    "MongoDB",
                                    "Mongoose ^8.0.0",
                                    "Connection manager, graceful shutdown, User model",
                                ],
                                [
                                    "PostgreSQL",
                                    "node-postgres ^8.11.3",
                                    "Connection pool, lifecycle events, User table with typed CRUD",
                                ],
                                ["None", "—", "Skips database setup entirely — clean slate"],
                            ]}
                        />
                    </section>

                    {/* ── What's Included ── */}
                    <section
                        id="included"
                        style={{ scrollMarginTop: "80px", marginBottom: "2.5rem" }}
                    >
                        <DocH2 id="included">What&apos;s Included</DocH2>
                        <P>Every generated project ships with these out of the box:</P>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                                gap: "0.75rem",
                                marginBlock: "1.25rem",
                            }}
                        >
                            {[
                                ["ApiResponse & ApiError", "Standardized API response classes"],
                                ["Global Error Handling", "Middleware with dev-only stack traces"],
                                [
                                    "Helmet + Compression",
                                    "Security headers and response compression",
                                ],
                                ["Morgan Logger", "HTTP request logging"],
                                [
                                    "Vitest + Supertest",
                                    "Pre-configured test suite with health check",
                                ],
                                ["ESLint + Prettier", "Modern flat config linting and formatting"],
                                ["dotenv", ".env and .env.example auto-generated"],
                                ["GET /api/health", "Health check endpoint ready to use"],
                                ["tsx / --watch", "Fast dev server with hot reload"],
                                ["git init", "Git initialized, .gitignore generated"],
                            ].map(([title, desc]) => (
                                <div
                                    key={title}
                                    style={{
                                        display: "flex",
                                        gap: "12px",
                                        padding: "0.9rem",
                                        background: "#111",
                                        border: "1px solid #1e1e1e",
                                        borderRadius: "8px",
                                        alignItems: "flex-start",
                                    }}
                                >
                                    <span
                                        style={{
                                            marginTop: "3px",
                                            width: "6px",
                                            height: "6px",
                                            borderRadius: "50%",
                                            background: "#5eead4",
                                            flexShrink: 0,
                                        }}
                                    />
                                    <div>
                                        <p
                                            style={{
                                                fontSize: "0.82rem",
                                                fontWeight: 600,
                                                color: "#e8e8e8",
                                                marginBottom: "2px",
                                            }}
                                        >
                                            {title}
                                        </p>
                                        <p style={{ fontSize: "0.75rem", color: "#525252" }}>
                                            {desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Optional Packages ── */}
                    <section
                        id="optional"
                        style={{ scrollMarginTop: "80px", marginBottom: "2.5rem" }}
                    >
                        <DocH2 id="optional">Optional Packages</DocH2>
                        <P>
                            During setup, pick any combination of these packages. They are installed
                            and pre-wired for you:
                        </P>
                        <DocTable
                            headers={["Package", "Purpose"]}
                            rows={[
                                ["bcrypt", "Password hashing for user authentication flows"],
                                ["jsonwebtoken", "JWT creation and verification"],
                                ["zod", "Schema validation + automatic typed env var validation"],
                                ["nodemailer", "Email sending with Gmail / SMTP support"],
                            ]}
                        />
                    </section>

                    {/* ── Package Managers ── */}
                    <section
                        id="pkg-managers"
                        style={{ scrollMarginTop: "80px", marginBottom: "2.5rem" }}
                    >
                        <DocH2 id="pkg-managers">Package Managers</DocH2>
                        <P>
                            <Code>make-backend</Code> supports all major Node.js package managers.
                            Your preference is cached locally and pre-selected on future runs.
                        </P>
                        <DocTable
                            headers={["Manager", "Install command", "Dev command"]}
                            rows={[
                                ["npm", "npm install", "npm run dev"],
                                ["pnpm", "pnpm install", "pnpm dev"],
                                ["yarn", "yarn install", "yarn dev"],
                                ["bun", "bun install", "bun dev"],
                            ]}
                        />
                    </section>

                    {/* ── Local Install ── */}
                    <section
                        id="local-install"
                        style={{ scrollMarginTop: "80px", marginBottom: "2.5rem" }}
                    >
                        <DocH2 id="local-install">Local Installation</DocH2>
                        <P>If you want to run from source, clone and link:</P>
                        <CodeBlock filename="terminal">{`git clone https://github.com/onimusha-dev/make-backend.git
cd make-backend
npm install
npm link

# Run from anywhere:
make-backend`}</CodeBlock>
                        <P>Or run directly from GitHub without cloning:</P>
                        <CodeBlock>{`npx github:onimusha-dev/make-backend`}</CodeBlock>
                        <P>To unlink when done:</P>
                        <CodeBlock>{`npm unlink -g make-backend`}</CodeBlock>
                    </section>

                    {/* ── Contributing ── */}
                    <section
                        id="contributing"
                        style={{ scrollMarginTop: "80px", marginBottom: "2.5rem" }}
                    >
                        <DocH2 id="contributing">Contributing</DocH2>
                        <P>Contributions are welcome. To get started:</P>
                        <CodeBlock>{`# 1. Fork and clone
git clone https://github.com/YOUR_USERNAME/make-backend.git
cd make-backend

# 2. Install dependencies
npm install

# 3. Link locally for testing
npm link

# 4. Run the CLI
make-backend`}</CodeBlock>
                        <P>When opening a pull request:</P>
                        <ul
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.4rem",
                                paddingLeft: "1rem",
                                marginBottom: "1rem",
                            }}
                        >
                            {[
                                "Follow the existing code style and directory conventions",
                                "Test your changes by scaffolding with each framework/language/database combo",
                                "Keep commits atomic and descriptive",
                            ].map((item) => (
                                <li
                                    key={item}
                                    style={{
                                        color: "#878787",
                                        fontSize: "0.9rem",
                                        listStyleType: "disc",
                                    }}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Callout>
                            Distributed under the{" "}
                            <a
                                href="https://github.com/onimusha-dev/make-backend/blob/main/LICENSE"
                                target="_blank"
                                style={{ color: "#5eead4", textDecoration: "none" }}
                            >
                                ISC License
                            </a>
                            .
                        </Callout>
                    </section>
                </main>

                {/* ── Right "On this page" rail ─────── */}
                {/* <aside
          style={{
            width: "200px",
            flexShrink: 0,
            position: "sticky",
            top: "56px",
            height: "calc(100vh - 56px)",
            overflowY: "auto",
            padding: "3rem 1.25rem 2rem",
          }}
          className="hidden xl:block"
        >
          <p
            style={{
              fontSize: "0.65rem",
              fontWeight: 700,
              color: "#3a3a3a",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "0.75rem",
            }}
          >
            On this page
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1px" }}>
            {onThisPage.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  style={{
                    display: "block",
                    padding: "0.3rem 0.5rem",
                    fontSize: "0.78rem",
                    color: "#525252",
                    textDecoration: "none",
                    borderRadius: "4px",
                    transition: "color 0.15s",
                  }}
                  className="hover:text-[#5eead4]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </aside> */}
            </div>

            <Footer />
        </div>
    );
}
