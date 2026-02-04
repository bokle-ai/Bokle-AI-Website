
import React from 'react';
import { View } from '../App';
import ServiceVisual from './ServiceVisual';

interface ServiceOtherProps {
  onNavigate: (view: View) => void;
}

const ServiceOther: React.FC<ServiceOtherProps> = ({ onNavigate }) => {
  return (
    <div className="pt-20 pb-32 px-6 max-w-7xl mx-auto animate-in space-y-40">
      <header className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
        <div className="space-y-10 order-2 lg:order-1">
          <div className="text-[#00FF41] font-mono text-[10px] font-bold tracking-[0.5em] uppercase">The Infinite Protocol</div>
          <div className="relative inline-block">
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter italic leading-none relative z-10">
              CUSTOM <br />
              <span className="text-[#00FF41]">AUTOMATIONS.</span>
            </h1>
            <img src="/icon-lightning.png" alt="" className="absolute -right-20 -top-10 w-32 h-32 object-contain animate-float opacity-80" />
          </div>
          <p className="text-xl md:text-2xl text-white/40 font-light leading-relaxed max-w-xl">
            Beyond individual agents lies the ecosystem. We build deep neural integrations that connect your entire business stack into a single, autonomous engine.
          </p>
          <div className="flex pt-4">
            <button onClick={() => onNavigate('book-call')} className="neon-btn !px-16 !py-8">Book a Custom Briefing</button>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center">
          <ServiceVisual type="automation" size="lg" />
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
        <div className="bg-[#030804] p-16 space-y-8">
          <div className="w-16 h-1 bg-[#00FF41]"></div>
          <h3 className="text-3xl font-bold">Neural Workflow Sync</h3>
          <p className="text-white/40">Automate cross-platform data transfers with AI verification. From CRM updates to automatic document generation and signing.</p>
        </div>
        <div className="bg-[#030804] p-16 space-y-8">
          <div className="w-16 h-1 bg-[#00FF41]"></div>
          <h3 className="text-3xl font-bold">Sentiment Data Mining</h3>
          <p className="text-white/40">Real-time analysis of all customer touchpoints to predict churn and identify high-value upsell opportunities autonomously.</p>
        </div>
      </div>

      <div className="premium-glass p-20 rounded-[60px] text-center space-y-12 border-[#00FF41]/20">
        <h2 className="text-4xl font-bold">If it involves data, <span className="text-[#00FF41]">we can glide it.</span></h2>
        <p className="text-white/50 max-w-2xl mx-auto">Our advanced automation team specializes in non-standard AI deployments, custom LLM fine-tuning, and edge-case operational logic.</p>
        <button onClick={() => onNavigate('book-call')} className="neon-btn !px-16 !py-8">Start Custom Onboarding</button>
      </div>
    </div>
  );
};

export default ServiceOther;
