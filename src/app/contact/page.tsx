import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/icons";
import { contactInfo, emailLink, whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact HanBridge Business Chinese to discuss Business Chinese training for your team.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage(props: PageProps<"/contact">) {
  const searchParams = await props.searchParams;
  const interest = typeof searchParams.interest === "string" ? searchParams.interest : undefined;

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's Talk About Your Team"
        description="Tell us about your company and we'll follow up with next steps — or reach us directly using the details below."
      />

      <Section>
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
          <ContactForm defaultInterest={interest} />

          <div className="space-y-4">
            <div className="rounded-2xl border border-ink-200 bg-white p-6">
              <h3 className="font-serif text-lg text-ink-950">Direct Contact</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a href={emailLink} className="flex items-center gap-2.5 text-ink-700 hover:text-brand-700">
                    <Icon name="mail" className="h-4 w-4 shrink-0 text-brand-600" />
                    {contactInfo.email}
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-ink-700 hover:text-brand-700"
                  >
                    <Icon name="whatsapp" className="h-4 w-4 shrink-0 text-brand-600" />
                    WhatsApp: {contactInfo.whatsappDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-ink-700">
                  <Icon name="wechat" className="h-4 w-4 shrink-0 text-brand-600" />
                  WeChat: {contactInfo.wechat}
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-brand-100 bg-brand-50/60 p-6">
              <h3 className="font-serif text-lg text-ink-950">Prefer to Book Directly?</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                Skip the form and book a free 30-minute consultation to discuss your team&apos;s needs.
              </p>
              <a
                href="/book-consultation"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700"
              >
                Book a Consultation
                <Icon name="arrowRight" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
