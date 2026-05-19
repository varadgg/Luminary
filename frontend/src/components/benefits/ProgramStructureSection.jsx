export default function ProgramStructureSection() {
  return (
    <section className="py-24 bg-surface-container-low relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">A Clear Path from Learning to Getting Hired</h2>
          <p className="text-secondary font-medium tracking-widest uppercase">Learn → Build → Showcase → Get Hired</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-surface-container-low via-secondary/30 to-surface-container-low -translate-y-1/2 z-0"></div>
          <div className="bg-surface-container-highest/80 backdrop-blur-xl p-8 rounded-xl border border-outline-variant/15 relative z-10 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center mb-6 border border-secondary/30 shadow-[0_0_15px_rgba(0,175,254,0.1)]">
              <span className="material-symbols-outlined text-secondary text-3xl">school</span>
            </div>
            <h3 className="font-headline font-bold text-xl mb-2 text-on-surface">Learn</h3>
            <p className="text-on-surface-variant text-sm">Structured roadmap (beginner → advanced)</p>
          </div>
          <div className="bg-surface-container-highest/80 backdrop-blur-xl p-8 rounded-xl border border-outline-variant/15 relative z-10 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center mb-6 border border-secondary/30 shadow-[0_0_15px_rgba(0,175,254,0.1)]">
              <span className="material-symbols-outlined text-secondary text-3xl">code_blocks</span>
            </div>
            <h3 className="font-headline font-bold text-xl mb-2 text-on-surface">Build</h3>
            <p className="text-on-surface-variant text-sm">Real-world projects</p>
          </div>
          <div className="bg-surface-container-highest/80 backdrop-blur-xl p-8 rounded-xl border border-outline-variant/15 relative z-10 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center mb-6 border border-secondary/30 shadow-[0_0_15px_rgba(0,175,254,0.1)]">
              <span className="material-symbols-outlined text-secondary text-3xl">present_to_all</span>
            </div>
            <h3 className="font-headline font-bold text-xl mb-2 text-on-surface">Showcase</h3>
            <p className="text-on-surface-variant text-sm">Portfolio-ready work</p>
          </div>
          <div className="bg-surface-container-highest/80 backdrop-blur-xl p-8 rounded-xl border border-outline-variant/15 relative z-10 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-dim to-primary flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(182,160,255,0.4)]">
              <span className="material-symbols-outlined text-on-primary text-3xl">work</span>
            </div>
            <h3 className="font-headline font-bold text-xl mb-2 text-primary-container">Get Hired</h3>
            <p className="text-on-surface-variant text-sm">Industry-ready skills</p>
          </div>
        </div>
      </div>
    </section>
  );
}
