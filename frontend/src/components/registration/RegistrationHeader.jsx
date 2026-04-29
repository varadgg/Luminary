export default function RegistrationHeader() {
  return (
    <header className="bg-transparent backdrop-blur-xl docked full-width top-0 sticky z-50">
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-screen-2xl mx-auto">
        <div className="flex-1 flex justify-start">
          <div className="text-2xl font-black tracking-tighter text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 font-headline">
            Luminary
          </div>
        </div>
        <div className="hidden md:flex flex-1 justify-center space-x-8 items-center">
          <a className="text-slate-400 hover:text-white transition-colors font-label text-sm uppercase tracking-wider" href="#">Home</a>
          <a className="text-white border-b-2 border-purple-500 pb-1 font-label text-sm uppercase tracking-wider" href="#">Registration</a>
          <a className="text-slate-400 hover:text-white transition-colors font-label text-sm uppercase tracking-wider" href="#">Courses</a>
          <a className="text-slate-400 hover:text-white transition-colors font-label text-sm uppercase tracking-wider" href="#">Benefits</a>
          <a className="text-slate-400 hover:text-white transition-colors font-label text-sm uppercase tracking-wider" href="#">About</a>
        </div>
        <div className="flex-1 hidden md:block"></div>
      </div>
    </header>
  );
}
