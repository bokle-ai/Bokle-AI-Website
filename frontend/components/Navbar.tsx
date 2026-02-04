
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
    { label: 'Contact Us', view: 'book-call' as View },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[90rem] z-[100]">
      {/* Obsidian Pill Container */}
      <div className="relative h-16 md:h-20 bg-[#031809]/40 backdrop-blur-xl rounded-full border border-[#00FF41]/10 shadow-[0_10px_40px_-5px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(0,255,65,0.05)] flex items-center px-6 md:px-10 overflow-hidden transition-all duration-500 hover:bg-[#031809]/60 hover:border-[#00FF41]/30 hover:shadow-[0_20px_60px_-10px_rgba(0,255,65,0.1),inset_0_0_30px_rgba(0,255,65,0.1)]">

        {/* Left Spacing for Balance */}
        <div className="flex-1"></div>

        {/* Centered Logo Section */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer group flex items-center justify-center"
          onClick={() => {
            onNavigate('home');
            setIsMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img
            src="/logo-main.png"
            alt="Bokle AI"
            className="h-10 md:h-12 w-auto transition-transform group-hover:scale-105"
          />
        </div>

        {/* Right Section (White Hamburger Menu) */}
        <div className="flex-1 flex justify-end items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="group flex flex-col gap-1.5 p-3 transition-transform hover:scale-110"
            aria-label="Toggle Menu"
          >
            <div className={`w-6 h-[2.5px] bg-white rounded-full transition-all duration-300 shadow-[0_0_5px_rgba(255,255,255,0.5)] ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-[2.5px] bg-white rounded-full transition-all duration-300 shadow-[0_0_5px_rgba(255,255,255,0.5)] ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-[2.5px] bg-white rounded-full transition-all duration-300 shadow-[0_0_5px_rgba(255,255,255,0.5)] ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        {/* Subtle Emerald Bottom Glow Line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#00FF41]/80 to-transparent shadow-[0_0_10px_#00FF41]"></div>
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
                  className={`w-full py-5 px-10 rounded-2xl text-left text-lg font-black uppercase tracking-[0.3em] transition-all
                    ${currentView === link.view ? 'bg-[#00FF41]/10 text-[#00FF41] border border-[#00FF41]/20' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
