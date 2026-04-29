export default function RegistrationLeftSection() {
  return (
    <section className="w-full relative flex flex-col justify-start">
      <div className="relative z-10">
        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white mb-4 leading-tight max-w-xl">
          You’re not just enrolling in a course. 
          <span className="text-primary-fixed block mt-2">You’re joining a system.</span>
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl font-light mb-6 max-w-xl">
          Learn from experts. Build real projects. Earn certification.
        </p>
        <div className="w-full rounded-2xl overflow-hidden ghost-border mb-6 group">
          <img 
            alt="Student Group Discussion" 
            className="w-full h-auto object-cover rounded-xl group-hover:scale-105 transition-transform duration-700" 
            data-alt="A diverse group of motivated young students having an engaging academic discussion in a modern dark-themed studio with cool blue and purple ambient lighting." 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqjlcDai2fU19NVbAUWeklOyosrGGpT_sx6UxbmrFUFjs1nDOXzPOEb0_97dzwklM40bGenLShTzL7PltWIrrDETJ-3DiYaElRlaBz4zSEC5EYVcHP9YmeWtPnEohngW94p2D8Azh3GtBsK86deseui4d_6_KgAtDDTepMxHZYHJEYZniKIY6gUUINnz3k4_YiUD99TCr9kdZsa3kyia_obFW34GGFUGtftkhQ_59oITakOjcUWS1rDLdpOMYOrjglXkYgaZEYpQ" 
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6 max-w-xl">
          <div className="surface-container-low p-5 rounded-xl ghost-border">
            <div className="text-primary font-headline text-2xl font-bold">10+</div>
            <div className="text-on-surface-variant text-xs uppercase tracking-widest font-label">Internships</div>
          </div>
          <div className="surface-container-low p-5 rounded-xl ghost-border">
            <div className="text-secondary font-headline text-2xl font-bold">60+</div>
            <div className="text-on-surface-variant text-xs uppercase tracking-widest font-label">Offline Sessions</div>
          </div>
          <div className="surface-container-low p-5 rounded-xl ghost-border">
            <div className="text-tertiary font-headline text-2xl font-bold">100+</div>
            <div className="text-on-surface-variant text-xs uppercase tracking-widest font-label">Online Sessions</div>
          </div>
          <div className="surface-container-low p-5 rounded-xl ghost-border">
            <div className="text-white font-headline text-2xl font-bold">2000+</div>
            <div className="text-on-surface-variant text-xs uppercase tracking-widest font-label">Students Trained</div>
          </div>
        </div>
        <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl ghost-border border-primary/20">
          <div className="flex items-start gap-4">
            <span className="material-symbols-outlined text-primary text-3xl" data-icon="rocket_launch">rocket_launch</span>
            <p className="text-white font-semibold leading-relaxed">
              No need to pay high fees — startups are ready to support your education.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/10 blur-[100px] rounded-full"></div>
    </section>
  );
}
