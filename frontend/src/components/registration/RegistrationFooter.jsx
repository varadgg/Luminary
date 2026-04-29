export default function RegistrationFooter() {
  return (
    <footer className="bg-[#060e20] full-width py-12 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 w-full max-w-7xl mx-auto">
        <div className="mb-6 md:mb-0">
          <span className="font-headline font-bold text-purple-200">Lumina Academy</span>
          <p className="font-inter text-sm tracking-wide text-slate-500 mt-2">© 2024 Luminous Scholar. The Digital Astral Excellence.</p>
        </div>
        <div className="flex gap-8">
          <a className="text-slate-500 hover:text-purple-400 transition-colors font-inter text-sm tracking-wide" href="#">Privacy Policy</a>
          <a className="text-slate-500 hover:text-purple-400 transition-colors font-inter text-sm tracking-wide" href="#">Terms of Service</a>
          <a className="text-slate-500 hover:text-purple-400 transition-colors font-inter text-sm tracking-wide" href="#">Support</a>
        </div>
      </div>
    </footer>
  );
}
