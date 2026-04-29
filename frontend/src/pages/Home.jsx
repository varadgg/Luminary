import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import Navbar from '../components/shared/Navbar.jsx'
import HeroSection from '../components/home/HeroSection.jsx'
import ProblemSection from '../components/home/ProblemSection.jsx'
import StorySection from '../components/home/StorySection.jsx'
import SolutionSection from '../components/home/SolutionSection.jsx'
import CoursesSection from '../components/home/CoursesSection.jsx'
import MissionSection from '../components/home/MissionSection.jsx'
import FinalCTASection from '../components/home/FinalCTASection.jsx'
import Footer from '../components/shared/Footer.jsx'

export default function Home() {
  const containerRef = useRef(null)

  // Use global scroll instead of target-based (more stable)
  const { scrollYProgress } = useScroll()

  // Smooth parallax motion
  const glowY1 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const glowY2 = useTransform(scrollYProgress, [0, 1], [0, -180])
  const glowY3 = useTransform(scrollYProgress, [0, 1], [0, -450])

  return (
    <div
      ref={containerRef}
      className="theme-home overflow-x-hidden relative"
    >
      <Navbar activePage="home" />

      {/* 🔥 Parallax Background Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

        <motion.div
          style={{ y: glowY1 }}
          className="absolute top-[20%] -left-32 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[160px]"
        />

        <motion.div
          style={{ y: glowY2 }}
          className="absolute top-[50%] -right-32 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[140px]"
        />

        <motion.div
          style={{ y: glowY3 }}
          className="absolute top-[75%] left-1/3 w-[350px] h-[350px] bg-purple-400/10 rounded-full blur-[180px]"
        />
      </div>

      {/* 🔥 Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <ProblemSection />
        <StorySection />
        <SolutionSection />
        <CoursesSection />
        <MissionSection />
        <FinalCTASection />
      </main>

      <Footer activePage="home" />
    </div>
  )
}