import { Header } from "../components/landing/Header";
import { Hero } from "../components/landing/Hero";
import { Features } from "../components/landing/Features";
import { Pricing } from "../components/landing/Pricing";
import { Testimonials } from "../components/landing/Testimonials";
import { Footer } from "../components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-dvh">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  );
}