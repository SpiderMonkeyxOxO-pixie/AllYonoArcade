import fs from "fs";
import path from "path";

export type PromoEntry = {
  name: string;
  morning: string | null;
  afternoon: string | null;
  evening: string | null;
};

function cleanCode(value?: string): string | null {
  const v = value?.trim();
  return !v || v === "-" ? null : v;
}

function normalize(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function parsePromoCodes(raw: string): PromoEntry[] {
  return raw
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .map((line) => {
      const [name, morning, afternoon, evening] = line.split("|").map((p) => p.trim());
      return { name, morning: cleanCode(morning), afternoon: cleanCode(afternoon), evening: cleanCode(evening) };
    })
    .filter((entry) => entry.name);
}

/**
 * Reads promo-code.txt fresh on every call (no in-memory cache) — the file is
 * meant to be hand-edited throughout the day, and a stale cache would mean
 * edits silently don't show up until the server restarts.
 */
export function getPromoCodes(): { entries: Map<string, PromoEntry>; lastUpdated: Date | null } {
  const filePath = path.join(process.cwd(), "promo-code.txt");
  let raw: string;
  let lastUpdated: Date | null;
  try {
    raw = fs.readFileSync(filePath, "utf-8");
    lastUpdated = fs.statSync(filePath).mtime;
  } catch {
    return { entries: new Map(), lastUpdated: null };
  }

  const entries = new Map<string, PromoEntry>();
  for (const entry of parsePromoCodes(raw)) {
    entries.set(normalize(entry.name), entry);
  }

  return { entries, lastUpdated };
}

export function findPromoEntry(entries: Map<string, PromoEntry>, name: string): PromoEntry | null {
  return entries.get(normalize(name)) ?? null;
}
