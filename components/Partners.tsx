import React from 'react';

// Using Simple Icons CDN for real company logos to show "Trusted Partner" status
const partnerLogosRow1 = [
    { name: "Netflix", slug: "netflix" },
    { name: "Uber", slug: "uber" },
    { name: "Spotify", slug: "spotify" },
    { name: "Airbnb", slug: "airbnb" },
    { name: "Stripe", slug: "stripe" },
    { name: "Coinbase", slug: "coinbase" },
    { name: "Twilio", slug: "twilio" },
    { name: "Vercel", slug: "vercel" },
];

const partnerLogosRow2 = [
    { name: "Linear", slug: "linear" },
    { name: "Notion", slug: "notion" },
    { name: "Figma", slug: "figma" },
    { name: "Discord", slug: "discord" },
    { name: "Zoom", slug: "zoom" },
    { name: "Dropbox", slug: "dropbox" },
    { name: "Atlassian", slug: "atlassian" },
    { name: "Okta", slug: "okta" },
];

export const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-20 bg-slate-950 border-t border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <p className="text-slate-500 text-sm font-semibold uppercase tracking-widest">
          Powering the world's most innovative teams
        </p>
      </div>
      
      {/* Infinite Scroll Marquee - Row 1 (Left) */}
      <div className="relative flex overflow-x-hidden group mb-12">
        <div className="animate-marquee whitespace-nowrap flex items-center space-x-20">
            {[...partnerLogosRow1, ...partnerLogosRow1, ...partnerLogosRow1].map((p, i) => (
                <div key={i} className="flex items-center space-x-3 opacity-40 hover:opacity-100 transition-all duration-300 cursor-pointer grayscale hover:grayscale-0">
                    <img 
                        src={`https://cdn.simpleicons.org/${p.slug}/white`} 
                        alt={p.name} 
                        className="h-8 w-auto max-w-[120px]" 
                    />
                </div>
            ))}
        </div>
      </div>

       {/* Infinite Scroll Marquee - Row 2 (Right) */}
       <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee2 whitespace-nowrap flex items-center space-x-20">
            {[...partnerLogosRow2, ...partnerLogosRow2, ...partnerLogosRow2].map((p, i) => (
                <div key={i} className="flex items-center space-x-3 opacity-40 hover:opacity-100 transition-all duration-300 cursor-pointer grayscale hover:grayscale-0">
                     <img 
                        src={`https://cdn.simpleicons.org/${p.slug}/white`} 
                        alt={p.name} 
                        className="h-8 w-auto max-w-[120px]" 
                    />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};