import React, { useState, useEffect } from 'react';
import { Quote, Star, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    company: "TechFlow Solutions",
    content: "Spherr's Agentic Orchestration completely revolutionized how we handle customer support. We reduced response times by 80% while maintaining a personal touch that our clients love. The ROI was immediate.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Head of Global Operations",
    company: "Nexus Logistics",
    content: "The Enterprise Machina suite integrated flawlessly with our legacy ERP. It felt like upgrading the engine of a moving plane without a single hiccup. We are now processing 3x the volume with the same team.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Director of Innovation",
    company: "Future Retail Group",
    content: "Administrator AI gives me oversight I didn't think was possible. It's like having a digital twin of my best operational manager working 24/7. The insights are terrifyingly accurate.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
  },
  {
      id: 4,
      name: "David Okafor",
      role: "VP of Engineering",
      company: "SwiftBank Financial",
      content: "Security was our primary concern. Spherr's SOC2 compliance and on-premise gateway options made the decision easy. We built a fully compliant automated audit system in weeks, not months.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
  }
];

export const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
        nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setFade(false); // Start fade out
    setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setFade(true); // Start fade in after data switch
    }, 500); // Duration matches CSS transition
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
        setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
        setFade(true);
    }, 500);
  };

  const active = testimonials[current];

  return (
    <section className="py-32 bg-[#020617] relative border-t border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 flex items-end justify-between">
            <div>
                <h2 className="text-gold-400 font-bold uppercase tracking-wide text-sm mb-2">Success Stories</h2>
                <h3 className="text-4xl font-extrabold text-white">Trusted by Leaders</h3>
            </div>
            <div className="flex space-x-4">
                <button onClick={prevSlide} className="p-3 rounded-full border border-slate-700 text-white hover:bg-slate-800 transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                </button>
                <button onClick={nextSlide} className="p-3 rounded-full bg-gold-400 text-slate-950 hover:bg-gold-500 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>

        {/* Testimonial Content - Split Layout */}
        <div className={`transition-all duration-500 ease-in-out transform ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
                
                {/* Image Card - Left (Synchronized Fade) */}
                <div className="relative rounded-[2rem] overflow-hidden h-[450px] lg:h-[550px] shadow-2xl group border border-slate-800">
                    <img 
                        src={active.image} 
                        alt={active.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                    
                    {/* Floating Info on Image */}
                    <div className="absolute bottom-8 left-8 right-8">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                             <p className="text-white font-bold text-xl mb-1">{active.company}</p>
                             <div className="flex items-center text-gold-400 text-xs font-bold uppercase tracking-wide">
                                <ShieldCheck className="w-4 h-4 mr-1" /> Verified Partner
                             </div>
                        </div>
                    </div>
                </div>

                {/* Text Content - Right (Synchronized Fade) */}
                <div className="flex flex-col justify-center">
                    <div className="mb-8">
                        <Quote className="w-16 h-16 text-gold-400 opacity-20 mb-6" />
                        <div className="flex space-x-1 mb-6 text-gold-400">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
                        </div>
                    </div>
                    
                    <h4 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8 font-serif">
                        "{active.content}"
                    </h4>
                    
                    <div className="pl-6 border-l-4 border-gold-400">
                        <p className="text-2xl text-white font-bold">{active.name}</p>
                        <p className="text-slate-400 text-lg">{active.role}</p>
                    </div>
                </div>

            </div>
        </div>

        {/* Validation Badges */}
        <div className="mt-24 pt-12 border-t border-slate-800/50">
             <div className="flex flex-wrap justify-center gap-12 md:gap-24">
                <div className="flex items-center space-x-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                    <img src="https://cdn.simpleicons.org/g2/white" className="h-10" alt="G2" />
                    <span className="text-white font-bold text-xl">Leader Spring 2024</span>
                </div>
                 <div className="flex items-center space-x-2 drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">
                    <div className="text-gold-400 font-bold text-3xl">4.9/5</div>
                    <span className="text-white text-lg font-bold">Customer Rating</span>
                </div>
                 <div className="flex items-center space-x-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                    <img src="https://cdn.simpleicons.org/producthunt/white" className="h-10" alt="Product Hunt" />
                    <span className="text-white font-bold text-xl">#1 Product of the Month</span>
                </div>
             </div>
        </div>

      </div>
    </section>
  );
};