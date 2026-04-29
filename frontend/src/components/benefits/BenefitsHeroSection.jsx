import { Link } from 'react-router-dom';

export default function BenefitsHeroSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-surface-container-lowest">
      <div className="absolute inset-0 z-0">
        <img alt="Space Background" className="w-full h-full object-cover opacity-20 mix-blend-screen" data-alt="deep space galaxy background with subtle purple and blue nebulas and glowing stars" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB_Qgq5yj5ekOKrXTbZcCjAxLwnLR1o2HdDNGbWr7RIr08d36DMXOaXN18FCoxz1z5_UjEXSLcgBe-f9Cwa9dvMYo-V0esgw0XGGjKeMz9hxZhXEJlQ1v_GyqnKoH9S6tIC5JStqZyDuNn1WkHWJAKUVcH1H2W1JjNu76UwEKjIRp2yG6ZHTgic_FjdxojFPl3AxLhoa6qqnYjqg5jnX2K3MXuvhDLrQH2UcgkV7NjyByvjS9M49hVJ-Sds3KINL_mYNhwdIitRM8"/>
        <div className="absolute inset-0 bg-gradient-to-b from-surface/50 to-surface"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-highest/80 border border-outline-variant/30 backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
          <span className="text-sm font-label text-on-surface-variant uppercase tracking-wider">Job-Ready Curriculum</span>
        </div>
        <h1 className="font-headline text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-on-surface to-primary-container leading-tight tracking-tight">Everything You Need to<br/>Become Job-Ready</h1>
        <p className="text-xl md:text-2xl text-on-surface-variant font-body max-w-3xl mx-auto mb-2">A structured program designed to take you from beginner to job-ready with real skills, projects, and mentorship.</p>
        <p className="text-lg text-primary-dim font-body max-w-3xl mx-auto mb-12">No need to pay high fees — startups are supporting your education.</p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-md border border-outline-variant/15 text-sm font-medium">
            <span className="material-symbols-outlined text-secondary text-[20px]">laptop_mac</span>
            100% Online
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-md border border-outline-variant/15 text-sm font-medium">
            <span className="material-symbols-outlined text-secondary text-[20px]">calendar_month</span>
            3 Months Program (June–August)
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-md border border-outline-variant/15 text-sm font-medium">
            <span className="material-symbols-outlined text-secondary text-[20px]">schedule</span>
            Daily Live Sessions (Mon–Fri Evenings)
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-md border border-outline-variant/15 text-sm font-medium">
            <span className="material-symbols-outlined text-secondary text-[20px]">workspace_premium</span>
            Internship Completion Certificate
          </div>
        </div>
        <Link to="/register">
          <button className="bg-gradient-to-br from-primary-dim to-primary text-on-primary px-8 py-4 rounded-md font-headline font-bold text-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0_20px_rgba(182,160,255,0.3)] hover:brightness-110 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0_30px_rgba(182,160,255,0.5)] transition-all duration-300 active:scale-95">
            Start Learning
          </button>
        </Link>
      </div>
    </section>
  );
}
