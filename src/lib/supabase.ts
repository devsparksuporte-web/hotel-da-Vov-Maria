import { createClient } from '@supabase/supabase-js';

// Falha silenciosamente no build do Netlify se as variáveis não existirem
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mock-project.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'mock-anon-key';

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || supabaseUrl.includes('your-project-id')) {
  console.warn('Supabase is not configured yet. Using mock credentials.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
