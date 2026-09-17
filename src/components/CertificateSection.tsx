import { Section, Container, SectionHeading } from "@/components/ui/Container";
import { Icon } from "@/components/icons";
import { certificateAvailable } from "@/lib/site-config";

export function CertificateSection() {
  return (
    <Section>
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <SectionHeading
          eyebrow="Certificate of Completion"
          title="Recognition for Completed Training"
          description="Participants who complete an applicable training program may receive a Certificate of Completion where offered. This recognizes the training completed with HanBridge Business Chinese and is not a claim of external accreditation unless officially verified."
        />

        <div className="mx-auto w-full max-w-md">
          {certificateAvailable ? (
            <div className="rounded-2xl border border-ink-200 bg-white p-2 shadow-sm">
              {/* Replace with official certificate image once supplied */}
              <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-ink-50 text-ink-400">
                Certificate Preview
              </div>
            </div>
          ) : (
            <div className="flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-ink-300 bg-ink-50/60 p-8 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink-400 ring-1 ring-ink-200">
                <Icon name="award" className="h-6 w-6" />
              </span>
              <p className="text-sm font-medium text-ink-500">
                Certificate Preview — Replace with Official Certificate
              </p>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
