import Link from "next/link";

const sections = [
    {
        title: "Getting Started",
        links: [
            { label: "Introduction", href: "/docs" },
            { label: "Installation", href: "/docs#installation" },
            { label: "Quick Start", href: "/docs#quick-start" },
        ],
    },
    {
        title: "Configurations",
        links: [
            { label: "Frameworks", href: "/docs#frameworks" },
            { label: "Databases", href: "/docs#databases" },
            { label: "Languages", href: "/docs#languages" },
        ],
    },
    {
        title: "Features",
        links: [
            { label: "Security", href: "/docs#security" },
            { label: "Logging", href: "/docs#logging" },
            { label: "Testing", href: "/docs#testing" },
        ],
    },
];

export default function Sidebar() {
    return (
        <aside className="w-64 fixed left-0 top-16 bottom-0 overflow-y-auto border-r border-[var(--border)] p-6 hidden lg:block bg-[var(--background)]">
            <div className="space-y-8">
                {sections.map((section) => (
                    <div key={section.title}>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                            {section.title}
                        </h4>
                        <ul className="space-y-2">
                            {section.links.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-500 hover:text-blue-500 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </aside>
    );
}
