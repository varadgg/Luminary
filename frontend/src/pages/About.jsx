import Navbar from '../components/shared/Navbar.jsx';
import AboutHeroSection from '../components/about/AboutHeroSection.jsx';
import ProblemSection from '../components/about/ProblemSection.jsx';
import StorySection from '../components/about/StorySection.jsx';
import DifferentiationSection from '../components/about/DifferentiationSection.jsx';
import ProcessSection from '../components/about/ProcessSection.jsx';
import StatsSection from '../components/about/StatsSection.jsx';
import StartupSupportSection from '../components/about/StartupSupportSection.jsx';
import FinalCTASection from '../components/about/FinalCTASection.jsx';
import Footer from '../components/shared/Footer.jsx';

export default function About() {
  return (
    <div className="bg-surface text-on-surface antialiased overflow-x-hidden min-h-screen flex flex-col">
      <Navbar activePage="about" />
      <main className="flex-grow flex flex-col items-center w-full">
        <AboutHeroSection />
        <ProblemSection />
        <StorySection />
        <DifferentiationSection />
        <ProcessSection />
        <StatsSection />
        <StartupSupportSection />
        <FinalCTASection />
      </main>
      <Footer activePage="about" />
    </div>
  );
}
