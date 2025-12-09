import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log("Initializing Spherr Website...");

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