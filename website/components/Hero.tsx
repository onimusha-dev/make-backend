"use client";
import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const command = "npx make-backend";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Scaffold Professional Backends <br />
          <span className="gradient-text">In Seconds.</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          The interactive CLI to instantly bootstrap robust Express and Hono projects 
          with integrated database support, security standards, and testing suites.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <div className="flex items-center gap-3 bg-black/50 border border-white/10 rounded-xl px-6 py-4 font-mono text-sm md:text-base group hover:border-blue-500/50 transition-all">
            <Terminal className="w-5 h-5 text-blue-400" />
            <span className="text-gray-300">{command}</span>
            <button 
              onClick={handleCopy}
              className="ml-4 p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-500 hover:text-white"
            >
              {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {["Express / Hono", "TypeScript / JS", "MongoDB / PG", "Vitest Ready"].map((item) => (
            <div key={item} className="glass py-4 rounded-xl text-sm font-medium border-white/5">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
