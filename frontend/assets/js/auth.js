async function register() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const { data, error } = await client.auth.signUp({ email, password });
  if (error) alert('Error: '+error.message); else { alert('Account created'); window.location.href='/dashboard.html'; }
}
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const { data, error } = await client.auth.signInWithPassword({ email, password });
  if (error) alert('Login error: '+error.message); else { alert('Login successful'); window.location.href='/dashboard.html'; }
}
document.addEventListener('DOMContentLoaded', ()=>{
  const r = document.getElementById('btnRegister');
  if(r) r.addEventListener('click', register);
  const l = document.getElementById('btnLogin');
  if(l) l.addEventListener('click', login);
});
