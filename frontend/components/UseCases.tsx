
import React from 'react';
import { View } from '../App';
import ServiceVisual from './ServiceVisual';

interface UseCasesProps {
  onNavigate: (view: View) => void;
}

const UseCases: React.FC<UseCasesProps> = ({ onNavigate }) => {
  return (
    <div className="pt-48 pb-32 px-6 max-w-7xl mx-auto space-y-48 animate-in">
      <header className="max-w-3xl space-y-6">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
          INDUSTRY <br />
          <span className="text-[#00FF41]">SUCCESS.</span>
        </h2>
        <p className="text-xl md:text-2xl text-white/40 font-light">Explore how our AI solutions are being implemented across key business sectors.</p>
      </header>

      {/* Case 1: Real Estate */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 neumorph-inset text-[#00FF41] text-[9px] font-bold uppercase tracking-widest">
              Real Estate Sector
            </div>
            <h3 className="text-5xl font-bold">Optimize Lead <br /> <span className="text-[#00FF41]">Conversion.</span></h3>
            <p className="text-lg text-white/50 leading-relaxed font-light">In an industry where first response is critical, Bokle AI handles inquiries and qualifies leads in real-time.</p>
            <button onClick={() => onNavigate('use-case-re')} className="text-[#00FF41] font-bold uppercase tracking-[0.2em] text-[10px] hover:underline">View Real Estate Case Study →</button>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 p-6 neumorph-card items-center group">
              <ServiceVisual type="whatsapp" size="sm" />
              <div className="flex-1">
                <h4 className="font-bold text-white group-hover:text-[#00FF41] transition-colors">Instant Qualification</h4>
                <p className="text-sm text-white/40">Automated filtering of leads by budget and timeline before agent notification.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <ServiceVisual type="real-estate" size="lg" />
        </div>
      </section>

      {/* Case 2: Healthcare */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="lg:order-2 space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 neumorph-inset text-[#00FF41] text-[9px] font-bold uppercase tracking-widest">
              Healthcare Sector
            </div>
            <h3 className="text-5xl font-bold">Automated Patient <br /> <span className="text-[#00FF41]">Management.</span></h3>
            <p className="text-lg text-white/50 leading-relaxed font-light">Improve administrative efficiency with AI-driven scheduling and patient communication.</p>
            <button onClick={() => onNavigate('use-case-hc')} className="text-[#00FF41] font-bold uppercase tracking-[0.2em] text-[10px] hover:underline">View Healthcare Case Study →</button>
          </div>
        </div>
        <div className="lg:order-1 flex justify-center">
          <ServiceVisual type="healthcare" size="lg" />
        </div>
      </section>

      <section className="text-center py-20 neumorph-card p-12 space-y-8">
        <h3 className="text-3xl md:text-5xl font-bold">Ready to transform your industry?</h3>
        <p className="text-white/50 max-w-2xl mx-auto text-lg">We provide specialized AI solutions for Legal, Finance, E-commerce, and Education.</p>
        <button
          onClick={() => onNavigate('book-call')}
          className="neon-btn !px-16 !py-8 !text-lg"
        >
          Book a Strategy Call
        </button>
      </section>
    </div>
  );
};

export default UseCases;
