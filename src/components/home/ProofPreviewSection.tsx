import { Section, Container, SectionHeading } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ClientCard } from "@/components/ClientCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { clientShowcase, testimonials } from "@/lib/site-config";

export function ProofPreviewSection() {
  return (
    <Section tone="muted">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Proof & Clients"
            title="Built on Real Business Relationships"
            description="Verified client information, communication examples and testimonials are published as they are confirmed for public use."
          />
          <Button href="/proof-and-clients" variant="ghost" withArrow className="shrink-0">
            View Proof & Clients
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {clientShowcase.map((client, i) => (
            <ClientCard key={i} client={client} />
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
