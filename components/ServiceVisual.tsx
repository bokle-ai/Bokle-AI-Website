
import React from 'react';

export type VisualType = 'whatsapp' | 'voice' | 'chatbot' | 'automation' | 'real-estate' | 'healthcare' | 'education' | 'hotels';

interface ServiceVisualProps {
  type: VisualType;
  size?: 'sm' | 'md' | 'lg';
}

const ServiceVisual: React.FC<ServiceVisualProps> = ({ type, size = 'sm' }) => {
  const isLarge = size === 'lg';
  const isMedium = size === 'md';
  const containerSize = isLarge ? 'w-full max-w-[650px] h-[550px]' : isMedium ? 'w-56 h-56' : 'w-24 h-24 mb-8';

  const commonElements = (
    <defs>
      <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="5" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
      <linearGradient id="robotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00FF41" />
        <stop offset="100%" stopColor="#15621B" />
      </linearGradient>
      <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0a210d" />
        <stop offset="100%" stopColor="#050505" />
      </linearGradient>
      <linearGradient id="blueprintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(0, 255, 65, 0.4)" />
        <stop offset="100%" stopColor="rgba(0, 255, 65, 0.05)" />
      </linearGradient>
    </defs>
  );

  const RobotBody = ({ color = "#00FF41", opacity = 1 }) => (
    <g className="robot-body" opacity={opacity}>
      <rect x="70" y="55" width="80" height="60" rx="15" fill="url(#robotGrad)" fillOpacity="0.1" stroke={color} strokeWidth="2" filter="url(#neonGlow)" />
      <rect x="80" y="65" width="60" height="40" rx="10" fill="#000" opacity="0.6" />
      <circle cx="95" cy="85" r="4" fill={color} filter="url(#neonGlow)">
        <animate attributeName="r" values="4;1;4" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="125" cy="85" r="4" fill={color} filter="url(#neonGlow)">
        <animate attributeName="r" values="4;1;4" dur="4s" repeatCount="indefinite" />
      </circle>
      <path d="M100 95 Q 110 102, 120 95" stroke={color} strokeWidth="1.5" fill="none" opacity="0.8" />
      <line x1="110" y1="55" x2="110" y2="40" stroke={color} strokeWidth="2" />
      <circle cx="110" cy="38" r="3" fill={color} filter="url(#neonGlow)" />
      <path d="M85 115 L75 160 Q 110 180, 145 160 L135 115 Z" fill="url(#robotGrad)" fillOpacity="0.05" stroke={color} strokeWidth="2" filter="url(#neonGlow)" />
      <circle cx="110" cy="145" r="8" fill="none" stroke={color} strokeWidth="1" opacity="0.5" />
      <circle cx="110" cy="145" r="4" fill={color} filter="url(#neonGlow)" className="animate-pulse" />
    </g>
  );

  const IndustryWrapper = ({ children, robotScale = 0.5, robotPos = { x: 20, y: 30 } }: { children?: React.ReactNode, robotScale?: number, robotPos?: { x: number, y: number } }) => (
    <div className={`relative ${containerSize} flex items-center justify-center perspective-[1200px]`}>
        <div className="absolute inset-0 bg-[#00FF41]/10 blur-[150px] rounded-full animate-pulse"></div>
        <div className="animate-float w-full h-full transform-gpu">
          <svg viewBox="0 0 300 300" className="w-full h-full overflow-visible">
            {commonElements}
            {children}
            <g transform={`translate(${robotPos.x}, ${robotPos.y}) scale(${robotScale})`} opacity="0.7">
               <RobotBody />
            </g>
          </svg>
        </div>
    </div>
  );

  if (type === 'chatbot') {
    return (
      <div className={`relative ${containerSize} flex items-center justify-center perspective-[2000px]`}>
        <div className="absolute inset-0 bg-[#00FF41]/10 blur-[180px] rounded-full animate-pulse"></div>
        <div className="animate-float w-full h-full transform-gpu">
          <svg viewBox="0 0 300 300" className="w-full h-full overflow-visible">
            {commonElements}
            <rect x="50" y="40" width="200" height="230" rx="25" fill="url(#screenGrad)" stroke="#00FF41" strokeWidth="1.5" filter="url(#neonGlow)" opacity="0.8" />
            <rect x="135" y="50" width="30" height="4" rx="2" fill="#00FF41" opacity="0.3" />
            <g transform="translate(140, 90) scale(0.8)">
              <RobotBody />
              <g className="origin-[75px_130px] animate-[chatbotWaving_3s_ease-in-out_infinite]">
                 <line x1="75" y1="130" x2="55" y2="100" stroke="#00FF41" strokeWidth="4" filter="url(#neonGlow)" />
                 <circle cx="55" cy="100" r="5" fill="#00FF41)" filter="url(#neonGlow)" />
              </g>
            </g>
            <g transform="translate(70, 70)">
              <g transform="translate(40, 0)">
                <rect width="80" height="30" rx="10" fill="#00FF41" fillOpacity="0.05" stroke="#00FF41" strokeWidth="0.5" />
                <rect x="10" y="10" width="50" height="3" rx="1.5" fill="#fff" opacity="0.1" />
              </g>
              <g transform="translate(0, 45)">
                <path d="M0 5 Q 0 0, 5 0 H 100 Q 105 0, 105 5 V 35 Q 105 40, 100 40 H 5 Q 0 40, 0 45 Z" fill="#00FF41" fillOpacity="0.15" stroke="#00FF41" strokeWidth="0.8" filter="url(#neonGlow)" />
                <rect x="10" y="10" width="80" height="3" rx="1.5" fill="#fff" opacity="0.2" />
              </g>
            </g>
            <rect x="70" y="235" width="160" height="15" rx="7.5" fill="#000" opacity="0.5" stroke="#00FF41" strokeWidth="0.5" />
            <circle cx="215" cy="242.5" r="4" fill="#00FF41" filter="url(#neonGlow)" />
          </svg>
        </div>
      </div>
    );
  }

  if (type === 'whatsapp') {
    return (
      <div className={`relative ${containerSize} flex items-center justify-center perspective-[1500px]`}>
        <div className="absolute inset-0 bg-[#00FF41]/10 blur-[140px] rounded-full animate-pulse"></div>
        <div className="animate-float w-full h-full transform-gpu rotate-y-[-10deg]">
          <svg viewBox="0 0 300 300" className="w-full h-full overflow-visible">
            {commonElements}
            <rect x="80" y="30" width="140" height="240" rx="20" fill="url(#screenGrad)" stroke="#00FF41" strokeWidth="2" filter="url(#neonGlow)" />
            <g className="messages">
              {[...Array(3)].map((_, i) => (
                <g key={i}>
                  <rect x="130" y={70 + i * 60} width="70" height="30" rx="10" fill="#00FF41" fillOpacity="0.2" stroke="#00FF41" strokeWidth="1" />
                  {/* Fix: SVG animate uses 'begin' for delay, not 'delay' */}
                  <animate attributeName="opacity" values="0;1;1;0" dur="3s" begin={`${i}s`} repeatCount="indefinite" />
                </g>
              ))}
            </g>
            <g transform="translate(30, 100) scale(0.8)" opacity="0.6">
              <RobotBody />
            </g>
          </svg>
        </div>
      </div>
    );
  }

  if (type === 'voice') {
    return (
      <div className={`relative ${containerSize} flex items-center justify-center`}>
        <div className="absolute inset-0 bg-[#00FF41]/10 blur-[200px] rounded-full animate-pulse"></div>
        <div className="animate-float w-full h-full">
          <svg viewBox="0 0 300 300" className="w-full h-full overflow-visible">
            {commonElements}
            <circle cx="150" cy="150" r="40" fill="#00FF41" filter="url(#neonGlow)" opacity="0.3">
               <animate attributeName="r" values="35;45;35" dur="1s" repeatCount="indefinite" />
            </circle>
            <g transform="translate(150, 150)">
              {[...Array(36)].map((_, i) => (
                <g key={i} transform={`rotate(${i * 10})`}>
                  <rect x="-1" y="70" width="2" height="20" fill="#00FF41" filter="url(#neonGlow)">
                    <animate attributeName="height" values="20;50;20" dur={`${0.5 + Math.random()}s`} repeatCount="indefinite" />
                  </rect>
                </g>
              ))}
            </g>
            <path d="M90 150 A 60 60 0 0 1 210 150" fill="none" stroke="#00FF41" strokeWidth="4" filter="url(#neonGlow)" />
          </svg>
        </div>
      </div>
    );
  }

  if (type === 'automation') {
    return (
      <div className={`relative ${containerSize} flex items-center justify-center perspective-[2000px]`}>
        <div className="absolute inset-0 bg-[#00FF41]/10 blur-[180px] rounded-full animate-pulse"></div>
        <div className="animate-float w-full h-full transform-gpu rotate-x-[20deg]">
          <svg viewBox="0 0 300 300" className="w-full h-full overflow-visible">
            {commonElements}
            <g transform="translate(150, 150)">
              <g className="animate-[spin_20s_linear_infinite]">
                 <circle r="80" fill="none" stroke="#00FF41" strokeWidth="1" strokeDasharray="10 15" opacity="0.3" />
                 {[...Array(8)].map((_, i) => (
                   <rect key={i} x="-10" y="80" width="20" height="15" fill="#00FF41" opacity="0.2" transform={`rotate(${i * 45})`} />
                 ))}
              </g>
            </g>
            <rect x="125" y="125" width="50" height="50" rx="10" fill="#050505" stroke="#00FF41" strokeWidth="2" filter="url(#neonGlow)" />
            <circle cx="150" cy="150" r="10" fill="#00FF41" className="animate-pulse" filter="url(#neonGlow)" />
          </svg>
        </div>
      </div>
    );
  }

  if (type === 'real-estate') {
    return (
      <IndustryWrapper robotPos={{ x: 200, y: 50 }}>
        {/* Modern Skyscraper/Home Hybrid Architectural Element */}
        <g transform="translate(50, 50)">
          {/* Main structure lines */}
          <path d="M40 200 L40 80 L140 40 L140 200 Z" fill="url(#blueprintGrad)" stroke="#00FF41" strokeWidth="2" filter="url(#neonGlow)" />
          <path d="M140 200 L140 40 L180 60 L180 200 Z" fill="rgba(0, 255, 65, 0.05)" stroke="#00FF41" strokeWidth="1" opacity="0.6" />
          
          {/* Window Grid */}
          <g opacity="0.4">
            {[...Array(4)].map((_, row) => (
              [...Array(3)].map((_, col) => (
                <rect key={`${row}-${col}`} x={55 + col * 25} y={70 + row * 30} width="15" height="15" fill="#00FF41" />
              ))
            ))}
          </g>

          {/* Blueprint Scanning Line */}
          <rect x="30" y="50" width="160" height="1" fill="#00FF41" filter="url(#neonGlow)">
             <animate attributeName="y" values="40;210;40" dur="5s" repeatCount="indefinite" />
          </rect>

          {/* Architectural Nodes */}
          <circle cx="40" cy="80" r="4" fill="#00FF41" filter="url(#neonGlow)" />
          <circle cx="140" cy="40" r="4" fill="#00FF41" filter="url(#neonGlow)" />
          <circle cx="180" cy="60" r="4" fill="#00FF41" filter="url(#neonGlow)" />

          {/* Roof Decoration */}
          <line x1="140" y1="40" x2="140" y2="10" stroke="#00FF41" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="140" cy="10" r="2" fill="#00FF41" filter="url(#neonGlow)" />
        </g>
      </IndustryWrapper>
    );
  }

  if (type === 'healthcare') {
    return (
      <IndustryWrapper robotPos={{ x: 30, y: 60 }}>
        <g transform="translate(150, 150)">
          {/* Advanced Medical Cross with Depth */}
          <g opacity="0.9">
            <path d="M-25 -60 H 25 V -25 H 60 V 25 H 25 V 60 H -25 V 25 H -60 V -25 H -25 Z" fill="rgba(0, 255, 65, 0.1)" stroke="#00FF41" strokeWidth="3" filter="url(#neonGlow)" />
            <path d="M-15 -50 H 15 V -15 H 50 V 15 H 15 V 50 H -15 V 15 H -50 V -15 H -15 Z" fill="none" stroke="#00FF41" strokeWidth="1" opacity="0.4" />
          </g>

          {/* Heartbeat / ECG Waveform Overlay */}
          <path d="M-70 0 H -40 L -30 -20 L -20 20 L -10 -40 L 0 40 L 10 -20 L 20 20 L 30 0 H 70" fill="none" stroke="#00FF41" strokeWidth="2" filter="url(#neonGlow)" strokeDasharray="300" strokeDashoffset="300">
             <animate attributeName="stroke-dashoffset" values="300;0" dur="2s" repeatCount="indefinite" />
          </path>

          {/* Circular Data Rings */}
          <circle r="90" fill="none" stroke="#00FF41" strokeWidth="1" strokeDasharray="4 8" opacity="0.2">
             <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="20s" repeatCount="indefinite" />
          </circle>
          <circle r="110" fill="none" stroke="#00FF41" strokeWidth="0.5" opacity="0.1">
             <animate attributeName="r" values="105;115;105" dur="4s" repeatCount="indefinite" />
          </circle>

          {/* Clinical Floating Data Points */}
          {[...Array(6)].map((_, i) => (
            <circle key={i} r="2" fill="#00FF41" filter="url(#neonGlow)">
               <animateTransform attributeName="transform" type="rotate" from={`${i * 60}`} to={`${i * 60 + 360}`} dur="15s" repeatCount="indefinite" />
               <animate attributeName="cx" values="100;120;100" dur={`${3 + i}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </g>
      </IndustryWrapper>
    );
  }

  return null;
};

export default ServiceVisual;
