import { Section, Container, SectionHeading } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/icons";
import { whyUsItems } from "@/lib/site-config";

const icons: IconName[] = ["target", "layers", "briefcase", "globe", "clock", "sparkles", "chart", "star"];

export function WhyUsSection() {
  return (
    <Section tone="ink">
      <Container>
        <SectionHeading
          eyebrow="Why HanBridge Business Chinese"
          title="Training Designed for the Workplace, Not the Classroom"
          light
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyUsItems.map((item, i) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/20 text-brand-300">
                <Icon name={icons[i % icons.length]} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif text-lg text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
