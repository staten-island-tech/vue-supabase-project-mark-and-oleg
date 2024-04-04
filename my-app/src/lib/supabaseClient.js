import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://tveazwibzrtrivjofmwd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2ZWF6d2lienJ0cml2am9mbXdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxOTE4NjUsImV4cCI6MjAyNzc2Nzg2NX0.37kLoip2dP-qXqkA2fn7IKUeAcizvqoUoHNI8wT-qmw')