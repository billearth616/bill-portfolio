import type { ReactNode } from "react";

export function Label({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-tracked text-[11px] uppercase tracking-[0.14em] text-faint ${className}`}
    >
      {children}
    </span>
  );
}
