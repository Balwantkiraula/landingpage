"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Logo } from "../ui/Logo";

const navLinkClass = "relative rounded-lg text-slate-600 hover:text-slate-900";

export function Header() {
  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur"
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container className="py-3">
        <div className="flex items-center justify-between gap-3">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href="/" className="block rounded-xl focus-visible:ring-2 focus-visible:ring-blue-500">
              <Logo />
            </Link>
          </motion.div>

          <nav className="hidden items-center gap-6 text-sm sm:flex">
            <motion.div whileHover={{ y: -1 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
              <Link className={navLinkClass} href="#features">
                Features
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -1 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
              <Link className={navLinkClass} href="#pricing">
                Pricing
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -1 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
              <Link className={navLinkClass} href="#testimonials">
                Testimonials
              </Link>
            </motion.div>
          </nav>

          <div className="flex items-center gap-2">
            <motion.span className="inline-flex" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button as={Link} href="#pricing" variant="secondary" size="sm">
                See pricing
              </Button>
            </motion.span>
            <motion.span className="hidden sm:inline-flex" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button as={Link} href="#pricing" size="sm">
                Start free
              </Button>
            </motion.span>
          </div>
        </div>
      </Container>
    </motion.header>
  );
}
