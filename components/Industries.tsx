import React from 'react';
import { Industry } from '../types';

const industries: Industry[] = [
  {
    title: 'Financial Services',
    description: 'Automate compliance checks and risk assessment with Administrator AI.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Healthcare',
    description: 'Streamline patient data processing with secure Cloud Services.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Manufacturing',
    description: 'Optimize supply chains using Enterprise Machina capabilities.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'E-Commerce',
    description: 'Enhance customer experience with intelligent Agentic Orchestration.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800'
  }
];

export const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-400 font-semibold tracking-wide uppercase text-sm">Industries Served</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Transforming every sector
          </p>
          <p className="mt-4 text-lg text-slate-400">
            Spherr's adaptable architecture empowers businesses across diverse industries to achieve operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden h-64 md:h-80 cursor-pointer">
              {/* Image Background */}
              <div className="absolute inset-0">
                <img 
                  src={industry.image} 
                  alt={industry.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-colors"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-0 transition-transform duration-300 group-hover:-translate-y-2">
                  {industry.title}
                </h3>
                <p className="text-slate-200 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 delay-75">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};