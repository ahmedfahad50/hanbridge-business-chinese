import { Section, Container, SectionHeading } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProgramCard } from "@/components/ProgramCard";
import { programs } from "@/lib/site-config";

export function ProgramsSection() {
  return (
    <Section tone="muted">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Training Programs"
            title="Programs Built Around Every Department"
            description="Each program is designed for the real conversations a role encounters — and can be customized further for your company."
          />
          <Button href="/programs" variant="ghost" withArrow className="shrink-0">
            View All Programs
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <ProgramCard key={program.slug} program={program} compact />
          ))}
        </div>
      </Container>
    </Section>
  );
}
