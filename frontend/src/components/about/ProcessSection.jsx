import { Link } from 'react-router-dom';

export default function ProcessSection() {
  return (
    <section className="w-full bg-surface py-32 relative">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold tracking-tight mb-8">How We Help You Succeed</h2>
        <p className="text-2xl text-gradient font-bold mb-16">Learn → Build → Showcase → Get Hired</p>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-4 lg:gap-8">
          <div className="flex-1 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-surface-variant border border-primary/30 flex items-center justify-center text-2xl font-bold text-primary mb-4 ambient-shadow">1</div>
            <h3 className="text-lg font-bold text-on-surface mb-2">Learn</h3>
            <p className="text-on-surface-variant text-sm">Structured roadmap</p>
          </div>
          <div className="hidden md:block w-8 h-px bg-outline-variant mt-8"></div>
          <div className="flex-1 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-surface-variant border border-primary/30 flex items-center justify-center text-2xl font-bold text-primary mb-4 ambient-shadow">2</div>
            <h3 className="text-lg font-bold text-on-surface mb-2">Build</h3>
            <p className="text-on-surface-variant text-sm">Real projects</p>
          </div>
          <div className="hidden md:block w-8 h-px bg-outline-variant mt-8"></div>
          <div className="flex-1 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-surface-variant border border-primary/30 flex items-center justify-center text-2xl font-bold text-primary mb-4 ambient-shadow">3</div>
            <h3 className="text-lg font-bold text-on-surface mb-2">Practice</h3>
            <p className="text-on-surface-variant text-sm">Hands-on learning</p>
          </div>
          <div className="hidden md:block w-8 h-px bg-outline-variant mt-8"></div>
          <div className="flex-1 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-surface-variant border border-primary/30 flex items-center justify-center text-2xl font-bold text-primary mb-4 ambient-shadow">4</div>
            <h3 className="text-lg font-bold text-on-surface mb-2">Showcase</h3>
            <p className="text-on-surface-variant text-sm">Portfolio</p>
          </div>
          <div className="hidden md:block w-8 h-px bg-outline-variant mt-8"></div>
          <div className="flex-1 flex flex-col items-center">
            <Link to="/login" className="w-16 h-16 rounded-full bg-surface-variant border border-primary/30 flex items-center justify-center text-2xl font-bold text-primary mb-4 ambient-shadow hover:bg-primary/5 transition-all cursor-default">5</Link>
            <h3 className="text-lg font-bold text-on-surface mb-2">Get Hired</h3>
            <p className="text-on-surface-variant text-sm">Industry readiness</p>
          </div>
        </div>
      </div>
    </section>
  );
}
