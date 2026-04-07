import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { TESTIMONIALS } from "../../lib/landing-data";

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-white">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Teams love how simple it feels
        </h2>
        <p className="mt-3 text-pretty text-sm leading-relaxed text-slate-600 sm:text-base">
          Static testimonials (no extra libraries) to keep performance solid.
        </p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <Card key={t.name} className="p-6">
            <p className="text-sm leading-relaxed text-slate-700">“{t.quote}”</p>
            <div className="mt-5 flex items-center gap-3">
              <div
                aria-hidden="true"
                className="grid size-10 place-items-center rounded-2xl bg-slate-100 text-sm font-semibold text-slate-700"
              >
                {initials(t.name)}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

