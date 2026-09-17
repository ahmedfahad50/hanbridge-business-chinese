# HanBridge Business Chinese

Corporate marketing website for HanBridge Business Chinese — Business Chinese
training for global teams. Built with Next.js 16 (App Router), TypeScript and
Tailwind CSS v4.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing Content

Almost everything on the site — company info, contact details, pricing,
programs, FAQs, testimonials, teacher bio, resource articles — lives in one
file:

```
src/lib/site-config.ts
```

Edit values there and every page that uses them updates automatically. No
need to touch component code for routine content changes.

### Proof & evidence

`src/lib/site-config.ts` also holds the Proof & Clients placeholders
(`clientShowcase`, `communicationExamples`, `testimonials`, `caseStudies`).
Each entry is marked `isPlaceholder: true` until real, verified evidence is
supplied — replace the placeholder object with real data once the business
confirms it can be published. Never invent client names, logos, quotes, or
statistics.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values as they become
available. Every integration is optional — the site works with none of them
set:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Real production domain, used for canonical URLs, sitemap and Open Graph tags. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 Measurement ID. Analytics stays fully disabled until this is set. |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Enables live card payment on `/checkout` once wired up. Until then, checkout collects details and requests an invoice by email. |

## Forms

The Contact, Book a Consultation, and Checkout forms currently submit via a
pre-filled `mailto:` link to the address in `contactInfo.email`
(`src/lib/site-config.ts`) — no backend or email service is connected yet.
To wire up real delivery later (e.g. a Server Action + an email provider like
Resend), replace the `window.location.href = link` calls in:

- `src/components/ContactForm.tsx`
- `src/components/ConsultationBookingForm.tsx`
- `src/components/CheckoutForm.tsx`

## Payments

`/checkout` is built so a real payment provider (Stripe or PayPal) can be
dropped in later — see `src/lib/payments.ts`. Until
`NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` is set, the page collects package
selection and contact details and requests a manual payment link/invoice
instead of processing a fake charge.

## Analytics

Google Analytics 4 loads only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set
(`src/components/Analytics.tsx`). Page views are tracked automatically on
route change; `trackEvent()` from `src/lib/analytics.ts` fires on the three
real conversion actions: contact form submit, consultation booking submit,
and payment/checkout request. Search Console verification can be added the
same way once a real domain is live (either a meta tag in `layout.tsx` or a
DNS record — no code changes needed for the DNS route).

## Project Structure

```
src/
  app/            Routes (App Router)
  components/     Reusable UI, split into ui/, layout/, home/, and top-level
                   shared components (ProgramCard, PricingCard, forms, etc.)
  lib/            site-config.ts (content), analytics.ts, payments.ts, utils
```

## Scripts

```bash
npm run dev     # start dev server
npm run build   # production build
npm run start   # run the production build
npm run lint    # eslint
```
