"use client";
import { useState } from "react";
import { Check, Copy, Terminal, ArrowRight } from "lucide-react";
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
    <section className="relative pt-32 pb-24 overflow-hidden border-b border-[var(--border)]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--border)_1px,_transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-500 text-xs font-bold mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          v1.1.0 IS NOW LIVE
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[0.9]">
          The API <br />
          <span className="text-blue-600 dark:text-blue-500">Foundation.</span>
        </h1>
        
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          Professional-grade scaffolding for modern backend engineering. 
          Stop configuring, start building.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <Link 
            href="/docs" 
            className="group items-center inline-flex bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
          >
            Start Scaffolding
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <div className="flex items-center gap-3 bg-white/5 dark:bg-white/5 border border-[var(--border)] rounded-xl px-6 py-4 font-mono text-sm md:text-base group hover:border-[var(--foreground)] transition-all">
            <Terminal className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
            <span className="text-gray-500 group-hover:text-[var(--foreground)] transition-colors">{command}</span>
            <button 
              onClick={handleCopy}
              className="ml-4 p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-500 hover:text-white"
            >
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all cursor-default">
          {["Express", "Hono", "TypeScript", "MongoDB", "PostgreSQL"].map((item) => (
            <span key={item} className="text-lg font-black tracking-widest">{item.toUpperCase()}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
