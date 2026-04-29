import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function CoursesSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Header slides in from left
  const headerX = useTransform(scrollYProgress, [0, 0.25], [-50, 0]);
  const headerOp = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  // "View All" link slides from right
  const linkX = useTransform(scrollYProgress, [0.05, 0.28], [30, 0]);
  const linkOp = useTransform(scrollYProgress, [0.05, 0.28], [0, 1]);

  // Course cards stagger
  const card1Y = useTransform(scrollYProgress, [0.08, 0.3], [50, 0]);
  const card1Op = useTransform(scrollYProgress, [0.08, 0.3], [0, 1]);
  const card2Y = useTransform(scrollYProgress, [0.12, 0.34], [50, 0]);
  const card2Op = useTransform(scrollYProgress, [0.12, 0.34], [0, 1]);
  const card3Y = useTransform(scrollYProgress, [0.16, 0.38], [50, 0]);
  const card3Op = useTransform(scrollYProgress, [0.16, 0.38], [0, 1]);

  // Mini cards
  const miniOp = useTransform(scrollYProgress, [0.2, 0.42], [0, 1]);
  const miniScale = useTransform(scrollYProgress, [0.2, 0.42], [0.92, 1]);

  return (
    <motion.section ref={ref} className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-end mb-16">
        <motion.div style={{ x: headerX, opacity: headerOp }}>
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter mb-4">Elite Learning Paths.</h2>
          <p className="text-on-surface-variant">Master the most in-demand technologies of 2024.</p>
        </motion.div>
        <motion.div className="hidden md:block" style={{ x: linkX, opacity: linkOp }}>
          <Link className="text-secondary font-bold flex items-center gap-2 hover:gap-4 transition-all" to="/courses">View All Paths <span className="material-symbols-outlined">arrow_forward</span></Link>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          className="bg-surface-container-high rounded-3xl overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all group"
          style={{ opacity: card1Op, y: card1Y }}
          whileHover={{ y: -6 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <div className="h-48 overflow-hidden relative">
            <img alt="Futuristic react.js logo glowing in a dark room" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZLWfNPWHmiFNt5MT54xAV2qpYqSXSvcQzDbLxEb-bqOX5CYwvNiygF1AH0uZcPUu0Yp9xWnNZ8xDTHqMpXGpBkczkmkUBSXOfKXPwLJBgz5RFg-QeM93rFcLU7gNsKloItM3AyhvznZt2e8iNI2-BYX1LAok632eGzEldogInqr71dj0LqFf5cvHlfuEsRW_e4w3Sj0yhbhNLVmLWXOjmD-zbCBxpJke365RI4GQ9gp3pUmwCTLNVA36Qtu--qBskxs-mlZgiBA8" />
            <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-full text-[10px] font-black uppercase text-on-primary">Trending</div>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-2">AI Web Development</h3>
            <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">Master Next.js 14 and integrate OpenAI API to build intelligent SaaS applications.</p>
            <div className="flex items-center justify-between">
              <span className="text-primary font-black">₹2499</span>
              <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }} className="text-on-background font-bold text-sm bg-surface-variant px-4 py-2 rounded-lg hover:bg-primary hover:text-on-primary transition-all">Enroll Now</motion.button>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="bg-surface-container-high rounded-3xl overflow-hidden border border-outline-variant/10 hover:border-secondary/30 transition-all group"
          style={{ opacity: card2Op, y: card2Y }}
          whileHover={{ y: -6 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <div className="h-48 overflow-hidden relative">
            <img alt="Data visualization screen with vibrant blue line charts" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2M5Cu1j77MSmIpXH6V5IaGYuIfvx2yZAj_PX4dZi6uja5o_On-oS27K2GpnelewobsD0glZYgK5oqj1tHe0QlSeSC-Ca5BedfCU7PzGKdlR-kl0v63Lj37B0gDW2CdedFx1lmwiwYzmRzSTcmIjLSrj9anQaDD9s6sFm1_Zkns9csgk_y4TEiGSCa14HIMHIAPwoOqXbWwwHPsx_xgSv0ebIfK3aPvQOT_IipHD9FR_x5qiqqmQlMX-5jmZK4hhJ6uKmFfAvRb1M" />
            <div className="absolute top-4 right-4 bg-secondary px-3 py-1 rounded-full text-[10px] font-black uppercase text-on-secondary">High Salary</div>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-2">Mastering Data Science</h3>
            <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">From Python basics to advanced predictive modeling and machine learning algorithms.</p>
            <div className="flex items-center justify-between">
              <span className="text-secondary font-black">₹2499</span>
              <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }} className="text-on-background font-bold text-sm bg-surface-variant px-4 py-2 rounded-lg hover:bg-secondary hover:text-on-secondary transition-all">Enroll Now</motion.button>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="bg-surface-container-high rounded-3xl overflow-hidden border border-outline-variant/10 hover:border-tertiary/30 transition-all group"
          style={{ opacity: card3Op, y: card3Y }}
          whileHover={{ y: -6 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <div className="h-48 overflow-hidden relative">
            <img alt="Artificial intelligence glowing brain conceptual art" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsQtRntD31zFLot914xEKKe9cf7C4ljD2ClkdFGc8NWCovUMgAt7brH8Be9ERYpnQGOpEHsWRDIkB-16HDvLw1HVdvcqKns9z3P1jvgOskcy1P9B450EFy-HFPl21SXr70xa-XIZFrRdv4Tap7UXbzlFwDHfmwus4MxjNjIuBWbkJJQ8oPFUBlfqk_GQLiiKxvr-Ve5rAh3ClVlTrxGIF1E9bPWHbOvHH09fe2sNjP9BDoGiovFRSmWepXk4oWQa5ecf77ywXpW4k" />
            <div className="absolute top-4 right-4 bg-tertiary px-3 py-1 rounded-full text-[10px] font-black uppercase text-on-tertiary">New Release</div>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-2">Generative AI Mastery</h3>
            <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">Learn to build and fine-tune LLMs using LangChain, HuggingFace and Python.</p>
            <div className="flex items-center justify-between">
              <span className="text-tertiary font-black">₹2499</span>
              <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }} className="text-on-background font-bold text-sm bg-surface-variant px-4 py-2 rounded-lg hover:bg-tertiary hover:text-on-tertiary transition-all">Enroll Now</motion.button>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{ opacity: miniOp, scale: miniScale }}
        >
          <motion.div className="p-6 bg-surface-container-low border border-outline-variant/10 rounded-2xl hover:bg-surface-variant transition-all" whileHover={{ scale: 1.04 }}>
            <h4 className="font-bold mb-2">Java Full Stack</h4>
            <p className="text-xs text-on-surface-variant mb-4">Enterprise-grade Spring Boot &amp; Microservices.</p>
            <span className="text-primary-dim font-bold">₹2499</span>
          </motion.div>
          <motion.div className="p-6 bg-surface-container-low border border-outline-variant/10 rounded-2xl hover:bg-surface-variant transition-all" whileHover={{ scale: 1.04 }}>
            <h4 className="font-bold mb-2">DSA &amp; LeetCode</h4>
            <p className="text-xs text-on-surface-variant mb-4">Master algorithms to crack FAANG interviews.</p>
            <span className="text-primary-dim font-bold">₹2499</span>
          </motion.div>
          <motion.div className="p-6 bg-surface-container-low border border-outline-variant/10 rounded-2xl hover:bg-surface-variant transition-all" whileHover={{ scale: 1.04 }}>
            <h4 className="font-bold mb-2">Cloud Computing</h4>
            <p className="text-xs text-on-surface-variant mb-4">AWS, Azure and DevOps fundamentals.</p>
            <span className="text-primary-dim font-bold">₹2499</span>
          </motion.div>
          <motion.div className="p-6 bg-surface-container-low border border-outline-variant/10 rounded-2xl hover:bg-surface-variant transition-all" whileHover={{ scale: 1.04 }}>
            <h4 className="font-bold mb-2">UI/UX Design</h4>
            <p className="text-xs text-on-surface-variant mb-4">Modern interface design using Figma &amp; Framer.</p>
            <span className="text-primary-dim font-bold">₹2499</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
