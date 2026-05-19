export default function ProblemSection() {
  return (
    <section className="w-full bg-surface-container-low py-32 relative">
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center">
        <h2 className="text-4xl font-bold tracking-tight text-center mb-16">The Problem We Faced</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full mb-12">
          <div className="glass-panel border border-outline-variant/20 rounded-2xl p-8 flex flex-col items-center text-center ambient-shadow hover:-translate-y-2 transition-transform duration-300">
            <span className="material-symbols-outlined text-error text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>money_off</span>
            <h3 className="text-xl font-bold text-on-surface">Expensive courses with no real value</h3>
          </div>
          <div className="glass-panel border border-outline-variant/20 rounded-2xl p-8 flex flex-col items-center text-center ambient-shadow hover:-translate-y-2 transition-transform duration-300">
            <span className="material-symbols-outlined text-tertiary text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>explore_off</span>
            <h3 className="text-xl font-bold text-on-surface">Lack of guidance</h3>
          </div>
          <div className="glass-panel border border-outline-variant/20 rounded-2xl p-8 flex flex-col items-center text-center ambient-shadow hover:-translate-y-2 transition-transform duration-300">
            <span className="material-symbols-outlined text-primary-dim text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>auto_stories</span>
            <h3 className="text-xl font-bold text-on-surface">Outdated theory</h3>
          </div>
          <div className="glass-panel border border-outline-variant/20 rounded-2xl p-8 flex flex-col items-center text-center ambient-shadow hover:-translate-y-2 transition-transform duration-300">
            <span className="material-symbols-outlined text-secondary text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>work_off</span>
            <h3 className="text-xl font-bold text-on-surface">No job-ready skills</h3>
          </div>
        </div>
        <p className="text-xl text-on-surface-variant text-center font-medium">We faced the same confusion you’re facing today.</p>
      </div>
    </section>
  );
}
