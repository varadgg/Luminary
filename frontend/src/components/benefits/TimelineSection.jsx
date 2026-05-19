export default function TimelineSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">3-Month Structured Program</h2>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-surface-container-high -translate-y-1/2 z-0 rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/15 text-center flex flex-col items-center relative">
              <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center mb-4 border border-primary/30 z-10 absolute -top-6 shadow-[0_0_10px_rgba(182,160,255,0.2)]">
                <span className="font-bold text-primary">01</span>
              </div>
              <h3 className="font-headline font-bold text-xl mb-2 mt-4">Month 1</h3>
              <p className="text-on-surface-variant text-sm">Fundamentals</p>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/15 text-center flex flex-col items-center relative">
              <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center mb-4 border border-secondary/30 z-10 absolute -top-6 shadow-[0_0_10px_rgba(0,175,254,0.2)]">
                <span className="font-bold text-secondary">02</span>
              </div>
              <h3 className="font-headline font-bold text-xl mb-2 mt-4">Month 2</h3>
              <p className="text-on-surface-variant text-sm">Advanced concepts + projects</p>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/15 text-center flex flex-col items-center relative">
              <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center mb-4 border border-tertiary/30 z-10 absolute -top-6 shadow-[0_0_10px_rgba(129,236,255,0.2)]">
                <span className="font-bold text-tertiary">03</span>
              </div>
              <h3 className="font-headline font-bold text-xl mb-2 mt-4">Month 3</h3>
              <p className="text-on-surface-variant text-sm">Final projects + portfolio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
