"use client";

import { useSyncExternalStore } from "react";

type ThemePref = "light" | "dark" | "system";

const STORAGE_KEY = "theme";
const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot(): ThemePref {
  return (localStorage.getItem(STORAGE_KEY) as ThemePref | null) ?? "system";
}

function getServerSnapshot(): ThemePref {
  return "system";
}

function applyTheme(pref: ThemePref) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  if (pref !== "system") root.classList.add(pref);
  localStorage.setItem(STORAGE_KEY, pref);
  listeners.forEach((listener) => listener());
}

const OPTIONS: { value: ThemePref; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
];

export function ThemeToggle() {
  const pref = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <div className="inline-flex w-fit overflow-hidden rounded border border-border-default">
      {OPTIONS.map((opt, i) => {
        const active = pref === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => applyTheme(opt.value)}
            aria-pressed={active}
            aria-label={opt.label}
            className={`flex h-[30px] w-[34px] items-center justify-center ${
              i < OPTIONS.length - 1 ? "border-r border-border-default" : ""
            } ${active ? "bg-ink text-bg" : "text-faint"}`}
          >
            {opt.value === "dark" && <MoonIcon active={active} />}
            {opt.value === "system" && <SystemIcon active={active} />}
            {opt.value === "light" && <SunIcon active={active} />}
          </button>
        );
      })}
    </div>
  );
}

function iconStroke(active: boolean) {
  return active ? "currentColor" : "var(--faint)";
}

function SunIcon({ active }: { active: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={iconStroke(active)} strokeWidth="2">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon({ active }: { active: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={iconStroke(active)} strokeWidth="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function SystemIcon({ active }: { active: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={iconStroke(active)} strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}
