import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, Container, SectionHeading } from "@/components/ui/Container";
import { ProgramCard } from "@/components/ProgramCard";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { exampleProgramStructures, programs } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Business Chinese Training Programs",
  description:
    "Role-based Business Chinese training programs for sales, marketing, customer service, technical support, procurement and executive teams.",
  alternates: { canonical: "/programs" },
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Training Programs"
        title="A Program for Every Department"
        description="Each program focuses on the real conversations that role encounters — and every program can be customized further for your company."
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading
            eyebrow="Example Program Structures"
            title="Start With a Practical Scenario"
            description="These are example program structures, not fixed products — every course is built around your company's actual needs."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {exampleProgramStructures.map((item) => (
              <div key={item.title} className="rounded-2xl border border-ink-200 bg-white p-6">
                <h3 className="font-serif text-lg text-ink-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <ConsultationCTA />
    </>
  );
}
