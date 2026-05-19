import { Link } from 'react-router-dom';

export default function AboutHeroSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-8 pt-32 pb-32 relative flex flex-col items-center text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-surface to-surface -z-10"></div>
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 max-w-4xl leading-tight text-on-surface">
        Built by Students. <br />
        <span className="text-gradient bg-gradient-to-r from-secondary to-primary-fixed drop-shadow-[0_0_15px_rgba(0,210,253,0.3)]">Guided by Experts.</span>
      </h1>
      <p className="text-xl md:text-2xl text-on-surface max-w-3xl mb-4 leading-relaxed font-medium">
        We created this platform to solve the problems we faced — confusion, overpriced courses, and lack of real-world learning.
      </p>
      <p className="text-lg text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
        We created the platform we wish we had — clear, practical, and built for real outcomes.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        <div className="glass-panel border border-primary/30 rounded-full px-8 py-4 flex items-center gap-3 text-base font-semibold text-on-surface ambient-shadow hover:border-primary/60 transition-colors">
          <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>laptop_mac</span>
          100% Online
        </div>
        <div className="glass-panel border border-primary/30 rounded-full px-8 py-4 flex items-center gap-3 text-base font-semibold text-on-surface ambient-shadow hover:border-primary/60 transition-colors">
          <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
          Internship Certificate
        </div>
        <div className="glass-panel border border-primary/30 rounded-full px-8 py-4 flex items-center gap-3 text-base font-semibold text-on-surface ambient-shadow hover:border-primary/60 transition-colors">
          <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>currency_rupee</span>
          Affordable
        </div>
        <div className="glass-panel border border-primary/30 rounded-full px-8 py-4 flex items-center gap-3 text-base font-semibold text-on-surface ambient-shadow hover:border-primary/60 transition-colors">
          <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
          Startup Supported
        </div>
      </div>
      <Link to="/register">
        <button className="bg-gradient-to-r from-[#8A2BE2] to-[#a855f7] text-white text-xl font-bold py-5 px-12 rounded-full hover:opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(138,43,226,0.5)] hover:shadow-[0_0_30px_rgba(138,43,226,0.6)]">
          Start Learning
        </button>
      </Link>
    </section>
  );
}
