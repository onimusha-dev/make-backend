import { Shield, Zap, Database, TestTube, Lock, Code2 } from "lucide-react";

const features = [
  {
    title: "Ultrafast Scaffolding",
    description: "Go from zero to a production-ready API in seconds with interactive prompts.",
    icon: Zap,
    color: "text-amber-400",
  },
  {
    title: "Secure by Default",
    description: "Built-in Helmet, Compression, and Morgan logging for industry-standard protection.",
    icon: Shield,
    color: "text-blue-400",
  },
  {
    title: "Database Integration",
    description: "First-class support for MongoDB (Mongoose) and PostgreSQL (node-postgres).",
    icon: Database,
    color: "text-emerald-400",
  },
  {
    title: "Vitest Testing Suite",
    description: "Pre-configured testing environment with sample health-check test cases.",
    icon: TestTube,
    color: "text-rose-400",
  },
  {
    title: "TypeScript / ESM",
    description: "Modern defaults using ES Modules and fully typed TypeScript templates.",
    icon: Code2,
    color: "text-indigo-400",
  },
  {
    title: "Zod Env Validation",
    description: "Automatically injects runtime environment variable validation using Zod.",
    icon: Lock,
    color: "text-purple-400",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Everything You Need To Launch</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Stop wasting time on boilerplate. make-backend handles the foundation 
            so you can focus on your business logic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="glass p-8 rounded-2xl border-white/5 hover:border-blue-500/20 transition-all group">
              <f.icon className={`w-10 h-10 ${f.color} mb-6 group-hover:scale-110 transition-transform`} />
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
