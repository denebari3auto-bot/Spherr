import React, { useEffect } from 'react';
import { Target, Lightbulb, Compass, TrendingUp, ShieldCheck, Users, ArrowRight, BarChart3, Database, Globe } from 'lucide-react';
import { Button } from './Button';

export const SolutionsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20 animate-fade-in relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Hero */}
            <div className="text-center max-w-4xl mx-auto mb-24">
                <div className="inline-flex items-center space-x-2 bg-slate-900/50 rounded-full px-4 py-1.5 mb-6 border border-slate-700">
                    <Compass className="w-4 h-4 text-indigo-400" />
                    <span className="text-xs font-medium text-indigo-300 uppercase tracking-wide">Our Purpose</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                    Architecting the <span className="gradient-text">Future of Work</span>
                </h1>
                <p className="text-xl text-slate-400 leading-relaxed">
                    Spherr isn't just software; it's a fundamental shift in how businesses operate. 
                    Moving from static, disconnected silos to a living, breathing, autonomous organism.
                </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                <div className="bg-slate-900/50 border border-slate-800 p-10 rounded-3xl relative overflow-hidden group hover:border-indigo-500/30 transition-all shadow-xl">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Target className="w-32 h-32 text-indigo-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        To democratize enterprise-grade automation. We believe that powerful, intelligent orchestration shouldn't be the privilege of the Fortune 500 alone. We exist to give SMEs the same technological leverage as global giants.
                    </p>
                </div>

                <div className="bg-slate-900/50 border border-slate-800 p-10 rounded-3xl relative overflow-hidden group hover:border-purple-500/30 transition-all shadow-xl">
                     <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Lightbulb className="w-32 h-32 text-purple-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        A world where human creativity is unburdened by repetitive process. We envision the "Autonomous Enterprise," where AI agents handle the logistics of business, freeing humans to focus on strategy, innovation, and connection.
                    </p>
                </div>
            </div>

            {/* Rich Content Strategy Sections */}
            <div className="space-y-32 mb-32">
                 
                 {/* Section 1 */}
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                     <div>
                         <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 mb-6">
                            <Database className="w-6 h-6" />
                         </div>
                         <h2 className="text-3xl font-bold text-white mb-6">The Data Fabric</h2>
                         <p className="text-lg text-slate-400 leading-relaxed mb-6">
                             Before automation comes unification. Our strategy begins with the Data Fabric—a virtualized layer that sits on top of your existing databases, APIs, and SaaS tools.
                         </p>
                         <p className="text-lg text-slate-400 leading-relaxed">
                             This allows Spherr to "see" your entire business as a single entity, rather than 50 disconnected apps. It enables cross-platform logic that was previously impossible.
                         </p>
                     </div>
                     <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl h-[400px]">
                         <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2668&auto=format&fit=crop" alt="Data Center" className="w-full h-full object-cover opacity-60" />
                         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
                     </div>
                 </div>

                 {/* Section 2 */}
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
                     <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl h-[400px]">
                         <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" alt="Analytics" className="w-full h-full object-cover opacity-60" />
                         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
                     </div>
                     <div className="order-1 lg:order-2">
                         <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mb-6">
                            <BarChart3 className="w-6 h-6" />
                         </div>
                         <h2 className="text-3xl font-bold text-white mb-6">Intelligent Orchestration</h2>
                         <p className="text-lg text-slate-400 leading-relaxed mb-6">
                             Once data is unified, our "brain" takes over. Using advanced Large Language Models (LLMs), Spherr doesn't just execute scripts; it understands intent.
                         </p>
                         <p className="text-lg text-slate-400 leading-relaxed">
                             If a supplier emails about a delay, our system reads the email, updates the ERP, notifies the project manager, and adjusts the delivery timeline automatically.
                         </p>
                     </div>
                 </div>

            </div>


            {/* Why Partner With Us */}
            <div className="bg-slate-900 rounded-3xl p-8 md:p-16 border border-slate-800">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Partner With Spherr?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="space-y-4">
                        <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center">
                            <TrendingUp className="w-6 h-6 text-green-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Unmatched ROI</h3>
                        <p className="text-slate-400 text-sm">Our clients typically see a 300% ROI within the first 6 months by eliminating manual labor costs and error reduction.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center">
                            <ShieldCheck className="w-6 h-6 text-blue-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Enterprise Security</h3>
                        <p className="text-slate-400 text-sm">SOC2 Type II compliant. Your data is encrypted at rest and in transit. We prioritize security so you can prioritize growth.</p>
                    </div>
                     <div className="space-y-4">
                        <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center">
                            <Users className="w-6 h-6 text-purple-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Dedicated Success Team</h3>
                        <p className="text-slate-400 text-sm">You aren't just buying software; you're gaining a technical partner. Our engineers work alongside your team to ensure success.</p>
                    </div>
                </div>

                <div className="mt-16 text-center border-t border-slate-800 pt-12">
                    <h3 className="text-2xl font-bold text-white mb-6">Ready to scale your vision?</h3>
                    <div className="flex justify-center space-x-4">
                        <Button size="lg" variant="glow">Contact Sales <ArrowRight className="ml-2 w-5 h-5" /></Button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
};