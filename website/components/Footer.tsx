import Link from "next/link";

export default function Footer() {
    return (
        <footer
            style={{
                borderTop: "1px solid #1a1a1a",
                padding: "2rem 1.5rem",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div
                        style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "5px",
                            background: "#5eead4",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: 900,
                            color: "#0f0f0f",
                            fontStyle: "italic",
                            fontSize: "11px",
                        }}
                    >
                        m
                    </div>
                    <span style={{ fontSize: "0.82rem", color: "#525252", fontWeight: 500 }}>
                        make-backend
                    </span>
                </div>
                <p style={{ fontSize: "0.75rem", color: "#3a3a3a" }}>
                    © {new Date().getFullYear()} onimusha-dev · ISC License
                </p>
                <div style={{ display: "flex", gap: "1.5rem" }}>
                    {[
                        { label: "GitHub", href: "https://github.com/onimusha-dev/make-backend" },
                        { label: "npm", href: "https://www.npmjs.com/package/make-backend" },
                        { label: "Docs", href: "/docs" },
                    ].map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith("http") ? "_blank" : undefined}
                            style={{
                                fontSize: "0.75rem",
                                color: "#3a3a3a",
                                textDecoration: "none",
                                transition: "color 0.15s",
                            }}
                            className="hover:text-[#878787]"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
