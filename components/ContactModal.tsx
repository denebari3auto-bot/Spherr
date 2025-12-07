import React, { useState } from 'react';
import { X, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  type?: 'demo' | 'sales';
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, type = 'demo' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    // Simulated API call since Supabase is removed
    setTimeout(() => {
        setStatus('success');
        setLoading(false);
        setTimeout(() => {
            onClose();
            setStatus('idle');
            setFormData({ name: '', email: '', message: '' });
        }, 2000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl w-full max-w-md p-8 animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">
                {type === 'demo' ? 'Request a Demo' : 'Contact Sales'}
            </h2>
            <p className="text-slate-400 text-sm">
                {type === 'demo' 
                 ? "See how Spherr can automate your enterprise. Fill out the form below."
                 : "Ready to scale? Let's discuss a custom solution for your organization."}
            </p>
        </div>

        {status === 'success' ? (
             <div className="flex flex-col items-center justify-center py-12 text-center">
                 <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                     <CheckCircle2 className="w-8 h-8 text-green-500" />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">Request Sent!</h3>
                 <p className="text-slate-400">Our team will be in touch shortly.</p>
             </div>
        ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase">Full Name</label>
                <input 
                    type="text" 
                    required
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
            </div>
            <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase">Work Email</label>
                <input 
                    type="email" 
                    required
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
            </div>
            <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase">Message (Optional)</label>
                <textarea 
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors h-24 resize-none"
                    placeholder="Tell us about your needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
            </div>

            {status === 'error' && (
                <div className="text-red-400 text-sm bg-red-500/10 p-3 rounded-lg">
                    Something went wrong. Please try again.
                </div>
            )}

            <Button 
                type="submit" 
                disabled={loading}
                variant="glow"
                className="w-full"
            >
                {loading ? (
                    <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...</>
                ) : (
                    <><Send className="w-4 h-4 mr-2" /> Submit Request</>
                )}
            </Button>
            </form>
        )}
      </div>
    </div>
  );
};