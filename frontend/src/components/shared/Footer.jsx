export default function Footer({ activePage }) {
  if (activePage === "home") {
    return (
      <footer className="bg-slate-950 w-full py-12 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div className="space-y-6">
            <div className="text-xl font-black text-slate-50">LUMINARY</div>
            <p className="text-slate-500 font-['Inter'] text-sm tracking-wide leading-relaxed">The high-end command center for the next generation of professional builders.</p>
          </div>
          <div className="space-y-4">
            <h5 className="font-bold text-slate-200">Education</h5>
            <ul className="space-y-2">
              <li><a className="text-slate-500 hover:text-purple-300 transition-colors font-['Inter'] text-sm tracking-wide" href="#">Web Development</a></li>
              <li><a className="text-slate-500 hover:text-purple-300 transition-colors font-['Inter'] text-sm tracking-wide" href="#">Data Science</a></li>
              <li><a className="text-slate-500 hover:text-purple-300 transition-colors font-['Inter'] text-sm tracking-wide" href="#">Gen AI Mastery</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="font-bold text-slate-200">Platform</h5>
            <ul className="space-y-2">
              <li><a className="text-slate-500 hover:text-purple-300 transition-colors font-['Inter'] text-sm tracking-wide" href="#">Privacy Policy</a></li>
              <li><a className="text-slate-500 hover:text-purple-300 transition-colors font-['Inter'] text-sm tracking-wide" href="#">Terms of Service</a></li>
              <li><a className="text-slate-500 hover:text-purple-300 transition-colors font-['Inter'] text-sm tracking-wide" href="#">Student Portal</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="font-bold text-slate-200">Connect</h5>
            <ul className="space-y-2">
              <li><a className="text-slate-500 hover:text-purple-300 transition-colors font-['Inter'] text-sm tracking-wide" href="#">Contact Support</a></li>
              <li><a className="text-slate-500 hover:text-purple-300 transition-colors font-['Inter'] text-sm tracking-wide" href="#">LinkedIn</a></li>
              <li><a className="text-slate-500 hover:text-purple-300 transition-colors font-['Inter'] text-sm tracking-wide" href="#">X (Twitter)</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-slate-800 text-center md:text-left">
          <p className="text-slate-500 font-['Inter'] text-sm tracking-wide">© 2024 LUMINARY. THE NEON OBSERVATORY.</p>
        </div>
      </footer>
    )
  }

  // Courses page footer (default)
  return (
    <footer className="bg-[#0f131c] text-[#c0c1ff] font-['Inter'] text-sm w-full py-12 no-shadows mx-auto flex flex-col md:flex-row justify-between items-center px-8 border-t border-outline-variant/10">
      <div className="text-[#dfe2ef]/40 mb-4 md:mb-0">© 2024 Luminary. All Rights Reserved.</div>
      <div className="flex gap-6">
        <a className="text-[#dfe2ef]/40 hover:text-[#c0c1ff] transition-opacity" href="#">Privacy Policy</a>
        <a className="text-[#dfe2ef]/40 hover:text-[#c0c1ff] transition-opacity" href="#">Terms of Service</a>
        <a className="text-[#dfe2ef]/40 hover:text-[#c0c1ff] transition-opacity" href="#">Help Center</a>
        <a className="text-[#dfe2ef]/40 hover:text-[#c0c1ff] transition-opacity" href="#">Contact Us</a>
      </div>
    </footer>
  )
}
