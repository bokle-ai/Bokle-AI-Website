
import React from 'react';
import { View } from '../App';

interface AboutProps {
  onNavigate: (view: View) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <div className="pt-20 pb-32 px-6 max-w-5xl mx-auto animate-in">
      <header className="text-center mb-32">
        <h1 className="text-6xl md:text-8xl font-bold mb-8">About <span className="text-[#00FF41]">Bokle AI</span></h1>
        <p className="text-2xl text-white/50 font-light leading-relaxed">
          AI should make businesses calmer, not more complex.
        </p>
      </header>

      <div className="space-y-20">
        <section className="premium-glass p-16 rounded-[50px] space-y-8">
          <p className="text-xl leading-relaxed text-white/80">
            Bokle AI is built on a simple belief: We focus on practical automation — systems that help teams respond better, work smarter, and scale without chaos.
          </p>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold text-[#00FF41]">The Sugar Glider Philosophy</h2>
              <p className="text-white/60">
                Our mascot, Bokle the Sugar Glider, represents what we believe in:
              </p>
              <ul className="space-y-4">
                {['Smooth movement', 'Agility', 'Helping teams glide through complexity'].map((text, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-[#00FF41] rounded-full"></div>
                    <span className="font-bold">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-64 h-64 bg-[#00FF41]/5 rounded-full flex items-center justify-center animate-float overflow-visible">
              <img
                src="/mascot-flying.png"
                alt="Bokle Sugar Glider"
                className="w-[120%] h-[120%] object-contain -rotate-12 drop-shadow-[0_10px_30px_rgba(0,255,65,0.2)]"
              />
            </div>
          </div>
        </section>

        <section className="text-center space-y-8 py-20">
          <h2 className="text-4xl font-bold">No noise. No exaggeration. Just solid execution.</h2>
          <button
            onClick={() => onNavigate('book-call')}
            className="bg-[#00FF41] text-black font-bold px-12 py-5 rounded-full btn-glide"
          >
            Glide Your Business
          </button>
        </section>
      </div>
    </div>
  );
};

export default About;
