export function StatusStrip() {
  return (
    <div className="flex flex-col gap-2 border-b border-border px-5 py-4 sm:flex-row sm:items-center sm:justify-between md:px-16">
      <div className="flex items-center gap-2.5">
        <span className="inline-block h-[7px] w-[7px] rounded-full bg-accent" />
        <span className="font-tracked text-[11px] uppercase tracking-[0.14em]">
          Available for freelance work
        </span>
      </div>
      <span className="font-tracked text-[11px] uppercase tracking-[0.14em] text-faint">
        MSc Computer Science · University of Ghana
      </span>
    </div>
  );
}
