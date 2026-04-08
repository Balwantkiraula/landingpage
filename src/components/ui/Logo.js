"use client";

export function Logo({ className = "" }) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span
        aria-hidden="true"
        className="grid size-8 place-items-center rounded-xl bg-slate-900 text-white shadow-sm shadow-slate-900/10 transition-colors dark:bg-slate-50 dark:text-slate-900 dark:shadow-black/20"
      >
        FP
      </span>
      <span className="text-sm font-semibold tracking-tight text-slate-900 transition-colors dark:text-slate-50">
        FlowPilot
      </span>
    </div>
  );
}

