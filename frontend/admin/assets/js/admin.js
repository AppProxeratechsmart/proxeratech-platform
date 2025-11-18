// admin.js - admin dashboard functions (loads users/plans/logs)
const ProxAdmin = (function(){
  const supa = window.PROXERATECH_ADMIN.client;

  async function init(){
    // simple overview: counts
    const { count } = await supa.from('profiles').select('*', { count: 'exact' });
    document.getElementById('overview').innerHTML = `<p>Users: ${count || 0}</p>`;
  }

  async function loadUsers(){
    const { data, error } = await supa.from('profiles').select('id, full_name, company, created_at');
    if(error) return console.error(error);
    const tbody = document.querySelector('#usersTable tbody');
    tbody.innerHTML = '';
    (data||[]).forEach(u=>{
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${u.full_name || '—'}</td><td>${u.id}</td><td>—</td><td>—</td><td><button class='btn ghost' onclick='alert(\'action\')'>Action</button></td>`;
      tbody.appendChild(tr);
    });
  }

  async function loadPlans(){
    const { data } = await supa.from('plans').select('*');
    const div = document.getElementById('plansList');
    div.innerHTML = '';
    (data||[]).forEach(p=> {
      const el = document.createElement('div');
      el.innerHTML = `<strong>${p.name}</strong> — ${p.price} (${p.id})`;
      div.appendChild(el);
    });
  }

  async function loadLogs(){
    const { data } = await supa.from('audit_logs').select('*').limit(100).order('created_at', {ascending:false});
    const el = document.getElementById('logs');
    el.innerHTML = '';
    (data||[]).forEach(l=>{
      const row = document.createElement('div');
      row.textContent = `${l.created_at} — ${l.action}`;
      el.appendChild(row);
    });
  }

  return { init, loadUsers, loadPlans, loadLogs };
})();
