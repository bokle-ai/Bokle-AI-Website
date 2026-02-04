
import React from 'react';
import { View } from '../App';
import ServiceVisual from './ServiceVisual';

interface ServiceSupportProps {
  onNavigate: (view: View) => void;
}

const ServiceSupport: React.FC<ServiceSupportProps> = ({ onNavigate }) => {
  return (
    <div className="pt-20 pb-32 px-6 max-w-7xl mx-auto animate-in space-y-32">
      {/* Header */}
      <header className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center min-h-[60vh]">
        <div className="space-y-8 order-2 lg:order-1">
          <div className="text-[#00FF41] font-mono text-[10px] font-bold tracking-[0.5em] uppercase px-4 py-1 border border-[#00FF41]/20 inline-block rounded-full">Protocol: Support-Engine</div>
          <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter">
            AI <br /><span className="text-[#00FF41] italic">Chatbots.</span>
          </h1>
          <p className="text-2xl text-white/50 font-light leading-relaxed">
            Not for small talk. Built for Conversion & Routing.
          </p>
          <p className="text-lg text-white/70 leading-relaxed max-w-xl">
            Most website chatbots fail because they are built to answer questions, not to drive outcomes. Bokle AI builds digital business assistants that guide users based on intent.
          </p>
          <button onClick={() => onNavigate('book-call')} className="bg-[#00FF41] text-black font-bold px-12 py-5 rounded-full btn-glide shadow-[0_0_30px_rgba(0,255,65,0.3)]">View Chatbot Demo</button>
        </div>
        <div className="order-1 lg:order-2 flex justify-center">
          <ServiceVisual type="chatbot" size="lg" />
        </div>
      </header>

      {/* Core Differences */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { h: 'Business Aware', p: 'Trained on your real workflows and rules.' },
          { h: 'Intent Detection', p: 'Identifies high-value users instantly.' },
          { h: 'Clean Escalation', p: 'Handoff to agents with full context.' },
          { h: 'Data Capture', p: 'Captures leads naturally in conversation.' }
        ].map((box, i) => (
          <div key={i} className="premium-glass p-12 rounded-[50px] space-y-4 border-[#00FF41]/10">
            <h4 className="text-[#00FF41] text-xl font-bold uppercase tracking-tighter">{box.h}</h4>
            <p className="text-white/40">{box.p}</p>
          </div>
        ))}
      </section>

      {/* Domain Cases */}
      <section className="space-y-16">
        <h2 className="text-5xl font-bold text-center italic">Industry-Ready Logic</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {[
            { 
              title: 'Real Estate', 
              li: ['Property search by budget', 'Virtual tour delivery', 'Agent routing'] 
            },
            { 
              title: 'Healthcare', 
              li: ['Doctor availability queries', 'Treatment FAQs', 'Insurance guidance'] 
            },
            { 
              title: 'Services', 
              li: ['Admission information', 'Eligibility checks', 'Consultant handoff'] 
            }
          ].map((item, i) => (
            <div key={i} className="bg-black/40 p-12 rounded-[50px] border border-white/5 space-y-6">
              <h3 className="text-2xl font-black text-[#00FF41]">{item.title}</h3>
              <ul className="space-y-4">
                {item.li.map((text, j) => (
                  <li key={j} className="text-white/50 text-sm flex items-center gap-3">
                    <div className="w-1 h-1 bg-[#00FF41] rounded-full"></div> {text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="premium-glass p-20 rounded-[60px] text-center space-y-10">
        <h2 className="text-4xl font-bold italic">Not a Popup. A Digital Business Assistant.</h2>
        <p className="text-white/40 max-w-xl mx-auto">Stop letting website traffic bounce. Give them a reason to stay and a path to convert.</p>
        <button onClick={() => onNavigate('book-call')} className="bg-white text-black font-bold px-12 py-5 rounded-full hover:bg-[#00FF41] transition-colors">Integrate Into My Website</button>
      </section>
    </div>
  );
};

export default ServiceSupport;
