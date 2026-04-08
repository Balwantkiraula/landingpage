"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { staggerContainer, staggerItem, staggerParent } from "../../lib/motion-variants";

export function Hero() {
  return (
    <Section className="pt-10 sm:pt-14">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          className="space-y-5 lg:max-w-xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={staggerItem}>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 dark:border-slate-600/60 dark:bg-slate-700/35 dark:text-slate-200">
              <span className="font-semibold text-slate-900 dark:text-slate-50">New</span>
              <span>Automations + analytics in one place</span>
            </div>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="text-pretty text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl lg:text-5xl"
          >
            Ship faster with a modern workflow platform for teams
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="text-pretty text-base leading-relaxed text-slate-600 dark:text-slate-200 sm:text-lg"
          >
            FlowPilot helps you automate repetitive work, stay aligned, and track progress without
            the overhead. Mobile-first UX, fast performance, and a clean design system.
          </motion.p>

          <motion.div variants={staggerItem} className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <motion.span className="inline-flex sm:flex-initial" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button as={Link} href="#pricing" size="lg" className="w-full sm:w-auto">
                Start free
              </Button>
            </motion.span>
            <motion.span className="inline-flex sm:flex-initial" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button as={Link} href="#features" variant="secondary" size="lg" className="w-full sm:w-auto">
                Explore features
              </Button>
            </motion.span>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600 dark:text-slate-200"
          >
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true">✓</span> No credit card required
            </span>
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true">✓</span> Cancel anytime
            </span>
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true">✓</span> Setup in minutes
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-linear-to-b from-blue-50 to-white dark:from-slate-800 dark:to-slate-900" />
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <Card className="overflow-hidden">
              <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-600/60 dark:bg-slate-700/35">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-50">Today</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Live overview</p>
                </div>
              </div>
              <div className="space-y-4 p-4">
                <motion.div
                  className="grid gap-3 sm:grid-cols-2"
                  variants={staggerParent}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={staggerItem}>
                    <MiniStat label="Automations run" value="128" />
                  </motion.div>
                  <motion.div variants={staggerItem}>
                    <MiniStat label="Blocked tasks" value="3" tone="warn" />
                  </motion.div>
                </motion.div>
                <div className="space-y-3">
                  <MiniRow title="Weekly rollout" meta="On track" />
                  <MiniRow title="Incident follow-up" meta="Due tomorrow" />
                  <MiniRow title="Customer onboarding" meta="3 active" />
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-slate-600/60 dark:bg-slate-700/35">
                  <p className="text-xs font-medium text-slate-900 dark:text-slate-50">Insight</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Your cycle time improved by{" "}
                    <span className="font-semibold text-slate-900 dark:text-slate-50">18%</span>{" "}
                    this week.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}

function MiniStat({ label, value, tone = "ok" }) {
  const badge =
    tone === "warn"
      ? "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-200 dark:border-amber-500/30"
      : "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-200 dark:border-emerald-500/30";
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-slate-600/60 dark:bg-slate-700/35">
      <p className="text-xs text-slate-500 dark:text-slate-400">{label}</p>
      <div className="mt-2 flex items-end justify-between gap-2">
        <p className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">{value}</p>
        <span className={`rounded-full border px-2 py-1 text-[11px] ${badge}`}>
          {tone === "warn" ? "Needs attention" : "Healthy"}
        </span>
      </div>
    </div>
  );
}

function MiniRow({ title, meta }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-600/60 dark:bg-slate-700/35">
      <p className="text-sm font-medium text-slate-900 dark:text-slate-50">{title}</p>
      <p className="text-xs text-slate-500 dark:text-slate-400">{meta}</p>
    </div>
  );
}
