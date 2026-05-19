import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function StorySection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Left image slides in from left, right text slides in from right
  const opacity = useTransform(scrollYProgress, [0, 0.35], [0, 1]);
  const imageX = useTransform(scrollYProgress, [0, 0.35], [-80, 0]);
  const textX = useTransform(scrollYProgress, [0, 0.35], [60, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity }}
      className="py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div className="relative order-2 lg:order-1" style={{ x: imageX }}>
            <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl shadow-primary/10">
              <img alt="Young diverse team collaborating in a modern neon-lit studio workspace" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZlFheuMY1jxuv17-eRtk7_p8wyLLGcSKBzKAOMD32aPHTv5FBBrn4m072H-9WCOiRv_rN6Nb5Frd3FF8NaSLhfpKNsShkOxGFMlPmxFrvsNqCRHoQFbYqSaxc_MtnL8vMS2Y34HLqT5y_euLhjv4bhkcvGX4ubtkuZTrb88qDULeuh4EwcZT6-v8pHjfF6I0vfBXNrDslWZ5W22H9NK56x2GUSDHgyvfXBMCmaqoOZ5OkWdZqqolSUTbumEVQ68IvYZ5-orKs-kc" />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
          </motion.div>
          <motion.div className="order-1 lg:order-2" style={{ x: textX }}>
            <h2 className="text-4xl md:text-6xl font-headline font-extrabold mb-8 tracking-tighter leading-tight">So We Decided to <span className="text-primary italic">Change It.</span></h2>
            <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
              <p>We were tired of seeing brilliant minds wasted because they couldn't afford "elite" training. Luminary was born from a simple realization: <strong>Education should be accessible, practical, and results-driven.</strong></p>
              <p>Our team of industry veterans and young innovators came together to build the platform we wished we had when we were starting out. No fluff, no unnecessary jargon—just the raw skills needed to build the future.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
