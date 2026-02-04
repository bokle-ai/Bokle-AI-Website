
import React, { useState, useCallback, Suspense } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import ServiceNurture from './components/ServiceNurture';
import ServiceScale from './components/ServiceScale';
import ServiceSupport from './components/ServiceSupport';
import ServiceOther from './components/ServiceOther';
import UseCases from './components/UseCases';
import UseCaseRealEstate from './components/UseCaseRealEstate';
import UseCaseHealthcare from './components/UseCaseHealthcare';
import About from './components/About';
import BookCall from './components/BookCall';
import Admin from './components/Admin';
import Starfield from './components/Starfield';

export type View =
  | 'home'
  | 'services'
  | 'nurture'
  | 'scale'
  | 'support'
  | 'other-services'
  | 'use-cases'
  | 'use-case-re'
  | 'use-case-hc'
  | 'about'
  | 'book-call'
  | 'admin';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigate = useCallback((view: View) => {
    if (view === currentView) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setCurrentView(view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsTransitioning(false);
    }, 250);
    return () => clearTimeout(timer);
  }, [currentView]);

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      {/* Background stays persistent for smoothness */}
      <div className="fixed inset-0 z-0">
        <Starfield />
      </div>

      <Navbar currentView={currentView} onNavigate={navigate} />

      {/* Main Content Area - Semantic for SEO */}
      <main
        id="main-content"
        className={`relative z-10 pt-24 transition-all duration-300 ease-out 
        ${isTransitioning ? 'opacity-0 scale-[0.98] blur-sm' : 'opacity-100 scale-100 blur-0'}`}
      >
        <Suspense fallback={<div className="h-screen flex items-center justify-center font-mono text-[#00FF41]">SYNCING NEURAL LINKS...</div>}>
          {currentView === 'home' && <Home onNavigate={navigate} />}
          {currentView === 'services' && <Services onNavigate={navigate} />}
          {currentView === 'nurture' && <ServiceNurture onNavigate={navigate} />}
          {currentView === 'scale' && <ServiceScale onNavigate={navigate} />}
          {currentView === 'support' && <ServiceSupport onNavigate={navigate} />}
          {currentView === 'other-services' && <ServiceOther onNavigate={navigate} />}
          {currentView === 'use-cases' && <UseCases onNavigate={navigate} />}
          {currentView === 'use-case-re' && <UseCaseRealEstate onNavigate={navigate} />}
          {currentView === 'use-case-hc' && <UseCaseHealthcare onNavigate={navigate} />}
          {currentView === 'about' && <About onNavigate={navigate} />}
          {currentView === 'book-call' && <BookCall />}
        </Suspense>
      </main>

      <footer className="relative z-10 pt-16 pb-12 px-6 bg-black/60 backdrop-blur-xl mt-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src="/logo-sugar-glider.png" alt="Bokle AI" className="h-10 w-auto" />
                <span className="text-2xl font-black tracking-tight">Bokle AI</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                AI Automation for Real Estate, Healthcare, and Service-Driven Businesses.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-[#00FF41]">Quick Links</h4>
              <div className="flex flex-col gap-3">
                <button onClick={() => navigate('home')} className="text-white/50 hover:text-[#00FF41] transition-colors text-left">Home</button>
                <button onClick={() => navigate('services')} className="text-white/50 hover:text-[#00FF41] transition-colors text-left">Services</button>
                <button onClick={() => navigate('about')} className="text-white/50 hover:text-[#00FF41] transition-colors text-left">About</button>
                <button onClick={() => navigate('book-call')} className="text-white/50 hover:text-[#00FF41] transition-colors text-left">Contact Us</button>
              </div>
            </div>
            
            {/* Contact Details */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-[#00FF41]">Contact Us</h4>
              <div className="space-y-3">
                <p className="text-white/70 font-semibold">Bokle AI LLP</p>
                <a href="tel:9043223976" className="flex items-center gap-2 text-white/50 hover:text-[#00FF41] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  9043223976
                </a>
                <a href="mailto:sales@bokle.in" className="flex items-center gap-2 text-white/50 hover:text-[#00FF41] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  sales@bokle.in
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm">© 2025 Bokle AI LLP. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-white/40">
              <a href="#" className="hover:text-[#00FF41] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#00FF41] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
