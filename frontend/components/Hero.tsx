
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-24 px-6 relative overflow-hidden">
      <div className="text-center z-10 max-w-4xl">
        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight">
          Make Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#15621B] via-[#00FF41] to-[#15621B] neon-text-glow">
            Business Glide.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/70 font-medium mb-12 max-w-2xl mx-auto">
          The Marketplace for Domain-Specific AI Agents.
        </p>
      </div>

      <div className="relative w-full max-w-lg mt-8 flex justify-center">
        {/* Decorative glow behind mascot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#00FF41] opacity-20 blur-[120px] rounded-full"></div>
        
        {/* Floating Mascot */}
        <img 
          src="/mascot-flying.png" 
          alt="Bokle AI Mascot" 
          className="w-64 md:w-96 h-auto object-contain float-animation drop-shadow-2xl relative z-10"
        />
      </div>

      {/* Down arrow indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
