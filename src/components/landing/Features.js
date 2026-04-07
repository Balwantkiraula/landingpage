import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { FEATURES } from "../../lib/landing-data";

export function Features() {
  return (
    <Section id="features" className="bg-white">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Everything you need to run work end-to-end
        </h2>
        <p className="mt-3 text-pretty text-sm leading-relaxed text-slate-600 sm:text-base">
          Keep workflows simple, reusable, and readable. Built with a consistent design system and
          mobile-first spacing.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f) => (
          <Card key={f.title} className="p-5">
            <div className="flex items-start gap-3">
              <div className="grid size-10 shrink-0 place-items-center rounded-2xl bg-slate-100 text-lg">
                <span aria-hidden="true">{f.icon}</span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

