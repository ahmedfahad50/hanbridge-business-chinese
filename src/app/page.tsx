import { Hero } from "@/components/home/Hero";
import { ProblemSection } from "@/components/home/ProblemSection";
import { SolutionSection } from "@/components/home/SolutionSection";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { FormatsSection } from "@/components/FormatsSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ProofPreviewSection } from "@/components/home/ProofPreviewSection";
import { CertificateSection } from "@/components/CertificateSection";
import { PricingSection } from "@/components/PricingSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { FAQPreviewSection } from "@/components/home/FAQPreviewSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ProgramsSection />
      <FormatsSection />
      <WhyUsSection />
      <ProcessSteps tone="default" />
      <ProofPreviewSection />
      <CertificateSection />
      <PricingSection showVariables={false} />
      <ConsultationCTA />
      <FAQPreviewSection />
    </>
  );
}
