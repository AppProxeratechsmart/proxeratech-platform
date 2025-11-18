document.addEventListener('DOMContentLoaded', async ()=>{
  try {
    const { data } = await client.auth.getUser();
    const user = data?.user;
    if(!user) return window.location.href='login.html';
    document.getElementById('profile').innerText = 'Logged in as: ' + user.email;
    document.getElementById('btnLogout').addEventListener('click', async ()=>{ await client.auth.signOut(); window.location.href='login.html'; });
  } catch(e){ console.error(e); window.location.href='login.html'; }
});
