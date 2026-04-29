import { Link } from 'react-router-dom';

export default function FinalCTASection() {
  return (
    <section className="py-32 bg-surface-container-low text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-headline text-4xl md:text-6xl font-bold mb-6">Start Your Journey Today</h2>
        <p className="text-xl text-on-surface-variant mb-10">Build real skills. Gain real experience. Get job-ready.</p>
        <Link to="/register">
          <button className="bg-gradient-to-br from-primary-dim to-primary text-on-primary px-10 py-5 rounded-md font-headline font-bold text-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0_20px_rgba(182,160,255,0.3)] hover:brightness-110 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0_30px_rgba(182,160,255,0.5)] transition-all duration-300 active:scale-95">
            Start Learning
          </button>
        </Link>
      </div>
    </section>
  );
}
