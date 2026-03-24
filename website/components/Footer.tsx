export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center font-bold text-white text-xs italic">
            m
          </div>
          <span className="font-semibold text-gray-300">make-backend</span>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} onimusha-dev. Distributed under ISC License.
        </p>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="https://github.com/onimusha-dev/make-backend" target="_blank" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://www.npmjs.com/package/make-backend" target="_blank" className="hover:text-white transition-colors">npm</a>
        </div>
      </div>
    </footer>
  );
}
