README - QUICK STEPS
1) Unzip frontend to a folder and open login.html (or run a local static server).
2) IMPORTANT: edit assets/js/supabase-config.js and replace SUPABASE_URL and SUPABASE_KEY with your project's values (publishable API key).
   - You can find them in Supabase -> Settings -> API -> Project URL and Publishable key.
3) Make sure the <script> order in each HTML is:
   - supabase CDN
   - assets/js/supabase-config.js
   - assets/js/auth.js
   - assets/js/dashboard.js (if used)
4) If you run locally at http://127.0.0.1:5500, add that URL to Supabase -> Authentication -> URL Configuration (Site URL + Redirect URLs).
