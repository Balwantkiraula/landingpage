"use client";

export function Card({ className = "", children }) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-900/5 dark:border-slate-700/80 dark:bg-slate-800/70 dark:shadow-black/30 ${className}`}
    >
      {children}
    </div>
  );
}

