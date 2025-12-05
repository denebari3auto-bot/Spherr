import React from 'react';
import { Testimonial } from '../types';
import { Quote } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Inc.",
    content: "Spherr's Agentic Orchestration completely revolutionized how we handle customer support. We reduced response times by 80%.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Ops",
    company: "Global Logistics",
    content: "The Enterprise Machina suite integrated flawlessly with our legacy ERP. It felt like upgrading the engine of a moving plane without a hiccup.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Emily Watson",
    role: "Director of Innovation",
    company: "Future Retail",
    content: "Administrator AI gives me oversight I didn't think was possible. It's like having a digital twin of my best operational manager.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-center text-3xl font-bold text-white mb-16">Trusted by Innovators</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-900/50 backdrop-blur border border-slate-800 p-8 rounded-2xl relative group hover:border-indigo-500/30 transition-colors duration-300">
              <Quote className="absolute top-8 right-8 h-8 w-8 text-slate-800 group-hover:text-indigo-900 transition-colors" />
              
              <p className="text-slate-300 mb-8 leading-relaxed relative z-10">
                "{t.content}"
              </p>
              
              <div className="flex items-center space-x-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full border-2 border-slate-700"
                />
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-indigo-400 text-sm">{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};