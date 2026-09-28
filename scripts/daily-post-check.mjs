// Daily check for scheduled blog posts on allyonoarcade.com.
//
// Posts publish themselves at 07:00 IST: each scheduled page returns 404 until its
// `publishedAt` date (see app/lib/schedule.ts), so nothing needs rebuilding. This script
// runs from cron shortly after, confirms today's post is live, and submits it (plus the
// blog index and sitemap) to IndexNow.
//
//   40 1 * * * cd /www/wwwroot/allyonoarcade.com && /usr/bin/node scripts/daily-post-check.mjs >> scripts/daily-post-check.log 2>&1
//   (01:40 UTC = 07:10 IST; use "10 7 * * *" if the server clock is IST)
//
// Pass a date to check another day:  node scripts/daily-post-check.mjs 2026-10-03

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const SITE = "https://allyonoarcade.com";
const INDEXNOW_KEY = "0243a0c8834eab8a7b576ce9828ce13a";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

// Today's date in India, whatever the server's time zone.
const today =
  process.argv[2] ||
  new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kolkata" }).format(new Date());

// Read slug + publishedAt pairs from BLOG_PILLARS without importing TypeScript.
const src = readFileSync(join(ROOT, "app/lib/site-data.ts"), "utf8");
const due = [];
for (const m of src.matchAll(/slug:\s*"([^"]+)"[^}]*?publishedAt:\s*"(\d{4}-\d{2}-\d{2})"/gs)) {
  if (m[2] === today) due.push(m[1]);
}

const stamp = new Date().toISOString();
if (due.length === 0) {
  console.log(`${stamp} ${today}: no post scheduled today.`);
  process.exit(0);
}

const live = [];
for (const slug of due) {
  const url = SITE + slug;
  const res = await fetch(url, { redirect: "manual" }).catch((e) => ({ status: `error ${e.message}` }));
  console.log(`${stamp} ${today}: ${url} -> ${res.status}`);
  if (res.status === 200) live.push(url);
}

if (live.length === 0) {
  console.log(`${stamp} ${today}: scheduled post not live yet. Is the latest code deployed?`);
  process.exit(1);
}

const body = {
  host: "allyonoarcade.com",
  key: INDEXNOW_KEY,
  keyLocation: `${SITE}/${INDEXNOW_KEY}.txt`,
  urlList: [...live, `${SITE}/blog`, `${SITE}/sitemap.xml`],
};
const r = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
}).catch((e) => ({ status: `error ${e.message}` }));
console.log(`${stamp} ${today}: IndexNow -> ${r.status}`);
