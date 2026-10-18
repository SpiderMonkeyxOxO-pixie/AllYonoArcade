#!/bin/bash
# Daily rebuild for the date-gated 14-day content series (18-31 Oct 2026).
#
# BLOG_PILLARS entries in app/lib/site-data.ts are gated at REQUEST time via
# livePillars() (the blog index and sitemap are dynamic routes, so they
# already reflect "today" with no rebuild needed). This script is NOT
# required for that gating to work. It exists only so Arcade follows the
# same daily-cron operational pattern as the sibling sites and sitemap/
# cache stay freshly rebuilt. Safe to run by hand too:
#
#   bash scripts/scheduled-publish.sh
#
# Safety: the previous build is kept as .next.prev and restored if the new
# build fails, so a bad build can never leave the site without pages.
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
