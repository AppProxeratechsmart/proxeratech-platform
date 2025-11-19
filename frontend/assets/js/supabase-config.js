// supabase-config.js
// Inicializace Supabase klienta

window.PROXERATECH_SUPABASE = (function () {

    // ↓↓↓ SEM DOSAĎ SVÉ HODNOTY ↓↓↓
    const SUPABASE_URL = "https://ijwilzchgnzgzjqu2lnt.supabase.co"; 
    const SUPABASE_KEY = "sb-publishable_NCsdFIRbQE9K1NX1SjztAg_9wll-wax";
    // ↑↑↑ TVÉ HODNOTY ZŮSTÁVAJÍ TAK JAK JSOU ↑↑↑

    const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

    return {
        client,
        SUPABASE_URL,
        SUPABASE_KEY
    };

})();
