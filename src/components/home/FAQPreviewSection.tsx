import { Section, Container, SectionHeading } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/FAQAccordion";
import { faqs } from "@/lib/site-config";

export function FAQPreviewSection() {
  return (
    <Section tone="muted">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Common Questions" align="center" />
        <div className="mt-10">
          <FAQAccordion items={faqs.slice(0, 6)} />
        </div>
        <div className="mt-8 text-center">
          <Button href="/faq" variant="ghost" withArrow>
            View All FAQs
          </Button>
        </div>
      </Container>
    </Section>
  );
}
