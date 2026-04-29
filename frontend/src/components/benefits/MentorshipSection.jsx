export default function MentorshipSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Guidance That Keeps You on Track</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/15 relative overflow-hidden group backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">supervisor_account</span>
              <h3 className="font-headline font-bold text-xl mb-2">1:1 Mentorship Support</h3>
              <p className="text-on-surface-variant text-sm">Get personalized feedback and guidance tailored to your learning journey.</p>
            </div>
          </div>
          <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/15 relative overflow-hidden group backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">explore</span>
              <h3 className="font-headline font-bold text-xl mb-2">Career Guidance</h3>
              <p className="text-on-surface-variant text-sm">Navigate the job market with expert advice on resume building and interviews.</p>
            </div>
          </div>
          <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/15 relative overflow-hidden group backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-tertiary text-4xl mb-4">question_answer</span>
              <h3 className="font-headline font-bold text-xl mb-2">Doubt Solving</h3>
              <p className="text-on-surface-variant text-sm">Never get stuck. Quick resolution for all your technical queries.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
