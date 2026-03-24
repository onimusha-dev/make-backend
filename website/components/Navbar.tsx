"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";

const topTabs = [
    { label: "Getting Started", href: "/docs#overview" },
    { label: "CLI", href: "/docs#usage" },
    { label: "Configuration", href: "/docs#frameworks" },
    { label: "Guides", href: "/docs#local-install" },
];

const IconGithub = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
);

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
                scrolled || !isHome ? "glass" : "bg-transparent border-b border-transparent"
            }`}
            style={{
                height: "64px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "1400px",
                    padding: "0 32px",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
                    <div className="w-7 h-7 rounded-md bg-[#5eead4] flex items-center justify-center font-black text-[#0f0f0f] italic text-sm shadow-lg shadow-[#5eead4]/20">
                        m
                    </div>
                    <span className="font-bold text-sm tracking-tight text-[#e8e8e8]">
                        make-backend
                    </span>
                </Link>

                {/* Search bar placeholder (non-functional for now but good UI) */}
                {!isHome && (
                    <div className="hidden md:flex items-center gap-2 bg-[#141414]  hover:bg-[#1a1a1a] border border-[#222] rounded-md px-3 py-1.5 ml-8 w-48 cursor-pointer transition-colors group">
                        <Search className="w-3.5 h-3.5 text-[#525252]" />
                        <span className="text-xs text-[#525252] flex-1">Search...</span>
                        <span className="text-[10px] font-mono text-[#333] border border-[#222] px-1.5 py-0.5 rounded">
                            ⌘K
                        </span>
                    </div>
                )}

                <div className="flex-1" />

                {/* Links */}
                <div className="flex items-center gap-1 sm:gap-4">
                    <Link
                        href="/docs"
                        className="text-[13px] font-medium text-[#878787] hover:text-[#e8e8e8] px-3 py-1.5 rounded-md hover:bg-white/5 transition-all"
                    >
                        Docs
                    </Link>
                    <a
                        href="https://github.com/onimusha-dev/make-backend"
                        target="_blank"
                        className="text-[#525252] hover:text-[#e8e8e8] transition-colors p-1.5"
                    >
                        <IconGithub />
                    </a>
                    {/* <Link
            href="/docs"
            className="hidden sm:flex items-center gap-2 bg-[#5eead4] text-[#0f0f0f] font-bold text-[13px] px-4 py-1.5 rounded-lg hover:bg-[#2dd4bf] transition-all shadow-lg shadow-[#5eead4]/10"
          >
            Get Started
          </Link> */}
                </div>
            </div>
        </nav>
    );
}
