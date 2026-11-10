#!/bin/bash
# Daily rebuild for the staggered-release "X vs Yono Arcade" comparison
# posts (Bingo 101 published 10 Nov, one more per day through 17 Nov).
#
# The /blog listing and /sitemap.xml are DYNAMIC routes (ƒ) using
# livePillars() (app/lib/site-data.ts) — they re-check "today" on every
# request, no rebuild needed for those. BUT each individual post page is
# STATIC (○) and now checks isPublished() (app/lib/publish-gate.ts) at
# build time via notFound() — and the /all-games hub's "more comparisons"
# list is also static. Both of those need a rebuild to actually flip from
# hidden/404 to live on each post's scheduled date. Cron runs this once a
# day; it is safe to run by hand too:
#
#   bash scripts/scheduled-publish.sh
#
# Safety: the previous build is kept as .next.prev and restored if the
# new build fails, so a bad build can never leave the site without pages.
set -uo pipefail

cd "$(dirname "$0")/.."

# cron has a minimal PATH: add the usual Node/PM2 locations (incl. aaPanel).
export PATH="$PATH:/usr/local/bin:/usr/bin:/www/server/nodejs/$(ls /www/server/nodejs 2>/dev/null | tail -1)/bin"

LOG="${LOG:-$HOME/allyonoarcade-publish.log}"
exec >>"$LOG" 2>&1
echo "=== $(date -u '+%Y-%m-%d %H:%M:%S UTC') | IST date $(TZ=Asia/Kolkata date +%F) ==="

# One run at a time.
exec 9>/tmp/allyonoarcade-publish.lock
flock -n 9 || { echo "Another run is in progress, exiting."; exit 0; }

rm -rf .next.prev
[ -d .next ] && mv .next .next.prev

if npm run build; then
  pm2 restart allyonoarcade && echo "OK: rebuilt and restarted." && rm -rf .next.prev
else
  echo "BUILD FAILED: restoring previous build."
  rm -rf .next
  [ -d .next.prev ] && mv .next.prev .next
  exit 1
fi
