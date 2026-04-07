export function Logo({ className = "" }) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span
        aria-hidden="true"
        className="grid size-8 place-items-center rounded-xl bg-slate-900 text-white shadow-sm shadow-slate-900/10"
      >
        FP
      </span>
      <span className="text-sm font-semibold tracking-tight text-slate-900">
        FlowPilot
      </span>
    </div>
  );
}

