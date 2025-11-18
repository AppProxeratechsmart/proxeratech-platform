// supabase-config.js
window.PROXERATECH_SUPABASE = (function () {

    // TVÉ SUPABASE ÚDAJE
    const SUPABASE_URL = 'https://ijwilzchgnzgzjuqzlnt.supabase.co';
    const SUPABASE_KEY = 'sb_publishable_NCsdFIRbQE9K1NXlSjztAg_9wII-wax';

    // ✔ zde konečně vznikne správné API (knihovna musí být načtena přes CDN!)
    const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

    return {
        client,
        SUPABASE_URL,
        SUPABASE_KEY
    };

})();

