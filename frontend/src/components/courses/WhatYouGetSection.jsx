export default function WhatYouGetSection() {
  return (
    <section className="py-32 px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-on-surface tracking-tight mb-4">What You Get in Every Program</h2>
          <p className="font-body text-xl text-on-surface-variant">Everything you need to become job-ready.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-surface-container rounded-xl p-8 border border-outline-variant/10 flex flex-col items-start gap-6 hover:shadow-[0_0_40px_rgba(192,193,255,0.05)] transition-shadow">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(192,193,255,0.2)]">
              <span className="material-symbols-outlined text-3xl">map</span>
            </div>
            <div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-2">Structured Roadmap</h3>
              <p className="font-body text-on-surface-variant">Beginner → Advanced</p>
            </div>
          </div>
          <div className="bg-surface-container rounded-xl p-8 border border-outline-variant/10 flex flex-col items-start gap-6 hover:shadow-[0_0_40px_rgba(137,206,255,0.05)] transition-shadow">
            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shadow-[0_0_20px_rgba(137,206,255,0.2)]">
              <span className="material-symbols-outlined text-3xl">work</span>
            </div>
            <div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-2">Real Industry Projects</h3>
              <p className="font-body text-on-surface-variant">Portfolio-ready projects</p>
            </div>
          </div>
          <div className="bg-surface-container rounded-xl p-8 border border-outline-variant/10 flex flex-col items-start gap-6 hover:shadow-[0_0_40px_rgba(221,183,255,0.05)] transition-shadow">
            <div className="w-16 h-16 rounded-2xl bg-tertiary/10 flex items-center justify-center text-tertiary shadow-[0_0_20px_rgba(221,183,255,0.2)]">
              <span className="material-symbols-outlined text-3xl">group</span>
            </div>
            <div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-2">Mentorship Support</h3>
              <p className="font-body text-on-surface-variant">1:1 guidance</p>
            </div>
          </div>
          <div className="bg-surface-container rounded-xl p-8 border border-outline-variant/10 flex flex-col items-start gap-6 hover:shadow-[0_0_40px_rgba(192,193,255,0.05)] transition-shadow">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(192,193,255,0.2)]">
              <span className="material-symbols-outlined text-3xl">live_tv</span>
            </div>
            <div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-2">Daily Live Sessions</h3>
              <p className="font-body text-on-surface-variant">Interactive learning</p>
            </div>
          </div>
          <div className="bg-surface-container rounded-xl p-8 border border-outline-variant/10 flex flex-col items-start gap-6 hover:shadow-[0_0_40px_rgba(137,206,255,0.05)] transition-shadow">
            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shadow-[0_0_20px_rgba(137,206,255,0.2)]">
              <span className="material-symbols-outlined text-3xl">verified</span>
            </div>
            <div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-2">Internship Completion Certificate</h3>
              <p className="font-body text-on-surface-variant">Verified credentials</p>
            </div>
          </div>
          <div className="bg-surface-container rounded-xl p-8 border border-outline-variant/10 flex flex-col items-start gap-6 hover:shadow-[0_0_40px_rgba(221,183,255,0.05)] transition-shadow">
            <div className="w-16 h-16 rounded-2xl bg-tertiary/10 flex items-center justify-center text-tertiary shadow-[0_0_20px_rgba(221,183,255,0.2)]">
              <span className="material-symbols-outlined text-3xl">contact_page</span>
            </div>
            <div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-2">Resume-Ready Portfolio</h3>
              <p className="font-body text-on-surface-variant">Showcase your skills</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
