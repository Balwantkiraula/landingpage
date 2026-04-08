"use client";

import Link from "next/link";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Logo } from "../ui/Logo";
import { useTheme } from "../ui/ThemeProvider";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/70">
      <Container className="py-3">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="rounded-xl focus-visible:ring-2 focus-visible:ring-blue-500">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 dark:text-slate-300 sm:flex">
            <Link className="hover:text-slate-900 dark:hover:text-slate-50" href="#features">
              Features
            </Link>
            <Link className="hover:text-slate-900 dark:hover:text-slate-50" href="#pricing">
              Pricing
            </Link>
            <Link className="hover:text-slate-900 dark:hover:text-slate-50" href="#testimonials">
              Testimonials
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm shadow-slate-900/5 transition hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:bg-slate-900"
            >
              {isDark ? (
                <span aria-hidden="true" className="text-base">
                  ☀︎
                </span>
              ) : (
                <span aria-hidden="true" className="text-base">
                  ☾
                </span>
              )}
            </button>
            <Button as={Link} href="#pricing" variant="secondary" size="sm">
              See pricing
            </Button>
            <Button as={Link} href="#pricing" size="sm" className="hidden sm:inline-flex">
              Start free
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
