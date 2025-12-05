import React from 'react';
import { Database, Server, Smartphone, Globe, Cpu, Zap } from 'lucide-react';
import { Button } from './Button';

export const Integrations: React.FC = () => {
  return (
    <section id="integrations" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Left: Text & CTA */}
            <div className="flex flex-col justify-center">
                <h2 className="text-indigo-400 font-semibold tracking-wide uppercase text-sm mb-2">Integration Ecosystem</h2>
                <h3 className="text-4xl font-bold text-white mb-6">
                    Connects with <span className="gradient-text">Everything</span>
                </h3>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                    Our platform is designed to introduce new and existing systems seamlessly. 
                    From legacy ERPs to modern cloud applications, Spherr acts as the intelligent glue 
                    that binds your operations together.
                </p>
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 mb-8">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                        <Zap className="h-5 w-5 text-yellow-500 mr-2" /> Scalable Operations
                    </h4>
                    <p className="text-sm text-slate-400">
                        Watch your capacity grow without increasing headcount. Our integration layer handles millions of requests daily.
                    </p>
                </div>
                <div>
                    <Button variant="glow" size="lg" className="w-full sm:w-auto">
                        Explore Integration Library
                    </Button>
                </div>
            </div>

            {/* Right: Visual Demo of Automation */}
            <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-xl"></div>
                <div className="relative bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
                    <div className="bg-slate-900 border-b border-slate-800 p-4 flex justify-between items-center">
                        <span className="text-xs font-mono text-slate-500">pipeline_v2.json</span>
                        <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                            <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                        </div>
                    </div>
                    
                    {/* Flow Diagram Visual */}
                    <div className="p-8 relative h-[400px] flex flex-col justify-between items-center">
                        {/* Top Node */}
                        <div className="glass-panel p-4 rounded-lg flex items-center space-x-3 w-48 animate-pulse">
                            <Database className="h-5 w-5 text-blue-400" />
                            <div>
                                <div className="text-xs text-slate-400">Source</div>
                                <div className="text-sm text-white font-medium">ERP Data</div>
                            </div>
                        </div>

                        {/* Connection Line */}
                        <div className="h-12 w-0.5 bg-slate-700 relative">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-3 bg-indigo-500 rounded-full animate-[slideUp_1s_infinite]"></div>
                        </div>

                        {/* Middle Node */}
                        <div className="glass-panel p-4 rounded-lg flex items-center space-x-3 w-56 border-indigo-500/50 border">
                            <Cpu className="h-5 w-5 text-indigo-400" />
                            <div>
                                <div className="text-xs text-slate-400">Processing</div>
                                <div className="text-sm text-white font-medium">Spherr AI Engine</div>
                            </div>
                        </div>

                        {/* Connection Line Split */}
                        <div className="h-12 w-full flex justify-center relative">
                             <div className="w-0.5 h-full bg-slate-700 mx-auto"></div>
                             <div className="absolute w-32 h-0.5 bg-slate-700 bottom-0"></div> {/* Horizontal split */}
                             <div className="absolute left-1/2 -translate-x-1/2 w-1.5 h-3 bg-indigo-500 rounded-full animate-[slideUp_1s_infinite]"></div>
                        </div>

                        {/* Bottom Nodes */}
                        <div className="flex justify-between w-full px-4">
                            <div className="glass-panel p-3 rounded-lg w-32 flex flex-col items-center text-center">
                                <Server className="h-4 w-4 text-green-400 mb-2" />
                                <span className="text-xs text-white">CRM Update</span>
                            </div>
                            <div className="glass-panel p-3 rounded-lg w-32 flex flex-col items-center text-center">
                                <Smartphone className="h-4 w-4 text-pink-400 mb-2" />
                                <span className="text-xs text-white">Notify App</span>
                            </div>
                             <div className="glass-panel p-3 rounded-lg w-32 flex flex-col items-center text-center">
                                <Globe className="h-4 w-4 text-cyan-400 mb-2" />
                                <span className="text-xs text-white">Webhook</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Tools Grid */}
        <div className="border-t border-slate-800 pt-16">
            <p className="text-center text-slate-500 mb-8 text-sm">Compatible with industry standards</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Placeholders for logos, using text/icons for prototype */}
               <div className="flex items-center space-x-2 text-xl font-bold text-white"><span className="text-blue-500">Salesforce</span></div>
               <div className="flex items-center space-x-2 text-xl font-bold text-white"><span className="text-orange-500">HubSpot</span></div>
               <div className="flex items-center space-x-2 text-xl font-bold text-white"><span className="text-green-500">Slack</span></div>
               <div className="flex items-center space-x-2 text-xl font-bold text-white"><span className="text-purple-500">Teams</span></div>
               <div className="flex items-center space-x-2 text-xl font-bold text-white"><span className="text-sky-500">Jira</span></div>
            </div>
        </div>

      </div>
    </section>
  );
};