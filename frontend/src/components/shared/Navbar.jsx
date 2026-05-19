import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import studentCouncilLogo from "/images/StudentCouncilLogo.png";

export default function Navbar({ activePage }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const linkBase = "font-['Plus_Jakarta_Sans'] font-bold tracking-tight text-slate-400 hover:text-slate-100 hover:bg-white/5 transition-all duration-300 border-b-2 border-transparent pb-1";
  const linkActive = "font-['Plus_Jakarta_Sans'] font-bold tracking-tight text-purple-400 border-b-2 border-purple-500 pb-1";

  // Mobile menu link styles — bigger, touch-friendly
  const mobileLinkBase = "font-['Plus_Jakarta_Sans'] font-bold text-lg tracking-tight text-slate-300 hover:text-white transition-all duration-300 py-3 px-6 rounded-xl hover:bg-white/5 w-full text-center";
  const mobileLinkActive = "font-['Plus_Jakarta_Sans'] font-bold text-lg tracking-tight text-purple-400 py-3 px-6 rounded-xl bg-purple-500/10 border border-purple-500/20 w-full text-center";

  // Close Menu on Route Change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent Background Scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-slate-950/40 backdrop-blur-xl shadow-2xl shadow-purple-500/10">
        <div className="flex justify-between items-center px-4 lg:px-8 py-4 max-w-7xl mx-auto">
          {/* Brand Identity */}
          <Link to="/" className="flex items-center gap-1.5 sm:gap-2.5 group min-w-0">
            <div className="flex flex-col leading-none shrink-0">
              <span className="text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tighter text-slate-50 font-['Plus_Jakarta_Sans']">LUMINARY</span>
              <span className="text-[8px] sm:text-[9px] lg:text-[10px] font-semibold tracking-[0.15em] uppercase text-purple-400/80 mt-0.5">Academy</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5 ml-0.5 sm:ml-1 opacity-90 group-hover:opacity-60 transition-opacity min-w-0">
              <span className="text-slate-500 text-base sm:text-xl lg:text-2xl font-light shrink-0">×</span>
              <span className="text-[8px] sm:text-[10px] lg:text-[12px] font-medium tracking-wider uppercase text-slate-100/70 whitespace-nowrap">Student Council</span>
              <img
                src={studentCouncilLogo}
                alt="Student Council"
                className="h-5 sm:h-6 lg:h-8 w-auto object-contain rounded-sm shrink-0"
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex gap-8 items-center">
            <Link className={activePage === "home" ? linkActive : linkBase} to="/">Home</Link>
            <Link className={activePage === "registration" || activePage === "register" ? linkActive : linkBase} to="/register">Registration</Link>
            <Link className={activePage === "courses" ? linkActive : linkBase} to="/courses">Courses</Link>
            <Link className={activePage === "benefits" ? linkActive : linkBase} to="/benefits">Benefits</Link>
            <Link className={activePage === "about" ? linkActive : linkBase} to="/about">About</Link>
          </div>

          {/* Right Side (Desktop CTA + Mobile Hamburger) */}
          <div className="flex items-center gap-4">
            <Link to="/register" className="hidden lg:block">
              <button className="bg-gradient-to-br from-[#8A2BE2] to-[#a855f7] text-white font-bold px-6 py-2 rounded-full scale-95 active:opacity-80 transition-transform hover:shadow-[0_0_20px_rgba(138,43,226,0.3)]">
                Register Now
              </button>
            </Link>

            <button
              className="lg:hidden text-white focus:outline-none flex items-center justify-center relative z-50"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-3xl">
                {isOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu — Full-screen overlay with slide-in panel */}
      {/* Backdrop overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Slide-in menu panel */}
      <div className={`lg:hidden fixed top-0 right-0 z-40 h-full w-[85vw] max-w-sm transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className="h-full bg-gradient-to-b from-slate-950 via-[#0d0f14] to-slate-950 border-l border-white/10 shadow-[-20px_0_60px_rgba(0,0,0,0.5)] flex flex-col pt-24 pb-10 px-6">
          {/* Nav links with staggered animation */}
          <div className="flex flex-col gap-2 flex-grow">
            {[
              { name: "Home", key: "home", path: "/" },
              { name: "Registration", key: "register", path: "/register" },
              { name: "Courses", key: "courses", path: "/courses" },
              { name: "Benefits", key: "benefits", path: "/benefits" },
              { name: "About", key: "about", path: "/about" },
            ].map((item, i) => (
              <Link
                key={item.key}
                className={`${activePage === item.key || (item.key === "register" && activePage === "registration")
                  ? mobileLinkActive
                  : mobileLinkBase
                  } transform transition-all duration-500 ${isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                  }`}
                style={{ transitionDelay: isOpen ? `${150 + i * 60}ms` : "0ms" }}
                to={item.path}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Divider */}
            <div className={`my-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-500 ${isOpen ? "opacity-100" : "opacity-0"
              }`} style={{ transitionDelay: isOpen ? "500ms" : "0ms" }} />

            {/* CTA button */}
            <Link
              to="/register"
              className={`mt-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl text-white font-bold text-center shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] active:scale-95 ${isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                }`}
              style={{ transitionDelay: isOpen ? "550ms" : "0ms" }}
              onClick={() => setIsOpen(false)}
            >
              Register Now
            </Link>
          </div>

          {/* Bottom branding in mobile menu */}
          <div className={`flex items-center gap-2 justify-center opacity-40 transition-all duration-500 ${isOpen ? "translate-y-0 opacity-40" : "translate-y-4 opacity-0"
            }`} style={{ transitionDelay: isOpen ? "650ms" : "0ms" }}>
            <span className="text-xs font-semibold tracking-wider text-slate-400">LUMINARY</span>
            <span className="text-slate-600 text-[10px]">×</span>
            <img src={studentCouncilLogo} alt="Student Council" className="h-4 w-auto opacity-60 rounded-sm" />
          </div>
        </div>
      </div>
    </>
  )
}
