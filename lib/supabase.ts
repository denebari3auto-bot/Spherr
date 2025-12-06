import { createClient } from '@supabase/supabase-js';

// Access environment variables with fallbacks to prevent crashes if undefined
// Note: In a real app, you would want proper error handling if these are missing.
const supabaseUrl = typeof process !== 'undefined' && process.env.SUPABASE_URL ? process.env.SUPABASE_URL : 'https://placeholder.supabase.co';
const supabaseAnonKey = typeof process !== 'undefined' && process.env.SUPABASE_ANON_KEY ? process.env.SUPABASE_ANON_KEY : 'placeholder';

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey);