import React from 'react';
import { Database, Server, Cpu, Zap, ArrowRight, Activity, Layers } from 'lucide-react';
import { Button } from './Button';

export const Integrations: React.FC = () => {
  return (
    <section id="integrations" className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 rounded-full px-3 py-1 mb-4 border border-slate-700">
             <Layers className="w-4 h-4 text-indigo-400" />
             <span className="text-xs font-medium text-indigo-300 uppercase tracking-wide">Unified Ecosystem</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
             Seamlessly <span className="gradient-text">Connected</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Spherr acts as the intelligent neural network of your enterprise. We don't just connect apps; 
            we orchestrate complex logic between your legacy systems and modern cloud infrastructure.
          </p>
        </div>

        {/* Feature Cards - Simultaneous Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            
            {/* Card 1: Enterprise Automation Demo */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-all duration-300 group shadow-2xl flex flex-col">
                <div className="p-8 border-b border-slate-800/50">
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 bg-blue-500/10 rounded-lg">
                            <Cpu className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Enterprise Automation</h3>
                    </div>
                    <p className="text-slate-400 text-sm">
                        Watch data flow intelligently from source to execution. Our engine handles transformation, logic, and delivery in milliseconds.
                    </p>
                </div>
                
                {/* Visual Demo Area */}
                <div className="h-64 bg-slate-900/50 relative p-6 flex flex-col justify-center items-center flex-grow">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    
                    {/* Automation Flow */}
                    <div className="flex items-center justify-between w-full max-w-md relative z-10 px-4">
                        {/* Node 1 */}
                        <div className="flex flex-col items-center space-y-2 relative group-hover:animate-pulse">
                            <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center relative shadow-lg">
                                <Database className="w-5 h-5 text-slate-400" />
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-800 animate-ping"></div>
                            </div>
                            <span className="text-[10px] text-slate-500 font-mono uppercase">Source</span>
                        </div>

                        {/* Animated Path 1 */}
                        <div className="flex-1 h-0.5 bg-slate-800 mx-2 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent w-1/2 animate-[shimmer_2s_infinite]"></div>
                        </div>

                        {/* Node 2 (Central AI) */}
                        <div className="flex flex-col items-center space-y-2 relative">
                             <div className="w-16 h-16 rounded-2xl bg-indigo-600/10 border border-indigo-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(79,70,229,0.15)] relative">
                                <Activity className="w-8 h-8 text-indigo-400 animate-[pulse_3s_ease-in-out_infinite]" />
                                <div className="absolute inset-0 border border-indigo-500/30 rounded-2xl animate-ping opacity-20"></div>
                            </div>
                            <span className="text-[10px] text-indigo-400 font-mono uppercase font-bold">Spherr Core</span>
                        </div>

                         {/* Animated Path 2 */}
                         <div className="flex-1 h-0.5 bg-slate-800 mx-2 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent w-1/2 animate-[shimmer_2s_infinite_0.5s]"></div>
                        </div>

                        {/* Node 3 */}
                        <div className="flex flex-col items-center space-y-2 relative group-hover:animate-pulse">
                            <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shadow-lg">
                                <Server className="w-5 h-5 text-slate-400" />
                            </div>
                            <span className="text-[10px] text-slate-500 font-mono uppercase">Target</span>
                        </div>
                    </div>

                    <div className="mt-8 flex items-center space-x-2 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-white/5">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-xs text-slate-400 font-mono">Status: Processing 14,203 events/sec</span>
                    </div>
                </div>
            </div>

            {/* Card 2: Scalable Operations Demo */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 group shadow-2xl flex flex-col">
                 <div className="p-8 border-b border-slate-800/50">
                    <div className="flex items-center space-x-3 mb-4">
                         <div className="p-2 bg-purple-500/10 rounded-lg">
                            <Zap className="w-6 h-6 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Scalable Operations</h3>
                    </div>
                    <p className="text-slate-400 text-sm">
                        Built for hyper-growth. Our infrastructure auto-scales to handle traffic spikes without compromising latency or security.
                    </p>
                </div>

                {/* Visual Demo Area - Improved SVG Graph */}
                 <div className="h-64 bg-slate-900/50 relative p-6 flex items-end justify-center w-full flex-grow">
                     <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                     
                     <div className="w-full h-full relative z-10 flex items-end px-2 pb-4">
                        {/* SVG Graph for smoothness */}
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
                            {/* Grid Lines */}
                            <line x1="0" y1="10" x2="100" y2="10" stroke="#334155" strokeWidth="0.1" strokeDasharray="2" />
                            <line x1="0" y1="30" x2="100" y2="30" stroke="#334155" strokeWidth="0.1" strokeDasharray="2" />

                            {/* Area Fill */}
                            <path 
                                d="M0 50 L0 35 Q10 20 20 35 T40 30 T60 15 T80 25 T100 5 V50 Z" 
                                fill="url(#purpleGradient)" 
                                className="opacity-50"
                            />
                            
                            {/* Line */}
                            <path 
                                d="M0 35 Q10 20 20 35 T40 30 T60 15 T80 25 T100 5" 
                                fill="none" 
                                stroke="#a855f7" 
                                strokeWidth="0.8"
                                vectorEffect="non-scaling-stroke"
                                className="drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                            >
                                <animate attributeName="d" 
                                    values="M0 35 Q10 20 20 35 T40 30 T60 15 T80 25 T100 5; M0 38 Q10 25 20 32 T40 35 T60 18 T80 22 T100 8; M0 35 Q10 20 20 35 T40 30 T60 15 T80 25 T100 5" 
                                    dur="5s" 
                                    repeatCount="indefinite" 
                                />
                            </path>

                             <defs>
                                <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
                                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Animated Data Points */}
                        <div className="absolute top-[20%] left-[60%] w-2 h-2 bg-white rounded-full animate-ping"></div>
                        <div className="absolute top-[10%] right-[0%] w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_#a855f7]"></div>
                     </div>
                     
                     {/* Floating Stats Overlay */}
                     <div className="absolute top-4 left-4 right-4 flex justify-between">
                         <div className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-lg px-3 py-2 shadow-lg flex flex-col">
                             <span className="text-[10px] text-slate-400 uppercase font-bold">Requests</span>
                             <span className="text-lg font-bold text-white leading-none">2.4M</span>
                         </div>
                         <div className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-lg px-3 py-2 shadow-lg flex flex-col items-end">
                             <span className="text-[10px] text-slate-400 uppercase font-bold">Uptime</span>
                             <span className="text-lg font-bold text-green-400 leading-none">99.99%</span>
                         </div>
                     </div>
                 </div>
            </div>
        </div>

        {/* Binding CTA Footer */}
        <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-3xl border border-indigo-500/20 p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4">Ready to unify your entire stack?</h3>
                <p className="text-indigo-200 max-w-2xl mx-auto mb-8 text-lg">
                    Stop building digital silos. Start orchestrating your business intelligence with the only platform designed for total integration.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Button variant="glow" size="lg">
                        Contact Sales <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="lg" className="border-indigo-500/30 hover:bg-indigo-500/10 hover:text-white">
                        Request Demo
                    </Button>
                </div>
             </div>
        </div>

      </div>
    </section>
  );
};