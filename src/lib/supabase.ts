import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || supabaseUrl.includes('your-project-id')) {
  console.warn('Supabase is not configured yet. Using mock credentials.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
