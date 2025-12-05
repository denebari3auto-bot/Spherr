import React from 'react';
import { Product } from '../types';
import { ArrowLeft, CheckCircle2, Layers, Cpu, Zap } from 'lucide-react';
import { Button } from './Button';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-12 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="group flex items-center text-slate-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Overview
        </button>

        {/* Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
            <div>
                <div className="inline-flex items-center space-x-2 bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-indigo-500/20">
                    {product.icon}
                    <span>Product Deep Dive</span>
                </div>
                <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                    {product.title}
                </h1>
                <p className="text-xl text-slate-400 leading-relaxed mb-8">
                    {product.fullDescription}
                </p>
                <div className="flex flex-wrap gap-4">
                    <Button size="lg" variant="glow">Schedule Demo</Button>
                    <Button size="lg" variant="secondary">View API Docs</Button>
                </div>
            </div>
            
            {/* Dynamic visual representation based on product type */}
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 h-[400px] flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5"></div>
                <div className="absolute inset-0 opacity-20" style={{ 
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', 
                    backgroundSize: '24px 24px' 
                }}></div>
                
                {/* Central Icon Pulsing */}
                <div className="relative z-10 p-8 bg-slate-950 rounded-full border border-slate-700 shadow-2xl animate-pulse-slow">
                    {React.cloneElement(product.icon as React.ReactElement, { className: "w-20 h-20 text-indigo-400" })}
                </div>

                {/* Orbiting Elements */}
                <div className="absolute w-64 h-64 border border-indigo-500/20 rounded-full animate-spin-slow">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
                </div>
                <div className="absolute w-96 h-96 border border-purple-500/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full"></div>
                </div>
            </div>
        </div>

        {/* Modules Breakdown */}
        <div className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Core Modules</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {product.modules.map((module, idx) => (
                    <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-indigo-500/50 transition-colors group">
                        <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
                            <Layers className="w-6 h-6 text-indigo-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">{module.name}</h3>
                        <p className="text-slate-400 leading-relaxed">{module.description}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Features & Benefits Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-800">
            <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Zap className="w-6 h-6 text-yellow-500 mr-3" /> Key Benefits
                </h3>
                <ul className="space-y-4">
                    {product.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-slate-300 text-lg">{benefit}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                 <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Cpu className="w-6 h-6 text-blue-500 mr-3" /> Technical Features
                </h3>
                <ul className="space-y-4">
                    {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 mt-2.5"></div>
                            <span className="text-slate-300 text-lg">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

      </div>
    </div>
  );
};
