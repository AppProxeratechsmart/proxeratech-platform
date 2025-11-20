// supabase-config.js
// Inicializace Supabase klienta
// POZOR: publishable key je bezpečné použít v klientu (public key).
(function () {
  // === ZDE MŮŽEŠ PŘEPSAT SVÉ HODNOTY ===
  const SUPABASE_URL = "https://ijwilzchgngzgjuqzlnt.supabase.co";
  const SUPABASE_KEY = "sb_publishable_NCsdFIRbQE9K1NXlSjztAg_9wll-wax";
  // =======================================
  
  // Vytvoříme klienta
  const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

  // Export do window, aby k němu měl přístup auth.js
  window.PROXERATECH_SUPABASE = { client, SUPABASE_URL, SUPABASE_KEY };
})();
