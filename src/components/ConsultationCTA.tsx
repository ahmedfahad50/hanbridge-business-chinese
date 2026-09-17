import { Container, Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/icons";

export function ConsultationCTA({
  title = "Let's Build Your Team's Business Chinese Program",
  description = "Book a free 30-minute consultation. Tell us about your team, and we'll show you how training can be customized — with a course design ready in as little as 2 days.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Section tone="ink" className="py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500/20 text-brand-300">
          <Icon name="calendar" className="h-6 w-6" />
        </span>
        <h2 className="max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">{title}</h2>
        <p className="max-w-xl text-base leading-relaxed text-ink-300">{description}</p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <Button href="/book-consultation" size="lg" withArrow>
            Book a Free Consultation
          </Button>
          <Button href="/contact" variant="outline-light" size="lg">
            Contact Us
          </Button>
        </div>
      </Container>
    </Section>
  );
}
