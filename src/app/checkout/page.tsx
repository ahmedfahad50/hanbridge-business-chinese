import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, Container } from "@/components/ui/Container";
import { CheckoutForm } from "@/components/CheckoutForm";
import { pricingTiers } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Select a training package and request payment for HanBridge Business Chinese.",
  robots: { index: false, follow: true },
};

const payableTiers = pricingTiers.filter((t) => t.id !== "corporate");

export default async function CheckoutPage(props: PageProps<"/checkout">) {
  const searchParams = await props.searchParams;
  const plan = typeof searchParams.plan === "string" ? searchParams.plan : payableTiers[0].id;

  return (
    <>
      <PageHeader
        eyebrow="Checkout"
        title="Select Your Package"
        description="Choose a package, enter your information, and we'll follow up to complete payment securely."
      />
      <Section>
        <Container className="max-w-2xl">
          <CheckoutForm tiers={payableTiers} initialPlan={plan} />
        </Container>
      </Section>
    </>
  );
}
