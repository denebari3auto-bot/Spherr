import React, { useState, Suspense, lazy, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Partners } from './components/Partners'; // Keep eager for fast LCP
import { Footer } from './components/Footer';
import { ViewState } from './types';
import { products } from './data/products';
import { ContactModal } from './components/ContactModal';
import { Loader2 } from 'lucide-react';

// Lazy load heavy homepage sections to improve initial load speed
const Products = lazy(() => import('./components/Products').then(module => ({ default: module.Products })));
const Industries = lazy(() => import('./components/Industries').then(module => ({ default: module.Industries })));
const Integrations = lazy(() => import('./components/Integrations').then(module => ({ default: module.Integrations })));
const Testimonials = lazy(() => import('./components/Testimonials').then(module => ({ default: module.Testimonials })));

// Lazy load Pages
const SolutionsPage = lazy(() => import('./components/SolutionsPage').then(module => ({ default: module.SolutionsPage })));
const IntegrationsPage = lazy(() => import('./components/IntegrationsPage').then(module => ({ default: module.IntegrationsPage })));
const ProductDetail = lazy(() => import('./components/ProductDetail').then(module => ({ default: module.ProductDetail })));
const LegalDocs = lazy(() => import('./components/LegalDocs').then(module => ({ default: module.LegalDocs })));

// Minimal loader for sections to prevent layout jank without blocking
const SectionLoader = () => (
  <div className="py-20 flex justify-center items-center bg-transparent">
     <div className="w-1 h-1 bg-gold-400 rounded-full animate-ping"></div>
  </div>
);

// Full page loader
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <Loader2 className="w-10 h-10 text-gold-400 animate-spin" />
  </div>
);

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactType, setContactType] = useState<'demo' | 'sales'>('demo');

  useEffect(() => {
    // Immediate removal of loader once React mounts - No artificial delay
    const loader = document.getElementById('app-loader');
    if (loader) {
      loader.style.opacity = '0';
      loader.style.pointerEvents = 'none'; // Ensure clicks pass through immediately
      // Remove from DOM shortly after fade to clean up
      setTimeout(() => loader.remove(), 300); 
    }
  }, []);

  const handleProductSelect = (id: string) => {
    setView({ type: 'product', productId: id });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLegalSelect = (doc: 'privacy' | 'terms' | 'cookie' | 'security' | 'compliance') => {
    setView({ type: 'legal', doc });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (newView: ViewState) => {
      setView(newView);
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openContactModal = (type: 'demo' | 'sales') => {
      setContactType(type);
      setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050b1a] text-white selection:bg-gold-500/30 font-sans">
      <Header 
        onRequestDemo={() => openContactModal('demo')} 
        onNavigate={handleNavigate}
      />
      
      <main className="relative z-0">
        <Suspense fallback={<PageLoader />}>
          {view === 'home' && (
            <>
              {/* Critical Rendering Path: Hero & Partners are loaded eagerly */}
              <Hero 
                onRequestDemo={() => openContactModal('demo')}
                onContactSales={() => openContactModal('sales')}
              />
              <Partners />
              
              {/* Non-Critical: Loaded Lazily as user scrolls */}
              <Suspense fallback={<SectionLoader />}>
                <Products onProductSelect={handleProductSelect} />
              </Suspense>
              
              <Suspense fallback={<SectionLoader />}>
                <Industries />
              </Suspense>
              
              <Suspense fallback={<SectionLoader />}>
                <Integrations />
              </Suspense>
              
              <Suspense fallback={<SectionLoader />}>
                <Testimonials />
              </Suspense>
            </>
          )}
          
          {view === 'solutions' && <SolutionsPage />}
          
          {view === 'integrations' && <IntegrationsPage />}

          {typeof view === 'object' && view.type === 'product' && (
            <ProductDetail 
              product={products.find(p => p.id === view.productId) || products[0]} 
              onBack={() => handleNavigate('home')}
            />
          )}

          {typeof view === 'object' && view.type === 'legal' && (
            <LegalDocs 
              docType={view.doc}
              onBack={() => handleNavigate('home')}
            />
          )}
        </Suspense>
      </main>
      
      <Footer 
        onProductSelect={handleProductSelect} 
        onLegalSelect={handleLegalSelect}
        onNavigate={handleNavigate}
        onRequestDemo={() => openContactModal('demo')}
        onContactSales={() => openContactModal('sales')}
      />

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        type={contactType}
      />
    </div>
  );
};

export default App;