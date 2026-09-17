import { Section, Container, SectionHeading } from "@/components/ui/Container";
import { Icon } from "@/components/icons";
import { problems } from "@/lib/site-config";

export function ProblemSection() {
  return (
    <Section tone="muted">
      <Container>
        <SectionHeading
          eyebrow="The Problem"
          title="Chinese Skills That Don't Work at Work"
          description="Many employees have studied Chinese before — but textbook Chinese rarely prepares them for real business conversations."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {problems.map((problem) => (
            <div key={problem} className="flex items-start gap-3 rounded-xl border border-ink-200 bg-white p-5">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink-900/5 text-ink-500">
                <Icon name="dot" className="h-2.5 w-2.5 fill-current stroke-none" />
              </span>
              <p className="text-sm leading-relaxed text-ink-700 sm:text-base">{problem}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center font-serif text-xl text-ink-950 sm:text-2xl">
          We focus on the Chinese your employees actually need at work.
        </p>
      </Container>
    </Section>
  );
}
