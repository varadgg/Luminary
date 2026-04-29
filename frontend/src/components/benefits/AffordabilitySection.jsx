export default function AffordabilitySection() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute -right-64 -top-64 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute -left-64 -bottom-64 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]"></div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">High-Quality Learning Made Affordable</h2>
        <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">No need to pay high fees — startups are supporting your education.</p>
        <div className="bg-surface-container-highest border border-primary/30 rounded-2xl p-10 max-w-2xl mx-auto shadow-[0_0_40px_rgba(182,160,255,0.1)] relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-dim to-primary text-on-primary px-4 py-1 rounded-full text-sm font-bold shadow-[0_0_10px_rgba(182,160,255,0.3)]">
            Special Offer
          </div>
          <div className="flex flex-col items-center gap-4 mb-8">
            <span className="text-outline-variant line-through text-2xl font-headline">Worth ₹15,000+</span>
            <div className="text-5xl font-headline font-bold text-primary-container">Available at ₹2499</div>
          </div>
          <p className="text-sm text-on-surface-variant italic border-t border-outline-variant/20 pt-6">"We believe education should be accessible to everyone."</p>
        </div>
      </div>
    </section>
  );
}
