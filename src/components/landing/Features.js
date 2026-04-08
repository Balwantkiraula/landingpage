"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { FEATURES } from "../../lib/landing-data";
import { fadeIn, landingViewport, staggerItem, staggerParent } from "../../lib/motion-variants";

export function Features() {
  return (
    <Section id="features" className="bg-white dark:bg-slate-900">
      <motion.div
        className="mx-auto max-w-2xl text-center"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={landingViewport}
      >
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
          Everything you need to run work end-to-end
        </h2>
        <p className="mt-3 text-pretty text-sm leading-relaxed text-slate-600 dark:text-slate-200 sm:text-base">
          Keep workflows simple, reusable, and readable. Built with a consistent design system and
          mobile-first spacing.
        </p>
      </motion.div>

      <motion.div
        className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        variants={staggerParent}
        initial="hidden"
        whileInView="visible"
        viewport={landingViewport}
      >
        {FEATURES.map((f) => (
          <motion.div key={f.title} variants={staggerItem}>
            <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
              <Card className="h-full p-5 transition-shadow duration-300 hover:shadow-md hover:shadow-slate-900/10">
                <div className="flex items-start gap-3">
                  <div className="grid size-10 shrink-0 place-items-center rounded-2xl bg-slate-100 text-lg dark:bg-slate-700/60 dark:text-slate-50">
                    <span aria-hidden="true">{f.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-200">
                      {f.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
