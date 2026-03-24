import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Features />
      
      {/* Docs / Local Setup Preview */}
      <section id="docs" className="py-24 max-w-4xl mx-auto px-4">
        <div className="glass p-10 rounded-3xl border-blue-500/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-3xl rounded-full" />
          <h2 className="text-3xl font-bold mb-6 italic">Ready to make?</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Whether you need a quick MongoDB + Express JS setup or a robust PostgreSQL + Hono TS 
            environment, make-backend has you covered with the best industry defaults.
          </p>
          <pre className="bg-black/50 p-6 rounded-xl border border-white/5 text-blue-400 font-mono text-sm overflow-x-auto">
            $ npx make-backend
          </pre>
        </div>
      </section>

      <Footer />
    </main>
  );
}
