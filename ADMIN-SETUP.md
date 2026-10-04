# code.allyonoarcade.com — admin panel setup

The admin panel is part of this same Next.js app (PM2 `allyonoarcade`).
Requests whose Host is `code.allyonoarcade.com` are routed to `app/admin`
by `proxy.ts`; on allyonoarcade.com `/admin` returns 404. Single admin
account, no sign-up. It edits the same promo sheet that `/promo-codes` reads,
so saves are live instantly (no rebuild).

## One-time server setup

1. **DNS** (Cloudflare): add an A record `code` -> same server IP as
   allyonoarcade.com (proxied/orange cloud is fine).
2. **aaPanel**: add site `code.allyonoarcade.com`, then Reverse proxy ->
   Proxy dir `/`, Target URL `http://127.0.0.1:<app port>`, Sent Domain `$host`,
   cache OFF. Get a Let's Encrypt certificate and force HTTPS.
   (Find the app port with `pm2 describe allyonoarcade` or `ss -tlnp | grep node`.)
3. **Keep the live codes outside git.** The server's current hand-edited
   `promo-code.txt` becomes the live file:
   ```
   mkdir -p /www/wwwroot/allyonoarcade-data
   cp /www/wwwroot/allyonoarcade.com/promo-code.txt /www/wwwroot/allyonoarcade-data/promo-code.txt
   ```
4. **Credentials**: generate a hash (needs only Node):
   ```
   node -e "const c=require('crypto');const s=c.randomBytes(16);console.log('ADMIN_PASSWORD_HASH=scrypt:'+s.toString('hex')+':'+c.scryptSync(process.argv[1],s,64).toString('hex'));console.log('ADMIN_SESSION_SECRET='+c.randomBytes(32).toString('base64url'))" 'YOUR-REAL-PASSWORD'
   history -c
   ```
   Put the two output lines into `/www/wwwroot/allyonoarcade.com/.env.local`
   with:
   ```
   ADMIN_USERNAME=<your login name>
   PROMO_FILE=/www/wwwroot/allyonoarcade-data/promo-code.txt
   ```
   (no quotes, no spaces around `=`; see `.env.example`).
5. **Deploy**: `git pull origin main && npm ci && rm -rf .next && npm run build && pm2 restart allyonoarcade --update-env`

## Daily use

Log in at https://code.allyonoarcade.com -> Promo codes. Type codes into the
Morning / Afternoon / Evening boxes and press **Save changes**. Press
**Start new day** each morning to clear yesterday's codes. Empty boxes show
"Not released yet" on the site.

## Security notes

- Passwords are scrypt-hashed; the session is a signed HttpOnly, SameSite=Strict,
  Secure cookie valid 8 h. Changing `ADMIN_SESSION_SECRET` logs everyone out.
- 5 failed logins from one IP locks that IP out for 15 minutes (needs nginx to
  pass `X-Real-IP`; aaPanel's reverse proxy does).
- The admin host is `noindex` and its robots.txt disallows everything.
- Code boxes reject links/domains and `|`; the previous file is kept as
  `promo-code.txt.bak` on every save.
