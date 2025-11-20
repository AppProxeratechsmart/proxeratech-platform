// dashboard.js
const ProxDash = (function () {
    const supa = window.PROXERATECH_SUPABASE && window.PROXERATECH_SUPABASE.client;

    async function init() {
        if (!supa) {
            alert('Chyba: supabase not initialized');
            return;
        }
        const { data } = await supa.auth.getSession();
        if (!data || !data.session) {
            window.location.href = "login.html";
            return;
        }
        const user = data.session.user;
        const el = document.getElementById("userEmail");
        if (el) el.innerText = "Přihlášen jako: " + user.email;
    }

    async function logout() {
        if (!supa) return;
        await supa.auth.signOut();
        window.location.href = "login.html";
    }

    return { init, logout };
})();

window.addEventListener("load", () => ProxDash.init());
