"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { TESTIMONIALS } from "../../lib/landing-data";
import { fadeIn, landingViewport, staggerItem, staggerParent } from "../../lib/motion-variants";

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-white">
      <motion.div
        className="mx-auto max-w-2xl text-center"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={landingViewport}
      >
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Teams love how simple it feels
        </h2>
      </motion.div>

      <motion.div
        className="mt-10 grid gap-4 lg:grid-cols-3"
        variants={staggerParent}
        initial="hidden"
        whileInView="visible"
        viewport={landingViewport}
      >
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.name}
            variants={staggerItem}
            whileHover={{ y: -5, transition: { type: "spring", stiffness: 380, damping: 22 } }}
          >
            <Card className="h-full p-6 transition-shadow duration-300 hover:shadow-md hover:shadow-slate-900/10">
              <p className="text-sm leading-relaxed text-slate-700">“{t.quote}”</p>
              <div className="mt-5 flex items-center gap-3">
                <motion.div
                  aria-hidden="true"
                  className="grid size-10 place-items-center rounded-2xl bg-slate-100 text-sm font-semibold text-slate-700"
                  initial={{ scale: 0.85, opacity: 0.8 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, type: "spring", stiffness: 300, damping: 20 }}
                >
                  {initials(t.name)}
                </motion.div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
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
