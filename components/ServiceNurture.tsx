
import React from 'react';
import { View } from '../App';
import ServiceVisual from './ServiceVisual';

interface ServiceNurtureProps {
  onNavigate: (view: View) => void;
}

const ServiceNurture: React.FC<ServiceNurtureProps> = ({ onNavigate }) => {
  return (
    <div className="pt-20 pb-32 px-6 max-w-7xl mx-auto animate-in space-y-32">
      {/* Hero Section */}
      <header className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center min-h-[60vh]">
        <div className="space-y-8 order-2 lg:order-1">
          <div className="text-[#00FF41] font-mono text-[10px] font-bold tracking-[0.5em] uppercase px-4 py-1 border border-[#00FF41]/20 inline-block rounded-full">Protocol: Nurture-Sync</div>
          <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter">
            WhatsApp <br /><span className="text-[#00FF41] italic">Automation.</span>
          </h1>
          <p className="text-2xl text-white/50 font-light leading-relaxed">
            For Business-Critical Conversations That Can’t Afford Delay.
          </p>
          <p className="text-lg text-white/70 leading-relaxed max-w-xl">
            WhatsApp is already where your customers are. We help you use it properly. Bokle AI designs systems that respond instantly, qualify intelligently, and route conversations correctly—without replacing human control.
          </p>
          <div className="flex gap-4">
            <button onClick={() => onNavigate('book-call')} className="bg-[#00FF41] text-black font-bold px-12 py-5 rounded-full btn-glide shadow-[0_0_30px_rgba(0,255,65,0.3)]">See It In Action</button>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center">
          <ServiceVisual type="whatsapp" size="lg" />
        </div>
      </header>

      {/* Value Prop Section */}
      <section className="space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold">This is not a template.</h2>
          <p className="text-white/40 text-xl italic">It is a business workflow built on WhatsApp.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { t: 'Instant Response', d: 'Respond to new enquiries in sub-2 seconds, 24/7.' },
            { t: 'Smart Qualification', d: 'Filter leads by budget, intent, and urgency autonomously.' },
            { t: 'Asset Sharing', d: 'Automated delivery of brochures, floor plans, and videos.' },
            { t: 'Self-Booking', d: 'Direct appointment and site visit scheduling in-chat.' },
            { t: 'Nurture Sequences', d: 'Structured follow-ups that convert without the spam.' },
            { t: 'Human Handoff', d: 'Instant escalation when high intent is detected.' }
          ].map((item, i) => (
            <div key={i} className="premium-glass p-10 rounded-[40px] border-[#00FF41]/10 hover:border-[#00FF41]/40 transition-all group">
              <div className="w-10 h-10 rounded-full bg-[#00FF41]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <div className="w-2 h-2 bg-[#00FF41] rounded-full animate-pulse"></div>
              </div>
              <h4 className="text-xl font-bold mb-3">{item.t}</h4>
              <p className="text-white/40 leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Verticals */}
      <section className="space-y-24 py-20">
        <h2 className="text-5xl md:text-7xl font-black text-center tracking-tighter">DOMAIN <span className="text-[#00FF41]">SPECIFIC.</span></h2>
        
        <div className="space-y-12">
          {/* Real Estate */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center premium-glass p-12 md:p-20 rounded-[60px]">
             <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-[#00FF41]/10 rounded-2xl"><ServiceVisual type="real-estate" size="sm" /></div>
                  <h3 className="text-4xl font-bold">Real Estate</h3>
                </div>
                <p className="text-xl text-white/50 leading-relaxed">Strike while the lead is hot. Sub-30s automated responses for property enquiries.</p>
                <ul className="space-y-4">
                  {['Instant brochure & walkthrough sharing', 'Budget & location qualification', 'Site visit scheduling & reminders'].map((li, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80">
                      <svg className="w-5 h-5 text-[#00FF41]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                      {li}
                    </li>
                  ))}
                </ul>
             </div>
             <div className="bg-black/40 rounded-3xl p-10 border border-white/5 text-center">
                <div className="text-[#00FF41] text-6xl font-black mb-2">98%</div>
                <p className="text-white/30 uppercase tracking-widest text-xs font-bold">Lead Engagement Rate</p>
             </div>
          </div>

          {/* Healthcare */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center premium-glass p-12 md:p-20 rounded-[60px]">
             <div className="lg:order-2 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-[#00FF41]/10 rounded-2xl"><ServiceVisual type="healthcare" size="sm" /></div>
                  <h3 className="text-4xl font-bold">Healthcare</h3>
                </div>
                <p className="text-xl text-white/50 leading-relaxed">Reduced receptionist workload and a smoother patient experience.</p>
                <ul className="space-y-4">
                  {['24/7 Appointment booking', 'No-show reduction reminders', 'Doctor availability & FAQs'].map((li, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80">
                      <svg className="w-5 h-5 text-[#00FF41]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                      {li}
                    </li>
                  ))}
                </ul>
             </div>
             <div className="lg:order-1 bg-black/40 rounded-3xl p-10 border border-white/5 text-center">
                <div className="text-[#00FF41] text-6xl font-black mb-2">0</div>
                <p className="text-white/30 uppercase tracking-widest text-xs font-bold">Missed Appointments</p>
             </div>
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="text-center space-y-12">
        <h2 className="text-4xl font-bold">Why WhatsApp Automation Works</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {['Trust-Based Channel', '98% Open Rates', 'Zero Friction', 'Builds Confidence'].map((tag, i) => (
            <span key={i} className="px-8 py-4 premium-glass rounded-full text-[#00FF41] font-bold border-[#00FF41]/20">{tag}</span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#00FF41] p-20 rounded-[60px] text-center text-black space-y-8">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter">CONVERT FASTER.</h2>
        <p className="text-xl font-medium max-w-2xl mx-auto opacity-70">If your business handles enquiries, WhatsApp is your most reliable conversion channel. Let us build your engine.</p>
        <button onClick={() => onNavigate('book-call')} className="bg-black text-white px-16 py-8 rounded-full text-xl font-bold hover:scale-105 transition-transform">See WhatsApp Automation In Action</button>
      </section>
    </div>
  );
};

export default ServiceNurture;
