import { Section, Container, SectionHeading } from "@/components/ui/Container";
import { PricingCard } from "@/components/PricingCard";
import { pricingTiers, pricingVariables } from "@/lib/site-config";

export function PricingSection({ showVariables = true }: { showVariables?: boolean }) {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Clear, Transparent Pricing"
          description="No pricing hidden behind a form. Corporate programs are quoted based on your team's specific needs."
          align="center"
        />

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} />
          ))}
        </div>

        {showVariables && (
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-ink-200 bg-ink-50/60 p-6 text-center sm:p-8">
            <p className="text-sm font-semibold text-ink-900">Corporate pricing may vary according to:</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {pricingVariables.map((v) => (
                <span
                  key={v}
                  className="rounded-full border border-ink-200 bg-white px-3.5 py-1.5 text-xs font-medium text-ink-700"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
