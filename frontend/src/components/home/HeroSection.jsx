import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Hero fades out and moves up as user scrolls past it
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -60]);
  const imageScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.08]);
  const badgeX = useTransform(scrollYProgress, [0, 0.3], [0, -20]);

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{ opacity }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div className="lg:col-span-8" style={{ y }}>
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-variant/50 border border-outline-variant/20 mb-6"
            style={{ x: badgeX }}
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-xs font-label uppercase tracking-widest text-secondary-dim">Job-Ready Curriculum</span>
          </motion.div>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-headline font-extrabold tracking-tight text-on-background mb-6 leading-[0.95]"
            style={{ y }}
          >
            Learn Skills That{' '}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
              animate={{ filter: ['brightness(1)', 'brightness(1.4)', 'brightness(1)'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              Actually
            </motion.span>{' '}
            Get You Hired.
          </motion.h1>
          <motion.p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed" style={{ y }}>
            High-quality, student-built education for the next generation of builders. Affordable, practical, and focused on career-readiness.
          </motion.p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link to="/register">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(208,149,255,0.4)' }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold text-lg hover:shadow-[0_0_30px_rgba(208,149,255,0.4)] transition-all"
              >Start Learning</motion.button>
            </Link>
            <Link to="/courses">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-4 rounded-xl bg-surface-variant/40 border border-outline-variant/30 backdrop-blur-xl font-bold text-lg hover:bg-surface-variant/60 transition-all"
              >Explore Paths</motion.button>
            </Link>
          </div>
          <div className="inline-flex flex-wrap items-center gap-6 py-4 px-8 rounded-2xl bg-surface-container-low border border-outline-variant/10">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
              <span className="text-sm font-bold uppercase tracking-tighter">100% Online</span>
            </div>
            <div className="w-1 h-1 bg-outline-variant rounded-full"></div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: '"FILL" 1' }}>workspace_premium</span>
              <span className="text-sm font-bold uppercase tracking-tighter">Industry Experts</span>
            </div>
            <div className="w-1 h-1 bg-outline-variant rounded-full"></div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>payments</span>
              <span className="text-sm font-bold uppercase tracking-tighter text-primary">₹2499 Only</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="lg:col-span-4 relative hidden lg:block"
          style={{ scale: imageScale }}
        >
          <div className="w-full aspect-square rounded-3xl overflow-hidden glass-card border border-outline-variant/20 relative group">
            <img alt="Abstract futuristic tech core with neon purple energy lines" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700" src="/images/FrontImage.png" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>
          <div className="absolute -bottom-6 -left-6 p-6 glass-card rounded-2xl border border-outline-variant/30 max-w-[200px]">
            <p className="text-3xl font-black text-secondary leading-none mb-1">2000+</p>
            <p className="text-xs uppercase tracking-widest text-on-surface-variant font-label">Students Trained</p>
          </div>
        </motion.div>
      </div>
    </motion.section >
  )
}
