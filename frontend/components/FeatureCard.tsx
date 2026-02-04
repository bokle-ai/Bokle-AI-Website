
import React, { useRef, useEffect } from 'react';
import ServiceVisual from './ServiceVisual';

interface FeatureCardProps {
  title: string;
  type?: 'whatsapp' | 'voice' | 'chatbot';
  description: string;
  latency?: string;
  uptime?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, type, description, latency, uptime }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    let bounds: DOMRect;
    let mouseX = 0;
    let mouseY = 0;

    const updateRotation = () => {
      if (!bounds) return;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2
      };

      const maxRotation = 10;
      const rotateX = (center.y / (bounds.height / 2)) * -maxRotation;
      const rotateY = (center.x / (bounds.width / 2)) * maxRotation;

      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      frameRef.current = requestAnimationFrame(updateRotation);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseEnter = () => {
      bounds = card.getBoundingClientRect();
      document.addEventListener('mousemove', onMouseMove);
      frameRef.current = requestAnimationFrame(updateRotation);
    };

    const onMouseLeave = () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(frameRef.current);
      card.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg)`;
    };

    card.addEventListener('mouseenter', onMouseEnter);
    card.addEventListener('mouseleave', onMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', onMouseEnter);
      card.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="neumorph-card p-12 md:p-14 group relative overflow-hidden transition-all duration-500 ease-out rounded-[40px] border border-white/10 hover:border-[#00FF41]/50 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(0,255,65,0.2)]"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Corner Highlight */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#00FF41]/10 to-transparent pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center" style={{ transformStyle: 'preserve-3d' }}>
        {/* Fix: transformZ does not exist in React.CSSProperties, use transform instead */}
        <div className="transform transition-transform duration-500 group-hover:scale-110 mb-8" style={{ transform: 'translateZ(50px)' }}>
          {type && <ServiceVisual type={type} />}
        </div>

        <h3 className="text-4xl font-black mb-6 tracking-tight group-hover:text-[#00FF41] transition-colors leading-none uppercase">
          {title}
        </h3>

        <div className="neumorph-inset p-8 w-full mb-10 border border-white/5">
          <p className="text-white/60 text-base leading-relaxed font-normal tracking-wide">
            {description}
          </p>
        </div>

        {(latency || uptime) && (
          <div className="text-[10px] font-bold font-mono text-[#00FF41] tracking-[0.5em] uppercase w-full pt-8 border-t border-[#00FF41]/10">
            {latency} <span className="mx-4 text-white/10">|</span> {uptime}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;
