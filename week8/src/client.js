import { createClient } from '@supabase/supabase-js'

const URL = 'https://kjtndbgijgjmgfeljmhy.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqdG5kYmdpamdqbWdmZWxqbWh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwOTMxMzYsImV4cCI6MjA2ODY2OTEzNn0.1u18EBcHM_AWERVem3qlpO56mKkbNpNuMSRgQOcAR9o'
export const supabase = createClient(URL, API_KEY)
