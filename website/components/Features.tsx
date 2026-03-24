import { Shield, Zap, Database, TestTube, Lock, Code2 } from "lucide-react";

const features = [
  {
    title: "Secure Defaults",
    description: "Built-in Helmet and Compression. Protect your API from common vulnerabilities without lifting a finger.",
    icon: Shield,
  },
  {
    title: "Testing Ready",
    description: "Pre-configured Vitest + Supertest suite. Every project ships with a working test environment.",
    icon: TestTube,
  },
  {
    title: "Type Safety",
    description: "First-class TypeScript support with automatic type definitions for environment variables.",
    icon: Lock,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div key={i} className="group cursor-default">
              <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <f.icon className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
