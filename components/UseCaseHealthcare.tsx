
import React from 'react';
import { View } from '../App';
import ServiceVisual from './ServiceVisual';

interface UseCaseHealthcareProps {
  onNavigate: (view: View) => void;
}

const UseCaseHealthcare: React.FC<UseCaseHealthcareProps> = ({ onNavigate }) => {
  return (
    <div className="pt-20 pb-32 px-6 max-w-7xl mx-auto animate-in space-y-40">
      <header className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center min-h-[80vh]">
        <div className="space-y-8 order-2 lg:order-1">
          <div className="text-[#00FF41] font-mono text-[10px] font-bold tracking-[0.5em] uppercase">Industry Protocol: CARE-LINK V2</div>
          <h1 className="text-6xl md:text-8xl font-black font-space tracking-tighter leading-[0.9]">
            HEALTHCARE <br />
            <span className="text-[#00FF41]">AUTOMATION SUITE.</span>
          </h1>
          <p className="text-xl text-white/50 leading-relaxed font-light">
            Automate the entire patient lifecycle from appointment booking to post-op check-ins. HIPAA-compliant neural architectures for modern clinics.
          </p>
          <button onClick={() => onNavigate('book-call')} className="neon-btn !px-12 !py-6">Book Healthcare Briefing</button>
        </div>
        <div className="order-1 lg:order-2 flex justify-center">
          <ServiceVisual type="healthcare" size="lg" />
        </div>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="premium-glass p-12 rounded-[40px] border-[#00FF41]/10 space-y-6 hover:border-[#00FF41]/40 transition-all flex flex-col items-center text-center">
           <ServiceVisual type="whatsapp" />
           <h3 className="text-2xl font-bold">WhatsApp Care</h3>
           <p className="text-sm text-white/40 leading-relaxed">Patient booking, reminders, and check-ins via high-trust chat channels.</p>
        </div>
        <div className="premium-glass p-12 rounded-[40px] border-[#00FF41]/10 space-y-6 hover:border-[#00FF41]/40 transition-all flex flex-col items-center text-center">
           <ServiceVisual type="chatbot" />
           <h3 className="text-2xl font-bold">Doctor Assistant</h3>
           <p className="text-sm text-white/40 leading-relaxed">Handles patient FAQs and availability checks directly on your clinical portal.</p>
        </div>
        <div className="premium-glass p-12 rounded-[40px] border-[#00FF41]/10 space-y-6 hover:border-[#00FF41]/40 transition-all flex flex-col items-center text-center">
           <ServiceVisual type="voice" />
           <h3 className="text-2xl font-bold">VOX Booking</h3>
           <p className="text-sm text-white/40 leading-relaxed">24/7 call answering and autonomous recall calls to increase patient retention.</p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="p-16 border border-[#00FF41]/10 bg-[#00FF41]/5 rounded-[40px] space-y-8">
          <h4 className="text-4xl font-black font-space text-[#00FF41]">80% ADMIN RELIEF</h4>
          <p className="text-xl text-white/60">Free your medical staff from administrative phone calls and scheduling logistics.</p>
        </div>
        <div className="p-16 border border-[#00FF41]/10 bg-[#00FF41]/5 rounded-[40px] space-y-8">
          <h4 className="text-4xl font-black font-space text-[#00FF41]">ZERO MISSED APPOINTMENTS</h4>
          <p className="text-xl text-white/60">Multi-channel reminders via Voice and Chat ensure patients never miss their clinical slots.</p>
        </div>
      </div>

      <div className="text-center py-20 border-t border-white/5 space-y-12">
        <h2 className="text-4xl md:text-6xl font-black font-space">CARE WITHOUT FRICTION.</h2>
        <button onClick={() => onNavigate('book-call')} className="neon-btn !px-20 !py-10 !text-xl">Initiate Healthcare Suite</button>
      </div>
    </div>
  );
};

export default UseCaseHealthcare;
