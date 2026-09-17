import { Section, Container, SectionHeading } from "@/components/ui/Container";
import { Icon } from "@/components/icons";
import { processSteps } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function ProcessSteps({ tone = "muted" }: { tone?: "default" | "muted" }) {
  return (
    <Section tone={tone}>
      <Container>
        <SectionHeading eyebrow="How It Works" title="From First Conversation to Confident Speaking" align="center" />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, i) => (
            <div key={step.step} className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink-950 font-serif text-base text-white">
                  {step.step}
                </span>
                {i < processSteps.length - 1 && (
                  <span className="hidden h-px flex-1 bg-ink-200 lg:block" aria-hidden="true" />
                )}
              </div>
              <h3 className="mt-4 font-serif text-lg text-ink-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{step.description}</p>
              {step.callout && (
                <p
                  className={cn(
                    "mt-3 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700"
                  )}
                >
                  <Icon name="clock" className="h-3.5 w-3.5" />
                  {step.callout}
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
