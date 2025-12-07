import React, { useState, Suspense, lazy, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Industries } from './components/Industries';
import { Integrations } from './components/Integrations';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { ViewState } from './types';
import { products } from './data/products';
import { ContactModal } from './components/ContactModal';
import { Loader2 } from 'lucide-react';

// Lazy load heavy page components to improve initial render performance
const SolutionsPage = lazy(() => import('./components/SolutionsPage').then(module => ({ default: module.SolutionsPage })));
const IntegrationsPage = lazy(() => import('./components/IntegrationsPage').then(module => ({ default: module.IntegrationsPage })));
const ProductDetail = lazy(() => import('./components/ProductDetail').then(module => ({ default: module.ProductDetail })));
const LegalDocs = lazy(() => import('./components/LegalDocs').then(module => ({ default: module.LegalDocs })));

// Loading fallback component
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
    console.log("Spherr App Mounted - v1.2");
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
    <div className="min-h-screen bg-[#050b1a] text-white selection:bg-gold-500/30">
      <Header 
        onRequestDemo={() => openContactModal('demo')} 
        onNavigate={handleNavigate}
      />
      
      <main>
        <Suspense fallback={<PageLoader />}>
          {view === 'home' && (
            <>
              <Hero 
                onRequestDemo={() => openContactModal('demo')}
                onContactSales={() => openContactModal('sales')}
              />
              <Products onProductSelect={handleProductSelect} />
              <Industries />
              <Integrations />
              <Testimonials />
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