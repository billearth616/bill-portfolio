export function SiteFooter() {
  return (
    <div className="flex flex-col gap-2 border-t border-border px-5 py-6 sm:flex-row sm:items-center sm:justify-between md:px-20">
      <span className="font-tracked text-[10px] uppercase tracking-[0.14em] text-faint">
        © 2026 Bill Selikem Deyegbe
      </span>
      <span className="font-tracked text-[10px] uppercase tracking-[0.14em] text-faint">
        Built with Next.js
      </span>
    </div>
  );
}
