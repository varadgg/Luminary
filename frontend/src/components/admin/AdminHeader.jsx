import { Link } from 'react-router-dom';

export default function AdminHeader() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-outline-variant/20 shadow-xl">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-extrabold tracking-tighter text-white font-['Plus_Jakarta_Sans']">
            LUMINARY <span className="text-primary text-sm font-normal tracking-normal ml-2 px-2 py-1 bg-primary/10 rounded">Admin</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/" className="text-on-surface-variant hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">open_in_new</span>
            View Site
          </Link>
          <div className="flex items-center gap-4 pl-6 border-l border-outline-variant/30">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                <span className="material-symbols-outlined text-primary text-sm">person</span>
              </div>
              <span className="text-sm font-medium text-white hidden md:block">Super Admin</span>
            </div>
            <button 
              onClick={() => {
                localStorage.removeItem('adminToken');
                window.location.href = '/login';
              }}
              className="text-red-400 hover:text-red-300 hover:bg-red-500/10 px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1 transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">logout</span>
              <span className="hidden md:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
