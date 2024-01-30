import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ywwklfendybwqhisxyus.supabase.co';
const supabaseKey = String(import.meta.env.VITE_SUPABASE_KEY);
console.log(import.meta.env.VITE_SUPABASE_KEY);

export const supabase = createClient(supabaseUrl, supabaseKey);
