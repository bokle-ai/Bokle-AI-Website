
import React from 'react';
import { View } from '../App';
import ServiceVisual from './ServiceVisual';

interface ServiceScaleProps {
  onNavigate: (view: View) => void;
}

const ServiceScale: React.FC<ServiceScaleProps> = ({ onNavigate }) => {
  return (
    <div className="pt-20 pb-32 px-6 max-w-7xl mx-auto animate-in space-y-40">
      {/* Header */}
      <header className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center min-h-[60vh]">
        <div className="space-y-8 order-2 lg:order-1">
          <div className="text-[#00FF41] font-mono text-[10px] font-bold tracking-[0.5em] uppercase px-4 py-1 border border-[#00FF41]/20 inline-block rounded-full">Protocol: Voice-Core</div>
          <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter">
            AI Voice <br /><span className="text-[#00FF41] italic">Agents.</span>
          </h1>
          <p className="text-2xl text-white/50 font-light leading-relaxed">
            Ensure You Never Miss a Call Again. 24/7.
          </p>
          <p className="text-lg text-white/70 leading-relaxed max-w-xl">
            Missed calls are silent revenue leaks. Especially in healthcare and real estate. Bokle AI builds voice agents that answer, qualify, and book—even when your team is unavailable.
          </p>
          <button onClick={() => onNavigate('book-call')} className="bg-[#00FF41] text-black font-bold px-12 py-5 rounded-full btn-glide shadow-[0_0_30px_rgba(0,255,65,0.3)]">Hear Voice Demo</button>
        </div>
        <div className="order-1 lg:order-2 flex justify-center">
          <ServiceVisual type="voice" size="lg" />
        </div>
      </header>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="premium-glass p-16 rounded-[60px] space-y-8 border-[#00FF41]/10">
           <h3 className="text-3xl font-bold text-[#00FF41]">Controlled Automation</h3>
           <p className="text-white/50 text-xl font-light">We map call flows before deployment. No scripts. No robotic delays. Just business logic that sounds human.</p>
           <ul className="space-y-4 font-bold text-white/80">
             <li className="flex gap-4 items-center"><div className="w-1.5 h-1.5 bg-[#00FF41] rounded-full"></div> Defined Handoff Logic</li>
             <li className="flex gap-4 items-center"><div className="w-1.5 h-1.5 bg-[#00FF41] rounded-full"></div> Compliance-First Approach</li>
             <li className="flex gap-4 items-center"><div className="w-1.5 h-1.5 bg-[#00FF41] rounded-full"></div> Zero Spam Integrity</li>
           </ul>
        </div>
        <div className="bg-black/40 p-16 rounded-[60px] border border-white/5 space-y-12">
           <div className="space-y-6">
              <h3 className="text-3xl font-bold">Capabilities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  '24/7 Inbound Answering',
                  'In-Call Booking',
                  'Caller Qualification',
                  'Smart After-Hours Routing'
                ].map((item, i) => (
                  <div key={i} className="text-xs font-black uppercase tracking-widest text-white/30 border border-white/5 p-6 rounded-2xl">
                    {item}
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="space-y-20">
        <h2 className="text-5xl font-black text-center">VOICE FOR <span className="text-[#00FF41]">OPERATIONS.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
           {[
             { 
               h: 'Healthcare', 
               d: 'Zero missed clinical booking calls and automated recall systems.',
               stat: '80% Admin Relief'
             },
             { 
               h: 'Real Estate', 
               d: 'Instant callbacks after enquiries and high-intent buyer transfers.',
               stat: '4X Higher Qual'
             },
             { 
               h: 'Service SMEs', 
               d: 'Overflow call management so you never lose a hot lead to a competitor.',
               stat: '24/7 Availability'
             }
           ].map((card, i) => (
             <div key={i} className="premium-glass p-12 rounded-[50px] space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-[#00FF41]">{card.h}</h4>
                  <p className="text-white/40 leading-relaxed">{card.d}</p>
                </div>
                <div className="pt-6 border-t border-white/5 text-[#00FF41] font-black uppercase text-xs tracking-widest">
                  {card.stat}
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-20">
         <h2 className="text-4xl md:text-6xl font-bold mb-10 italic">Stop Losing Revenue to Silence.</h2>
         <button onClick={() => onNavigate('book-call')} className="bg-[#00FF41] text-black font-bold px-16 py-8 rounded-full text-xl btn-glide shadow-xl hover:shadow-[#00FF41]/20">Deploy Voice Automation</button>
      </section>
    </div>
  );
};

export default ServiceScale;
