import React, { useState } from 'react';
import { Calendar, MessageSquare, ArrowRight, Loader2, Check } from 'lucide-react';
import { products } from '../data/products';
import { ViewState } from '../types';
import { supabase } from '../lib/supabase';

interface FooterProps {
  onProductSelect: (id: string) => void;
  onLegalSelect: (doc: 'privacy' | 'terms' | 'cookie' | 'security' | 'compliance') => void;
  onNavigate: (view: ViewState) => void;
  onRequestDemo: () => void;
  onContactSales: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
    onProductSelect, 
    onLegalSelect, 
    onNavigate, 
    onRequestDemo,
    onContactSales
}) => {
  const [email, setEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async () => {
      if (!email || !email.includes('@')) return;
      setSubscribing(true);
      try {
          // Insert into 'subscribers' table in Supabase
          const { error } = await supabase.from('subscribers').insert([{ email }]);
          if (error) throw error;
          setSubscribed(true);
          setEmail('');
      } catch (err) {
          console.error("Subscription failed:", err);
          // Optional: Handle error UI
      } finally {
          setSubscribing(false);
      }
  };

  return (
    <footer className="bg-[#020617] pt-10 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top CTA Card */}
        <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 rounded-[2rem] p-8 md:p-16 text-center border border-white/5 shadow-2xl mb-16 overflow-hidden">
             {/* Glow effect at top */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-gold-400 blur-[60px] opacity-20"></div>
             
             <div className="relative z-10 flex flex-col items-center">
                 <div className="inline-flex items-center space-x-2 bg-slate-800/80 backdrop-blur rounded-full px-4 py-1.5 border border-gold-500/30 mb-8">
                     <span className="text-gold-400 font-medium text-xs uppercase tracking-wide">✨ Start Your Journey</span>
                 </div>
                 
                 <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to transform your enterprise with <span className="text-gold-400">AI?</span>
                 </h2>
                 
                 <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                    Join hundreds of leading enterprises that have accelerated their digital transformation with Spherr. Custom pricing tailored to your needs.
                 </p>
                 
                 <div className="flex flex-col sm:flex-row gap-4 mb-10">
                     <button 
                        onClick={onRequestDemo}
                        className="flex items-center justify-center px-8 py-4 rounded-xl bg-gold-400 text-slate-950 font-bold text-lg hover:bg-gold-500 transition-colors shadow-lg shadow-gold-500/20"
                     >
                         <Calendar className="w-5 h-5 mr-2" />
                         Schedule a Demo
                         <ArrowRight className="w-5 h-5 ml-2" />
                     </button>
                     <button 
                        onClick={onContactSales}
                        className="flex items-center justify-center px-8 py-4 rounded-xl bg-transparent border border-slate-700 text-white font-medium text-lg hover:bg-slate-800 transition-colors"
                     >
                         <MessageSquare className="w-5 h-5 mr-2" />
                         Contact Sales
                     </button>
                 </div>
                 
                 <p className="text-slate-500 text-sm mb-6">No credit card required. Enterprise-grade security included.</p>
                 
                 <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400 font-medium">
                     <div className="flex items-center"><span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>SOC 2 Compliant</div>
                     <div className="flex items-center"><span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>GDPR Ready</div>
                     <div className="flex items-center"><span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>99.9% Uptime SLA</div>
                     <div className="flex items-center"><span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>24/7 Support</div>
                 </div>
             </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-slate-900/50 rounded-2xl p-8 mb-16 flex flex-col md:flex-row items-center justify-between border border-white/5">
            <div className="mb-6 md:mb-0 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Stay ahead with <span className="text-gold-400">AI insights</span></h3>
                <p className="text-slate-400 text-sm max-w-md">Get the latest on enterprise AI, automation trends, and product updates.</p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={subscribed}
                    className="bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 w-full sm:w-80 disabled:opacity-50"
                />
                <button 
                    onClick={handleSubscribe}
                    disabled={subscribing || subscribed}
                    className="px-6 py-3 bg-gold-400 text-slate-950 font-bold rounded-lg hover:bg-gold-500 transition-colors flex items-center justify-center whitespace-nowrap min-w-[140px]"
                >
                    {subscribing ? <Loader2 className="w-4 h-4 animate-spin" /> : 
                     subscribed ? <><Check className="w-4 h-4 mr-2" /> Subscribed</> :
                     <>Subscribe <ArrowRight className="w-4 h-4 ml-2" /></>
                    }
                </button>
            </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-16 border-t border-slate-900 pt-16">
            
            {/* Products Column */}
            <div>
                <h4 className="text-gold-400 font-bold text-sm tracking-wider uppercase mb-6">Products</h4>
                <ul className="space-y-4">
                    {products.slice(0,6).map(p => (
                        <li key={p.id}>
                            <button onClick={() => onProductSelect(p.id)} className="text-slate-400 hover:text-white text-sm transition-colors text-left">{p.title}</button>
                        </li>
                    ))}
                    <li>
                         <button onClick={() => onNavigate('integrations')} className="text-slate-400 hover:text-white text-sm transition-colors text-left font-semibold">Integrations</button>
                    </li>
                </ul>
            </div>

            {/* Industries Column */}
            <div>
                 <h4 className="text-gold-400 font-bold text-sm tracking-wider uppercase mb-6">Industries</h4>
                 <ul className="space-y-4 text-sm text-slate-400">
                     <li><button className="hover:text-white transition-colors">Manufacturing</button></li>
                     <li><button className="hover:text-white transition-colors">Healthcare</button></li>
                     <li><button className="hover:text-white transition-colors">Finance</button></li>
                     <li><button className="hover:text-white transition-colors">Retail</button></li>
                     <li><button className="hover:text-white transition-colors">Engineering</button></li>
                     <li><button className="hover:text-white transition-colors">IT Services</button></li>
                 </ul>
            </div>

            {/* By Function */}
             <div>
                 <h4 className="text-gold-400 font-bold text-sm tracking-wider uppercase mb-6">By Function</h4>
                 <ul className="space-y-4 text-sm text-slate-400">
                     <li><button className="hover:text-white transition-colors">Analytics & BI</button></li>
                     <li><button className="hover:text-white transition-colors">Business Process Management</button></li>
                     <li><button className="hover:text-white transition-colors">Customer Service</button></li>
                     <li><button className="hover:text-white transition-colors">Human Resources</button></li>
                     <li><button className="hover:text-white transition-colors">Marketing & Sales</button></li>
                     <li><button className="hover:text-white transition-colors">Project Management</button></li>
                     <li><button className="hover:text-white transition-colors">Operations Management</button></li>
                 </ul>
            </div>

            {/* Company */}
             <div>
                 <h4 className="text-gold-400 font-bold text-sm tracking-wider uppercase mb-6">Company</h4>
                 <ul className="space-y-4 text-sm text-slate-400">
                     <li><button className="hover:text-white transition-colors">About Us</button></li>
                     <li><button className="hover:text-white transition-colors">Careers</button></li>
                     <li><button className="hover:text-white transition-colors">Partners</button></li>
                     <li><button className="hover:text-white transition-colors">Press</button></li>
                     <li><button className="hover:text-white transition-colors">Contact</button></li>
                 </ul>
            </div>

            {/* Legal */}
             <div>
                 <h4 className="text-gold-400 font-bold text-sm tracking-wider uppercase mb-6">Legal</h4>
                 <ul className="space-y-4 text-sm text-slate-400">
                     <li><button onClick={() => onLegalSelect('privacy')} className="hover:text-white transition-colors">Privacy Policy</button></li>
                     <li><button onClick={() => onLegalSelect('terms')} className="hover:text-white transition-colors">Terms of Service</button></li>
                     <li><button onClick={() => onLegalSelect('cookie')} className="hover:text-white transition-colors">Cookie Policy</button></li>
                     <li><button onClick={() => onLegalSelect('security')} className="hover:text-white transition-colors">Security</button></li>
                     <li><button onClick={() => onLegalSelect('compliance')} className="hover:text-white transition-colors">Compliance</button></li>
                 </ul>
            </div>
        </div>
      </div>
    </footer>
  );
};