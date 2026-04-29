import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ activePage }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const linkBase = "font-['Plus_Jakarta_Sans'] font-bold tracking-tight text-slate-400 hover:text-slate-100 hover:bg-white/5 transition-all duration-300 border-b-2 border-transparent pb-1";
  const linkActive = "font-['Plus_Jakarta_Sans'] font-bold tracking-tight text-purple-400 border-b-2 border-purple-500 pb-1";

  // Close Menu on Route Change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent Background Scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/40 backdrop-blur-xl shadow-2xl shadow-purple-500/10">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-extrabold tracking-tighter text-slate-50 font-['Plus_Jakarta_Sans']">LUMINARY</div>
        
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
            className="lg:hidden text-white focus:outline-none flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute top-full left-0 w-full transition-all duration-300 ease-in-out ${
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
      }`}>
        <div className="flex flex-col items-center gap-6 py-8 bg-black/95 backdrop-blur-2xl border-t border-white/10 shadow-2xl min-h-screen">
          <Link className={activePage === "home" ? linkActive : linkBase} to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link className={activePage === "registration" || activePage === "register" ? linkActive : linkBase} to="/register" onClick={() => setIsOpen(false)}>Registration</Link>
          <Link className={activePage === "courses" ? linkActive : linkBase} to="/courses" onClick={() => setIsOpen(false)}>Courses</Link>
          <Link className={activePage === "benefits" ? linkActive : linkBase} to="/benefits" onClick={() => setIsOpen(false)}>Benefits</Link>
          <Link className={activePage === "about" ? linkActive : linkBase} to="/about" onClick={() => setIsOpen(false)}>About</Link>

          <Link 
            to="/register"
            className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-white font-semibold shadow-[0_0_20px_rgba(168,85,247,0.3)]"
            onClick={() => setIsOpen(false)}
          >
            Register Now
          </Link>
        </div>
      </div>
    </nav>
  )
}
