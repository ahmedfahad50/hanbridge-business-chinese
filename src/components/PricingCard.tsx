import { Icon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import type { PricingTier } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-2xl border p-7 sm:p-8",
        tier.highlighted
          ? "border-brand-600 bg-ink-950 text-white shadow-xl shadow-brand-900/20"
          : "border-ink-200 bg-white"
      )}
    >
      {tier.highlighted && (
        <span className="mb-4 inline-flex w-fit items-center rounded-full bg-brand-500/20 px-3 py-1 text-xs font-semibold text-brand-300">
          Most Popular
        </span>
      )}
      <h3 className={cn("font-serif text-xl", tier.highlighted ? "text-white" : "text-ink-950")}>{tier.label}</h3>
      <p className={cn("mt-1 text-sm", tier.highlighted ? "text-ink-300" : "text-ink-500")}>{tier.description}</p>

      <div className="mt-6 flex items-baseline gap-1.5">
        <span className="font-serif text-4xl">{tier.price}</span>
        <span className={cn("text-sm", tier.highlighted ? "text-ink-300" : "text-ink-500")}>{tier.unit}</span>
      </div>
      {tier.note && (
        <p className={cn("mt-1 text-xs font-medium", tier.highlighted ? "text-brand-300" : "text-brand-700")}>
          {tier.note}
        </p>
      )}

      <ul className="mt-6 flex-1 space-y-2.5">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <Icon
              name="check"
              className={cn("mt-0.5 h-4 w-4 shrink-0", tier.highlighted ? "text-brand-400" : "text-brand-600")}
            />
            <span className={tier.highlighted ? "text-ink-200" : "text-ink-700"}>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        href={tier.ctaHref}
        variant={tier.highlighted ? "primary" : "secondary"}
        className="mt-8 w-full"
        withArrow
      >
        {tier.ctaLabel}
      </Button>

      {tier.id !== "corporate" && (
        <Button
          href={`/checkout?plan=${tier.id}`}
          variant={tier.highlighted ? "outline-light" : "ghost"}
          className="mt-3 w-full"
        >
          Pay Now
        </Button>
      )}
    </div>
  );
}
