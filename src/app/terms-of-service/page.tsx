import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, Container } from "@/components/ui/Container";
import { contactInfo, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${siteConfig.name}.`,
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Service" />
      <Section>
        <Container className="max-w-3xl space-y-6 text-sm leading-relaxed text-ink-700 sm:text-base">
          <p className="text-sm text-ink-500">Last updated: {new Date().getFullYear()}</p>

          <p>
            These Terms of Service govern your use of the {siteConfig.name} website and the training services
            described on it. By using this website or booking training, you agree to these terms.
          </p>

          <h2 className="font-serif text-xl text-ink-950">Services</h2>
          <p>
            {siteConfig.name} provides practical, customized Business Chinese training for employees of
            international companies. Program content, pricing and scheduling are agreed with each client before
            training begins.
          </p>

          <h2 className="font-serif text-xl text-ink-950">Pricing & Payment</h2>
          <p>
            Published pricing reflects standard rates at the time of publishing and may vary for corporate,
            customized programs based on the factors described on the Pricing page. Payment terms will be confirmed
            directly with each client before a program begins.
          </p>

          <h2 className="font-serif text-xl text-ink-950">Certificates of Completion</h2>
          <p>
            A Certificate of Completion may be issued for applicable programs. This certificate reflects completion
            of training with {siteConfig.name} and is not a claim of formal accreditation unless explicitly stated.
          </p>

          <h2 className="font-serif text-xl text-ink-950">Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${contactInfo.email}`} className="text-brand-700 underline">
              {contactInfo.email}
            </a>
            .
          </p>
        </Container>
      </Section>
    </>
  );
}
