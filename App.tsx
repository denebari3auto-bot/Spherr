import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Industries } from './components/Industries';
import { Integrations } from './components/Integrations';
import { Testimonials } from './components/Testimonials';
import { Partners } from './components/Partners';
import { Footer } from './components/Footer';
import { ProductDetail } from './components/ProductDetail';
import { ViewState } from './types';
import { products } from './data/products';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');

  const handleProductSelect = (id: string) => {
    setView({ type: 'product', productId: id });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500/30">
      <Header />
      <main>
        {view === 'home' ? (
          <>
            <Hero />
            <Products onProductSelect={handleProductSelect} />
            <Industries />
            <Integrations />
            <Testimonials />
            <Partners />
          </>
        ) : (
          <ProductDetail 
            product={products.find(p => p.id === view.productId) || products[0]} 
            onBack={handleBackToHome}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
