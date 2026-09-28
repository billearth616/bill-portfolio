"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function HeroPhoto() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="View larger photo"
        className="relative mb-7 h-16 w-16 cursor-zoom-in overflow-hidden rounded border border-border-card bg-surface-muted sm:h-[72px] sm:w-[72px]"
      >
        <Image
          src="/bill-photo.jpg"
          alt="Bill Selikem"
          fill
          sizes="72px"
          className="object-cover"
          priority
        />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative aspect-[5/6] w-full max-w-[420px] overflow-hidden rounded border border-border-card bg-surface-muted"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/bill-photo.jpg"
              alt="Bill Selikem"
              fill
              sizes="420px"
              className="object-cover"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded border border-border-default bg-surface text-ink"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
