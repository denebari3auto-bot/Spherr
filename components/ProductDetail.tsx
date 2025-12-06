import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { ArrowLeft, CheckCircle2, Layers, Cpu, Zap, Activity, Settings, User, Cloud, Map, Clock, AlertCircle } from 'lucide-react';
import { Button } from './Button';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

// Interactive Demos for specific products
const DemoVisual: React.FC<{ productId: string }> = ({ productId }) => {
    // 1. Image: AI Space (Network/Connections)
    if (productId === 'aispace') {
        return (
            <div className="w-full h-full bg-slate-900 rounded-xl overflow-hidden border border-slate-700 shadow-2xl relative">
                <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2668&auto=format&fit=crop" 
                    alt="AI Space Network" 
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur border border-white/10 px-3 py-1 rounded-lg">
                    <span className="text-xs text-indigo-300 font-mono">LIVE_NETWORK_VIEW</span>
                </div>
            </div>
        )
    }

    // 2. Terminal/Code for Integration
    if (productId === 'integration' || productId === 'cloud') {
        return (
            <div className="w-full h-full bg-[#0d1117] rounded-xl flex flex-col overflow-hidden border border-slate-700 font-mono text-xs md:text-sm shadow-2xl">
                 <div className="bg-slate-800 p-3 flex justify-between items-center border-b border-slate-700">
                    <span className="text-slate-400">api.spherr.io — bash</span>
                </div>
                <div className="p-4 text-green-400 space-y-2">
                    <div className="flex">
                        <span className="text-blue-400 mr-2">➜</span>
                        <span className="text-white">spherr connect --source=salesforce --target=slack</span>
                    </div>
                    <div className="opacity-70">Authenticating... OK</div>
                    <div className="opacity-70">Fetching schema from Salesforce... 24 objects found</div>
                    <div className="opacity-70">Mapping fields to Slack Block Kit... Done</div>
                    <div className="opacity-70">Establishing webhook listener...</div>
                    <div className="text-indigo-400 mt-2">
                        [SUCCESS] Pipeline active. Listening for events on port 443.
                    </div>
                    <div className="flex mt-2 animate-pulse">
                        <span className="text-blue-400 mr-2">➜</span>
                        <span className="w-2 h-4 bg-slate-500"></span>
                    </div>
                </div>
            </div>
        )
    }

    // 3. Image: 0.o1 Analytics (Data Analysis)
    if (productId === '0o1') {
        return (
             <div className="w-full h-full bg-slate-900 rounded-xl overflow-hidden border border-slate-700 shadow-2xl relative">
                <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" 
                    alt="Data Analysis Dashboard" 
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div className="bg-slate-900/80 backdrop-blur border border-white/10 px-4 py-2 rounded-lg">
                        <div className="text-[10px] text-slate-400 uppercase">Growth Rate</div>
                        <div className="text-xl font-bold text-green-400">+124%</div>
                    </div>
                </div>
            </div>
        )
    }

    // 4. Mission Control for rOA Operations (NEW)
    if (productId === 'roa') {
        return (
            <div className="w-full h-full bg-[#0f172a] rounded-xl flex flex-col border border-slate-700 shadow-2xl overflow-hidden font-sans">
                {/* Header */}
                <div className="bg-slate-900 border-b border-slate-800 p-3 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-white font-bold text-xs tracking-wide uppercase">Ops Command Center</span>
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono flex items-center">
                        <Clock className="w-3 h-3 mr-1" /> T-Minus 00:00:00
                    </div>
                </div>

                <div className="flex-1 flex overflow-hidden">
                    {/* Sidebar */}
                    <div className="w-16 bg-slate-900/50 border-r border-slate-800 flex flex-col items-center py-4 space-y-4">
                        <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400"><Layers className="w-5 h-5"/></div>
                        <div className="p-2 hover:bg-slate-800 rounded-lg text-slate-500"><User className="w-5 h-5"/></div>
                        <div className="p-2 hover:bg-slate-800 rounded-lg text-slate-500"><Map className="w-5 h-5"/></div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-4 grid grid-rows-2 gap-4">
                        {/* Top Row: Metrics */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700 relative overflow-hidden">
                                <div className="text-[10px] text-slate-400 uppercase">Active Projects</div>
                                <div className="text-xl font-bold text-white mt-1">124</div>
                                <div className="absolute bottom-0 left-0 h-1 bg-indigo-500 w-[70%]"></div>
                            </div>
                            <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700 relative overflow-hidden">
                                <div className="text-[10px] text-slate-400 uppercase">Team Efficiency</div>
                                <div className="text-xl font-bold text-green-400 mt-1">94%</div>
                                <div className="absolute bottom-0 left-0 h-1 bg-green-500 w-[94%]"></div>
                            </div>
                            <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700 relative overflow-hidden">
                                <div className="text-[10px] text-slate-400 uppercase">Issues</div>
                                <div className="text-xl font-bold text-red-400 mt-1">3</div>
                                <div className="absolute top-2 right-2"><AlertCircle className="w-4 h-4 text-red-400 animate-pulse"/></div>
                            </div>
                        </div>

                        {/* Bottom Row: Live Feed / Gantt */}
                        <div className="bg-slate-800/30 rounded-lg border border-slate-700 p-3 flex flex-col">
                            <div className="text-[10px] text-slate-400 uppercase mb-2 flex justify-between">
                                <span>Live Activity Feed</span>
                                <span className="text-indigo-400">Real-time</span>
                            </div>
                            <div className="space-y-2 overflow-hidden">
                                <div className="flex items-center space-x-2 text-xs bg-slate-900/50 p-2 rounded border border-slate-800">
                                    <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[8px] font-bold">JD</div>
                                    <div className="flex-1 text-slate-300">Updated <span className="text-white">Q3 Financials</span></div>
                                    <div className="text-[9px] text-slate-500">2m ago</div>
                                </div>
                                <div className="flex items-center space-x-2 text-xs bg-slate-900/50 p-2 rounded border border-slate-800">
                                    <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-[8px] font-bold">AI</div>
                                    <div className="flex-1 text-slate-300">Automated: <span className="text-white">Invoice Processing</span></div>
                                    <div className="text-[9px] text-slate-500">5m ago</div>
                                </div>
                                <div className="flex items-center space-x-2 text-xs bg-slate-900/50 p-2 rounded border border-slate-800 opacity-60">
                                    <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-[8px] font-bold">MK</div>
                                    <div className="flex-1 text-slate-300">Commented on <span className="text-white">Logistics Route</span></div>
                                    <div className="text-[9px] text-slate-500">12m ago</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // 5. Process Automator - Flow Diagram
    if (productId === 'process') {
        return (
             <div className="w-full h-full bg-[#0f172a] rounded-xl p-6 border border-slate-700 flex flex-col shadow-2xl relative overflow-hidden items-center justify-center">
                 <div className="flex items-center space-x-4">
                     <div className="bg-slate-800 p-4 rounded-lg border border-slate-600 flex flex-col items-center w-24">
                         <div className="bg-blue-500/20 p-2 rounded-full mb-2"><Activity className="w-4 h-4 text-blue-400" /></div>
                         <div className="h-1 w-12 bg-slate-600 rounded mb-1"></div>
                         <div className="h-1 w-8 bg-slate-600 rounded"></div>
                     </div>
                     <div className="h-0.5 w-12 bg-slate-600 relative overflow-hidden">
                          <div className="absolute inset-0 bg-indigo-500 w-1/2 animate-[shimmer_1.5s_infinite]"></div>
                     </div>
                     <div className="bg-slate-800 p-4 rounded-lg border border-slate-600 flex flex-col items-center w-24 scale-110 shadow-[0_0_20px_rgba(99,102,241,0.2)] border-indigo-500 relative z-10">
                         <div className="bg-indigo-500/20 p-2 rounded-full mb-2"><Settings className="w-4 h-4 text-indigo-400 animate-spin-slow" /></div>
                         <div className="text-[10px] text-white font-bold mb-1">Processing</div>
                         <div className="h-1 w-8 bg-slate-600 rounded"></div>
                     </div>
                      <div className="h-0.5 w-12 bg-slate-600 relative overflow-hidden">
                           <div className="absolute inset-0 bg-indigo-500 w-1/2 animate-[shimmer_1.5s_infinite_0.75s]"></div>
                      </div>
                     <div className="bg-slate-800 p-4 rounded-lg border border-slate-600 flex flex-col items-center w-24">
                         <div className="bg-green-500/20 p-2 rounded-full mb-2"><CheckCircle2 className="w-4 h-4 text-green-400" /></div>
                         <div className="h-1 w-12 bg-slate-600 rounded mb-1"></div>
                         <div className="h-1 w-8 bg-slate-600 rounded"></div>
                     </div>
                 </div>
                 <div className="mt-8 bg-slate-800/50 px-4 py-2 rounded-full text-xs text-slate-400 border border-slate-700">
                     Workflow: <span className="text-white">Customer Ticket Resolution</span>
                 </div>
             </div>
        )
    }

    // 6. Enterprise Machina - Legacy Bridge
    if (productId === 'machina') {
        return (
             <div className="w-full h-full bg-[#0f172a] rounded-xl border border-slate-700 flex flex-col shadow-2xl relative overflow-hidden">
                 <div className="absolute inset-0 flex">
                     {/* Legacy Side */}
                     <div className="w-1/2 bg-slate-950 flex flex-col items-center justify-center border-r border-slate-800">
                         <div className="text-xs text-slate-500 mb-4 uppercase tracking-widest">Legacy ERP</div>
                         <div className="w-20 h-20 bg-slate-800 rounded-sm border-4 border-slate-700 flex items-center justify-center shadow-inner">
                             <Layers className="w-10 h-10 text-slate-600" />
                         </div>
                     </div>
                     {/* Modern Side */}
                     <div className="w-1/2 bg-indigo-900/10 flex flex-col items-center justify-center relative">
                         <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-indigo-600 rounded-full p-2 border-4 border-slate-900 shadow-lg">
                             <Zap className="w-4 h-4 text-white" />
                         </div>
                         <div className="text-xs text-indigo-300 mb-4 uppercase tracking-widest">Modern API</div>
                         <div className="w-20 h-20 bg-indigo-500/20 rounded-2xl border border-indigo-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                             <Cloud className="w-10 h-10 text-indigo-400" />
                         </div>
                     </div>
                 </div>
                 {/* Connection Lines */}
                 <div className="absolute inset-0 pointer-events-none">
                     <svg className="w-full h-full">
                         <line x1="25%" y1="50%" x2="75%" y2="50%" stroke="#4f46e5" strokeWidth="2" strokeDasharray="5,5" />
                         <circle cx="50%" cy="50%" r="4" fill="#6366f1" className="animate-ping" />
                     </svg>
                 </div>
             </div>
        )
    }

     // 7. Administrator AI - Oversight
     if (productId === 'admin') {
        return (
             <div className="w-full h-full bg-slate-900 rounded-xl p-6 border border-slate-700 flex flex-col shadow-2xl relative overflow-hidden">
                 <div className="flex items-center space-x-4 mb-6">
                     <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center border-2 border-white/10 shadow-lg">
                         <User className="w-6 h-6 text-white" />
                     </div>
                     <div>
                         <div className="text-white font-bold">Administrator</div>
                         <div className="text-xs text-green-400 flex items-center"><Activity className="w-3 h-3 mr-1" /> Online & Monitoring</div>
                     </div>
                 </div>
                 
                 <div className="space-y-3">
                     {[1,2,3].map(i => (
                         <div key={i} className="bg-slate-800 p-3 rounded-lg border border-slate-700 flex items-center justify-between">
                             <div className="flex items-center space-x-3">
                                 <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
                                 <div className="text-xs text-slate-300">Process #{2040 + i}: {i === 1 ? 'Pending Approval' : 'Auto-Approved'}</div>
                             </div>
                             <div className="text-[10px] text-slate-500">Just now</div>
                         </div>
                     ))}
                 </div>

                 <div className="mt-auto bg-slate-800/50 p-4 rounded-lg border border-slate-700 font-mono">
                     <div className="text-[10px] text-slate-400 mb-2 uppercase">Decision Log</div>
                     <div className="text-xs text-indigo-300">> Anomalous spending detected in Sector 7. Flagged for review.</div>
                 </div>
             </div>
        )
    }

    // Default: Abstract Network
    return (
        <div className="w-full h-full bg-slate-900 rounded-xl border border-slate-700 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            <div className="w-32 h-32 relative">
                <div className="absolute inset-0 border-2 border-dashed border-indigo-500/30 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-4 border-2 border-indigo-500/50 rounded-full animate-[spin_8s_linear_infinite_reverse]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <Activity className="w-10 h-10 text-indigo-400 animate-pulse" />
                </div>
                <div className="absolute -top-4 -right-4 bg-slate-800 p-2 rounded-lg border border-slate-700 shadow-xl animate-bounce">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                </div>
            </div>
        </div>
    )
}

// Rich Text Content Component
const ProductRichContent: React.FC<{ productId: string }> = ({ productId }) => {
    // Specific images for each product per request
    const images: Record<string, string> = {
        // AI Space: Connection between tools/network
        aispace: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2668&auto=format&fit=crop", 
        // 0.o1: Data Analysis / Charts
        "0o1": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop", 
        // rOA: Live Dashboard Operations - Updated to a darker, more complex command center vibe
        roa: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2680&auto=format&fit=crop", 
        // Others
        process: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2676&auto=format&fit=crop",
        machina: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop",
        admin: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop",
        integration: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop",
        cloud: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
    };

    const imageUrl = images[productId] || images['aispace'];

    return (
        <div className="mt-24 space-y-24">
            {/* Section 1: Deep Dive */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-3xl font-bold text-white mb-6">Designed for Enterprise Scale</h3>
                    <p className="text-lg text-slate-400 leading-relaxed mb-6">
                        We understand that enterprise environments are complex, messy, and critical. That's why we built this product with <span className="text-gold-400 font-semibold">stability first</span>. 
                        Unlike standard SaaS tools, our architecture allows for deep customization without breaking the core upgrade path.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center text-slate-300">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3"></div>
                            Legacy System Compatibility
                        </li>
                        <li className="flex items-center text-slate-300">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3"></div>
                            On-Premise or Hybrid Cloud Deployment
                        </li>
                        <li className="flex items-center text-slate-300">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3"></div>
                            Role-Based Access Control (RBAC) Level 3
                        </li>
                    </ul>
                </div>
                <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative group h-80 md:h-96">
                     <img src={imageUrl} alt="Interface Demo" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                </div>
            </div>

            {/* Section 2: The Value Proposition */}
            <div className="bg-slate-900/50 rounded-3xl p-12 border border-slate-800 relative overflow-hidden text-center">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px]"></div>
                 <h3 className="text-3xl font-bold text-white mb-6 relative z-10">Stop Patching. Start Orchestrating.</h3>
                 <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-8 relative z-10">
                     Most solutions just add another layer of complexity. We remove it. By unifying your data streams and logic into a single governance layer, you regain control over your digital infrastructure.
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 text-left mt-12">
                     <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
                         <div className="text-indigo-400 font-bold text-xl mb-2">300%</div>
                         <div className="text-sm text-slate-500">Efficiency Gain</div>
                     </div>
                     <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
                         <div className="text-green-400 font-bold text-xl mb-2">0ms</div>
                         <div className="text-sm text-slate-500">Added Latency</div>
                     </div>
                     <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
                         <div className="text-gold-400 font-bold text-xl mb-2">24/7</div>
                         <div className="text-sm text-slate-500">Autonomous Uptime</div>
                     </div>
                 </div>
            </div>
        </div>
    )
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20 animate-fade-in relative">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-indigo-600/5 rounded-bl-[100px] blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="group flex items-center text-slate-400 hover:text-white mb-12 transition-colors px-4 py-2 rounded-lg hover:bg-white/5 w-fit"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Overview
        </button>

        {/* Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
            <div className="animate-slide-up">
                <div className="inline-flex items-center space-x-2 bg-indigo-500/10 text-indigo-400 px-4 py-1.5 rounded-full text-sm font-medium mb-8 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                    {product.icon}
                    <span className="uppercase tracking-wide text-xs">Product Deep Dive</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
                    {product.title}
                </h1>
                
                <div className="pl-6 border-l-4 border-indigo-500 mb-8">
                     <p className="text-xl md:text-2xl text-slate-300 leading-relaxed italic">
                        "{product.shortDescription}"
                    </p>
                </div>
                
                <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg">
                    {product.fullDescription}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" variant="glow" className="shadow-xl shadow-indigo-500/20">
                        Request Demo
                    </Button>
                    <Button size="lg" variant="secondary">
                        Contact Sales
                    </Button>
                </div>
            </div>
            
            {/* Visual Representation / Interactive Demo */}
            <div className="relative group perspective-[1000px]">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-[#0b1221] rounded-2xl p-2 h-[400px] md:h-[500px] transform transition-transform duration-500 hover:rotate-y-2 hover:scale-[1.01] shadow-2xl ring-1 ring-white/10">
                    <DemoVisual productId={product.id} />
                    
                    {/* Floating Caption for Demos that aren't pure images */}
                    {product.id !== 'aispace' && product.id !== '0o1' && (
                        <div className="absolute -bottom-6 -right-6 bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-xl flex items-center space-x-3 max-w-[200px] z-20">
                            <div className="bg-green-500/10 p-2 rounded-full">
                                <Activity className="w-5 h-5 text-green-500" />
                            </div>
                            <div>
                                <div className="text-[10px] text-slate-500 uppercase font-bold">Live Status</div>
                                <div className="text-sm font-medium text-white">System Active</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

        {/* Rich Content Expansion */}
        <ProductRichContent productId={product.id} />

        {/* Modules Breakdown */}
        <div className="mb-24 mt-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">Core Capabilities</h2>
                <p className="text-slate-400">Everything you need to orchestrate this aspect of your business.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {product.modules.map((module, idx) => (
                    <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-indigo-500/50 hover:bg-slate-900 transition-all duration-300 group hover:-translate-y-1">
                        <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white text-indigo-400 transition-all shadow-lg">
                            <Layers className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">{module.name}</h3>
                        <p className="text-slate-400 leading-relaxed text-sm">{module.description}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Features & Benefits Split */}
        <div className="relative overflow-hidden bg-slate-900 rounded-[2.5rem] p-8 md:p-16 border border-slate-800">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                        <span className="bg-yellow-500/10 p-2 rounded-lg mr-4">
                            <Zap className="w-6 h-6 text-yellow-500" /> 
                        </span>
                        Why Choose {product.title}?
                    </h3>
                    <ul className="space-y-6">
                        {product.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start group">
                                <div className="mt-1 mr-4 bg-green-500/10 p-1 rounded-full group-hover:bg-green-500 group-hover:text-white transition-colors">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 group-hover:text-white" />
                                </div>
                                <span className="text-slate-300 text-lg group-hover:text-white transition-colors">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="border-t md:border-t-0 md:border-l border-slate-800 pt-8 md:pt-0 md:pl-16">
                     <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                        <span className="bg-blue-500/10 p-2 rounded-lg mr-4">
                            <Cpu className="w-6 h-6 text-blue-500" />
                        </span>
                        Technical Specifications
                    </h3>
                    <ul className="space-y-6">
                        {product.features.map((feature, i) => (
                            <li key={i} className="flex items-center">
                                <div className="w-2 h-2 rounded-full bg-blue-500 mr-4 shadow-[0_0_10px_#3b82f6]"></div>
                                <span className="text-slate-300 font-mono text-sm tracking-wide">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
            <p className="text-slate-500 mb-6">Ready to transform your workflow?</p>
            <Button size="lg" variant="glow" onClick={() => {}}>
                Contact Sales
            </Button>
        </div>

      </div>
    </div>
  );
};