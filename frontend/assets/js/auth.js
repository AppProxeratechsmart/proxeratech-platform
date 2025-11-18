// PROXERATECH AUTH MODULE
const ProxAuth = (function () {

    const supa = window.PROXERATECH_SUPABASE.client;

    // REGISTER USER
    async function register(email, password) {
        try {
            const { data, error } = await supa.auth.signUp({
                email: email,
                password: password,
            });

            if (error) return { error };
            return { data };

        } catch (err) {
            return { error: err };
        }
    }

    // LOGIN USER
    async function login(email, password) {
        try {
            const { data, error } = await supa.auth.signInWithPassword({
                email: email,
                password: password,
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
