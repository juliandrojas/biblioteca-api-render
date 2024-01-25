import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
config();
const supabaseUrl = process.env.DATABASE_URL;
const supabaseKey = process.env.DATABASE_PASSWORD;
export const supabase = createClient(supabaseUrl, supabaseKey);