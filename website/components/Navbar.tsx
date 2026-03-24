import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center font-bold text-white italic">
              m
            </div>
            <span className="font-bold text-xl tracking-tight">make-backend</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 text-sm font-medium text-gray-400">
              <Link href="#features" className="hover:text-white transition-colors">Features</Link>
              <Link href="#docs" className="hover:text-white transition-colors">Docs</Link>
              <Link href="https://github.com/onimusha-dev/make-backend" target="_blank" className="hover:text-white transition-colors">GitHub</Link>
              <Link href="https://www.npmjs.com/package/make-backend" target="_blank" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-all">
                npm v1.1.0
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
