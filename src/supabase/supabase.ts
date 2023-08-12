
import { createClient } from '@supabase/supabase-js'

const supabaseURL = import.meta.env.VITE_SUPABASE_URL
const supabasePublicKey = import.meta.env.SUPABASE_PUBLIC_KEY

console.log(supabaseURL, supabasePublicKey)
// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseURL, supabasePublicKey)