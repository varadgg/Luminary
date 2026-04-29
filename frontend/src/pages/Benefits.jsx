import Navbar from '../components/shared/Navbar.jsx';
import BenefitsHeroSection from '../components/benefits/BenefitsHeroSection.jsx';
import ProgramStructureSection from '../components/benefits/ProgramStructureSection.jsx';
import TimelineSection from '../components/benefits/TimelineSection.jsx';
import LearningExperienceSection from '../components/benefits/LearningExperienceSection.jsx';
import MentorshipSection from '../components/benefits/MentorshipSection.jsx';
import CertificateSection from '../components/benefits/CertificateSection.jsx';
import AffordabilitySection from '../components/benefits/AffordabilitySection.jsx';
import FinalCTASection from '../components/benefits/FinalCTASection.jsx';
import Footer from '../components/shared/Footer.jsx';

export default function Benefits() {
  return (
    <div className="bg-surface text-on-surface font-body min-h-screen flex flex-col antialiased selection:bg-primary-dim selection:text-on-primary">
      <Navbar activePage="benefits" />
      <main className="flex-grow">
        <BenefitsHeroSection />
        <ProgramStructureSection />
        <TimelineSection />
        <LearningExperienceSection />
        <MentorshipSection />
        <CertificateSection />
        <AffordabilitySection />
        <FinalCTASection />
      </main>
      <Footer activePage="benefits" />
    </div>
  );
}
