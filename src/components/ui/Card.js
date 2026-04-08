"use client";

export function Card({ className = "", children }) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-900/5 dark:border-slate-600/60 dark:bg-slate-700/45 dark:shadow-black/25 ${className}`}
    >
      {children}
    </div>
  );
}

