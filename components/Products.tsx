import React, { useState, useEffect, useRef } from 'react';
import { products } from '../data/products';
import { ChevronRight, Play, CheckCircle2, MoreHorizontal, Search, Settings } from 'lucide-react';
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
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPaused, products.length]);

  useEffect(() => {
    if (scrollContainerRef.current) {
        const cardWidth = 360; 
        scrollContainerRef.current.scrollTo({
            left: activeIndex * cardWidth,
            behavior: 'smooth'
        });
    }
  }, [activeIndex]);

  // Realistic UI Visuals for Cards
  const Visual = ({ type, productId }: { type: string, productId: string }) => {
    
    // AI Space: Node/Agent Builder
    if (productId === 'aispace') {
        return (
            <div className="w-full h-full bg-[#1e293b] flex flex-col p-2 rounded-lg font-sans relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
                <div className="flex justify-between items-center mb-2 border-b border-slate-700 pb-1 px-1">
                    <span className="text-[8px] text-slate-400 font-mono">FLOW_BUILDER_V2</span>
                    <Settings className="w-3 h-3 text-slate-500" />
                </div>
                <div className="flex-1 relative">
                    <div className="absolute top-2 left-2 bg-slate-700 border border-slate-600 rounded p-1.5 w-16 shadow-lg z-10">
                        <div className="h-1.5 w-10 bg-indigo-500 rounded mb-1"></div>
                        <div className="h-1 w-8 bg-slate-500 rounded"></div>
                    </div>
                    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                        <path d="M40 25 C 60 25, 60 50, 80 50" fill="none" stroke="#64748b" strokeWidth="1.5" />
                    </svg>
                    <div className="absolute top-8 left-20 bg-indigo-600/20 border border-indigo-500 rounded p-1.5 w-20 shadow-lg backdrop-blur z-10">
                        <div className="flex items-center gap-1 mb-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                            <div className="h-1.5 w-12 bg-indigo-300 rounded"></div>
                        </div>
                        <div className="h-1 w-full bg-indigo-500/30 rounded"></div>
                    </div>
                </div>
            </div>
        );
    }

    // Process Automator: Kanban Board
    if (productId === 'process') {
        return (
             <div className="w-full h-full bg-[#0f172a] flex flex-col p-2 rounded-lg font-sans">
                 <div className="flex gap-2 mb-2">
                     <div className="flex-1 bg-slate-800 rounded px-1 py-1">
                         <div className="flex items-center justify-between mb-1">
                             <div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div>
                             <MoreHorizontal className="w-2 h-2 text-slate-600" />
                         </div>
                         <div className="bg-slate-700 h-6 rounded mb-1 border-l-2 border-yellow-500"></div>
                         <div className="bg-slate-700 h-6 rounded opacity-50"></div>
                     </div>
                     <div className="flex-1 bg-slate-800 rounded px-1 py-1">
                        <div className="flex items-center justify-between mb-1">
                             <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                             <MoreHorizontal className="w-2 h-2 text-slate-600" />
                         </div>
                         <div className="bg-slate-700 h-8 rounded mb-1 border-l-2 border-blue-500 shadow-lg scale-105 relative z-10">
                             <div className="absolute top-1 right-1 w-2 h-2 bg-slate-500 rounded-full"></div>
                         </div>
                     </div>
                     <div className="flex-1 bg-slate-800 rounded px-1 py-1">
                         <div className="flex items-center justify-between mb-1">
                             <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                             <MoreHorizontal className="w-2 h-2 text-slate-600" />
                         </div>
                         <div className="bg-slate-700 h-6 rounded border-l-2 border-green-500 flex items-center justify-center">
                             <CheckCircle2 className="w-3 h-3 text-green-500" />
                         </div>
                     </div>
                 </div>
             </div>
        );
    }

    // 0.o1 Analytics: Complex Dashboard
    if (productId === '0o1') {
       return (
        <div className="w-full h-full bg-[#1e1e1e] p-2 flex flex-col justify-between rounded-lg border border-slate-700">
             <div className="flex justify-between items-center mb-1">
                 <div className="h-1.5 w-12 bg-slate-600 rounded"></div>
                 <div className="h-1.5 w-6 bg-green-500 rounded"></div>
             </div>
             <div className="flex-1 flex items-end space-x-0.5 border-b border-l border-slate-700">
                 {[40, 70, 50, 90, 60, 80, 95, 40, 70, 50, 90, 60].map((h, i) => (
                     <div key={i} className="flex-1 bg-indigo-500 hover:bg-gold-400 transition-colors opacity-80" style={{ height: `${h}%` }}></div>
                 ))}
             </div>
             <div className="mt-1 grid grid-cols-2 gap-1">
                 <div className="bg-slate-800 h-4 rounded border border-slate-700"></div>
                 <div className="bg-slate-800 h-4 rounded border border-slate-700"></div>
             </div>
        </div>
       )
    }

    // rOA Operations: Project Table
    if (productId === 'roa') {
        return (
            <div className="w-full h-full bg-white flex flex-col rounded-lg overflow-hidden text-[6px]">
                <div className="bg-slate-100 p-1 border-b border-slate-200 flex gap-1">
                    <div className="w-2 h-2 rounded bg-slate-300"></div>
                    <div className="w-16 h-2 rounded bg-slate-200"></div>
                </div>
                <div className="p-1 space-y-1">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="flex items-center gap-1 border-b border-slate-50 pb-0.5">
                            <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                            <div className="flex-1 space-y-0.5">
                                <div className="h-1 w-12 bg-slate-800 rounded"></div>
                                <div className="h-0.5 w-8 bg-slate-400 rounded"></div>
                            </div>
                            <div className={`w-8 h-2 rounded ${i===2 ? 'bg-red-100 text-red-500' : 'bg-green-100 text-green-500'} flex items-center justify-center font-bold`}>
                                {i===2 ? 'Late' : 'Done'}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    // Enterprise Machina: Server/Database
    if (productId === 'machina') {
        return (
             <div className="w-full h-full bg-[#0f172a] rounded-lg p-2 flex items-center justify-center relative">
                 <div className="w-16 h-20 bg-slate-800 rounded border border-slate-700 flex flex-col p-1 space-y-1 relative z-10 shadow-xl">
                     {[1,2,3,4,5].map(i => (
                         <div key={i} className="flex-1 bg-slate-900 rounded border border-slate-800 flex items-center justify-between px-1">
                             <div className="flex gap-0.5">
                                 <div className="w-0.5 h-0.5 bg-green-500 rounded-full animate-pulse"></div>
                                 <div className="w-0.5 h-0.5 bg-green-500 rounded-full animate-pulse delay-75"></div>
                             </div>
                             <div className="w-4 h-0.5 bg-slate-700"></div>
                         </div>
                     ))}
                 </div>
                 {/* Connection Lines */}
                 <div className="absolute top-1/2 left-0 w-full h-0.5 bg-indigo-500/30"></div>
                 <div className="absolute top-1/2 left-0 w-full h-0.5 bg-indigo-500/50 animate-[shimmer_2s_infinite]"></div>
             </div>
        )
    }

    // Administrator AI: Security Terminal
    if (productId === 'admin') {
        return (
            <div className="w-full h-full bg-black rounded-lg p-2 font-mono text-[6px] text-green-500 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-4 bg-slate-900 flex items-center px-2 space-x-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                </div>
                <div className="mt-4 space-y-1 opacity-80">
                    <div>> SYSTEM_CHECK_INIT</div>
                    <div className="text-white">> verifying_identity... OK</div>
                    <div>> scanning_nodes... 452 found</div>
                    <div className="text-red-400">> alert: anomalous_traffic detected</div>
                    <div className="text-white">> activating_protocols...</div>
                    <div className="animate-pulse">> _</div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black to-transparent"></div>
            </div>
        )
    }

    // Code/Integration/Cloud
    return (
       <div className="w-full h-full bg-[#1e1e1e] rounded-lg p-2 font-mono text-[6px] relative">
          <div className="flex text-slate-500 border-b border-slate-700 pb-1 mb-1">
              <span className="bg-slate-800 px-2 rounded-t text-slate-300">config.json</span>
          </div>
          <div className="space-y-0.5">
              <div className="text-purple-400"><span className="text-blue-400">import</span> &#123; connect &#125; <span className="text-blue-400">from</span> 'spherr-sdk';</div>
              <div className="pl-2 text-slate-300">client.connect(&#123;</div>
              <div className="pl-4 text-green-300">target: <span className="text-orange-300">'salesforce'</span>,</div>
              <div className="pl-4 text-green-300">sync: <span className="text-blue-400">true</span></div>
              <div className="pl-2 text-slate-300">&#125;);</div>
              <div className="text-slate-500">// Connection established</div>
          </div>
       </div>
    );
  };

  return (
    <section id="products" className="py-24 bg-[#050b1a] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-gold-400 tracking-wide uppercase mb-2">Our Ecosystem</h2>
          <p className="text-4xl md:text-5xl font-bold text-white mb-4">Comprehensive Product Suite</p>
          <p className="text-slate-400 max-w-2xl text-lg">
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
                    min-w-[320px] md:min-w-[360px] snap-center cursor-pointer transition-all duration-500
                    rounded-2xl p-[1px]
                    ${isActive 
                        ? 'bg-gradient-to-br from-indigo-500 via-purple-500 to-gold-400 scale-100 shadow-[0_0_30px_rgba(79,70,229,0.3)]' 
                        : 'bg-slate-800 scale-95 opacity-70 hover:opacity-100'}
                `}
              >
                <div className="bg-[#0b1221] h-full rounded-2xl p-6 relative overflow-hidden flex flex-col">
                   {/* Header */}
                   <div className="flex items-start justify-between mb-6">
                        <div className={`p-3 rounded-xl ${isActive ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-800 text-slate-500'}`}>
                            {product.icon}
                        </div>
                        <div className="text-xs font-mono text-slate-600 flex items-center border border-slate-800 px-2 py-1 rounded">
                           PROD-0{index + 1}
                        </div>
                   </div>

                   {/* Title */}
                   <h3 className={`text-2xl font-bold mb-2 ${isActive ? 'text-white' : 'text-slate-300'}`}>
                        {product.title}
                   </h3>
                   <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed font-medium">
                        {product.shortDescription}
                   </p>

                   {/* Realistic Mini UI Visual - Replaced abstract visuals with Mock UI */}
                   <div className={`mb-6 rounded-lg border h-32 overflow-hidden relative shadow-inner ${isActive ? 'border-slate-700 shadow-xl' : 'border-slate-800 opacity-50'}`}>
                       <Visual type={product.visualType} productId={product.id} />
                   </div>

                   {/* Modules List */}
                   <div className="space-y-3 mb-6">
                        {product.modules.slice(0, 2).map((mod, idx) => (
                            <div 
                                key={idx} 
                                className={`flex items-center text-xs transition-all duration-500 border-l-2 pl-3 py-1
                                    ${isActive ? 'border-gold-400 text-slate-200' : 'border-slate-800 text-slate-600'}
                                `}
                            >
                                <span className="font-semibold">{mod.name}</span>
                            </div>
                        ))}
                   </div>

                   <Button variant={isActive ? "glow" : "secondary"} className="w-full group" size="sm">
                       Explore <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
                        idx === activeIndex ? 'w-12 bg-gold-400' : 'w-2 bg-slate-800 hover:bg-slate-700'
                    }`}
                />
            ))}
        </div>
      </div>
    </section>
  );
};