import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PolicyModal({ isOpen, onClose, title, children }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('body-scroll-lock');
    } else {
      document.body.classList.remove('body-scroll-lock');
    }
    return () => document.body.classList.remove('body-scroll-lock');
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl max-h-[85vh] bg-slate-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_0_80px_rgba(0,0,0,0.8),0_0_40px_rgba(168,85,247,0.08)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 sm:px-8 pt-6 sm:pt-8 pb-4 border-b border-white/5">
              <h2 className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">
                {title}
              </h2>
              <button
                onClick={onClose}
                className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/30 text-slate-400 hover:text-slate-200 transition-all duration-300 shrink-0"
                aria-label="Close modal"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-1 px-6 sm:px-8 py-6 sm:py-8 policy-content">
              {children}
            </div>

            {/* Bottom fade gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-950/95 to-transparent pointer-events-none rounded-b-2xl" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

/* ─── Privacy Policy Content ─── */
export function PrivacyPolicyContent() {
  const sectionTitle = "font-['Plus_Jakarta_Sans'] text-base sm:text-lg font-semibold text-slate-200 mt-6 mb-3 first:mt-0";
  const paragraph = "text-slate-400 font-['Inter'] text-sm leading-relaxed mb-3";

  return (
    <div>
      <p className={paragraph}>
        At Luminary Academy, your privacy matters. This policy explains how we collect, use, and protect your information when you interact with our platform. We believe in transparency, simplicity, and respect for your data.
      </p>

      <h3 className={sectionTitle}>Information We Collect</h3>
      <p className={paragraph}>
        When you register on Luminary Academy, we collect personal details necessary to create your account and provide a tailored learning experience. This includes your full name, email address, mobile number, city, college name, and your chosen learning domain.
      </p>

      <h3 className={sectionTitle}>How We Use Your Information</h3>
      <p className={paragraph}>
        Your information is used to manage your registration, assign a unique Application ID, communicate important updates about your courses, and provide educational support. We may send you emails or messages about program schedules, new course offerings, and relevant learning resources.
      </p>

      <h3 className={sectionTitle}>Educational Communication</h3>
      <p className={paragraph}>
        As a registered learner, you may receive communication regarding course updates, schedule changes, mentorship opportunities, and platform announcements. These communications are directly related to your educational journey and are not promotional spam.
      </p>

      <h3 className={sectionTitle}>Data Security</h3>
      <p className={paragraph}>
        We implement industry-standard security measures to protect your personal information. Your data is stored securely and access is restricted to authorized personnel only. We use encrypted connections and regularly review our security practices to maintain the integrity of your information.
      </p>

      <h3 className={sectionTitle}>We Never Sell Your Data</h3>
      <p className={paragraph}>
        Luminary Academy does not sell, trade, or rent your personal information to third parties. Your data is used solely for the purposes outlined in this policy — to enhance your learning experience and maintain platform operations.
      </p>

      <h3 className={sectionTitle}>Platform Updates</h3>
      <p className={paragraph}>
        We may update this privacy policy from time to time to reflect changes in our practices or platform features. When significant changes are made, we will notify registered users through email or an in-platform announcement. Continued use of the platform after updates constitutes acceptance of the revised policy.
      </p>

      <h3 className={sectionTitle}>Support & Contact</h3>
      <p className={paragraph}>
        If you have questions about your data or this privacy policy, you can reach our team at luminaryacademyofficial@gmail.com. We are committed to addressing your concerns promptly and transparently.
      </p>

      <p className="text-slate-500 font-['Inter'] text-xs mt-8 pt-4 border-t border-white/5">
        Last updated: May 2026 · Luminary Academy
      </p>
    </div>
  );
}

/* ─── Terms & Conditions Content ─── */
export function TermsConditionsContent() {
  const sectionTitle = "font-['Plus_Jakarta_Sans'] text-base sm:text-lg font-semibold text-slate-200 mt-6 mb-3 first:mt-0";
  const paragraph = "text-slate-400 font-['Inter'] text-sm leading-relaxed mb-3";

  return (
    <div>
      <p className={paragraph}>
        Welcome to Luminary Academy. By registering and using our platform, you agree to the following terms. These terms are designed to ensure a positive, respectful, and productive experience for all learners.
      </p>

      <h3 className={sectionTitle}>Educational Purpose</h3>
      <p className={paragraph}>
        Luminary Academy is an educational platform built to help students develop real-world professional skills. All courses, content, and resources are intended for personal learning and skill development. You agree to use the platform solely for educational purposes.
      </p>

      <h3 className={sectionTitle}>Registration Authenticity</h3>
      <p className={paragraph}>
        When registering, you agree to provide accurate and truthful information including your name, email, mobile number, college, and city. Providing false or misleading information may result in the suspension of your account and access to course materials.
      </p>

      <h3 className={sectionTitle}>Respectful Platform Usage</h3>
      <p className={paragraph}>
        You agree to use Luminary Academy respectfully. Any form of harassment, misuse of platform features, distribution of harmful content, or attempts to disrupt the learning experience of others is strictly prohibited and may lead to immediate account termination.
      </p>

      <h3 className={sectionTitle}>Course Access</h3>
      <p className={paragraph}>
        Upon successful registration, you will receive access to your selected learning domain. Course availability, schedules, and content may be updated periodically to ensure relevance and quality. Luminary Academy reserves the right to modify course offerings as needed.
      </p>

      <h3 className={sectionTitle}>Communication Consent</h3>
      <p className={paragraph}>
        By registering, you consent to receive educational communications from Luminary Academy including course updates, schedule notifications, mentorship announcements, and platform news via email, SMS, or WhatsApp. You may request to opt out of non-essential communications at any time.
      </p>

      <h3 className={sectionTitle}>Intellectual Property</h3>
      <p className={paragraph}>
        All course materials, content, designs, and branding on Luminary Academy are the intellectual property of Luminary Academy and its content creators. You may not reproduce, distribute, or commercially use any materials from the platform without explicit written permission.
      </p>

      <h3 className={sectionTitle}>Policy Updates</h3>
      <p className={paragraph}>
        Luminary Academy reserves the right to update these terms as the platform evolves. Significant changes will be communicated to registered users. Continued use of the platform following any updates constitutes acceptance of the revised terms.
      </p>

      <p className="text-slate-500 font-['Inter'] text-xs mt-8 pt-4 border-t border-white/5">
        Last updated: May 2026 · Luminary Academy
      </p>
    </div>
  );
}
