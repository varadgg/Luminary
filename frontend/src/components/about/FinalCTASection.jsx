import { Link } from 'react-router-dom';

export default function FinalCTASection() {
  return (
    <section className="w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface-container-high via-surface to-surface py-32 relative text-center">
      <div className="max-w-3xl mx-auto px-8">
        <h2 className="text-5xl font-extrabold tracking-tight mb-6 text-on-surface">Start Your Journey Today</h2>
        <p className="text-xl text-on-surface-variant mb-12">
          Join a system designed to make you job-ready with real skills.
        </p>
        <div className="flex justify-center">
          <Link to="/register">
            <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold text-xl px-12 py-5 rounded-2xl shadow-[0_0_40px_rgba(208,149,255,0.4)] hover:shadow-[0_0_60px_rgba(208,149,255,0.6)] hover:scale-105 active:scale-95 transition-all duration-300">
              Start Learning
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
