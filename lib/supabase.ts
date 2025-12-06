import { createClient } from '@supabase/supabase-js';

// Safe environment variable accessor to prevent runtime crashes in browsers
const getEnv = (key: string) => {
  try {
    // Check for standard process.env (Node/Bundlers)
    if (typeof process !== 'undefined' && process.env && process.env[key]) {
      return process.env[key];
    }
    // Check for Vite-style import.meta.env
    // @ts-ignore
    if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env[key]) {
      // @ts-ignore
      return import.meta.env[key];
    }
  } catch (e) {
    // Ignore errors in strict environments
  }
  return '';
};

// Use retrieved keys or fallbacks. 
// NOTE: For a real production app, ensure your build tool injects these keys.
const supabaseUrl = getEnv('SUPABASE_URL') || 'https://placeholder.supabase.co';
const supabaseAnonKey = getEnv('SUPABASE_ANON_KEY') || 'placeholder';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);