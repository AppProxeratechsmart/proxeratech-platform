// supabase-admin-config.js
// Replace with your Supabase project values. Use anon key for client operations.
window.PROXERATECH_ADMIN = (function(){
  const SUPABASE_URL = "https://YOUR_SUPABASE_URL.supabase.co"; // replace
  const SUPABASE_KEY = "YOUR_ANON_KEY"; // replace (public)
  const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  return { client, SUPABASE_URL, SUPABASE_KEY };
})();
