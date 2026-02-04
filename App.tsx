
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
  | 'book-call';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigate = useCallback((view: View) => {
    if (view === currentView) return;
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setCurrentView(view);
      window.scrollTo({ top: 0, behavior: 'auto' });
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

      <footer className="relative z-10 pt-20 pb-10 px-6 bg-black/40 backdrop-blur-xl mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="text-xl font-bold tracking-tighter uppercase">BOKLE <span className="text-[#00FF41]">AI</span></div>
          <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold">© 2025 BOKLE ARTIFICIAL INTELLIGENCE LABS</p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-white/50">
            <a href="#" className="hover:text-[#00FF41] transition-colors">Privacy</a>
            <button onClick={() => navigate('book-call')} className="hover:text-[#00FF41] transition-colors uppercase">Book Mission</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
