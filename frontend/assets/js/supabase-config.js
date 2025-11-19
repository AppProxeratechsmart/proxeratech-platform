// supabase-config.js
window.PROXERATECH_SUPABASE = (function () {

    // supabase-config.js

const SUPABASE_URL = 'https://ijwilzchgngzgjucz1nt.supabase.co';
const SUPABASE_KEY = 'sb-publishable_NCsdFIRbQE9K1NXlSjztAg_9wII-wax';

window.PROXERATECH_SUPABASE = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

    // ✔ zde konečně vznikne správné API (knihovna musí být načtena přes CDN!)
    const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

    return {
        client,
        SUPABASE_URL,
        SUPABASE_KEY
    };

})();

