import { Link } from 'react-router-dom';

export default function FinalCTASection() {
  return (
    <section className="py-32 px-8 bg-surface-container-low relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-dim pointer-events-none"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        <h2 className="font-headline text-4xl lg:text-6xl font-bold text-on-surface tracking-tight">Start Your Learning Journey Today</h2>
        <p className="font-body text-xl text-on-surface-variant">Choose your path. Build real skills. Get job-ready.</p>
        <div className="flex justify-center mt-8">
          <Link to="/register">
            <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold text-xl px-12 py-5 rounded-2xl shadow-[0_0_40px_rgba(208,149,255,0.4)] hover:shadow-[0_0_60px_rgba(208,149,255,0.6)] hover:scale-105 active:scale-95 transition-all duration-300">
              Start Learning
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
