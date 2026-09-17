import { Section, Container, SectionHeading } from "@/components/ui/Container";
import { Icon } from "@/components/icons";
import { solutionPoints } from "@/lib/site-config";

export function SolutionSection() {
  return (
    <Section>
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <SectionHeading
          eyebrow="Our Approach"
          title="Business Chinese Built Around Your Work"
          description="Training starts with the real situations your employees face — then builds practical speaking ability through scenario-based, interactive learning."
        />

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {solutionPoints.map((point) => (
            <li
              key={point}
              className="flex items-center gap-3 rounded-xl border border-ink-100 bg-ink-50/60 px-4 py-3 text-sm font-medium text-ink-800"
            >
              <Icon name="check" className="h-4 w-4 shrink-0 text-brand-600" />
              {point}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
