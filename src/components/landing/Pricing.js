"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { PLANS } from "../../lib/landing-data";

export function Pricing() {
  const [billing, setBilling] = useState("monthly"); // monthly | yearly

  const view = useMemo(() => {
    const isYearly = billing === "yearly";
    return { isYearly, suffix: isYearly ? "/yr" : "/mo" };
  }, [billing]);

  return (
    <Section id="pricing" className="bg-slate-50">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Simple pricing that scales with you
        </h2>
        <p className="mt-3 text-pretty text-sm leading-relaxed text-slate-600 sm:text-base">
          Toggle billing, pick a plan, and start shipping. No hidden fees.
        </p>

        <BillingToggle value={billing} onChange={setBilling} />
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {PLANS.map((plan) => {
          const price = view.isYearly ? plan.yearlyPrice : plan.monthlyPrice;
          const featured = Boolean(plan.featured);
          return (
            <Card
              key={plan.id}
              className={[
                "p-6",
                featured ? "border-slate-900 shadow-md shadow-slate-900/10" : "",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{plan.name}</p>
                  <p className="mt-1 text-sm text-slate-600">{plan.description}</p>
                </div>
                {featured ? (
                  <span className="rounded-full bg-slate-900 px-2.5 py-1 text-xs font-medium text-white">
                    Most popular
                  </span>
                ) : null}
              </div>

              <div className="mt-5 flex items-end gap-2">
                <p className="text-4xl font-semibold tracking-tight text-slate-900">
                  ${price}
                </p>
                <p className="pb-1 text-sm text-slate-500">{view.suffix}</p>
              </div>
              {view.isYearly ? (
                <p className="mt-1 text-xs text-slate-500">Billed yearly. Save ~20%.</p>
              ) : (
                <p className="mt-1 text-xs text-slate-500">Billed monthly.</p>
              )}

              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {plan.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <span aria-hidden="true" className="mt-0.5 text-slate-900">
                      ✓
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  as={Link}
                  href="#"
                  size="lg"
                  className={featured ? "w-full" : "w-full"}
                >
                  {plan.cta}
                </Button>
                <Button as={Link} href="#features" variant="secondary" size="lg" className="w-full">
                  Compare
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

function BillingToggle({ value, onChange }) {
  const monthlyActive = value === "monthly";
  return (
    <div className="mt-6 flex items-center justify-center">
      <div className="inline-flex rounded-2xl border border-slate-200 bg-white p-1 shadow-sm shadow-slate-900/5">
        <button
          type="button"
          onClick={() => onChange("monthly")}
          className={[
            "h-9 rounded-xl px-3 text-sm font-medium transition",
            monthlyActive ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-50",
          ].join(" ")}
          aria-pressed={monthlyActive}
        >
          Monthly
        </button>
        <button
          type="button"
          onClick={() => onChange("yearly")}
          className={[
            "h-9 rounded-xl px-3 text-sm font-medium transition",
            !monthlyActive ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-50",
          ].join(" ")}
          aria-pressed={!monthlyActive}
        >
          Yearly
          <span className="ml-2 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
            Save
          </span>
        </button>
      </div>
    </div>
  );
}

