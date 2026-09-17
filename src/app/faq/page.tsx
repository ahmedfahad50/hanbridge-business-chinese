import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, Container } from "@/components/ui/Container";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { faqs, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about Business Chinese training, pricing, formats and scheduling.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageHeader
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description={`Everything you need to know before bringing Business Chinese training to your team at ${siteConfig.name}.`}
      />

      <Section>
        <Container className="max-w-3xl">
          <FAQAccordion items={faqs} />
        </Container>
      </Section>

      <ConsultationCTA />
    </>
  );
}
