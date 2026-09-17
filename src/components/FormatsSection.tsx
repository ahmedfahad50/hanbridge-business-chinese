import { Section, Container, SectionHeading } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/icons";
import { formatAdaptationFactors, trainingFormats } from "@/lib/site-config";

const formatIcons: IconName[] = ["user", "users", "globe", "clock"];

export function FormatsSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Training Formats"
          title="Flexible Formats for Every Team"
          description="Choose the format that fits your employees — or combine formats as a program progresses."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trainingFormats.map((format, i) => (
            <div key={format.title} className="rounded-2xl border border-ink-200 bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 text-white">
                <Icon name={formatIcons[i]} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif text-lg text-ink-950">{format.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{format.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-brand-100 bg-brand-50/60 p-6 sm:p-8">
          <p className="text-sm font-semibold text-ink-900">
            Every format can be adapted according to:
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {formatAdaptationFactors.map((factor) => (
              <span
                key={factor}
                className="rounded-full border border-brand-200 bg-white px-3.5 py-1.5 text-xs font-medium text-ink-700"
              >
                {factor}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
