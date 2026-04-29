export default function StatsSection() {
  return (
    <section className="w-full bg-surface-container-low py-32 relative">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold tracking-tight mb-16">Trusted by Students</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="flex flex-col items-center p-6">
            <span className="text-4xl md:text-5xl font-extrabold text-primary mb-2">10+</span>
            <span className="text-lg text-on-surface font-medium">Internships</span>
          </div>
          <div className="flex flex-col items-center p-6">
            <span className="text-4xl md:text-5xl font-extrabold text-primary mb-2">60+</span>
            <span className="text-lg text-on-surface font-medium">Offline Sessions</span>
          </div>
          <div className="flex flex-col items-center p-6">
            <span className="text-4xl md:text-5xl font-extrabold text-primary mb-2">100+</span>
            <span className="text-lg text-on-surface font-medium">Online Sessions</span>
          </div>
          <div className="flex flex-col items-center p-6">
            <span className="text-4xl md:text-5xl font-extrabold text-primary mb-2">2000+</span>
            <span className="text-lg text-on-surface font-medium">Students Trained</span>
          </div>
        </div>
        <p className="text-2xl text-on-surface-variant font-medium">Built with real experience. Trusted by real learners.</p>
      </div>
    </section>
  );
}
