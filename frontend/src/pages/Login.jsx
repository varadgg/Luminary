import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('adminToken', data.token);
        navigate('/admin');
      } else {
        setError(data.message || 'Invalid email or password');
      }
    } catch (err) {
      setError('Failed to connect to the server.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary/30 min-h-screen flex flex-col overflow-x-hidden relative">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center px-6 py-28 relative z-10">
        <div className="w-full max-w-md p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-b from-surface-container/80 to-surface-container-high/80 backdrop-blur-xl border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.6)] relative overflow-hidden">
          
          <div className="mb-8 text-center relative z-10">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">Admin Login</h2>
            <p className="text-sm text-on-surface-variant">Secure access to the Luminary dashboard.</p>
          </div>

          {error && (
            <div className="mb-6 p-3 rounded-xl text-sm font-bold text-center bg-red-500/20 text-red-400 border border-red-500/30">
              {error}
            </div>
          )}

          <form className="space-y-5 relative z-10" onSubmit={handleLogin}>
            <div className="group space-y-2">
              <label className="block text-xs tracking-[1px] uppercase text-white/60 group-focus-within:text-purple-400 ml-1 transition-colors font-bold">Email Address</label>
              <input 
                required 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 backdrop-blur-md shadow-inner shadow-black/30 hover:border-purple-400/40 hover:bg-white/10 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40 focus:shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all duration-300" 
                placeholder="admin@luminary.com" 
              />
            </div>

            <div className="group space-y-2">
              <label className="block text-xs tracking-[1px] uppercase text-white/60 group-focus-within:text-purple-400 ml-1 transition-colors font-bold">Password</label>
              <input 
                required 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 backdrop-blur-md shadow-inner shadow-black/30 hover:border-purple-400/40 hover:bg-white/10 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40 focus:shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all duration-300" 
                placeholder="••••••••" 
              />
            </div>

            <button 
              disabled={isLoading} 
              className="w-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 text-white font-bold text-lg py-3.5 rounded-2xl shadow-[0_0_40px_rgba(168,85,247,0.5)] hover:shadow-[0_0_60px_rgba(168,85,247,0.8)] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 mt-6 uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed border border-white/20" 
              type="submit"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></div>
                  <span>Authenticating...</span>
                </div>
              ) : 'Secure Login'}
            </button>
          </form>

          {/* Background Ambient Glows */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-500/20 blur-[80px] rounded-full -z-0 mix-blend-screen pointer-events-none"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500/20 blur-[80px] rounded-full -z-0 mix-blend-screen pointer-events-none"></div>
        </div>
      </main>
      
      {/* Page-level Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>

      <Footer />
    </div>
  );
}
