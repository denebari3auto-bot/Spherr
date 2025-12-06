import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal, Shield, Globe, Search, MoreHorizontal, Bell, User, Layout, Activity } from 'lucide-react';
import { Button } from './Button';

interface HeroProps {
    onRequestDemo?: () => void;
    onContactSales?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestDemo, onContactSales }) => {
  const [visibleWords, setVisibleWords] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleWords(prev => (prev < 4 ? prev + 1 : prev));
    }, 800); // Reveal next word every 800ms
    return () => clearInterval(interval);
  }, []);

  const taglineWords = [
    { text: "Redefined", color: "text-indigo-400", suffix: ", " },
    { text: "Simplified", color: "text-blue-400", suffix: ", " },
    { text: "Optimised", color: "text-green-400", suffix: " " },
    { text: "Unleashed", color: "text-gold-400", prefix: "& ", suffix: "" },
  ];

  return (
    <div className="relative pt-28 md:pt-52 pb-16 md:pb-24 overflow-hidden bg-[#050b1a] min-h-[90vh] flex flex-col justify-center">
      {/* Enterprise System Background - No Blur */}
      <div className="absolute inset-0 z-0">
          <img 
            src="https://i.imgur.com/k5XnwFl.jpeg" 
            alt="Enterprise System Background" 
            className="w-full h-full object-cover opacity-50 saturate-150"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050b1a] via-[#050b1a]/70 to-[#050b1a]"></div>
      </div>

      {/* Bright & Calming Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-indigo-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none mix-blend-screen z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-gold-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none mix-blend-screen z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in text-center lg:text-left">
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] drop-shadow-2xl">
              Automation <br/>
              <span className="block mt-2 h-auto">
                {taglineWords.map((word, index) => (
                  <span 
                    key={index} 
                    className={`transition-all duration-700 inline-block ${visibleWords > index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  >
                    {word.prefix && <span className="text-white mr-1 md:mr-2">{word.prefix}</span>}
                    <span className={word.color}>{word.text}</span>
                    <span className="text-white mr-1 md:mr-2">{word.suffix}</span>
                  </span>
                ))}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
              The market leader in AI-powered business automation. 
              Build custom AI agents, streamline workflows, and visualize your entire enterprise in one unified ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gold-400 text-slate-950 hover:bg-gold-500 border-none font-bold shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all hover:scale-105 w-full sm:w-auto"
                onClick={onRequestDemo}
              >
                Request Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white/5 backdrop-blur-md text-white border-white/10 hover:bg-white/10 font-semibold w-full sm:w-auto"
                onClick={onContactSales}
              >
                Contact Sales
              </Button>
            </div>
            
            {/* Tech Stack Hints */}
            <div className="pt-6 md:pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-8 text-slate-400 text-sm font-semibold">
                <span className="flex items-center hover:text-indigo-400 transition-colors cursor-default"><Terminal className="w-4 h-4 mr-2" /> API First</span>
                <span className="flex items-center hover:text-green-400 transition-colors cursor-default"><Shield className="w-4 h-4 mr-2" /> SOC2 Secure</span>
                <span className="flex items-center hover:text-blue-400 transition-colors cursor-default"><Globe className="w-4 h-4 mr-2" /> Global Scale</span>
            </div>
          </div>

          {/* High-Fidelity Realistic Interface Demo */}
          <div className="relative group hidden lg:block h-[650px] perspective-[2000px]">
             {/* Floating Container */}
             <div className="relative w-full h-full transform transition-all duration-1000">
                
                {/* Glow Effect behind dashboard */}
                <div className="absolute -inset-10 bg-gradient-to-tr from-indigo-500/20 via-purple-500/10 to-gold-500/20 rounded-[3rem] blur-3xl opacity-60 animate-pulse-slow"></div>
                
                {/* Main Dashboard Window */}
                <div className="relative bg-[#0b1221]/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden h-[90%] w-full flex flex-col mx-auto ring-1 ring-white/5">
                    
                    {/* Window Header */}
                    <div className="bg-[#0f172a] border-b border-white/5 h-12 px-4 flex items-center justify-between shrink-0">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black/20"></div>
                            <div className="w-3 h-3 rounded-full bg-[#febc2e] border border-black/20"></div>
                            <div className="w-3 h-3 rounded-full bg-[#28c840] border border-black/20"></div>
                        </div>
                        <div className="bg-slate-900 rounded-md text-[11px] text-slate-400 px-4 py-1.5 font-mono flex items-center border border-white/5 shadow-inner">
                           <Shield className="w-3 h-3 mr-2 text-gold-400" />
                           admin.spherr.ai/dashboard
                        </div>
                        <div className="flex space-x-4 items-center">
                            <div className="flex items-center text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                                Live
                            </div>
                            <Bell className="w-4 h-4 text-slate-400" />
                            <div className="w-7 h-7 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-[10px] text-white font-bold shadow-lg">S</div>
                        </div>
                    </div>

                    {/* App Content */}
                    <div className="flex flex-1 overflow-hidden">
                        
                        {/* Sidebar */}
                        <div className="w-20 bg-[#0f172a]/50 border-r border-white/5 flex flex-col items-center py-6 space-y-8">
                            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20"><Layout className="w-5 h-5 text-white" /></div>
                            <div className="w-10 h-10 rounded-xl hover:bg-white/5 flex items-center justify-center text-slate-500 transition-colors"><Globe className="w-5 h-5" /></div>
                            <div className="w-10 h-10 rounded-xl hover:bg-white/5 flex items-center justify-center text-slate-500 transition-colors"><Activity className="w-5 h-5" /></div>
                            <div className="w-10 h-10 rounded-xl hover:bg-white/5 flex items-center justify-center text-slate-500 transition-colors"><Search className="w-5 h-5" /></div>
                        </div>

                        {/* Main View */}
                        <div className="flex-1 bg-transparent p-8 overflow-hidden flex flex-col font-sans">
                            {/* Dashboard Header */}
                            <div className="flex justify-between items-end mb-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-1">Executive Overview</h2>
                                    <p className="text-xs text-slate-400 font-medium">Real-time enterprise metrics • <span className="text-indigo-400">Updated 2s ago</span></p>
                                </div>
                                <div className="flex space-x-3">
                                    <button className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs rounded-lg font-medium transition-colors">Customize</button>
                                    <button className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs rounded-lg font-medium shadow-lg shadow-indigo-500/25 transition-all">Generate Report</button>
                                </div>
                            </div>

                            {/* Stats Cards */}
                            <div className="grid grid-cols-3 gap-6 mb-8">
                                <div className="bg-[#1e293b]/40 backdrop-blur-sm border border-white/5 p-5 rounded-2xl relative overflow-hidden group hover:bg-[#1e293b]/60 transition-colors">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Activity className="w-12 h-12 text-white" /></div>
                                    <div className="text-xs text-slate-400 font-medium mb-2 uppercase tracking-wide">Total Revenue</div>
                                    <div className="text-2xl font-bold text-white mb-2">$24,500.20</div>
                                    <div className="inline-flex items-center text-[10px] text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">+12.5% vs last week</div>
                                </div>
                                <div className="bg-[#1e293b]/40 backdrop-blur-sm border border-white/5 p-5 rounded-2xl relative overflow-hidden group hover:bg-[#1e293b]/60 transition-colors">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><User className="w-12 h-12 text-indigo-400" /></div>
                                    <div className="text-xs text-slate-400 font-medium mb-2 uppercase tracking-wide">Active Agents</div>
                                    <div className="text-2xl font-bold text-white mb-2">142</div>
                                    <div className="inline-flex items-center text-[10px] text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded-full">All systems operational</div>
                                </div>
                                <div className="bg-[#1e293b]/40 backdrop-blur-sm border border-white/5 p-5 rounded-2xl relative overflow-hidden group hover:bg-[#1e293b]/60 transition-colors">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Bell className="w-12 h-12 text-gold-400" /></div>
                                    <div className="text-xs text-slate-400 font-medium mb-2 uppercase tracking-wide">System Health</div>
                                    <div className="text-2xl font-bold text-white mb-2">99.99%</div>
                                    <div className="inline-flex items-center text-[10px] text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded-full">No incidents reported</div>
                                </div>
                            </div>

                            {/* Main Chart Section */}
                            <div className="flex-1 bg-[#1e293b]/30 border border-white/5 rounded-2xl p-6 relative overflow-hidden flex flex-col shadow-inner">
                                <div className="flex justify-between mb-6">
                                    <div className="flex items-center space-x-2">
                                        <h3 className="text-sm font-semibold text-white">Traffic Analysis</h3>
                                        <span className="text-[10px] text-slate-500 border border-white/5 px-2 py-0.5 rounded">Live View</span>
                                    </div>
                                    <MoreHorizontal className="w-4 h-4 text-slate-500 cursor-pointer hover:text-white" />
                                </div>
                                
                                <div className="flex-1 flex items-end space-x-3 px-2 pb-2">
                                    {[30, 45, 35, 60, 50, 75, 60, 80, 70, 90, 85, 95, 75, 85, 65, 55, 70, 80].map((h, i) => (
                                        <div key={i} className="flex-1 bg-gradient-to-t from-indigo-600/20 to-indigo-500/40 rounded-t-sm hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300 relative group" style={{ height: `${h}%` }}>
                                             <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 border border-white/10 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 shadow-xl">
                                                 Session: {h * 12}
                                             </div>
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Realistic Graph Line Overlay */}
                                <div className="absolute bottom-8 left-8 right-8 top-20 pointer-events-none">
                                     <svg className="w-full h-full" preserveAspectRatio="none">
                                         <path 
                                            d="M0,80 C20,70 40,90 60,60 C80,30 100,50 120,20 C140,10 160,40 180,30 C200,20 220,10 240,50 C260,80 280,60 300,40"
                                            fill="none"
                                            stroke="#fbbf24"
                                            strokeWidth="3"
                                            className="drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]"
                                            strokeLinecap="round"
                                         />
                                     </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Floating Elements for Depth */}
                <div className="absolute top-24 -right-8 bg-[#1e293b] border border-white/10 p-4 rounded-xl shadow-2xl flex items-center space-x-3 animate-[pulse_6s_infinite] max-w-xs z-20">
                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
                    <div>
                        <div className="text-xs text-white font-bold">New Connection</div>
                        <div className="text-xs text-slate-400">Salesforce CRM connected successfully</div>
                    </div>
                </div>

                 <div className="absolute bottom-24 -left-8 bg-[#1e293b] border border-white/10 p-4 rounded-xl shadow-2xl flex items-center space-x-3 max-w-xs z-20">
                    <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white border-2 border-[#1e293b] ring-2 ring-indigo-500/50"><User className="w-5 h-5"/></div>
                    <div>
                        <div className="text-xs text-white font-bold">Agent Sarah</div>
                        <div className="text-xs text-indigo-300">Processing loan application #8821...</div>
                    </div>
                </div>

             </div>
          </div>
        </div>
      </div>
    </div>
  );
};