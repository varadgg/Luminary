import { Link } from 'react-router-dom';

export default function CoursesHeroSection() {
  return (
    <section className="relative px-8 py-24 lg:py-32 overflow-hidden bg-surface-container-low flex flex-col md:flex-row items-center justify-between">
      {/* Background Decoration */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-[100px]"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-secondary rounded-full mix-blend-screen filter blur-[100px]"></div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col items-start space-y-8">
          <h1 className="font-headline text-5xl lg:text-7xl font-bold tracking-tighter text-on-surface leading-tight">
            Choose Your <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">Learning Path</span>
          </h1>
          <p className="font-body text-lg lg:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Explore industry-relevant programs designed to make you job-ready with real skills, projects, and experience.
          </p>
          {/* Highlight Badges */}
          <div className="flex flex-wrap gap-4 font-label text-sm text-on-surface-variant">
            <span className="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-full border border-outline-variant/20 shadow-[0_0_20px_rgba(192,193,255,0.05)]">
              <span className="material-symbols-outlined text-primary text-base">laptop_mac</span> 100% Online
            </span>
            <span className="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-full border border-outline-variant/20 shadow-[0_0_20px_rgba(192,193,255,0.05)]">
              <span className="material-symbols-outlined text-tertiary text-base">receipt_long</span> Internship Certificate
            </span>
            <span className="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-full border border-outline-variant/20 shadow-[0_0_20px_rgba(192,193,255,0.05)]">
              <span className="material-symbols-outlined text-secondary text-base">calendar_month</span> 3 Months Program
            </span>
            <span className="flex items-center gap-2 bg-primary-container/20 px-4 py-2 rounded-full border border-primary/30 text-primary font-medium">
              <span className="material-symbols-outlined text-base">payments</span> ₹2499 Only
            </span>
          </div>
          <Link to="/register">
            <button className="bg-gradient-to-r from-[#8A2BE2] to-[#a855f7] text-white font-headline font-bold text-lg px-10 py-4 rounded-full hover:shadow-[0_0_40px_rgba(138,43,226,0.3)] transition-all duration-300 transform hover:-translate-y-1">
              Start Learning
            </button>
          </Link>
        </div>
        {/* Hero Image / Visual Asymmetry */}
        <div className="lg:col-span-5 relative hidden lg:block">
          <div className="relative rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(192,193,255,0.1)] border border-outline-variant/20 aspect-[4/5] w-full max-w-md ml-auto">
            <img alt="Students collaborating" className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo__sJs4V1RqxhZG0geS0impcskAHQ_8xcXVGHR1cqlsC19UtAQ2cdCfHdf_dwY2yghhkIDrZL8VF9VOTPpjsAGp1fSWPbvjFiX7A6V_PCC6OxROBzuKT6s2YjhRAZrNr2YBcmjmbRGawwqJ_DaA5fi8cwe8QbjhjvzeWZ1U4cEgP0tdeQiSsjlW-ou4V_wjB6t0jzOGGaVQ7XVRdqsybc5MceAX5Uc3WZsbW25XCOjDyNKOncMu8pBiFM-klrMdEJLaEb_FyeEw" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-surface-dim/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
