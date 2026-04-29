import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

export default function MissionSection() {
  const { ref, opacity, y } = useScrollAnimation([0, 0.3]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity, y }}
      className="py-32 relative overflow-hidden bg-slate-950"
    >
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-headline font-extrabold mb-8 tracking-tighter leading-tight">Not Just Another <span className="text-secondary">EdTech</span> Platform.</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/20">
                  <span className="material-symbols-outlined text-secondary">verified</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Skills &gt; Degrees</h4>
                  <p className="text-on-surface-variant">We prioritize portfolios over pedigrees. Our students are hired for what they can build, not where they graduated from.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <span className="material-symbols-outlined text-primary">rocket</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Startup Backed</h4>
                  <p className="text-on-surface-variant">Supported by the most disruptive tech startups to ensure our students get direct recruitment opportunities.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <motion.div
                className="h-48 rounded-3xl bg-surface-container-high border border-outline-variant/10 flex flex-col items-center justify-center p-6 text-center"
                whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <span className="text-4xl font-black text-on-background mb-1">98%</span>
                <p className="text-xs uppercase tracking-widest text-on-surface-variant font-label">Satisfaction Rate</p>
              </motion.div>
              <motion.div
                className="h-64 rounded-3xl bg-primary border border-primary-container flex flex-col items-center justify-center p-6 text-center"
                whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <span className="material-symbols-outlined text-on-primary text-5xl mb-4">school</span>
                <p className="text-on-primary font-bold">University Partnering for Credits</p>
              </motion.div>
            </div>
            <div className="space-y-4 mt-8">
              <motion.div
                className="h-64 rounded-3xl bg-secondary border border-secondary-container flex flex-col items-center justify-center p-6 text-center"
                whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <span className="material-symbols-outlined text-on-secondary text-5xl mb-4">work</span>
                <p className="text-on-secondary font-bold">Direct Pipeline to Top Startups</p>
              </motion.div>
              <motion.div
                className="h-48 rounded-3xl bg-surface-container-high border border-outline-variant/10 flex flex-col items-center justify-center p-6 text-center"
                whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <span className="text-4xl font-black text-on-background mb-1">120+</span>
                <p className="text-xs uppercase tracking-widest text-on-surface-variant font-label">Mentors</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
