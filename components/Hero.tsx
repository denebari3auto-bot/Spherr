import React from 'react';
import { ArrowRight, Activity, Zap, BarChart3, Globe } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden bg-slate-950">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-slate-900/50 backdrop-blur-sm rounded-full px-4 py-1.5 border border-slate-800 hover:border-indigo-500/50 transition-colors cursor-pointer">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-slate-300">Spherr Enterprise 2.0 is Live</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
              Orchestrate your <br/>
              <span className="gradient-text">Business Intelligence</span>
            </h1>
            
            <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
              The market leader in AI-powered business automation for SMEs. 
              Build custom AI agents, streamline workflows, and visualize your entire enterprise in one unified ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" variant="glow">
                Start Building <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="secondary" size="lg">
                View Documentation
              </Button>
            </div>
          </div>

          {/* Dashboard Visual */}
          <div className="relative perspective-[2000px] group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            
            <div className="relative bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden transform transition-transform duration-500 group-hover:rotate-x-1 group-hover:scale-[1.01]">
              {/* Fake Browser Bar */}
              <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                </div>
                <div className="bg-slate-950 rounded text-xs text-slate-500 px-3 py-1 font-mono">dashboard.spherr.ai</div>
                <div className="w-4"></div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 grid grid-cols-12 gap-4 h-[420px]">
                
                {/* Sidebar */}
                <div className="col-span-3 space-y-2 border-r border-slate-800 pr-4">
                   <div className="h-8 bg-indigo-600/20 border border-indigo-500/30 rounded-lg w-full flex items-center px-2 space-x-2">
                      <div className="w-4 h-4 rounded bg-indigo-500"></div>
                      <div className="w-16 h-2 bg-slate-700 rounded"></div>
                   </div>
                   {[1,2,3,4].map(i => (
                      <div key={i} className="h-8 hover:bg-slate-800/50 rounded-lg w-full flex items-center px-2 space-x-2 transition-colors cursor-pointer">
                        <div className="w-4 h-4 rounded bg-slate-700"></div>
                        <div className="w-12 h-2 bg-slate-800 rounded"></div>
                      </div>
                   ))}
                   
                   <div className="mt-8 pt-4 border-t border-slate-800">
                      <div className="bg-slate-900 rounded-xl p-3 border border-slate-800 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-slide-up"></div>
                        <div className="text-xs text-slate-400 mb-1">System Status</div>
                        <div className="text-green-400 text-xs font-bold flex items-center">
                           <Activity className="w-3 h-3 mr-1" /> Operational
                        </div>
                      </div>
                   </div>
                </div>

                {/* Main Area */}
                <div className="col-span-9 space-y-4">
                  {/* Top Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 relative group overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="flex justify-between items-start mb-2">
                        <p className="text-xs text-slate-500">Active Agents</p>
                        <Zap className="w-4 h-4 text-indigo-400" />
                      </div>
                      <div className="text-2xl font-bold text-white flex items-end space-x-2">
                        <span>24</span>
                        <span className="text-xs text-green-500 mb-1">+3 today</span>
                      </div>
                    </div>
                    <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                      <div className="flex justify-between items-start mb-2">
                        <p className="text-xs text-slate-500">Processed Tasks</p>
                        <Activity className="w-4 h-4 text-purple-400" />
                      </div>
                      <div className="text-2xl font-bold text-white">14.2k</div>
                    </div>
                    <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                      <div className="flex justify-between items-start mb-2">
                        <p className="text-xs text-slate-500">Efficiency</p>
                        <BarChart3 className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="text-2xl font-bold text-white">94%</div>
                    </div>
                  </div>

                  {/* Main Chart Area */}
                  <div className="bg-slate-900 rounded-xl border border-slate-800 p-4 h-48 relative overflow-hidden flex flex-col justify-end">
                     <div className="absolute top-4 left-4 flex space-x-2">
                        <div className="px-2 py-1 rounded bg-slate-800 text-[10px] text-slate-400">Traffic</div>
                        <div className="px-2 py-1 rounded bg-slate-800 text-[10px] text-slate-400">Load</div>
                     </div>
                     
                     <div className="flex items-end justify-between space-x-1 h-32 px-2">
                        {[35, 45, 30, 60, 75, 50, 65, 80, 70, 90, 85, 95, 60, 70, 80, 100].map((h, i) => (
                           <div 
                              key={i} 
                              className="w-full bg-indigo-500/20 hover:bg-indigo-500 rounded-t transition-all duration-300"
                              style={{ 
                                height: `${h}%`,
                                animation: `pulse 2s infinite ${i * 0.1}s` 
                              }}
                           ></div>
                        ))}
                     </div>
                     {/* Overlay Line */}
                     <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                           <path d="M0 100 L0 60 L10 50 L20 70 L30 40 L40 50 L50 20 L60 40 L70 30 L80 15 L90 25 L100 5 V100 H0 Z" fill="url(#gradient)" opacity="0.2" />
                           <path d="M0 60 L10 50 L20 70 L30 40 L40 50 L50 20 L60 40 L70 30 L80 15 L90 25 L100 5" fill="none" stroke="#6366f1" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
                           <defs>
                              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                 <stop offset="0%" stopColor="#6366f1" />
                                 <stop offset="100%" stopColor="transparent" />
                              </linearGradient>
                           </defs>
                        </svg>
                     </div>
                  </div>

                  {/* Active Process List */}
                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-slate-900 rounded-xl border border-slate-800 p-3 flex items-center space-x-3">
                        <div className="bg-green-500/20 p-2 rounded-lg">
                           <Globe className="w-4 h-4 text-green-500 animate-spin-slow" />
                        </div>
                        <div>
                           <div className="text-xs text-white font-medium">Data Sync</div>
                           <div className="text-[10px] text-slate-500">Running • 2ms latency</div>
                        </div>
                     </div>
                     <div className="bg-slate-900 rounded-xl border border-slate-800 p-3 flex items-center space-x-3">
                        <div className="bg-blue-500/20 p-2 rounded-lg">
                           <Zap className="w-4 h-4 text-blue-500" />
                        </div>
                        <div>
                           <div className="text-xs text-white font-medium">AI Agent #8</div>
                           <div className="text-[10px] text-slate-500">Thinking...</div>
                        </div>
                     </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
