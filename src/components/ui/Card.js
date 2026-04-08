"use client";

export function Card({ className = "", children }) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-900/5 ${className}`}
    >
      {children}
    </div>
  );
}

