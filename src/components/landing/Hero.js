import Link from "next/link";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

export function Hero() {
  return (
    <Section className="pt-10 sm:pt-14">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-5 lg:max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
            <span className="font-semibold text-slate-900">New</span>
            <span>Automations + analytics in one place</span>
          </div>

          <h1 className="text-pretty text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Ship faster with a modern workflow platform for teams
          </h1>
          <p className="text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
            FlowPilot helps you automate repetitive work, stay aligned, and track progress without
            the overhead. Mobile-first UX, fast performance, and a clean design system.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button as={Link} href="#pricing" size="lg">
              Start free
            </Button>
            <Button as={Link} href="#features" variant="secondary" size="lg">
              Explore features
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600">
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true">✓</span> No credit card required
            </span>
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true">✓</span> Cancel anytime
            </span>
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true">✓</span> Setup in minutes
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-linear-to-b from-blue-50 to-white" />
          <Card className="overflow-hidden">
            <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-900">Today</p>
                <p className="text-xs text-slate-500">Live overview</p>
              </div>
            </div>
            <div className="space-y-4 p-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <MiniStat label="Automations run" value="128" />
                <MiniStat label="Blocked tasks" value="3" tone="warn" />
              </div>
              <div className="space-y-3">
                <MiniRow title="Weekly rollout" meta="On track" />
                <MiniRow title="Incident follow-up" meta="Due tomorrow" />
                <MiniRow title="Customer onboarding" meta="3 active" />
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-3">
                <p className="text-xs font-medium text-slate-900">Insight</p>
                <p className="mt-1 text-sm text-slate-600">
                  Your cycle time improved by <span className="font-semibold text-slate-900">18%</span>{" "}
                  this week.
                </p>
              </div>
            </div>
          </Card>
          <p className="mt-3 text-center text-xs text-slate-500">
            Lightweight UI built for performance.
          </p>
        </div>
      </div>
    </Section>
  );
}

function MiniStat({ label, value, tone = "ok" }) {
  const badge =
    tone === "warn"
      ? "bg-amber-50 text-amber-700 border-amber-200"
      : "bg-emerald-50 text-emerald-700 border-emerald-200";
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-3">
      <p className="text-xs text-slate-500">{label}</p>
      <div className="mt-2 flex items-end justify-between gap-2">
        <p className="text-2xl font-semibold tracking-tight text-slate-900">{value}</p>
        <span className={`rounded-full border px-2 py-1 text-[11px] ${badge}`}>
          {tone === "warn" ? "Needs attention" : "Healthy"}
        </span>
      </div>
    </div>
  );
}

function MiniRow({ title, meta }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2">
      <p className="text-sm font-medium text-slate-900">{title}</p>
      <p className="text-xs text-slate-500">{meta}</p>
    </div>
  );
}

