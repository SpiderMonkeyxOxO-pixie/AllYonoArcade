"use server";

import { redirect } from "next/navigation";
import { attemptLogin, isLockedOut, logout, requireAdmin } from "../lib/admin-auth";
import { codeProblem, readPromoSheet, writePromoSheet, type PromoRow } from "../lib/promo-file";
import { adminApps } from "../lib/admin-apps";

export type LoginState = { error?: string; username?: string };

export async function loginAction(_prev: LoginState, formData: FormData): Promise<LoginState> {
  if (await isLockedOut()) {
    return { error: "Too many failed attempts. Try again in 15 minutes." };
  }
  const username = String(formData.get("username") ?? "");
  const ok = await attemptLogin(username, String(formData.get("password") ?? ""));
  if (!ok) return { error: "Incorrect username or password.", username };
  redirect("/promo-codes");
}

export async function logoutAction(): Promise<void> {
  await logout();
  redirect("/login");
}

export type SlotValues = { morning: string; afternoon: string; evening: string };
export type SaveResult =
  | { ok: true; savedAt: string; liveApps: number }
  | { ok: false; errors: string[] };

const SLOTS = ["morning", "afternoon", "evening"] as const;

function build(codes: Record<string, SlotValues>): { rows: PromoRow[]; errors: string[] } {
  const rows: PromoRow[] = [];
  const errors: string[] = [];
  const known = new Set<string>();
  for (const app of adminApps()) {
    known.add(app.name.toLowerCase());
    const v = codes[app.name];
    const row: PromoRow = { name: app.name, morning: "", afternoon: "", evening: "" };
    for (const slot of SLOTS) {
      const value = String(v?.[slot] ?? "").trim();
      const problem = codeProblem(value);
      if (problem) errors.push(`${app.name} — ${slot}: ${problem}`);
      row[slot] = value;
    }
    rows.push(row);
  }
  // Keep any hand-added lines the admin list doesn't know about.
  for (const r of readPromoSheet().rows) {
    if (!known.has(r.name.toLowerCase())) rows.push(r);
  }
  return { rows, errors };
}

export async function savePromoSheet(codes: Record<string, SlotValues>): Promise<SaveResult> {
  await requireAdmin();
  const { rows, errors } = build(codes ?? {});
  if (errors.length) return { ok: false, errors };
  writePromoSheet(rows);
  return {
    ok: true,
    savedAt: new Date().toISOString(),
    liveApps: rows.filter((r) => r.morning || r.afternoon || r.evening).length,
  };
}

/** Blank every slot — the start-of-day reset. */
export async function startNewDay(): Promise<SaveResult> {
  await requireAdmin();
  const { rows } = build({});
  writePromoSheet(rows.map((r) => ({ ...r, morning: "", afternoon: "", evening: "" })));
  return { ok: true, savedAt: new Date().toISOString(), liveApps: 0 };
}
