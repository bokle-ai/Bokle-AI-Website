
import React, { useState } from 'react';

const BookCall: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-64 pb-32 px-6 max-w-3xl mx-auto animate-in text-center space-y-10">
        <div className="w-32 h-32 flex items-center justify-center mx-auto mb-10">
           <img src="Full Mascot.png" className="w-full animate-float" alt="Thank You" />
        </div>
        <div className="space-y-4">
          <h1 className="text-6xl font-black italic text-[#00FF41]">THANK YOU.</h1>
          <p className="text-2xl text-white/50 font-light">Mission Received. Bokle is calculating your path.</p>
        </div>
        <button 
          onClick={() => window.location.reload()}
          className="bg-[#00FF41] text-black font-bold px-12 py-5 rounded-full btn-glide"
        >
          Return to Base
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-48 px-6 max-w-7xl mx-auto animate-in">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase leading-none">
              Inquiry <br />
              <span className="text-[#00FF41]">Portal.</span>
            </h1>
            <p className="text-2xl text-white/40 font-light leading-relaxed">
              Tell us what needs to glide. We'll build the system to handle it.
            </p>
          </div>

          <div className="space-y-8">
            <div className="premium-glass p-8 rounded-[40px] border-l-4 border-l-[#00FF41]">
              <h4 className="font-bold text-[#00FF41] uppercase text-xs tracking-[0.4em] mb-3">Target Objective</h4>
              <p className="text-sm text-white/40">Our architects review every briefing to ensure a 100% operational fit.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="premium-glass p-10 md:p-16 rounded-[60px] relative overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#00FF41] ml-2">Name</label>
                  <input required type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#00FF41]" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#00FF41] ml-2">Email</label>
                  <input required type="email" placeholder="work@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#00FF41]" />
                </div>
              </div>

              {/* New Domain Selection Section */}
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#00FF41] ml-2">Domain / Sector</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Real Estate', 'Healthcare', 'Legal', 'Other'].map((domain) => (
                    <label key={domain} className="relative cursor-pointer group">
                      <input type="radio" name="domain" value={domain} className="peer hidden" required />
                      <div className="p-4 text-center border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest text-white/40 peer-checked:border-[#00FF41] peer-checked:text-[#00FF41] peer-checked:bg-[#00FF41]/5 transition-all">
                        {domain}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#00FF41] ml-2">Description</label>
                <textarea required placeholder="Describe your workflow bottlenecks..." className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white h-40 resize-none focus:outline-none focus:border-[#00FF41]"></textarea>
              </div>

              <div className="pt-6">
                <button type="submit" className="w-full py-6 rounded-full bg-[#00FF41] text-black font-black text-xl btn-glide">
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCall;
