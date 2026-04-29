export default function ProgramFlowSection() {
  return (
    <section className="py-32 px-8 bg-surface">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-24">
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-on-surface tracking-tight mb-4">How the Program Works</h2>
          <p className="font-headline text-xl text-primary font-medium">Learn → Build → Practice → Showcase → Get Hired</p>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-primary/20 via-primary to-primary/20 z-0"></div>
          {/* Steps */}
          <div className="relative z-10 flex flex-col items-center gap-6 flex-1 bg-surface p-2">
            <div className="w-20 h-20 rounded-full bg-surface-container border-4 border-primary/30 flex items-center justify-center text-primary shadow-[0_0_30px_rgba(192,193,255,0.15)]">
              <span className="material-symbols-outlined text-3xl">menu_book</span>
            </div>
            <div className="text-center">
              <span className="font-headline font-bold text-xl text-on-surface block mb-2">Learn</span>
              <p className="font-body text-on-surface-variant text-sm">Structured concepts</p>
            </div>
          </div>
          <div className="relative z-10 flex flex-col items-center gap-6 flex-1 bg-surface p-2">
            <div className="w-20 h-20 rounded-full bg-surface-container border-4 border-primary/30 flex items-center justify-center text-primary shadow-[0_0_30px_rgba(192,193,255,0.15)]">
              <span className="material-symbols-outlined text-3xl">build</span>
            </div>
            <div className="text-center">
              <span className="font-headline font-bold text-xl text-on-surface block mb-2">Build</span>
              <p className="font-body text-on-surface-variant text-sm">Real projects</p>
            </div>
          </div>
          <div className="relative z-10 flex flex-col items-center gap-6 flex-1 bg-surface p-2">
            <div className="w-20 h-20 rounded-full bg-surface-container border-4 border-primary/30 flex items-center justify-center text-primary shadow-[0_0_30px_rgba(192,193,255,0.15)]">
              <span className="material-symbols-outlined text-3xl">fitness_center</span>
            </div>
            <div className="text-center">
              <span className="font-headline font-bold text-xl text-on-surface block mb-2">Practice</span>
              <p className="font-body text-on-surface-variant text-sm">Hands-on work</p>
            </div>
          </div>
          <div className="relative z-10 flex flex-col items-center gap-6 flex-1 bg-surface p-2">
            <div className="w-20 h-20 rounded-full bg-surface-container border-4 border-primary/30 flex items-center justify-center text-primary shadow-[0_0_30px_rgba(192,193,255,0.15)]">
              <span className="material-symbols-outlined text-3xl">star</span>
            </div>
            <div className="text-center">
              <span className="font-headline font-bold text-xl text-on-surface block mb-2">Showcase</span>
              <p className="font-body text-on-surface-variant text-sm">Portfolio creation</p>
            </div>
          </div>
          <div className="relative z-10 flex flex-col items-center gap-6 flex-1 bg-surface p-2">
            <div className="w-24 h-24 -mt-2 rounded-full bg-gradient-to-br from-primary to-primary-container border-4 border-surface flex items-center justify-center text-on-primary-fixed shadow-[0_0_40px_rgba(192,193,255,0.4)]">
              <span className="material-symbols-outlined text-4xl">work</span>
            </div>
            <div className="text-center">
              <span className="font-headline font-bold text-xl text-primary block mb-2">Get Hired</span>
              <p className="font-body text-on-surface-variant text-sm">Industry readiness</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
