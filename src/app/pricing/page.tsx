import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PricingSection } from "@/components/PricingSection";
import { Section, Container, SectionHeading } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/FAQAccordion";
import { faqs } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for Business Chinese training — individual, small group and corporate customized programs.",
  alternates: { canonical: "/pricing" },
};

const pricingFaqs = faqs.filter((f) =>
  ["How much does training cost?", "Can companies request an invoice?", "Can we pay online?"].includes(f.question)
);

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Simple, Transparent Pricing"
        description="See pricing up front — no forms required. Corporate programs are quoted based on your team's specific needs."
      />

      <PricingSection />

      <Section tone="muted">
        <Container className="flex flex-col items-center gap-5 text-center">
          <SectionHeading title="Prefer to Talk It Through?" align="center" />
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/book-consultation" size="lg" withArrow>
              Book a Consultation
            </Button>
            <Button href="/contact" variant="ghost" size="lg">
              Contact Us
            </Button>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Pricing FAQ" title="Common Pricing Questions" align="center" />
          <div className="mt-10">
            <FAQAccordion items={pricingFaqs} />
          </div>
        </Container>
      </Section>
    </>
  );
}
