import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { ViewState } from '../types';

interface HeaderProps {
  onRequestDemo?: () => void;
  onNavigate: (view: ViewState) => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestDemo, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (view: ViewState | string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (typeof view === 'string' && view.startsWith('#')) {
        onNavigate('home');
        setTimeout(() => {
            const element = document.querySelector(view);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    } else {
        onNavigate(view as ViewState);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Custom NavLink component for consistent styling
  const NavLink = ({ label, target }: { label: string, target: string | ViewState }) => (
    <button 
      onClick={(e) => handleNav(target, e)} 
      className="group relative px-2 py-2 text-base font-semibold text-slate-300 hover:text-white transition-colors duration-300"
    >
      <span className="relative z-10 tracking-wide">{label}</span>
      {/* Animated underline/glow effect */}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 shadow-[0_0_12px_rgba(251,191,36,0.6)]"></span>
    </button>
  );

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Increased header height to accommodate larger logo */}
        <div className="flex justify-between items-center h-28 md:h-36 transition-all duration-300">
          <div className="flex items-center">
            <a href="#" className="flex items-center group relative z-20" onClick={(e) => handleNav('home', e)}>
              {/* Bold, Visible, Standard Logo */}
              <div className="relative">
                <img 
                  src="https://i.imgur.com/KKd9RjR.png" 
                  alt="Spherr Logo" 
                  className="h-24 md:h-32 w-auto object-contain transition-transform duration-300 hover:scale-105 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" 
                />
              </div>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-10">
            <NavLink label="Solutions" target="solutions" />
            <NavLink label="Industries" target="#industries" />
            <NavLink label="Integrations" target="integrations" />
            
            <div className="pl-6 ml-2 border-l border-white/10 h-8 flex items-center">
                <Button 
                    className="bg-gold-400 text-slate-950 hover:bg-gold-500 font-bold border-none shadow-[0_0_20px_rgba(251,191,36,0.25)] hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] hover:-translate-y-0.5 transition-all duration-300 text-base px-6" 
                    size="md" 
                    onClick={onRequestDemo}
                >
                    Request Demo
                </Button>
            </div>
          </nav>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none bg-white/5 rounded-lg border border-white/10"
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 absolute w-full shadow-2xl animate-slide-up">
          <div className="px-4 pt-4 pb-6 space-y-2">
             <button onClick={(e) => handleNav('solutions', e)} className="block w-full text-left px-4 py-3 rounded-xl text-lg font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all border border-transparent hover:border-white/10">Solutions</button>
            <button onClick={(e) => handleNav('#industries', e)} className="block w-full text-left px-4 py-3 rounded-xl text-lg font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all border border-transparent hover:border-white/10">Industries</button>
            <button onClick={(e) => handleNav('integrations', e)} className="block w-full text-left px-4 py-3 rounded-xl text-lg font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all border border-transparent hover:border-white/10">Integrations</button>
            <div className="pt-4 px-2">
              <Button className="w-full bg-gold-400 text-slate-950 font-bold py-4 text-lg shadow-lg shadow-gold-500/20" onClick={onRequestDemo}>Request Demo</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};