export default function LearningExperienceSection() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Master Your Craft</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-surface-container-highest rounded-xl p-8 border border-outline-variant/15 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">route</span>
              <h3 className="font-headline font-bold text-2xl mb-2">Beginner to Advanced Learning</h3>
              <p className="text-on-surface-variant">A meticulously designed curriculum that builds foundational knowledge before advancing to complex, industry-standard techniques.</p>
            </div>
          </div>
          <div className="bg-surface-container-highest rounded-xl p-8 border border-outline-variant/15 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">event_available</span>
              <h3 className="font-headline font-bold text-xl mb-2">Daily Live Sessions</h3>
              <p className="text-on-surface-variant text-sm">Consistent engagement (Mon–Fri evenings) keeps you accountable and progressing.</p>
            </div>
          </div>
          <div className="bg-surface-container-highest rounded-xl p-8 border border-outline-variant/15 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">forum</span>
              <h3 className="font-headline font-bold text-xl mb-2">Interactive Sessions</h3>
              <p className="text-on-surface-variant text-sm">Engage in real-time, ask questions, and collaborate. Not just recorded content.</p>
            </div>
          </div>
          <div className="md:col-span-2 bg-surface-container-highest rounded-xl p-8 border border-outline-variant/15 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-4">psychology</span>
                <h3 className="font-headline font-bold text-2xl mb-2">Expert-led Teaching</h3>
                <p className="text-on-surface-variant max-w-md">Learn from industry veterans who have built products at scale and understand exactly what top tech companies look for in candidates.</p>
              </div>
              <div className="hidden md:block">
                <img alt="Experts" className="w-48 h-32 object-cover rounded-lg border border-outline-variant/30 opacity-70" data-alt="team of diverse tech professionals collaborating in a modern dark-themed glass-walled meeting room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKJQF83nb1OZQ1H1y9G2-84uUBDM0A1ZTpfKBttIlGwnwJcPFH64jZI8_9SOXKCT_YlTROw9_le5L9GZQ_drAgkyPUwgECaoTpxkQ3ISAVJ1tMOCt4y0n7WQnEAnwrIcw9vWwE9e7woimUAJwPX4Ybq7sAA7S1gNKeuHWvETGprzXZF12ujKlINhvwXWjwKqn2jYFbNlcMIe1wD3HWXP3NZQL7Q8jKBWeriUmyk2xxSTpQQ8VdCf3l8KtOCjIHwENp16gRes5shLI"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
