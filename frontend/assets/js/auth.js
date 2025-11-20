// auth.js
// ProxeraTech Auth modul

const ProxAuth = (function () {

    const supa = window.PROXERATECH_SUPABASE.client;

    // REGISTER user
    async function register(email, password) {
        try {
            const { data, error } = await supa.auth.signUp({
                email: email,
                password: password
            });

            if (error) return { error };
            return { data };
        } catch (err) {
            return { error: err };
        }
    }

    // LOGIN user
    async function login(email, password) {
        try {
            const { data, error } = await supa.auth.signInWithPassword({
                email: email,
                password: password
            });

            if (error) return { error };
            return { data };
        } catch (err) {
            return { error: err };
        }
    }

    return {
        register,
        login
    };
})();
