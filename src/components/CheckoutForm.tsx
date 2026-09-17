"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/icons";
import { contactInfo } from "@/lib/site-config";
import type { PricingTier } from "@/lib/site-config";
import { buildMailtoLink } from "@/lib/mailto";
import { paymentsEnabled } from "@/lib/payments";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100";
const labelClass = "mb-1.5 block text-sm font-medium text-ink-800";

export function CheckoutForm({ tiers, initialPlan }: { tiers: PricingTier[]; initialPlan: string }) {
  const [planId, setPlanId] = useState(tiers.some((t) => t.id === initialPlan) ? initialPlan : tiers[0].id);
  const [submitted, setSubmitted] = useState(false);
  const selectedTier = tiers.find((t) => t.id === planId) ?? tiers[0];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const link = buildMailtoLink(
      contactInfo.email,
      `Payment Request — ${selectedTier.label} Package`,
      [
        ["Package", `${selectedTier.label} (${selectedTier.price} ${selectedTier.unit})`],
        ["Full Name", String(data.get("fullName") || "")],
        ["Work Email", String(data.get("workEmail") || "")],
        ["Company Name", String(data.get("companyName") || "")],
        ["Notes", String(data.get("notes") || "")],
      ]
    );

    trackEvent("payment_button_click", { plan: selectedTier.id });
    window.location.href = link;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white">
          <Icon name="check" className="h-6 w-6" />
        </span>
        <h3 className="font-serif text-xl text-ink-950">Payment request sent</h3>
        <p className="max-w-sm text-sm text-ink-600">
          Please send the pre-filled email to confirm. We will follow up with a secure payment link or invoice for
          the {selectedTier.label} package.
        </p>
        <Button variant="ghost" onClick={() => setSubmitted(false)} className="mt-2">
          Start over
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8">
      <div>
        <p className={labelClass}>1. Select Package</p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {tiers.map((tier) => (
            <button
              key={tier.id}
              type="button"
              onClick={() => setPlanId(tier.id)}
              className={cn(
                "rounded-xl border p-4 text-left transition-colors",
                planId === tier.id ? "border-brand-600 bg-brand-50" : "border-ink-200 bg-white hover:border-ink-300"
              )}
            >
              <p className="text-sm font-semibold text-ink-900">{tier.label}</p>
              <p className="mt-1 text-xs text-ink-500">
                {tier.price} {tier.unit}
              </p>
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className={labelClass}>2. Enter Your Information</p>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="fullName">
              Full Name
            </label>
            <input id="fullName" name="fullName" required className={inputClass} placeholder="Jane Smith" />
          </div>
          <div>
            <label className={labelClass} htmlFor="workEmail">
              Work Email
            </label>
            <input
              id="workEmail"
              name="workEmail"
              type="email"
              required
              className={inputClass}
              placeholder="jane@company.com"
            />
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor="companyName">
              Company Name
            </label>
            <input id="companyName" name="companyName" required className={inputClass} placeholder="Company Ltd." />
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor="notes">
              Notes (optional)
            </label>
            <textarea id="notes" name="notes" rows={3} className={inputClass} placeholder="Anything we should know?" />
          </div>

          <div className="sm:col-span-2 rounded-xl border border-dashed border-ink-300 bg-ink-50/60 p-4">
            <p className="text-sm font-semibold text-ink-800">3. Pay</p>
            {paymentsEnabled ? (
              <p className="mt-1 text-sm text-ink-600">Secure card payment will load here.</p>
            ) : (
              <p className="mt-1 text-sm text-ink-600">
                Online card payment is being set up. Submit below and we&apos;ll send a secure payment link or
                invoice by email — no payment is processed on this page yet.
              </p>
            )}
          </div>

          <div className="sm:col-span-2">
            <Button type="submit" size="lg" className="w-full sm:w-auto" withArrow>
              {paymentsEnabled ? "Pay Now" : "Request Payment Link"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
