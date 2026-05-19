import { useState } from 'react';
import Navbar from '../components/shared/Navbar.jsx'
import CoursesHeroSection from '../components/courses/CoursesHeroSection.jsx'
import SearchSection from '../components/courses/SearchSection.jsx'
import CoursesGridSection from '../components/courses/CoursesGridSection.jsx'
import WhatYouGetSection from '../components/courses/WhatYouGetSection.jsx'
import ProgramFlowSection from '../components/courses/ProgramFlowSection.jsx'
import FinalCTASection from '../components/courses/FinalCTASection.jsx'
import Footer from '../components/shared/Footer.jsx'

export default function Courses() {
  const [search, setSearch] = useState("");
  const isSearching = search.trim().length > 0;

  return (
    <div className="theme-courses antialiased min-h-screen flex flex-col">
      <Navbar activePage="courses" />
      <main className="flex-grow pt-20">
        <CoursesHeroSection isSearching={isSearching} />
        <SearchSection search={search} setSearch={setSearch} />
        <CoursesGridSection search={search} />
        {!isSearching && (
          <>
            <WhatYouGetSection />
            <ProgramFlowSection />
          </>
        )}
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}
