import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, Container } from "@/components/ui/Container";
import { contactInfo, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <Section>
        <Container className="max-w-3xl space-y-6 text-sm leading-relaxed text-ink-700 sm:text-base">
          <p className="text-sm text-ink-500">Last updated: {new Date().getFullYear()}</p>

          <p>
            {siteConfig.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your privacy. This Privacy Policy explains what
            information we collect through this website and how it is used.
          </p>

          <h2 className="font-serif text-xl text-ink-950 mt-8">Information We Collect</h2>
          <p>
            When you submit a contact form, consultation request, or otherwise reach out to us, we may collect
            information such as your name, work email address, company name, job title, country, department and
            details about your training needs.
          </p>

          <h2 className="font-serif text-xl text-ink-950 mt-8">How We Use Information</h2>
          <p>
            Information submitted through this website is used solely to respond to your inquiry, prepare a
            consultation, or provide the training services you have requested. We do not sell your information to
            third parties.
          </p>

          <h2 className="font-serif text-xl text-ink-950 mt-8">Contact & Consultation Forms</h2>
          <p>
            Forms on this site are designed to send your inquiry directly to our team via email. Please only submit
            information you are comfortable sharing for this purpose.
          </p>

          <h2 className="font-serif text-xl text-ink-950 mt-8">Contacting Us</h2>
          <p>
            If you have questions about this Privacy Policy or how your information is handled, contact us at{" "}
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
