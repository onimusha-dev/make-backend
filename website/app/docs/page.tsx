import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <div className="max-w-8xl mx-auto flex pt-16">
        <Sidebar />
        <main className="flex-1 p-8 lg:ml-64 lg:px-12 xl:px-24">
          <article className="prose prose-slate prose-invert max-w-none">
            <h1 className="text-4xl font-extrabold mb-8 tracking-tight">Introduction</h1>
            <p className="text-gray-500 leading-relaxed mb-6">
              `make-backend` is a production-ready CLI designed to help developers scaffold 
              robust backend applications in seconds. It focuses on security, performance, 
              and a professional folder structure by default.
            </p>

            <section id="installation" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 border-b border-[var(--border)] pb-2">Installation</h2>
              <p className="mb-4">You can run the CLI directly without local installation:</p>
              <pre className="bg-black/5 p-4 rounded-lg border border-[var(--border)] font-mono text-sm dark:bg-white/5 mb-6">
                npx make-backend
              </pre>
              <p>Or install globally (not recommended for latest features):</p>
              <pre className="bg-black/5 p-4 rounded-lg border border-[var(--border)] font-mono text-sm dark:bg-white/5">
                npm install -g make-backend
              </pre>
            </section>

            <section id="frameworks" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 border-b border-[var(--border)] pb-2">Frameworks</h2>
              <p>Choose between two powerful Node.js frameworks:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-400">
                <li><strong>Express</strong>: The industry standard for Node.js APIs.</li>
                <li><strong>Hono</strong>: Ultrafast, lightweight framework optimized for any runtime.</li>
              </ul>
            </section>

            <section id="databases" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 border-b border-[var(--border)] pb-2">Databases</h2>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="p-6 rounded-xl border border-[var(--border)]">
                  <h4 className="font-bold mb-2">MongoDB</h4>
                  <p className="text-sm text-gray-500">Includes Mongoose models and connection utility.</p>
                </div>
                <div className="p-6 rounded-xl border border-[var(--border)]">
                  <h4 className="font-bold mb-2">PostgreSQL</h4>
                  <p className="text-sm text-gray-500">Includes node-postgres (pg) client setup and migration guide.</p>
                </div>
              </div>
            </section>
          </article>
        </main>
      </div>
      <Footer />
    </div>
  );
}
