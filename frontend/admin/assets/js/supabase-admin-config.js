// supabase-admin-config.js
// Replace with your Supabase project values. Use anon key for client operations.
window.PROXERATECH_ADMIN = (function(){
  const SUPABASE_URL = "https://ijwilzchgngzgjuqzlnt.supabase.co"; // replace
  const SUPABASE_KEY = "sb_publishable_NCsdFIRbQE9K1NXlSjztAg_9wll-wax"; // replace (public)
  const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  return { client, SUPABASE_URL, SUPABASE_KEY };
})();
