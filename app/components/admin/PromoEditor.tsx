"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import { savePromoSheet, startNewDay, type SaveResult, type SlotValues } from "../../admin/actions";

export type EditorApp = SlotValues & { name: string; logo: string; hasDownload: boolean };

const SLOTS = [
  ["morning", "Morning"],
  ["afternoon", "Afternoon"],
  ["evening", "Evening"],
] as const;

function toCodes(apps: EditorApp[]): Record<string, SlotValues> {
  return Object.fromEntries(
    apps.map((a) => [a.name, { morning: a.morning, afternoon: a.afternoon, evening: a.evening }]),
  );
}

const istDate = (iso?: string) =>
  iso ? new Date(new Date(iso).getTime() + 330 * 60_000).toISOString().slice(0, 10) : "";

export default function PromoEditor({
  apps,
  today,
  savedAt,
}: {
  apps: EditorApp[];
  today: string;
  savedAt?: string;
}) {
  const [saved, setSaved] = useState(() => toCodes(apps));
  const [codes, setCodes] = useState(saved);
  const [lastSaved, setLastSaved] = useState(savedAt);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<SaveResult | null>(null);
  const [pending, startTransition] = useTransition();

  const dirtyNames = useMemo(
    () =>
      new Set(
        apps
          .filter((a) => {
            const x = codes[a.name];
            const y = saved[a.name];
            return x.morning !== y.morning || x.afternoon !== y.afternoon || x.evening !== y.evening;
          })
          .map((a) => a.name),
      ),
    [codes, saved, apps],
  );
  const dirty = dirtyNames.size > 0;
  const filled = apps.filter((a) => {
    const c = codes[a.name];
    return c.morning || c.afternoon || c.evening;
  }).length;
  const stale = filled > 0 && Boolean(lastSaved) && istDate(lastSaved) !== today;

  useEffect(() => {
    if (!dirty) return;
    const warn = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  function apply(r: SaveResult, next: Record<string, SlotValues>) {
    setResult(r);
    if (r.ok) {
      setCodes(next);
      setSaved(next);
      setLastSaved(r.savedAt);
    }
  }

  function save() {
    startTransition(async () => apply(await savePromoSheet(codes), codes));
  }

  function newDay() {
    if (!window.confirm("Start a new day? This clears ALL codes for every app.")) return;
    startTransition(async () => {
      const blank = toCodes(apps.map((a) => ({ ...a, morning: "", afternoon: "", evening: "" })));
      apply(await startNewDay(), blank);
    });
  }

  const q = query.trim().toLowerCase();
  const input =
    "block min-h-10 w-full rounded-md border border-slate-300 bg-white px-2 font-mono text-sm text-slate-900 placeholder:font-sans placeholder:text-slate-300";

  return (
    <div className="mt-5">
      {stale && (
        <div
          role="status"
          className="mb-4 rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900"
        >
          These codes were last saved on <strong>{istDate(lastSaved)}</strong>, but today is{" "}
          <strong>{today}</strong> (IST). Visitors may be seeing old codes — press{" "}
          <strong>Start new day</strong> to clear them.
        </div>
      )}

      <div className="flex flex-wrap items-end gap-3 rounded-xl border border-slate-200 bg-white p-4">
        <label className="min-w-48 flex-1 text-sm font-medium text-slate-700">
          Find an app
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. jeet spin"
            className="mt-1 block min-h-10 w-full rounded-md border border-slate-300 px-2"
          />
        </label>
        <button
          type="button"
          onClick={newDay}
          disabled={pending}
          className="min-h-10 rounded-lg border border-slate-300 bg-white px-3 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-60"
        >
          Start new day
        </button>
        <p className="w-full text-xs text-slate-500">
          {filled} of {apps.length} apps have a code
          {lastSaved &&
            ` · last saved ${new Date(lastSaved).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST`}
        </p>
      </div>

      <ul className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {apps.map((a) => {
          const hidden = q && !a.name.toLowerCase().includes(q);
          const changed = dirtyNames.has(a.name);
          return (
            <li
              key={a.name}
              hidden={Boolean(hidden)}
              className={`rounded-xl border bg-white p-3 ${changed ? "border-amber-400 ring-1 ring-amber-300" : "border-slate-200"}`}
            >
              <div className="flex items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={a.logo} alt="" width={32} height={32} className="h-8 w-8 rounded-md object-cover" />
                <h2 className="truncate text-sm font-semibold text-slate-900">{a.name}</h2>
              </div>
              <div className="mt-2 space-y-1.5">
                {SLOTS.map(([key, label]) => (
                  <label key={key} className="flex items-center gap-2">
                    <span className="w-20 shrink-0 text-xs font-medium text-slate-500">{label}</span>
                    <input
                      type="text"
                      value={codes[a.name][key]}
                      maxLength={40}
                      autoComplete="off"
                      autoCapitalize="off"
                      spellCheck={false}
                      placeholder="Not released yet"
                      onChange={(e) =>
                        setCodes((c) => ({ ...c, [a.name]: { ...c[a.name], [key]: e.target.value } }))
                      }
                      className={input}
                    />
                  </label>
                ))}
              </div>
              {!a.hasDownload && (
                <p className="mt-2 text-xs text-amber-700">No download link set for this app.</p>
              )}
            </li>
          );
        })}
      </ul>

      <div className="sticky bottom-0 z-10 -mx-4 mt-4 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={save}
            disabled={pending || !dirty}
            className="min-h-11 rounded-lg bg-indigo-600 px-6 font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
          >
            {pending ? "Saving…" : "Save changes"}
          </button>
          <span className="text-sm text-slate-600" aria-live="polite">
            {dirty
              ? `${dirtyNames.size} app${dirtyNames.size === 1 ? "" : "s"} changed — not saved yet`
              : "All changes saved"}
          </span>
          {result?.ok && !dirty && (
            <span role="status" className="text-sm font-medium text-emerald-700">
              ✓ Saved — {result.liveApps} app{result.liveApps === 1 ? "" : "s"} with codes live
            </span>
          )}
        </div>
        {result && !result.ok && (
          <ul role="alert" className="mx-auto mt-2 max-w-6xl list-disc pl-5 text-sm text-red-700">
            {result.errors.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
