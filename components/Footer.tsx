import React from 'react';
import { Hexagon, Github, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import { products } from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center space-x-2 mb-6 group">
              <Hexagon className="h-8 w-8 text-indigo-500 fill-indigo-500/20 group-hover:rotate-12 transition-transform" />
              <span className="font-bold text-2xl text-white">Spherr</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering SMEs with enterprise-grade AI automation. The future of work is orchestrated.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Products Column (Bold/Vibrant) */}
          <div className="col-span-1">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Products</h4>
            <ul className="space-y-3">
              {products.map(p => (
                <li key={p.id}>
                    <a href="#" className="text-indigo-400 font-medium hover:text-indigo-300 transition-colors flex items-center group">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {p.title}
                    </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="col-span-1">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Solutions</h4>
            
            <div className="mb-6">
                <h5 className="text-slate-500 text-xs font-semibold mb-3">BY INDUSTRY</h5>
                <ul className="space-y-2 text-sm text-slate-400">
                    <li><a href="#" className="hover:text-white transition-colors">Financial Services</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Healthcare</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Manufacturing</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">E-Commerce</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Logistics</a></li>
                </ul>
            </div>

            <div>
                <h5 className="text-slate-500 text-xs font-semibold mb-3">BY FUNCTION</h5>
                <ul className="space-y-2 text-sm text-slate-400">
                    <li><a href="#" className="hover:text-white transition-colors">HR & Recruiting</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Sales Automation</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Customer Support</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">IT Operations</a></li>
                </ul>
            </div>
          </div>

          {/* Company Column */}
          <div className="col-span-1">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

           {/* Resources Column */}
           <div className="col-span-1">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community Forum</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Spherr Platform. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-sm text-slate-600 mt-4 md:mt-0">
             <span className="w-2 h-2 rounded-full bg-green-500"></span>
             <span>All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
