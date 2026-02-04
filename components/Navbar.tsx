
import React, { useState } from 'react';
import { View } from '../App';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mascotUrl = "/logo-sugar-glider.png";

  const navLinks = [
    { label: 'Home', view: 'home' as View },
    { label: 'Services', view: 'services' as View },
    { label: 'About', view: 'about' as View },
    { label: 'Deploy AI', view: 'book-call' as View },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[95%] z-[100]">
      {/* Obsidian Pill Container */}
      <div className="relative h-16 md:h-20 bg-black/90 backdrop-blur-2xl rounded-full border border-white/10 shadow-2xl flex items-center px-6 md:px-10 overflow-hidden">

        {/* Left Spacing for Balance */}
        <div className="flex-1"></div>

        {/* Centered Logo Section (Ref: PNG Branding) */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer group flex items-center gap-3"
          onClick={() => {
            onNavigate('home');
            setIsMenuOpen(false);
          }}
        >
          <img
            src={mascotUrl}
            alt="Bokle AI"
            className="h-8 md:h-10 w-auto transition-transform group-hover:scale-110"
          />
          <span className="text-xl md:text-2xl font-black tracking-tighter uppercase italic text-white">
            BOKLE <span className="text-[#00FF41]">AI</span>
          </span>
        </div>

        {/* Right Section (White Hamburger Menu) */}
        <div className="flex-1 flex justify-end items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="group flex flex-col gap-1.5 p-3 transition-transform hover:scale-110"
            aria-label="Toggle Menu"
          >
            <div className={`w-6 h-[2.5px] bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-[2.5px] bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-[2.5px] bg-white rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        {/* Subtle Emerald Bottom Glow Line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#00FF41]/60 to-transparent"></div>
      </div>

      {/* Mobile / Full Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full mt-4 animate-in fade-in slide-in-from-top-4 duration-300 ease-out">
          <div className="bg-black/95 backdrop-blur-3xl rounded-[40px] border border-white/10 p-8 shadow-[0_20px_80px_rgba(0,0,0,1)]">
            <div className="grid grid-cols-1 gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    onNavigate(link.view);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full py-5 px-10 rounded-2xl text-left text-sm font-black uppercase tracking-[0.4em] transition-all
                    ${currentView === link.view ? 'bg-[#00FF41]/10 text-[#00FF41] border border-[#00FF41]/20' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/5 text-center">
              <p className="text-[10px] text-white/20 font-bold tracking-[0.5em] uppercase">Neural Infrastructure V4.2</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
