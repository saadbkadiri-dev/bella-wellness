# Bella Wellness Project Context

## Overview
Bella Wellness is an exclusive sanctuary designed entirely for women to move, heal, and glow. It is built as a highly responsive, modern, minimalist Next.js web application.

## Tech Stack
- Framework: Next.js 15 (App Router)
- React: 19
- Styling: Tailwind CSS v4 (using `@theme` in `globals.css`)
- Typography: Libre Caslon Display (Headings) & Sora (Body) via `next/font/google`
- Animations: Framer Motion (for staggered reveals and asymmetric transitions)
- Smooth Scrolling: Lenis

## Design System & Rules
- **Aesthetic:** Editorial, organic, tactile, high-end luxury.
- **Layout:** Asymmetric split layouts (e.g., 55% text, 45% image), fluid overlapping, left-aligned text preference.
- **Avoid:** Generic blocks, cards with heavy drop shadows, rounded pills, horizontal dividers, and centered AI-looking templates.
- **Phase 1 Rules:** Strictly follow `content.md`. Zero CTAs or buttons. No external booking links yet.

## Current State
- The landing page (`/`), About (`/about`), and Gallery (`/gallery`) pages are implemented.
- The project is configured with a custom preloader, smooth scrolling, and editorial fluid typography using CSS clamps.
- Repository is successfully hosted on GitHub (`saadbkadiri-dev/bella-wellness`) with large design assets (`*.fig`, `*.mov`, etc.) properly ignored.
- Connected to Vercel for continuous deployment, with a configured `.vercelignore` to optimize build sizes.
