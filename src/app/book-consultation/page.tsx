import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, Container } from "@/components/ui/Container";
import { ConsultationBookingForm } from "@/components/ConsultationBookingForm";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description: "Book a free 30-minute consultation to discuss Business Chinese training for your team.",
  alternates: { canonical: "/book-consultation" },
};

const included = [
  "A short discussion of your team, department and goals",
  "An overview of relevant training programs and formats",
  "A clear next step — including how the 2-day custom course design works",
];

export default async function BookConsultationPage(props: PageProps<"/book-consultation">) {
  const searchParams = await props.searchParams;
  const plan = typeof searchParams.plan === "string" ? searchParams.plan : undefined;

  return (
    <>
      <PageHeader
        eyebrow="Free 30-Minute Consultation"
        title="Book a Free Consultation"
        description="Tell us a little about your team and choose a time that works for you. We'll confirm your consultation by email."
      />

      <Section>
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
          <ConsultationBookingForm plan={plan} />

          <div className="space-y-4">
            <div className="rounded-2xl border border-ink-200 bg-white p-6">
              <h3 className="font-serif text-lg text-ink-950">What&apos;s Included</h3>
              <ul className="mt-4 space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-700">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-100 bg-brand-50/60 p-6 text-sm leading-relaxed text-ink-700">
              After you submit your request, we&apos;ll send a calendar invitation and meeting link by email to confirm
              your consultation time.
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
