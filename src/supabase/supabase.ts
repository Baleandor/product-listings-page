
import { createClient } from '@supabase/supabase-js'

const supabaseURL = 'https://vbivkwoscrruwyhxxiod.supabase.co'
const supabasePublicKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZiaXZrd29zY3JydXd5aHh4aW9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE3NDAwOTUsImV4cCI6MjAwNzMxNjA5NX0.3O-XIRPP2OFsYgYB1JvWmcGI2CLw2tobLZwGHXv89r0'

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseURL, supabasePublicKey)