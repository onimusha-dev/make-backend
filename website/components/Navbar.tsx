import Link from "next/link";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-[var(--border)]">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center font-bold text-white italic shadow-lg shadow-blue-500/20">
                m
              </div>
              <span className="font-bold text-lg tracking-tight">make-backend</span>
            </Link>
            <div className="hidden lg:flex items-center gap-1 bg-gray-100 dark:bg-white/5 px-3 py-1.5 rounded-md border border-[var(--border)] w-64 group focus-within:border-blue-500/50 transition-all">
              <Search className="w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search documentation..." 
                className="bg-transparent border-none outline-none text-sm w-full ml-2 text-gray-300 placeholder:text-gray-500"
              />
              <span className="text-[10px] text-gray-500 font-mono border border-[var(--border)] px-1.5 rounded">⌘K</span>
            </div>
          </div>
          <div className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/docs" className="text-gray-500 hover:text-[var(--foreground)] transition-colors">Docs</Link>
            <Link href="https://github.com/onimusha-dev/make-backend" target="_blank" className="text-gray-500 hover:text-[var(--foreground)] transition-colors">GitHub</Link>
            <Link href="/docs#quick-start" className="bg-[var(--foreground)] text-[var(--background)] px-4 py-2 rounded-md font-semibold hover:opacity-90 transition-opacity">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
