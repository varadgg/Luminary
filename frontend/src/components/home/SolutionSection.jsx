import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function SolutionSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Heading: scale up + fade
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.92, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [60, 0]);

  // Cards stagger via individual transforms offset
  const card1Y = useTransform(scrollYProgress, [0.1, 0.35], [50, 0]);
  const card1Op = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);
  const card2Y = useTransform(scrollYProgress, [0.15, 0.4], [50, 0]);
  const card2Op = useTransform(scrollYProgress, [0.15, 0.4], [0, 1]);
  const card3Y = useTransform(scrollYProgress, [0.2, 0.45], [50, 0]);
  const card3Op = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);
  const card4Y = useTransform(scrollYProgress, [0.25, 0.5], [50, 0]);
  const card4Op = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);

  return (
    <motion.section ref={ref} className="py-32 bg-surface-container-low relative">
      <div className="max-w-7xl mx-auto px-8 text-center mb-20">
        <motion.h2
          className="text-4xl md:text-6xl font-headline font-extrabold mb-6 tracking-tighter"
          style={{ opacity, scale, y }}
        >A Platform That Actually Prepares You.</motion.h2>
        <motion.p
          className="text-on-surface-variant max-w-3xl mx-auto text-xl"
          style={{ opacity, y }}
        >We don't just teach. We simulate the high-pressure environment of top-tier tech companies.</motion.p>
      </div>
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <motion.div
          className="glass-card p-8 rounded-[2rem] border border-outline-variant/10 hover:border-primary/40 transition-all group"
          style={{ opacity: card1Op, y: card1Y }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(208,149,255,0.15)' }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <span className="material-symbols-outlined text-primary text-4xl mb-6">psychology</span>
          <h3 className="text-xl font-bold mb-3">1-on-1 Mentorship</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">Direct access to engineers from Google, Amazon, and top startups to guide your journey.</p>
        </motion.div>
        <motion.div
          className="glass-card p-8 rounded-[2rem] border border-outline-variant/10 hover:border-secondary/40 transition-all group"
          style={{ opacity: card2Op, y: card2Y }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0,210,253,0.15)' }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <span className="material-symbols-outlined text-secondary text-4xl mb-6">code_blocks</span>
          <h3 className="text-xl font-bold mb-3">Real-World Projects</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">Build production-grade applications that actually go live, not just Todo apps.</p>
        </motion.div>
        <motion.div
          className="glass-card p-8 rounded-[2rem] border border-outline-variant/10 hover:border-tertiary/40 transition-all group"
          style={{ opacity: card3Op, y: card3Y }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(255,151,178,0.15)' }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <span className="material-symbols-outlined text-tertiary text-4xl mb-6">auto_awesome</span>
          <h3 className="text-xl font-bold mb-3">AI-Integrated Learning</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">Learn how to leverage AI tools to code 10x faster and stay ahead of the curve.</p>
        </motion.div>
        <motion.div
          className="glass-card p-8 rounded-[2rem] border border-outline-variant/10 hover:border-primary-dim/40 transition-all group"
          style={{ opacity: card4Op, y: card4Y }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(197,126,255,0.15)' }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <span className="material-symbols-outlined text-primary-dim text-4xl mb-6">rocket_launch</span>
          <h3 className="text-xl font-bold mb-3">Job Placement Support</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">Resume building, mock interviews, and direct referrals to our partner network.</p>
        </motion.div>
      </div>
    </motion.section>
  )
}
