# Africa Water Solutions Group — Website

A production-grade Next.js website built from the AWSG Website Blueprint (v2, 2026):
water security, treatment plants, reverse osmosis, smart-water platform, WASH hub,
laboratory & quality, and project delivery.

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** with a custom design system (deep navy / water blue / aqua / gold)
- **shadcn/ui-style components** (button, card, badge, accordion, tabs, select, sheet, input, label, separator)
- **Framer Motion** — page transitions, scroll reveals, animated counters, animated SVG charts
- **Lucide** icons, **Sonner** toasts, Radix primitives under the hood

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

```
app/                  # Routes: home, solutions, water-plants (RO), consulting,
                      # sectors, smart-water, laboratory, projects, about, contact
components/
  navbar.tsx          # Sticky nav, mega-menus, mobile sheet, announcement bar
  footer.tsx
  motion.tsx          # Reveal / Stagger / Counter animation primitives
  page-hero.tsx       # Inner-page hero with breadcrumbs & chips
  lead-form.tsx       # Reusable lead form (spinner + toast feedback)
  home/               # Hero, proof bar, problem navigator, solutions grid,
                      # journey, smart teaser, sectors, projects, impact, FAQ, CTA
  ui/                 # shadcn-style primitives
lib/data.ts           # All content (nav, stats, services, sectors, projects, FAQs)
```

## Notes

- Forms simulate async submission (2s) and fire Sonner toasts — wire them to your
  CRM/API in `components/lead-form.tsx` and `app/laboratory/page.tsx`.
- Images load from Unsplash (`next.config.mjs` remotePatterns) — swap in real AWSG
  project photography per the blueprint's visual direction.
- All public statistics carry source + date per the "evidence before adjectives" rule.
- Accessibility: semantic landmarks, focus rings, keyboard-navigable Radix components,
  WCAG-minded contrast in the custom palette.
