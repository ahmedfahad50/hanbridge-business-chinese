// Payment integration placeholder.
// No payment provider is connected yet. Once a Stripe (or PayPal) account is
// ready, set NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY (and wire a real checkout
// session on the server) — paymentsEnabled will then switch the checkout
// page from "request an invoice" to a live card payment flow.

export const paymentsEnabled = Boolean(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
