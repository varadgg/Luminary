import { useState } from 'react';

export default function RegistrationFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    domain: '',
    otherInterest: '',
    college: '',
    city: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [appId, setAppId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setAppId(data.data.applicationId);
        setStatus({ type: 'success', message: '' });
        setFormData({
          name: '',
          email: '',
          mobile: '',
          domain: '',
          otherInterest: '',
          college: '',
          city: ''
        });
        console.log("Registration Success:", data);
      } else {
        setStatus({ type: 'error', message: data.message || 'Registration failed. Please try again.' });
      }
    } catch (error) {
      console.error('Registration Error:', error);
      setStatus({ type: 'error', message: 'Failed to connect to the server.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full relative flex justify-end">
      <div className="w-full max-w-2xl p-4 md:p-5 rounded-[2rem] bg-gradient-to-b from-surface-container/80 to-surface-container-high/80 backdrop-blur-xl border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.6)] max-h-[85vh] flex flex-col">
        <div className="mb-4 text-center shrink-0">
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-white mb-1">Start Your Journey</h2>
          <p className="text-xs md:text-sm text-on-surface-variant">Fill in your details and take the first step toward a job-ready career.</p>
        </div>

        {status.type === 'error' && status.message && (
          <div className="mb-3 p-2 rounded-xl text-xs font-bold text-center shrink-0 bg-red-500/20 text-red-400 border border-red-500/30">
            {status.message}
          </div>
        )}

        {/* Success Modal */}
        {status.type === 'success' && appId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
            <div className="bg-surface-container border border-primary/30 p-8 rounded-3xl max-w-sm w-full shadow-2xl text-center relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 blur-[40px] rounded-full pointer-events-none"></div>
              <div className="w-16 h-16 bg-green-500/20 border border-green-500/50 rounded-full flex items-center justify-center mx-auto mb-4 text-green-400 text-3xl">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Registration Successful 🎉</h3>
              <p className="text-sm text-on-surface-variant mb-4">Your Application ID:</p>
              <div className="bg-black/40 border border-white/10 rounded-xl py-3 px-4 mb-4">
                <span className="text-xl font-mono font-bold tracking-wider text-primary">{appId}</span>
              </div>
              <p className="text-xs text-white/50 mb-2">Please save this ID for future reference.</p>
              <p className="text-sm text-green-400/80 mb-6">✅ Your application has been submitted successfully.<br />✅ Our team will contact you shortly.</p>
              <button
                type="button"
                onClick={() => {
                  setStatus({ type: '', message: '' });
                  setAppId(null);
                }}
                className="w-full py-3 rounded-xl bg-primary/20 text-primary font-bold hover:bg-primary/30 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <form className="space-y-2.5 flex-grow" onSubmit={handleSubmit}>

          {/* Group 1: Personal Info */}
          <div className="space-y-2 border border-white/5 p-2.5 rounded-xl bg-white/5">
            <h3 className="text-[10px] text-purple-300 uppercase tracking-widest mb-1 font-bold">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div className="group space-y-1">
                <label className="block text-[8px] tracking-[1px] uppercase text-white/60 group-focus-within:text-purple-400 ml-1 transition-colors">Full Name</label>
                <input required name="name" value={formData.name} onChange={handleChange} className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-1.5 text-[13px] text-white placeholder:text-white/40 backdrop-blur-md shadow-inner shadow-black/30 hover:border-purple-400/40 hover:bg-white/10 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40 focus:shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all duration-300" placeholder="John Doe" type="text" />
              </div>
              <div className="group space-y-1">
                <label className="block text-[8px] tracking-[1px] uppercase text-white/60 group-focus-within:text-purple-400 ml-1 transition-colors">Email Address</label>
                <input required name="email" value={formData.email} onChange={handleChange} className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-1.5 text-[13px] text-white placeholder:text-white/40 backdrop-blur-md shadow-inner shadow-black/30 hover:border-purple-400/40 hover:bg-white/10 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40 focus:shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all duration-300" placeholder="john@example.com" type="email" />
              </div>
            </div>
            <div className="group space-y-1">
              <label className="block text-[8px] tracking-[1px] uppercase text-white/60 group-focus-within:text-purple-400 ml-1 transition-colors">Mobile Number</label>
              <input required name="mobile" value={formData.mobile} onChange={handleChange} className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-1.5 text-[13px] text-white placeholder:text-white/40 backdrop-blur-md shadow-inner shadow-black/30 hover:border-purple-400/40 hover:bg-white/10 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40 focus:shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all duration-300" placeholder="+91 123 456 7890" type="tel" />
            </div>
          </div>

          {/* Group 2: Course Selection */}
          <div className="space-y-2 border border-white/5 p-2.5 rounded-xl bg-white/5">
            <h3 className="text-[10px] text-purple-300 uppercase tracking-widest mb-1 font-bold">Course Selection</h3>
            <div className="group space-y-1">
              <label className="block text-[8px] tracking-[1px] uppercase text-white/60 group-focus-within:text-purple-400 ml-1 transition-colors">Interested Domain</label>
              <div className="relative">
                <select required name="domain" value={formData.domain} onChange={handleChange} className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-1.5 text-[13px] text-white placeholder:text-white/40 backdrop-blur-md shadow-inner shadow-black/30 hover:border-purple-400/40 hover:bg-white/10 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40 focus:shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all duration-300 appearance-none cursor-pointer">
                  <option disabled value="" className="bg-slate-900 text-white">Select a domain</option>
                  <option value="Full Stack Web Engineering" className="bg-slate-900 text-white">Full Stack Web Engineering</option>
                  <option value="Data Science & AI" className="bg-slate-900 text-white">Data Science &amp; AI</option>
                  <option value="Generative AI Engineering" className="bg-slate-900 text-white">Generative AI Engineering</option>
                  <option value="Enterprise Java Full Stack" className="bg-slate-900 text-white">Enterprise Java Full Stack</option>
                  <option value="DSA Interview Mastery" className="bg-slate-900 text-white">DSA Interview Mastery</option>
                  <option value="Cloud Computing (AWS)" className="bg-slate-900 text-white">Cloud Computing (AWS)</option>
                  <option value="Android App Development" className="bg-slate-900 text-white">Android App Development</option>
                  <option value="Intelligent Automation (RPA)" className="bg-slate-900 text-white">Intelligent Automation (RPA)</option>
                  <option value="MATLAB for Engineers" className="bg-slate-900 text-white">MATLAB for Engineers</option>
                  <option value="AI & Machine Learning" className="bg-slate-900 text-white">AI &amp; Machine Learning</option>
                  <option value="Growth & Digital Marketing" className="bg-slate-900 text-white">Growth &amp; Digital Marketing</option>
                  <option value="Prompt Engineering Mastery" className="bg-slate-900 text-white">Prompt Engineering Mastery</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none">expand_more</span>
              </div>
            </div>
            <div className="group space-y-1">
              <label className="block text-[8px] tracking-[1px] uppercase text-white/60 group-focus-within:text-purple-400 ml-1 transition-colors">Other Course Interest (Optional)</label>
              <input name="otherInterest" value={formData.otherInterest} onChange={handleChange} className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-1.5 text-[13px] text-white placeholder:text-white/40 backdrop-blur-md shadow-inner shadow-black/30 hover:border-purple-400/40 hover:bg-white/10 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40 focus:shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all duration-300" placeholder="E.g. Blockchain Development" type="text" />
            </div>
          </div>

          {/* Group 3: Education Info */}
          <div className="space-y-2 border border-white/5 p-2.5 rounded-xl bg-white/5">
            <h3 className="text-[10px] text-purple-300 uppercase tracking-widest mb-1 font-bold">Education Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div className="group space-y-1">
                <label className="block text-[8px] tracking-[1px] uppercase text-white/60 group-focus-within:text-purple-400 ml-1 transition-colors">College/University</label>
                <input required name="college" value={formData.college} onChange={handleChange} className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-1.5 text-[13px] text-white placeholder:text-white/40 backdrop-blur-md shadow-inner shadow-black/30 hover:border-purple-400/40 hover:bg-white/10 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40 focus:shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all duration-300" placeholder="Institution Name" type="text" />
              </div>
              <div className="group space-y-1">
                <label className="block text-[8px] tracking-[1px] uppercase text-white/60 group-focus-within:text-purple-400 ml-1 transition-colors">City</label>
                <input required name="city" value={formData.city} onChange={handleChange} className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-1.5 text-[13px] text-white placeholder:text-white/40 backdrop-blur-md shadow-inner shadow-black/30 hover:border-purple-400/40 hover:bg-white/10 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40 focus:shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all duration-300" placeholder="Current City" type="text" />
              </div>
            </div>
          </div>

          {/* Certificate Guarantee Card */}
          <div className="flex items-center gap-3 p-2.5 bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-400/20 shadow-[0_0_20px_rgba(255,200,0,0.15)] rounded-2xl mt-3">
            <div className="shrink-0 w-12 h-10 bg-[#1a1a1a] rounded-lg border border-yellow-500/30 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
              <span className="material-symbols-outlined text-yellow-500 text-xl opacity-60" data-icon="workspace_premium" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
              <div className="absolute bottom-1 right-1 w-3 h-3 bg-yellow-500/50 blur-md"></div>
            </div>
            <p className="text-[9px] text-yellow-100/80 leading-tight">
              <span className="text-yellow-400 font-semibold uppercase tracking-wider">Certification Guarantee:</span><br />
              Receive an Internship Completion Certificate after successful completion.
            </p>
          </div>

          {/* Submit Button */}
          <button disabled={isLoading} className="w-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 text-white font-bold text-base md:text-lg py-2.5 rounded-2xl shadow-[0_0_40px_rgba(168,85,247,0.5)] hover:shadow-[0_0_60px_rgba(168,85,247,0.8)] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 mt-3 uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed border border-white/20" type="submit">
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></div>
                <span>Submitting...</span>
              </div>
            ) : 'Start Learning'}
          </button>

          <p className="text-center text-[9px] text-white/40 mt-1 uppercase tracking-wider">
            By clicking "Start Learning", you agree to our Terms of Service.
          </p>
        </form>
      </div>
      <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full -z-10 mix-blend-screen"></div>
    </section>
  );
}
