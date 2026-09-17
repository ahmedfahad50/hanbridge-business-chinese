import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "From your first conversation to confident speaking — how HanBridge Business Chinese designs and delivers corporate training.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="How It Works"
        title="A Simple, Practical Process"
        description="From understanding your team's needs to delivering training — here's exactly how we work together."
      >
        <Button href="/book-consultation" size="lg" withArrow>
          Book a Free Consultation
        </Button>
      </PageHeader>

      <ProcessSteps />
      <ConsultationCTA />
    </>
  );
}
