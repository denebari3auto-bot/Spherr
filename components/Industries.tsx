import React from 'react';
import { Industry } from '../types';

const industries: Industry[] = [
  {
    title: 'Financial Services',
    description: 'Automate compliance checks and risk assessment.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Healthcare',
    description: 'Streamline patient data with secure Cloud Services.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Manufacturing',
    description: 'Optimize supply chains using Enterprise Machina.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Digital Commerce',
    description: 'Enhance CX with intelligent Agentic Orchestration.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Engineering',
    description: 'Accelerate R&D with generative design algorithms.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Logistics',
    description: 'Real-time fleet tracking and route optimization.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'IT & DevOps',
    description: 'Automated infrastructure scaling and monitoring.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600'
  }
];

export const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-24 bg-[#050b1a] overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gold-400 font-bold tracking-wide uppercase text-sm mb-2">Industries Served</h2>
          <p className="text-4xl font-extrabold text-white sm:text-5xl tracking-tight">
            Transforming every sector
          </p>
          <p className="mt-4 text-xl text-slate-400 font-medium">
            Spherr's adaptable architecture empowers businesses across diverse industries to achieve operational excellence.
          </p>
        </div>

        {/* Automatic Sliding Carousel */}
        <div className="relative w-full">
            <div className="flex space-x-8 animate-marquee hover:[animation-play-state:paused] w-max py-4">
                {/* Triple the list to ensure smooth infinite loop */}
                {[...industries, ...industries, ...industries].map((industry, index) => (
                    <div 
                        key={index} 
                        className="relative w-[340px] md:w-[400px] h-[450px] flex-shrink-0 rounded-3xl overflow-hidden cursor-pointer group border-2 border-slate-800 hover:border-gold-500 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/20 hover:-translate-y-2"
                    >
                        {/* Image */}
                        <div className="absolute inset-0">
                            <img 
                                src={industry.image} 
                                alt={industry.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Stronger Gradient Overlay for Text Visibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
                        </div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                            <div className="w-12 h-1.5 bg-gold-400 mb-4 rounded-full w-8 group-hover:w-16 transition-all duration-300"></div>
                            <h3 className="text-3xl font-bold text-white mb-3">
                                {industry.title}
                            </h3>
                            <p className="text-slate-200 text-base font-medium opacity-90 transform translate-y-2 transition-all duration-300">
                                {industry.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Fade edges */}
            <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-[#050b1a] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-[#050b1a] to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};