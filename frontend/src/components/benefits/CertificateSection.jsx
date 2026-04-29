export default function CertificateSection() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">Internship Completion Certificate</h2>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-12">Earn a certificate that reflects real-world skills and project experience.</p>
        <div className="max-w-3xl mx-auto bg-surface p-8 rounded-2xl border border-primary/20 shadow-[0_0_30px_rgba(182,160,255,0.1)]">
          <div className="border-4 border-double border-surface-variant p-8 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            <div className="relative z-10">
              <div className="text-2xl font-headline font-bold text-primary mb-2">Luminary</div>
              <div className="text-sm uppercase tracking-widest text-on-surface-variant mb-8">Certificate of Completion</div>
              <div className="text-4xl font-headline font-bold mb-4">Jane Doe</div>
              <div className="text-on-surface-variant mb-8 max-w-lg mx-auto">Has successfully completed the comprehensive 3-month job-ready program, demonstrating proficiency in real-world skills and project execution.</div>
              <div className="flex justify-between items-end border-t border-outline-variant/30 pt-4 mt-8">
                <div>
                  <div className="text-xs text-on-surface-variant uppercase tracking-wider">Date</div>
                  <div className="font-bold">August 2024</div>
                </div>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
                  <span className="material-symbols-outlined text-primary text-2xl">verified</span>
                </div>
                <div>
                  <div className="text-xs text-on-surface-variant uppercase tracking-wider">ID</div>
                  <div className="font-bold">LUM-2024-892</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
