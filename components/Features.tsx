
import React, { useRef, useEffect } from 'react';

interface FeatureCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  latency?: string;
  uptime?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, icon, description, latency, uptime }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const glare = glareRef.current;
    const content = contentRef.current;
    if (!card || !glare || !content) return;

    let bounds: DOMRect;

    const rotateToMouse = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2
      };
      const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

      // Rotation values
      const maxRotation = 12; // degrees
      const rotateX = (center.y / (bounds.height / 2)) * -maxRotation;
      const rotateY = (center.x / (bounds.width / 2)) * maxRotation;

      card.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale3d(1.02, 1.02, 1.02)
      `;

      // Glare effect
      glare.style.background = `
        radial-gradient(
          circle at ${leftX}px ${topY}px,
          rgba(0, 255, 65, 0.15) 0%,
          rgba(255, 255, 255, 0) 80%
        )
      `;

      // Parallax for inner elements
      content.style.transform = `translateZ(40px) scale(0.95)`;
    };

    const onMouseEnter = () => {
      bounds = card.getBoundingClientRect();
      document.addEventListener('mousemove', rotateToMouse);
    };

    const onMouseLeave = () => {
      document.removeEventListener('mousemove', rotateToMouse);
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      glare.style.background = 'none';
      content.style.transform = `translateZ(0px) scale(1)`;
    };

    card.addEventListener('mouseenter', onMouseEnter);
    card.addEventListener('mouseleave', onMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', onMouseEnter);
      card.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousemove', rotateToMouse);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="premium-glass p-12 group relative overflow-hidden transition-transform duration-500 ease-out cursor-default"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="hud-scanner"></div>
      <div 
        ref={glareRef} 
        className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-300"
      ></div>
      
      <div 
        ref={contentRef}
        className="relative z-10 transition-transform duration-500 ease-out"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="text-[#00FF41] mb-8 transform transition-transform group-hover:scale-110 duration-700">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-[#00FF41] transition-colors">
          {title}
        </h3>
        <p className="text-white/50 leading-relaxed mb-8">
          {description}
        </p>
        {(latency || uptime) && (
          <div className="text-[10px] font-mono text-[#00FF41]/40 tracking-[0.2em]">
            {latency && `LATENCY: ${latency}`} {uptime && ` | UPTIME: ${uptime}`}
          </div>
        )}
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      title: "The Nurture Engine",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
        </svg>
      ),
      description: "Proprietary WhatsApp routing system achieving 98% engagement. Autonomous follow-ups that sound unmistakably human.",
      latency: "0.2ms",
      uptime: "99.99%"
    },
    {
      title: "The Scale Engine",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
        </svg>
      ),
      description: "Voice synthesis that handles 1,000 parallel streams. Qualify, filter, and schedule without human interference.",
      latency: "CHANNELS: UNLIMITED",
      uptime: "VOX: HD-NEURAL"
    },
    {
      title: "The Support Engine",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      description: "The ultimate 24/7 web concierge. Real-time RAG (Retrieval-Augmented Generation) based on your live docs.",
      latency: "CORE: GPT-4.5",
      uptime: "ACCURACY: 99.8%"
    }
  ];

  return (
    <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
        <div className="space-y-4">
          <h2 className="text-5xl font-black font-space">Neural Engines</h2>
          <p className="text-white/40 max-w-md">Our three core processing units designed for high-throughput business logic.</p>
        </div>
        <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#00FF41]/20 to-transparent mx-12 mb-4"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {features.map((f, idx) => (
          <FeatureCard key={idx} {...f} />
        ))}
      </div>
    </section>
  );
};

export default Features;
