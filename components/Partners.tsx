import React from 'react';

// Using high-quality SVG placeholders to represent realistic companies
const partnerLogos = [
    { name: "Acme Corp", url: "https://logoipsum.com/logo/logo-1.svg" },
    { name: "GlobalTech", url: "https://logoipsum.com/logo/logo-2.svg" },
    { name: "Nebula", url: "https://logoipsum.com/logo/logo-3.svg" },
    { name: "Trio", url: "https://logoipsum.com/logo/logo-4.svg" },
    { name: "FoxRun", url: "https://logoipsum.com/logo/logo-5.svg" },
    { name: "Circle", url: "https://logoipsum.com/logo/logo-6.svg" },
    { name: "Vertex", url: "https://logoipsum.com/logo/logo-7.svg" },
    { name: "Spherule", url: "https://logoipsum.com/logo/logo-8.svg" },
];

export const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-16 bg-slate-950 border-t border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <p className="text-center text-slate-500 text-sm font-medium uppercase tracking-widest">
          Trusted by market leaders
        </p>
      </div>
      
      {/* Infinite Scroll Marquee */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center space-x-16">
            {/* First Set */}
            {partnerLogos.map((p, i) => (
                <div key={i} className="flex items-center space-x-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                    <img src={p.url} alt={p.name} className="h-8 w-auto" />
                    <span className="text-xl font-bold text-slate-300 hidden md:inline-block">{p.name}</span>
                </div>
            ))}
             {/* Duplicate Set for Seamless Loop */}
             {partnerLogos.map((p, i) => (
                <div key={`dup-${i}`} className="flex items-center space-x-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                    <img src={p.url} alt={p.name} className="h-8 w-auto" />
                    <span className="text-xl font-bold text-slate-300 hidden md:inline-block">{p.name}</span>
                </div>
            ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center space-x-16 ml-16">
            {/* Third Set (for safety in wide screens) */}
             {partnerLogos.map((p, i) => (
                <div key={`dup2-${i}`} className="flex items-center space-x-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                    <img src={p.url} alt={p.name} className="h-8 w-auto" />
                    <span className="text-xl font-bold text-slate-300 hidden md:inline-block">{p.name}</span>
                </div>
            ))}
             {/* Fourth Set */}
             {partnerLogos.map((p, i) => (
                <div key={`dup3-${i}`} className="flex items-center space-x-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                    <img src={p.url} alt={p.name} className="h-8 w-auto" />
                    <span className="text-xl font-bold text-slate-300 hidden md:inline-block">{p.name}</span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
