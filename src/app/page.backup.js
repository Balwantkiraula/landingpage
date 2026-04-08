"use client";

import { useState } from "react";
import { MotionRoot } from "../components/MotionRoot";
import { Header } from "../components/landing/Header";
import { Hero } from "../components/landing/Hero";
import { Features } from "../components/landing/Features";
import { Pricing } from "../components/landing/Pricing";
import { Testimonials } from "../components/landing/Testimonials";
import { Footer } from "../components/landing/Footer";

export default function Home() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const mainClassName = `min-h-dvh transition-colors duration-300 ${
    theme === "light"
      ? "bg-white text-slate-900"
      : "bg-slate-950 text-slate-50"
  }`;

  return (
    <MotionRoot>
      <main className={mainClassName}>
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <Footer />
      </main>
    </MotionRoot>
  );
}
