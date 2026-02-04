
import React from 'react';
import FeatureCard from './FeatureCard';
import { View } from '../App';

interface ServicesProps {
  onNavigate: (view: View) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <div className="pt-48 pb-32 px-6 max-w-7xl mx-auto space-y-40 animate-in">
      <header className="max-w-4xl space-y-8">
        <div className="text-[#00FF41] font-mono text-[10px] font-bold tracking-[0.4em] uppercase">Solution Suite</div>
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
          OUR AI <br />
          <span className="text-[#00FF41]">SOLUTIONS.</span>
        </h2>
        <p className="text-xl md:text-2xl text-white/40 font-light leading-relaxed">
          High-performance AI agents engineered for specific business process automation. Select a service to see how it can transform your workflow.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div
          onClick={() => onNavigate('nurture')}
          className="cursor-pointer transform hover:scale-[1.02] transition-transform"
        >
          <FeatureCard
            title="WhatsApp AI"
            type="whatsapp"
            description="Automate lead engagement and qualification via WhatsApp. See features →"
          />
        </div>
        <div
          onClick={() => onNavigate('scale')}
          className="cursor-pointer transform hover:scale-[1.02] transition-transform"
        >
          <FeatureCard
            title="Voice Agents"
            type="voice"
            description="Deploy human-like voice agents for calling and scheduling. See features →"
          />
        </div>
        <div
          onClick={() => onNavigate('support')}
          className="cursor-pointer transform hover:scale-[1.02] transition-transform"
        >
          <FeatureCard
            title="Smart Chat"
            type="chatbot"
            description="Knowledge-based chatbots for 24/7 web support. See features →"
          />
        </div>
      </div>

      <div className="text-center py-20 neumorph-card p-12 space-y-8 rounded-[40px] border border-white/10 hover:border-[#00FF41]/50 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(0,255,65,0.15)]">
        <h3 className="text-3xl md:text-5xl font-bold">Custom Requirements?</h3>
        <p className="text-white/50 max-w-2xl mx-auto text-lg">Contact our solutions architects to design a bespoke AI implementation for your organization.</p>
        <button
          onClick={() => onNavigate('book-call')}
          className="neon-btn !px-12 !py-6 !text-sm"
        >
          Schedule a Consultation
        </button>
      </div>
    </div>
  );
};

export default Services;
