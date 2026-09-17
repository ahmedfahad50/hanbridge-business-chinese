import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, Container, SectionHeading } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/icons";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { FormatsSection } from "@/components/FormatsSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { ProcessSteps } from "@/components/ProcessSteps";
import { PricingSection } from "@/components/PricingSection";
import { ProofPreviewSection } from "@/components/home/ProofPreviewSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const metadata: Metadata = {
  title: "Corporate Chinese Training for Global Teams",
  description:
    "Corporate Mandarin training for employees who work with Chinese clients, suppliers and partners — customized department by department, with course design in 2 days.",
  alternates: { canonical: "/corporate-training" },
};

const departmentFocus: { title: string; description: string; icon: IconName }[] = [
  { title: "Sales & Business Development", description: "Confident conversations with Chinese customers and partners.", icon: "handshake" },
  { title: "Customer Service & Support", description: "Clear, professional responses in every interaction.", icon: "headset" },
  { title: "Procurement & Supply Chain", description: "Practical language for suppliers, specs and negotiations.", icon: "truck" },
  { title: "Management & Executives", description: "Leadership communication for high-level meetings.", icon: "crown" },
];

export default function CorporateTrainingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Corporate Chinese Training"
        title="Corporate Mandarin Training for Employees Who Work With Chinese Contacts"
        description="Business Chinese training for companies whose teams communicate with Chinese customers, suppliers, partners and colleagues — built department by department, with customized course design ready in 2 days."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/book-consultation" size="lg" withArrow>
            Book a Free Consultation
          </Button>
          <Button href="/pricing" variant="outline-light" size="lg">
            View Pricing
          </Button>
        </div>
      </PageHeader>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Who This Is For"
            title="Built for International Companies, Not Individual Learners"
            description="If your employees speak with Chinese clients, suppliers, partners or colleagues, training should reflect their actual role — not a generic language course."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {departmentFocus.map((item) => (
              <div key={item.title} className="rounded-2xl border border-ink-200 bg-white p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon name={item.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-lg text-ink-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <ProgramsSection />
      <FormatsSection />

      <Section>
        <Container className="flex flex-col items-center gap-4 rounded-3xl bg-brand-600 px-6 py-12 text-center text-white sm:px-12">
          <Icon name="clock" className="h-8 w-8" />
          <h2 className="font-serif text-3xl sm:text-4xl">Customized Course Design in 2 Days</h2>
          <p className="max-w-xl text-brand-50">
            Once we understand your team, department and business situations, a customized Business Chinese training
            plan can be designed within 2 days.
          </p>
        </Container>
      </Section>

      <WhyUsSection />
      <ProcessSteps />
      <ProofPreviewSection />
      <PricingSection showVariables={false} />
      <ConsultationCTA />
    </>
  );
}
