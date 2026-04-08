#  — Modern Landing Page

A polished landing page built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**.

## Project Overview

This project is a clean, component-driven landing page for a SaaS-style workflow platform. It demonstrates:

- A modern **App Router** layout using `src/app/page.js`
- Reusable UI components for header, hero, features, pricing, testimonials, and footer
- **Dark mode support** with a theme toggle
- Smooth **motion transitions** and hover interactions via `framer-motion`
- A responsive layout built with Tailwind CSS utility classes

## What I built

- **Header** with sticky navigation, logo, theme toggle, and CTA buttons
- **Hero section** with a feature-focused headline, action buttons, and animated dashboard preview
- **Features grid** displaying product capabilities with cards and staggered reveal animations
- **Pricing section** with toggleable monthly/yearly billing and plan cards
- **Testimonials section** with customer quotes and interactive hover effects
- **Footer** to complete the landing experience and maintain page structure



## Tech stack

- `next` 16.2.2
- `react` 19.2.4
- `react-dom` 19.2.4
- `tailwindcss` v4
- `@tailwindcss/postcss`
- `framer-motion`
- `eslint` + `eslint-config-next`

## Project structure

- `src/app/page.js` — main landing page composition
- `src/components/landing/` — landing page sections and experience components
- `src/components/ui/` — reusable UI primitives like `Button`, `Card`, `Container`, `ThemeProvider`
- `src/lib/landing-data.js` — feature, pricing, and testimonial content
- `src/lib/motion-variants.js` — motion animation definitions

## Improvements I would make with more time

- Add more complete **mobile responsiveness** and edge-case layouts
- Improve **accessibility** with richer ARIA support and screen-reader labels

## Run locally

```bash
npm install
npm run dev
```

Open `https://landingpage-gamma-nine-76.vercel.app/` to view the app.
