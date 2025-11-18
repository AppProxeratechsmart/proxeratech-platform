// admin-auth.js - wrapper for admin authentication and role check
const ProxAdminAuth = (function(){
  const supa = window.PROXERATECH_ADMIN.client;

  async function login(email, password){
    try{
      const res = await supa.auth.signInWithPassword({ email, password });
      return res;
    }catch(e){
      return { error: e };
    }
  }

  async function logout(){
    try{ await supa.auth.signOut(); return { ok:true }; }catch(e){ return { error:e }; }
  }

  async function getUser(){
    const { data } = await supa.auth.getUser();
    return data?.user;
  }

  async function isAdmin(){
    // Simple admin check: look for 'is_admin' flag in user_metadata OR check hardcoded list
    const user = await getUser();
    if(!user) return false;
    if(user.user_metadata && user.user_metadata.is_admin) return true;
    // fallback: check email against list (replace with real admin emails)
    const admins = ['you@yourcompany.com'];
    return admins.includes(user.email);
  }

  async function requireAuth(){
    const { data } = await supa.auth.getSession();
    const session = data?.session;
    if(!session) return false;
    const ok = await isAdmin();
    return ok;
  }

  return { login, logout, getUser, isAdmin, requireAuth };
})();
