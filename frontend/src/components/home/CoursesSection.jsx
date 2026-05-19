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

  const featuredCards = [
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZLWfNPWHmiFNt5MT54xAV2qpYqSXSvcQzDbLxEb-bqOX5CYwvNiygF1AH0uZcPUu0Yp9xWnNZ8xDTHqMpXGpBkczkmkUBSXOfKXPwLJBgz5RFg-QeM93rFcLU7gNsKloItM3AyhvznZt2e8iNI2-BYX1LAok632eGzEldogInqr71dj0LqFf5cvHlfuEsRW_e4w3Sj0yhbhNLVmLWXOjmD-zbCBxpJke365RI4GQ9gp3pUmwCTLNVA36Qtu--qBskxs-mlZgiBA8",
      alt: "Futuristic react.js logo glowing in a dark room",
      badge: "Trending",
      badgeBg: "bg-primary",
      badgeText: "text-on-primary",
      title: "AI Web Development",
      desc: "Master Next.js 14 and integrate OpenAI API to build intelligent SaaS applications.",
      price: "₹2499",
      priceColor: "text-primary",
      btnHoverBg: "hover:bg-primary hover:text-on-primary",
      cardBorder: "hover:border-primary/30",
      opStyle: { opacity: card1Op, y: card1Y },
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2M5Cu1j77MSmIpXH6V5IaGYuIfvx2yZAj_PX4dZi6uja5o_On-oS27K2GpnelewobsD0glZYgK5oqj1tHe0QlSeSC-Ca5BedfCU7PzGKdlR-kl0v63Lj37B0gDW2CdedFx1lmwiwYzmRzSTcmIjLSrj9anQaDD9s6sFm1_Zkns9csgk_y4TEiGSCa14HIMHIAPwoOqXbWwwHPsx_xgSv0ebIfK3aPvQOT_IipHD9FR_x5qiqqmQlMX-5jmZK4hhJ6uKmFfAvRb1M",
      alt: "Data visualization screen with vibrant blue line charts",
      badge: "High Salary",
      badgeBg: "bg-secondary",
      badgeText: "text-on-secondary",
      title: "Mastering Data Science",
      desc: "From Python basics to advanced predictive modeling and machine learning algorithms.",
      price: "₹2499",
      priceColor: "text-secondary",
      btnHoverBg: "hover:bg-secondary hover:text-on-secondary",
      cardBorder: "hover:border-secondary/30",
      opStyle: { opacity: card2Op, y: card2Y },
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsQtRntD31zFLot914xEKKe9cf7C4ljD2ClkdFGc8NWCovUMgAt7brH8Be9ERYpnQGOpEHsWRDIkB-16HDvLw1HVdvcqKns9z3P1jvgOskcy1P9B450EFy-HFPl21SXr70xa-XIZFrRdv4Tap7UXbzlFwDHfmwus4MxjNjIuBWbkJJQ8oPFUBlfqk_GQLiiKxvr-Ve5rAh3ClVlTrxGIF1E9bPWHbOvHH09fe2sNjP9BDoGiovFRSmWepXk4oWQa5ecf77ywXpW4k",
      alt: "Artificial intelligence glowing brain conceptual art",
      badge: "New Release",
      badgeBg: "bg-tertiary",
      badgeText: "text-on-tertiary",
      title: "Generative AI Mastery",
      desc: "Learn to build and fine-tune LLMs using LangChain, HuggingFace and Python.",
      price: "₹2499",
      priceColor: "text-tertiary",
      btnHoverBg: "hover:bg-tertiary hover:text-on-tertiary",
      cardBorder: "hover:border-tertiary/30",
      opStyle: { opacity: card3Op, y: card3Y },
    },
  ];

  return (
    <motion.section ref={ref} className="py-16 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-end mb-10 lg:mb-16">
        <motion.div style={{ x: headerX, opacity: headerOp }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-extrabold tracking-tighter mb-3 lg:mb-4">Elite Learning Paths.</h2>
          <p className="text-on-surface-variant text-sm lg:text-base">Master the most in-demand technologies of 2024.</p>
        </motion.div>
        <motion.div className="hidden md:block" style={{ x: linkX, opacity: linkOp }}>
          <Link className="text-secondary font-bold flex items-center gap-2 hover:gap-4 transition-all" to="/courses">View All Paths <span className="material-symbols-outlined">arrow_forward</span></Link>
        </motion.div>
      </div>

      {/* Featured Cards — Desktop: 3-col grid | Mobile: horizontal swipe carousel */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Desktop grid (hidden on mobile) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCards.map((card, i) => (
            <motion.div
              key={i}
              className={`bg-surface-container-high rounded-3xl overflow-hidden border border-outline-variant/10 ${card.cardBorder} transition-all group`}
              style={card.opStyle}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="h-48 overflow-hidden relative">
                <img alt={card.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={card.img} />
                <div className={`absolute top-4 right-4 ${card.badgeBg} px-3 py-1 rounded-full text-[10px] font-black uppercase ${card.badgeText}`}>{card.badge}</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">{card.desc}</p>
                <div className="flex items-center justify-between">
                  <span className={`${card.priceColor} font-black`}>{card.price}</span>
                  <Link to="/register">
                    <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }} className={`text-on-background font-bold text-sm bg-surface-variant px-4 py-2 rounded-lg ${card.btnHoverBg} transition-all`}>Enroll Now</motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile horizontal swipe carousel (visible only on mobile) */}
        <div className="md:hidden">
          <div className="flex gap-5 overflow-x-auto scroll-snap-x pb-4 -mx-2 px-2 hide-scrollbar" style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
            {featuredCards.map((card, i) => (
              <motion.div
                key={i}
                className={`bg-surface-container-high rounded-3xl overflow-hidden border border-outline-variant/10 transition-all group flex-shrink-0 w-[85vw] max-w-[340px]`}
                style={{ scrollSnapAlign: 'center', ...card.opStyle }}
              >
                <div className="h-44 overflow-hidden relative">
                  <img alt={card.alt} className="w-full h-full object-cover" src={card.img} />
                  <div className={`absolute top-3 right-3 ${card.badgeBg} px-3 py-1 rounded-full text-[10px] font-black uppercase ${card.badgeText}`}>{card.badge}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-on-surface-variant text-sm mb-5 line-clamp-2">{card.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className={`${card.priceColor} font-black`}>{card.price}</span>
                    <Link to="/register">
                      <motion.button whileTap={{ scale: 0.95 }} className={`text-on-background font-bold text-sm bg-surface-variant px-4 py-2 rounded-lg ${card.btnHoverBg} transition-all`}>Enroll Now</motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Swipe hint */}
          <div className="flex justify-center gap-1.5 mt-3">
            {featuredCards.map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-primary/30"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Mini cards — more breathing room from featured cards */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-10 lg:mt-14">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          style={{ opacity: miniOp, scale: miniScale }}
        >
          <Link to="/register">
            <motion.div className="p-5 lg:p-6 bg-surface-container-low border border-outline-variant/10 rounded-2xl hover:bg-surface-variant transition-all h-full" whileHover={{ scale: 1.04 }}>
              <h4 className="font-bold mb-2 text-sm lg:text-base">Java Full Stack</h4>
              <p className="text-xs text-on-surface-variant mb-3 lg:mb-4">Enterprise-grade Spring Boot &amp; Microservices.</p>
              <span className="text-primary-dim font-bold text-sm lg:text-base">₹2499</span>
            </motion.div>
          </Link>
          <Link to="/register">
            <motion.div className="p-5 lg:p-6 bg-surface-container-low border border-outline-variant/10 rounded-2xl hover:bg-surface-variant transition-all h-full" whileHover={{ scale: 1.04 }}>
              <h4 className="font-bold mb-2 text-sm lg:text-base">DSA &amp; LeetCode</h4>
              <p className="text-xs text-on-surface-variant mb-3 lg:mb-4">Master algorithms to crack FAANG interviews.</p>
              <span className="text-primary-dim font-bold text-sm lg:text-base">₹2499</span>
            </motion.div>
          </Link>
          <Link to="/register">
            <motion.div className="p-5 lg:p-6 bg-surface-container-low border border-outline-variant/10 rounded-2xl hover:bg-surface-variant transition-all h-full" whileHover={{ scale: 1.04 }}>
              <h4 className="font-bold mb-2 text-sm lg:text-base">Cloud Computing</h4>
              <p className="text-xs text-on-surface-variant mb-3 lg:mb-4">AWS, Azure and DevOps fundamentals.</p>
              <span className="text-primary-dim font-bold text-sm lg:text-base">₹2499</span>
            </motion.div>
          </Link>
          <Link to="/register">
            <motion.div className="p-5 lg:p-6 bg-surface-container-low border border-outline-variant/10 rounded-2xl hover:bg-surface-variant transition-all h-full" whileHover={{ scale: 1.04 }}>
              <h4 className="font-bold mb-2 text-sm lg:text-base">UI/UX Design</h4>
              <p className="text-xs text-on-surface-variant mb-3 lg:mb-4">Modern interface design using Figma &amp; Framer.</p>
              <span className="text-primary-dim font-bold text-sm lg:text-base">₹2499</span>
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Mobile "View All" link */}
      <div className="md:hidden max-w-7xl mx-auto px-6 mt-8 text-center">
        <Link className="text-secondary font-bold inline-flex items-center gap-2 text-sm" to="/courses">View All Paths <span className="material-symbols-outlined text-base">arrow_forward</span></Link>
      </div>
    </motion.section>
  )
}
