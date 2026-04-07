import Link from "next/link";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Logo } from "../ui/Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <Container className="py-3">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="rounded-xl focus-visible:ring-2 focus-visible:ring-blue-500">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 sm:flex">
            <Link className="hover:text-slate-900" href="#features">
              Features
            </Link>
            <Link className="hover:text-slate-900" href="#pricing">
              Pricing
            </Link>
            <Link className="hover:text-slate-900" href="#testimonials">
              Testimonials
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button as={Link} href="#pricing" variant="secondary" size="sm">
              See pricing
            </Button>
            <Button as={Link} href="#pricing" size="sm" className="hidden sm:inline-flex">
              Start free
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}

