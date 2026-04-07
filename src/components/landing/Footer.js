import Link from "next/link";
import { Container } from "../ui/Container";
import { Logo } from "../ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <Logo />
            <p className="text-sm leading-relaxed text-slate-600">
              A lightweight SaaS landing page built with Next.js App Router and Tailwind, designed
              mobile-first.
            </p>
          </div>

          <FooterCol title="Product">
            <FooterLink href="#features">Features</FooterLink>
            <FooterLink href="#pricing">Pricing</FooterLink>
            <FooterLink href="#testimonials">Testimonials</FooterLink>
          </FooterCol>

          <FooterCol title="Company">
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterCol>

          <FooterCol title="Legal">
            <FooterLink href="#">Privacy</FooterLink>
            <FooterLink href="#">Terms</FooterLink>
            <FooterLink href="#">Security</FooterLink>
          </FooterCol>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} FlowPilot. All rights reserved.</p>
          <p>Built for the assignment — no pre-built template.</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <p className="text-sm font-semibold text-slate-900">{title}</p>
      <div className="mt-3 space-y-2">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <Link href={href} className="block text-sm text-slate-600 hover:text-slate-900">
      {children}
    </Link>
  );
}

