export default function StartupSupportSection() {
  return (
    <section className="w-full bg-surface py-32 relative">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <div className="glass-panel border border-primary/20 rounded-3xl p-12 ambient-shadow ambient-glow">
          <span className="material-symbols-outlined text-5xl text-secondary mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
          <h2 className="text-4xl font-bold tracking-tight mb-6">Backed by Startups</h2>
          <p className="text-xl text-on-surface mb-8 leading-relaxed">
            Startups support our mission to make education affordable and accessible.
          </p>
          <div className="inline-block bg-primary/10 border border-primary/30 rounded-lg px-6 py-4">
            <p className="text-lg font-semibold text-primary">No need to pay high fees — startups are supporting your education.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
