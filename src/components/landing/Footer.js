"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Logo } from "../ui/Logo";
import { fadeIn, landingViewport, staggerItem, staggerParent } from "../../lib/motion-variants";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-700/80 dark:bg-slate-900">
      <Container className="py-10">
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={landingViewport}
        >
          <motion.div variants={staggerItem} className="space-y-3">
            <Logo />
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-200">
              A lightweight SaaS landing page built with Next.js App Router and Tailwind, designed
              mobile-first.
            </p>
          </motion.div>

          <motion.div variants={staggerItem}>
            <FooterCol title="Product">
              <FooterLink href="#features">Features</FooterLink>
              <FooterLink href="#pricing">Pricing</FooterLink>
              <FooterLink href="#testimonials">Testimonials</FooterLink>
            </FooterCol>
          </motion.div>

          <motion.div variants={staggerItem}>
            <FooterCol title="Company">
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </FooterCol>
          </motion.div>

          <motion.div variants={staggerItem}>
            <FooterCol title="Legal">
              <FooterLink href="#">Privacy</FooterLink>
              <FooterLink href="#">Terms</FooterLink>
              <FooterLink href="#">Security</FooterLink>
            </FooterCol>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-slate-700/70 dark:text-slate-300 sm:flex-row sm:items-center sm:justify-between"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={landingViewport}
        >
          <p>© {new Date().getFullYear()} FlowPilot. All rights reserved.</p>
          <p>more info@flowpilot.com</p>
        </motion.div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">{title}</p>
      <div className="mt-3 space-y-2">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <motion.div whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
      <Link
        href={href}
        className="block text-sm text-slate-600 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
      >
        {children}
      </Link>
    </motion.div>
  );
}
