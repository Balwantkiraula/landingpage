"use client";

export function Button({
  as: Comp = "button",
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ring-offset-white dark:ring-offset-slate-900 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-slate-900 text-white hover:bg-slate-800 shadow-sm shadow-slate-900/10 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-white",
    secondary:
      "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 dark:bg-slate-700/35 dark:text-slate-100 dark:border-slate-600/60 dark:hover:bg-slate-700/55",
    ghost: "text-slate-900 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-700/45",
  };

  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-4 text-sm sm:text-base",
    lg: "h-12 px-5 text-base",
  };

  return (
    <Comp
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}

