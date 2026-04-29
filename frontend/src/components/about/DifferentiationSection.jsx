export default function DifferentiationSection() {
  return (
    <section className="w-full bg-surface-container-low py-32 relative">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold tracking-tight text-center mb-16">Why This Platform is Different</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="glass-panel border border-outline-variant/20 rounded-2xl p-8 ambient-shadow">
            <h3 className="text-xl font-bold text-on-surface mb-3 flex items-center gap-2"><span className="material-symbols-outlined text-primary">groups</span>Built by Students</h3>
            <p className="text-on-surface-variant">We understand real struggles</p>
          </div>
          <div className="glass-panel border border-outline-variant/20 rounded-2xl p-8 ambient-shadow">
            <h3 className="text-xl font-bold text-on-surface mb-3 flex items-center gap-2"><span className="material-symbols-outlined text-primary">engineering</span>Industry-Focused Learning</h3>
            <p className="text-on-surface-variant">No unnecessary theory</p>
          </div>
          <div className="glass-panel border border-outline-variant/20 rounded-2xl p-8 ambient-shadow">
            <h3 className="text-xl font-bold text-on-surface mb-3 flex items-center gap-2"><span className="material-symbols-outlined text-primary">code</span>Real Projects</h3>
            <p className="text-on-surface-variant">Learn by building</p>
          </div>
          <div className="glass-panel border border-outline-variant/20 rounded-2xl p-8 ambient-shadow">
            <h3 className="text-xl font-bold text-on-surface mb-3 flex items-center gap-2"><span className="material-symbols-outlined text-primary">savings</span>Affordable Education</h3>
            <p className="text-on-surface-variant">Supported by startups</p>
          </div>
          <div className="glass-panel border border-outline-variant/20 rounded-2xl p-8 ambient-shadow lg:col-span-2">
            <h3 className="text-xl font-bold text-on-surface mb-3 flex items-center gap-2"><span className="material-symbols-outlined text-primary">support_agent</span>Mentorship Support</h3>
            <p className="text-on-surface-variant">Guidance at every step</p>
          </div>
        </div>
      </div>
    </section>
  );
}
