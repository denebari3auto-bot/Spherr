import React, { useEffect } from 'react';
import { Network, Database, MessageSquare, Briefcase, ShoppingCart, Code2, Server, Globe, ArrowRight, Puzzle } from 'lucide-react';
import { Button } from './Button';

const categories = [
    { title: "CRM & Sales", icon: <Database />, tools: ["Salesforce", "HubSpot", "Pipedrive", "Zoho", "Dynamics 365", "Copper", "Close.io", "Zendesk Sell"] },
    { title: "Communication", icon: <MessageSquare />, tools: ["Slack", "Microsoft Teams", "Discord", "Gmail", "Outlook", "Zoom", "Intercom", "Front"] },
    { title: "ERP & Finance", icon: <Briefcase />, tools: ["NetSuite", "SAP", "Oracle", "QuickBooks", "Xero", "Sage", "Workday", "Coupa"] },
    { title: "E-Commerce", icon: <ShoppingCart />, tools: ["Shopify", "Magento", "WooCommerce", "BigCommerce", "Stripe", "PayPal", "Square", "Amazon Seller"] },
    { title: "Development", icon: <Code2 />, tools: ["GitHub", "GitLab", "Jira", "Linear", "Bitbucket", "Vercel", "AWS", "Google Cloud"] },
    { title: "Infrastructure", icon: <Server />, tools: ["Kubernetes", "Docker", "Datadog", "New Relic", "Splunk", "Azure", "DigitalOcean", "Cloudflare"] },
];

export const IntegrationsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 pt-24 pb-20 animate-fade-in relative overflow-hidden">
             {/* Background Decoration */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                     <div className="inline-flex items-center space-x-2 bg-indigo-500/10 rounded-full px-4 py-1.5 mb-6 border border-indigo-500/20">
                        <Network className="w-4 h-4 text-indigo-400" />
                        <span className="text-xs font-medium text-indigo-300 uppercase tracking-wide">Universal Connectivity</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Endless <span className="gradient-text">Possibilities</span>
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                        Spherr isn't limited by pre-built connectors. Our flexible API architecture allows you to connect any tool, system, or operation within your enterprise.
                    </p>
                </div>

                {/* The "Any Department" Concept */}
                <div className="mb-24 bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-500/5 to-purple-500/5 pointer-events-none"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Flexible & Adaptive Model</h2>
                            <p className="text-slate-400 mb-6 text-lg">
                                Whether it's a legacy mainframe in the basement or a cutting-edge SaaS tool, Spherr acts as the universal translator.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center text-slate-300">
                                    <div className="bg-green-500/20 p-1.5 rounded-full mr-3"><Puzzle className="w-4 h-4 text-green-500"/></div>
                                    <span>Custom API Connectors built in minutes</span>
                                </li>
                                <li className="flex items-center text-slate-300">
                                    <div className="bg-blue-500/20 p-1.5 rounded-full mr-3"><Globe className="w-4 h-4 text-blue-500"/></div>
                                    <span>Webhooks & Event Listeners for real-time action</span>
                                </li>
                                <li className="flex items-center text-slate-300">
                                    <div className="bg-purple-500/20 p-1.5 rounded-full mr-3"><Server className="w-4 h-4 text-purple-500"/></div>
                                    <span>On-Premise Gateway for secure internal access</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-[300px] flex items-center justify-center">
                             {/* Central Hub Animation */}
                             <div className="absolute w-32 h-32 bg-indigo-600 rounded-full flex items-center justify-center z-10 shadow-[0_0_50px_rgba(79,70,229,0.4)]">
                                <span className="text-white font-bold text-xl">Spherr</span>
                             </div>
                             {/* Orbiting Icons */}
                             {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                                 <div 
                                    key={i}
                                    className="absolute w-12 h-12 bg-slate-800 border border-slate-600 rounded-lg flex items-center justify-center animate-spin-slow"
                                    style={{ 
                                        transform: `rotate(${deg}deg) translate(140px) rotate(-${deg}deg)`,
                                        animationDirection: i % 2 === 0 ? 'normal' : 'reverse',
                                        animationDuration: '20s'
                                    }}
                                 >
                                    <div className="w-3 h-3 bg-slate-500 rounded-full"></div>
                                 </div>
                             ))}
                             <div className="absolute inset-0 border border-indigo-500/30 rounded-full animate-pulse opacity-50 w-[280px] h-[280px] m-auto"></div>
                        </div>
                    </div>
                </div>

                {/* Integration Grid */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-white mb-10 text-center">Supported Ecosystems</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((cat, idx) => (
                            <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:bg-slate-900 transition-colors group">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="p-3 bg-slate-800 rounded-lg text-indigo-400 group-hover:text-white group-hover:bg-indigo-600 transition-colors">
                                        {cat.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {cat.tools.map((tool, tIdx) => (
                                        <span key={tIdx} className="text-xs bg-slate-950 border border-slate-800 px-2 py-1 rounded text-slate-400">
                                            {tool}
                                        </span>
                                    ))}
                                    <span className="text-xs bg-indigo-500/10 border border-indigo-500/20 px-2 py-1 rounded text-indigo-400 font-medium">
                                        + Custom
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center border-t border-slate-800 pt-16">
                    <h2 className="text-3xl font-bold text-white mb-6">Don't see your tool? We'll build it.</h2>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                        Our dedicated integration team builds custom connectors for enterprise clients. 
                        If it has an API, a database, or an interface, we can automate it.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <Button variant="glow" size="lg">Request Integration <ArrowRight className="ml-2 w-5 h-5"/></Button>
                    </div>
                </div>

            </div>
        </div>
    );
};