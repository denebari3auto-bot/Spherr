import React, { useState, useEffect } from 'react';
    import { Menu, X, Hexagon } from 'lucide-react';
    import { Button } from './Button';
    
    export const Header: React.FC = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [scrolled, setScrolled] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center">
                <a href="#" className="flex items-center space-x-2 group">
                  <div className="relative">
                    <Hexagon className="h-8 w-8 text-indigo-500 fill-indigo-500/20 group-hover:stroke-purple-500 transition-colors" />
                    <div className="absolute inset-0 bg-indigo-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  </div>
                  <span className="font-bold text-2xl text-white tracking-tight">Spherr</span>
                </a>
              </div>
              
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#products" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Products</a>
                <a href="#industries" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Industries</a>
                <a href="#integrations" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Integrations</a>
                <a href="#partners" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Partners</a>
                <Button variant="glow" size="sm">Get Demo</Button>
              </nav>
    
              <div className="md:hidden">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 text-slate-300 hover:text-white focus:outline-none"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
    
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-900 border-b border-slate-800">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#products" className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">Products</a>
                <a href="#industries" className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">Industries</a>
                <a href="#integrations" className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">Integrations</a>
                <div className="px-3 py-2">
                  <Button className="w-full" variant="glow">Get Demo</Button>
                </div>
              </div>
            </div>
          )}
        </header>
      );
    };