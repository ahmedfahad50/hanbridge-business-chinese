import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, Container, SectionHeading } from "@/components/ui/Container";
import { ClientCard } from "@/components/ClientCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { CommunicationExampleCard } from "@/components/CommunicationExampleCard";
import { CertificateSection } from "@/components/CertificateSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { caseStudies, clientShowcase, communicationExamples, testimonials } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Proof & Clients",
  description:
    "Verified client information, communication examples, testimonials and case studies for HanBridge Business Chinese.",
  alternates: { canonical: "/proof-and-clients" },
};

export default function ProofAndClientsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Proof & Clients"
        title="Evidence, Not Promises"
        description="Every piece of proof on this page is either verified and supplied by the business, or clearly labeled as a placeholder until it is. We never publish invented names, logos, testimonials or statistics."
      />

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Chinese Customers & Business Connections"
            title="Verified Company Relationships"
            description="Company name, industry and the nature of the business relationship are published only once confirmed for public display."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {clientShowcase.map((client, i) => (
              <ClientCard key={i} client={client} />
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading
            eyebrow="Real Communication Examples"
            title="Customer Communication Examples"
            description="Real conversation examples between employees and Chinese customers, suppliers or partners — with personal information protected or removed."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {communicationExamples.map((example, i) => (
              <CommunicationExampleCard key={i} example={example} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading eyebrow="Testimonials" title="What Clients Say" />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} />
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading eyebrow="Case Studies" title="Company Case Studies" />
          <div className="mt-10 grid grid-cols-1 gap-6">
            {caseStudies.map((caseStudy, i) => (
              <CaseStudyCard key={i} caseStudy={caseStudy} />
            ))}
          </div>
        </Container>
      </Section>

      <CertificateSection />
      <ConsultationCTA />
    </>
  );
}
