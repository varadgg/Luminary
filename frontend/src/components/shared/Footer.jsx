import { useState } from 'react';
import { Link } from 'react-router-dom';
import PolicyModal, { PrivacyPolicyContent, TermsConditionsContent } from './PolicyModal';

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const linkClass = "footer-link text-slate-500 hover:text-purple-300 transition-colors duration-300 font-['Inter'] text-sm tracking-wide";

  return (
    <>
      <footer className="bg-slate-950 w-full py-12 px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

          {/* ─── Brand ─── */}
          <div className="space-y-6">
            <div className="text-xl font-black text-slate-50">LUMINARY</div>
            <p className="text-slate-500 font-['Inter'] text-sm tracking-wide leading-relaxed">
              The high-end command center for the next generation of professional builders.
            </p>
          </div>

          {/* ─── Education ─── */}
          <div className="space-y-4">
            <h5 className="font-bold text-slate-200">Education</h5>
            <ul className="space-y-2">
              <li>
                <Link className={linkClass} to="/courses">
                  Web Development
                </Link>
              </li>
              <li>
                <Link className={linkClass} to="/courses">
                  Data Science
                </Link>
              </li>
              <li>
                <Link className={linkClass} to="/courses">
                  Gen AI Mastery
                </Link>
              </li>
            </ul>
          </div>

          {/* ─── Platform ─── */}
          <div className="space-y-4">
            <h5 className="font-bold text-slate-200">Platform</h5>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setPrivacyOpen(true)}
                  className={`${linkClass} cursor-pointer bg-transparent border-none p-0 text-left`}
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setTermsOpen(true)}
                  className={`${linkClass} cursor-pointer bg-transparent border-none p-0 text-left`}
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          {/* ─── Connect Us ─── */}
          <div className="space-y-4">
            <h5 className="font-bold text-slate-200">Connect Us</h5>
            <ul className="space-y-3">
              {/* Email */}
              <li>
                <a
                  href="mailto:luminaryacademyofficial@gmail.com"
                  className={`${linkClass} flex items-center gap-2.5 group/link`}
                >
                  <svg className="w-4 h-4 shrink-0 text-slate-600 group-hover/link:text-purple-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span className="break-all">luminaryacademyofficial@gmail.com</span>
                </a>
              </li>
              {/* Phone */}
              <li>
                <a
                  href="tel:+919322135356"
                  className={`${linkClass} flex items-center gap-2.5 group/link`}
                >
                  <svg className="w-4 h-4 shrink-0 text-slate-600 group-hover/link:text-purple-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span>+91 9322135356</span>
                </a>
              </li>
              {/* WhatsApp */}
              <li>
                <a
                  href="https://wa.me/919322135356"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} flex items-center gap-2.5 group/link`}
                >
                  <svg className="w-4 h-4 shrink-0 text-slate-600 group-hover/link:text-green-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>+91 9322135356</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ─── Bottom Bar ─── */}
        <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-slate-800 text-center md:text-left">
          <p className="text-slate-500 font-['Inter'] text-sm tracking-wide">© 2025 LUMINARY. THE NEON OBSERVATORY.</p>
        </div>
      </footer>

      {/* ─── Modals ─── */}
      <PolicyModal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
        title="Privacy Policy"
      >
        <PrivacyPolicyContent />
      </PolicyModal>

      <PolicyModal
        isOpen={termsOpen}
        onClose={() => setTermsOpen(false)}
        title="Terms & Conditions"
      >
        <TermsConditionsContent />
      </PolicyModal>
    </>
  );
}
