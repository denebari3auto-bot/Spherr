import React, { useState, useEffect, useRef } from 'react';
import { products } from '../data/products';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from './Button';

interface ProductsProps {
  onProductSelect: (id: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ onProductSelect }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (!isPaused) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % products.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isPaused, products.length]);

  useEffect(() => {
    if (scrollContainerRef.current) {
        const cardWidth = 350; // Approx card width + gap
        // Centering logic can be improved, but simple scroll is robust
        scrollContainerRef.current.scrollTo({
            left: activeIndex * cardWidth,
            behavior: 'smooth'
        });
    }
  }, [activeIndex]);

  const Visual = ({ type }: { type: string }) => {
    if (type === 'bot') {
        return (
            <div className="h-20 flex items-center justify-center space-x-2">
                <div className="h-3 w-3 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="h-3 w-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="h-3 w-3 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
        );
    }
    if (type === 'network') {
        return (
            <div className="h-20 relative overflow-hidden w-full">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-700/50"></div>
                <div className="absolute top-1/2 left-0 h-2 w-2 bg-indigo-400 rounded-full animate-[blob_2s_linear_infinite]"></div>
                <div className="absolute top-1/4 right-1/4 h-2 w-2 bg-purple-400 rounded-full animate-pulse"></div>
            </div>
        );
    }
    if (type === 'chart') {
       return (
        <div className="h-20 flex items-end justify-center space-x-1">
             <div className="w-2 bg-indigo-500 h-4 animate-[pulse_1s_ease-in-out_infinite]"></div>
             <div className="w-2 bg-indigo-500 h-8 animate-[pulse_1.5s_ease-in-out_infinite]"></div>
             <div className="w-2 bg-indigo-500 h-6 animate-[pulse_1.2s_ease-in-out_infinite]"></div>
             <div className="w-2 bg-indigo-500 h-10 animate-[pulse_2s_ease-in-out_infinite]"></div>
        </div>
       )
    }
    // Code / Default
    return (
       <div className="h-20 flex flex-col justify-center space-y-2 px-4">
          <div className="h-1 w-3/4 bg-slate-700 rounded animate-pulse"></div>
          <div className="h-1 w-1/2 bg-slate-700 rounded animate-pulse delay-75"></div>
          <div className="h-1 w-full bg-slate-700 rounded animate-pulse delay-150"></div>
       </div>
    );
  };

  return (
    <section id="products" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-sm font-semibold text-indigo-400 tracking-wide uppercase mb-2">Our Ecosystem</h2>
          <p className="text-4xl font-bold text-white mb-4">Comprehensive Product Suite</p>
          <p className="text-slate-400 max-w-2xl">
             Explore our modular solutions designed to automate, optimize, and scale every aspect of your business operation.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
            className="flex space-x-6 overflow-x-auto pb-12 no-scrollbar snap-x px-4"
            ref={scrollContainerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
          {products.map((product, index) => {
            const isActive = index === activeIndex;
            return (
              <div 
                key={product.id}
                onClick={() => {
                    setActiveIndex(index);
                    onProductSelect(product.id);
                }}
                className={`
                    min-w-[300px] md:min-w-[360px] snap-center cursor-pointer transition-all duration-500
                    rounded-2xl p-[1px]
                    ${isActive 
                        ? 'bg-gradient-to-br from-indigo-500 to-purple-500 scale-100 shadow-2xl shadow-indigo-500/20' 
                        : 'bg-slate-800 scale-95 opacity-60 hover:opacity-100'}
                `}
              >
                <div className="bg-slate-950 h-full rounded-2xl p-6 relative overflow-hidden flex flex-col">
                   {/* Header */}
                   <div className="flex items-start justify-between mb-6">
                        <div className={`p-3 rounded-xl ${isActive ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-800 text-slate-400'}`}>
                            {product.icon}
                        </div>
                        <div className="text-xs font-mono text-slate-500 flex items-center">
                           PROD-0{index + 1}
                        </div>
                   </div>

                   {/* Title */}
                   <h3 className={`text-2xl font-bold mb-2 ${isActive ? 'text-white' : 'text-slate-300'}`}>
                        {product.title}
                   </h3>
                   <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                        {product.shortDescription}
                   </p>

                   {/* Visual Automation Illustration */}
                   <div className={`mb-6 rounded-xl bg-slate-900 border border-slate-800 h-32 flex items-center justify-center overflow-hidden relative group`}>
                       {isActive && (
                           <div className="absolute inset-0 bg-indigo-500/5 animate-pulse"></div>
                       )}
                       <Visual type={product.visualType} />
                   </div>

                   {/* Modules List (Animated Fade) */}
                   <div className="space-y-3 mb-6">
                        {product.modules.map((mod, idx) => (
                            <div 
                                key={idx} 
                                className={`flex items-center text-xs transition-all duration-500 border-l-2 pl-3 py-1
                                    ${isActive ? 'border-indigo-500 text-slate-300' : 'border-slate-800 text-slate-600'}
                                `}
                                style={{ 
                                    opacity: isActive ? 1 : 0.5,
                                    transitionDelay: `${idx * 150}ms`
                                }}
                            >
                                <span className="font-semibold text-slate-200 mr-2">{mod.name}</span>
                            </div>
                        ))}
                   </div>

                   <Button variant={isActive ? "glow" : "secondary"} className="w-full group" size="sm">
                       Explore Product <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                   </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
            {products.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === activeIndex ? 'w-12 bg-indigo-500' : 'w-2 bg-slate-800 hover:bg-slate-700'
                    }`}
                />
            ))}
        </div>
      </div>
    </section>
  );
};
