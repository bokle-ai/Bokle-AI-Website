
import React from 'react';
import { View } from '../App';
import ServiceVisual from './ServiceVisual';

interface UseCaseRealEstateProps {
  onNavigate: (view: View) => void;
}

const UseCaseRealEstate: React.FC<UseCaseRealEstateProps> = ({ onNavigate }) => {
  return (
    <div className="pt-20 pb-32 px-6 max-w-7xl mx-auto animate-in space-y-40">
      <header className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center min-h-[80vh]">
        <div className="space-y-8 order-2 lg:order-1">
          <div className="text-[#00FF41] font-mono text-[10px] font-bold tracking-[0.5em] uppercase">Industry Protocol: RE-Sync V4</div>
          <h1 className="text-6xl md:text-8xl font-black font-space tracking-tighter leading-[0.9]">
            REAL ESTATE <br />
            <span className="text-[#00FF41]">AUTOMATION SUITE.</span>
          </h1>
          <p className="text-xl text-white/50 leading-relaxed font-light">
            Transform your property discovery and sales funnel into a high-velocity automated pipeline. From first enquiry to site visit booking.
          </p>
          <button onClick={() => onNavigate('book-call')} className="neon-btn !px-12 !py-6">Book Real Estate Briefing</button>
        </div>
        <div className="order-1 lg:order-2 flex justify-center">
          <ServiceVisual type="real-estate" size="lg" />
        </div>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="premium-glass p-12 rounded-[40px] border-[#00FF41]/10 space-y-6 hover:border-[#00FF41]/40 transition-all flex flex-col items-center text-center">
           <ServiceVisual type="whatsapp" />
           <h3 className="text-2xl font-bold">WhatsApp Core</h3>
           <p className="text-sm text-white/40 leading-relaxed">Handles lead capture, instant brochures, and site visit booking within the chat thread.</p>
        </div>
        <div className="premium-glass p-12 rounded-[40px] border-[#00FF41]/10 space-y-6 hover:border-[#00FF41]/40 transition-all flex flex-col items-center text-center">
           <ServiceVisual type="chatbot" />
           <h3 className="text-2xl font-bold">Web Discovery</h3>
           <p className="text-sm text-white/40 leading-relaxed">Captures website visitors via smart property search and qualification bots.</p>
        </div>
        <div className="premium-glass p-12 rounded-[40px] border-[#00FF41]/10 space-y-6 hover:border-[#00FF41]/40 transition-all flex flex-col items-center text-center">
           <ServiceVisual type="voice" />
           <h3 className="text-2xl font-bold">Voice Qual</h3>
           <p className="text-sm text-white/40 leading-relaxed">Instant lead callbacks and qualification before high-value leads hit sales agents.</p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-[#030804] p-16 space-y-8 border border-white/5 rounded-[40px]">
          <h4 className="text-4xl font-black font-space text-[#00FF41]">90% REDUCTION</h4>
          <p className="text-xl text-white/60">In lead decay time. Strike while the lead is hot with sub-30s automated responses.</p>
        </div>
        <div className="bg-[#030804] p-16 space-y-8 border border-white/5 rounded-[40px]">
          <h4 className="text-4xl font-black font-space text-[#00FF41]">4X HIGHER</h4>
          <p className="text-xl text-white/60">Site visit conversion rates compared to manual lead management processes.</p>
        </div>
      </div>

      <div className="text-center py-20 border-t border-white/5 space-y-12">
        <h2 className="text-4xl md:text-6xl font-black font-space">GLIDE YOUR PORTFOLIO.</h2>
        <button onClick={() => onNavigate('book-call')} className="neon-btn !px-20 !py-10 !text-xl">Initiate Real Estate Suite</button>
      </div>
    </div>
  );
};

export default UseCaseRealEstate;
