
import React from 'react';
import { View } from '../App';
import GlitchText from './GlitchText';
import MagneticCard from './MagneticCard';

interface HomeProps {
  onNavigate: (view: View) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const mascotUrl = "https://c.animaapp.com/3N4o9Z1N/img/full-mascot@2x.png";

  return (
    <div className="animate-in pb-20">
      {/* Hero Section */}
      <section className="min-h-screen relative flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
        {/* The 'Light Streak' Glow (Ref: PNG 1) */}
        <div className="absolute top-0 right-0 w-[800px] h-[1000px] bg-gradient-to-bl from-[#00FF41]/10 via-transparent to-transparent blur-[150px] -rotate-12 pointer-events-none"></div>

        <div className="relative z-10 space-y-8 max-w-6xl mx-auto">

          <h1 className="text-5xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase">
            Make Your <br />
            Business <span className="text-[#00FF41] italic neon-text-glow">Glide</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto font-light leading-relaxed">
            WhatsApp Automation, AI Voice Agents, and Conversational Bots built for high-impact Real Estate and Healthcare operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-10">
            <button
              onClick={() => onNavigate('book-call')}
              className="bg-[#00FF41] text-black font-black px-14 py-6 rounded-full text-lg btn-glide"
            >
              Talk to Us
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="group border border-white/10 text-white font-bold px-14 py-6 rounded-full text-lg hover:bg-[#00FF41]/10 hover:border-[#00FF41]/40 transition-all flex items-center gap-3 justify-center"
            >
              See Solutions
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Problem Section with Deep Emerald Accents */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
              Stop Losing <br /><span className="text-[#00FF41]/70">to the Delay.</span>
            </h2>
            <p className="text-2xl text-white/50 leading-relaxed font-light">
              Most businesses lose customers because of <span className="text-white font-bold italic">response friction.</span>
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {[
              { t: 'Unanswered Calls', d: 'Leads move to the competitor in minutes.' },
              { t: 'Piling Messages', d: 'Delayed WhatsApp replies kill trust instantly.' },
              { t: 'Late Follow-ups', d: 'Human delay is your biggest revenue leak.' }
            ].map((item, i) => (
              <div key={i} className="premium-glass p-10 rounded-[40px] border-l-4 border-[#00FF41]">
                <h4 className="text-xl font-bold mb-2">{item.t}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Glowing Nebula Background */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#00FF41]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto space-y-24 relative z-10">
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic">The Ecosystem.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { view: 'nurture', title: 'WhatsApp AI', desc: 'Turn WhatsApp into a 24/7 revenue engine.' },
              { view: 'scale', title: 'Voice Agents', desc: 'Answer every call, qualify every lead.' },
              { view: 'support', title: 'Web Assistants', desc: 'Convert traffic into enquiries instantly.' }
            ].map((s, i) => (
              <MagneticCard
                key={i}
                onClick={() => onNavigate(s.view as View)}
                className="premium-glass p-12 rounded-[50px] space-y-6 cursor-pointer group overflow-hidden relative"
              >
                <h3 className="text-3xl font-black">{s.title}</h3>
                <p className="text-white/40 leading-relaxed">{s.desc}</p>

              </MagneticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="bg-[#00FF41]/5 p-2 rounded-[60px]">
            <div className="premium-glass p-16 rounded-[58px] border-none">
              <h3 className="text-4xl font-black mb-8 italic">Focus Domains.</h3>
              <div className="space-y-10">
                <div className="p-8 bg-black/20 rounded-3xl border border-white/5 hover:border-[#00FF41]/30 transition-colors relative overflow-hidden group">
                  <h4 className="text-[#00FF41] font-bold text-xl mb-2">Real Estate</h4>
                  <p className="text-white/40 leading-relaxed">Instant lead qualification, automated walkthrough sharing, and site visit scheduling.</p>
                </div>
                <div className="p-8 bg-black/20 rounded-3xl border border-white/5 hover:border-[#00FF41]/30 transition-colors">
                  <h4 className="text-[#00FF41] font-bold text-xl mb-2">Healthcare</h4>
                  <p className="text-white/40 leading-relaxed">Reducing no-shows with smart reminders and autonomous clinical appointment booking.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-12">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
              Built for <br /><span className="text-[#00FF41] italic">Scale.</span>
            </h2>
            <p className="text-xl text-white/50 leading-relaxed">
              Our systems are industry-adaptable. If your business depends on enquiry speed, Bokle AI is the missing infrastructure.
            </p>
            <button onClick={() => onNavigate('book-call')} className="text-[#00FF41] font-black uppercase tracking-[0.3em] text-sm flex items-center gap-4 group">
              Start Onboarding
              <span className="w-12 h-12 rounded-full border border-[#00FF41]/30 flex items-center justify-center group-hover:bg-[#00FF41] group-hover:text-black transition-all">
                →
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA with Fixed Image and Nebula Glow */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial from-[#00FF41]/10 to-transparent blur-[120px] rounded-full pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16">
          <div className="text-center md:text-left space-y-12 flex-1">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
              Ready to <br /><span className="text-[#00FF41] italic">Glide?</span>
            </h2>
            <button
              onClick={() => onNavigate('book-call')}
              className="bg-[#00FF41] text-black font-black px-20 py-8 rounded-full text-2xl btn-glide"
            >
              Deploy AI Now
            </button>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <div className="relative animate-float">
              {/* Soft green nebula behind mascot (Ref PNG 5) */}
              <div className="absolute inset-0 bg-[#00FF41]/20 blur-[120px] rounded-full"></div>
              <img
                src="/mascot-standing.png"
                alt="Bokle AI Mascot"
                className="w-56 md:w-[320px] h-auto relative z-10 drop-shadow-[0_0_50px_rgba(0,255,65,0.4)]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
