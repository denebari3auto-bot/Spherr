import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log("Initializing Spherr Website...");

// Global error handler for module loading failures
window.addEventListener('error', (event) => {
    // Only show error if site hasn't mounted yet
    const loader = document.getElementById('app-loader');
    if (loader && loader.style.opacity !== '0') {
        loader.innerHTML = `
            <div style="color: #ef4444; text-align: center; font-family: sans-serif; padding: 20px;">
                <h3 style="margin-bottom:8px">Loading Error</h3>
                <p style="font-size: 12px; color: #94a3b8; margin-bottom: 16px;">${event.message}</p>
                <button onclick="window.location.reload()" style="padding: 8px 16px; background: #fbbf24; color: black; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">Reload Page</button>
            </div>
        `;
    }
});

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

try {
  const root = ReactDOM.createRoot(rootElement);
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  console.log("React Mount Successful");
} catch (error: any) {
  console.error("CRITICAL MOUNT ERROR:", error);
  const loader = document.getElementById('app-loader');
  if (loader) loader.remove();
  
  rootElement.innerHTML = `
    <div style="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white p-8 text-center font-sans">
      <h1 style="font-size: 2rem; color: #ef4444; margin-bottom: 1rem;">Website Failed to Load</h1>
      <pre style="background: #1e293b; padding: 1rem; border-radius: 0.5rem; text-align: left; overflow: auto; max-width: 100%; font-size: 0.8rem; color: #fbbf24;">
        ${error.message || JSON.stringify(error)}
      </pre>
      <button onclick="window.location.reload()" style="margin-top: 2rem; padding: 0.75rem 1.5rem; background: #fbbf24; color: #000; border: none; border-radius: 0.5rem; font-weight: bold; cursor: pointer;">
        Reload Page
      </button>
    </div>
  `;
}