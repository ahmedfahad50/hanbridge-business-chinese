import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { Section, Container, SectionHeading } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/icons";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ProgramCard, programIcons } from "@/components/ProgramCard";
import { programs } from "@/lib/site-config";

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata(props: PageProps<"/programs/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) return {};

  return {
    title: program.title,
    description: program.summary,
    alternates: { canonical: `/programs/${program.slug}` },
  };
}

export default async function ProgramDetailPage(props: PageProps<"/programs/[slug]">) {
  const { slug } = await props.params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) notFound();

  const otherPrograms = programs.filter((p) => p.slug !== program.slug).slice(0, 3);
  const icon = programIcons[program.slug] ?? "briefcase";

  return (
    <>
      <PageHeader eyebrow={program.audience} title={program.title} description={program.summary}>
        <div className="flex flex-wrap gap-3">
          <Button href="/book-consultation" size="lg" withArrow>
            Book a Consultation
          </Button>
          <Button href="/pricing" variant="outline-light" size="lg">
            View Pricing
          </Button>
        </div>
      </PageHeader>

      <Section>
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
              <Icon name={icon} className="h-5 w-5" />
            </div>
            <h2 className="mt-5 font-serif text-2xl text-ink-950">Typical Workplace Situations</h2>
            <ul className="mt-5 space-y-3">
              {program.scenarios.map((scenario) => (
                <li key={scenario} className="flex items-start gap-3 text-sm leading-relaxed text-ink-700">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  {scenario}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink-950">Example Learning Outcomes</h2>
            <ul className="mt-5 space-y-3">
              {program.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-start gap-3 rounded-xl border border-ink-100 bg-ink-50/60 px-4 py-3 text-sm leading-relaxed text-ink-800"
                >
                  <Icon name="target" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading eyebrow="Explore More" title="Other Training Programs" />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {otherPrograms.map((p) => (
              <ProgramCard key={p.slug} program={p} compact />
            ))}
          </div>
        </Container>
      </Section>

      <ConsultationCTA
        title={`Ready to Build a ${program.title} Program?`}
        description="Book a free consultation and tell us about your team — a customized course can be designed within 2 days."
      />
    </>
  );
}
