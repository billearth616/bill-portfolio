const STATS = [
  {
    label: "Location",
    value: "Accra, Ghana",
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
  {
    label: "Status",
    value: "Available",
    accent: true,
    icon: (
      <>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4 12 14.01l-3-3" />
      </>
    ),
  },
  {
    label: "Focus",
    value: "MSc, Univ. of Ghana",
    icon: (
      <>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </>
    ),
  },
  {
    label: "Stack",
    value: "Next.js · Supabase",
    icon: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
  },
];

export function StatCards() {
  return (
    <section className="grid grid-cols-2 gap-3 px-5 pb-16 sm:px-10 sm:pb-20 md:grid-cols-4 md:px-20 md:pb-24">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="flex items-start gap-3 rounded border border-border bg-surface p-4"
        >
          <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded border border-border-card">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke={stat.accent ? "var(--accent)" : "var(--muted)"}
              strokeWidth="2"
            >
              {stat.icon}
            </svg>
          </div>
          <div>
            <div className="font-tracked mb-1 text-[9px] uppercase tracking-[0.14em] text-faint">
              {stat.label}
            </div>
            <div className="text-sm">{stat.value}</div>
          </div>
        </div>
      ))}
    </section>
  );
}
