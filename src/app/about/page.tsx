import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, Container, SectionHeading } from "@/components/ui/Container";
import { Icon } from "@/components/icons";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { teacher } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the teacher behind HanBridge Business Chinese and learn why practical, spoken communication is at the center of every program.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Practical Communication, Not Just Language Lessons"
        description="HanBridge Business Chinese was built around a simple idea: employees need the Chinese they actually use at work, taught in a way that builds real speaking confidence."
      />

      <Section>
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-3xl border border-ink-200 bg-ink-50/60 p-8 text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-brand-600 font-serif text-4xl text-white">
              {teacher.name[0]}
            </div>
            <h2 className="mt-5 font-serif text-2xl text-ink-950">{teacher.name}</h2>
            <p className="mt-1 text-sm font-medium text-brand-700">Business Chinese Teacher</p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {teacher.learnerCountries.map((country) => (
                <span
                  key={country}
                  className="rounded-full border border-ink-200 bg-white px-3 py-1 text-xs font-medium text-ink-600"
                >
                  {country}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink-950">Background</h2>
            <ul className="mt-5 space-y-3">
              {teacher.facts.map((fact) => (
                <li key={fact} className="flex items-start gap-3 text-sm leading-relaxed text-ink-700 sm:text-base">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-brand-600" />
                  {fact}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-ink-600">
              {teacher.name} has worked with international learners in {teacher.learnerCountries.slice(0, -1).join(", ")}{" "}
              and {teacher.learnerCountries[teacher.learnerCountries.length - 1]}, among other locations, supporting
              both online and face-to-face learners at C1-level English.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading eyebrow="Teaching Philosophy" title="Why Practical Communication Matters" align="center" />
          <div className="mx-auto mt-10 max-w-3xl space-y-5 text-center text-base leading-relaxed text-ink-700">
            <p>
              Most employees who have studied Chinese before know grammar rules and vocabulary lists — but freeze up
              in a real conversation with a Chinese client or supplier. Training at HanBridge Business Chinese starts
              from daily, practical conversation scenarios rather than textbook theory.
            </p>
            <p>
              Speaking ability is developed through interactive activities, games, videos and songs — different
              formats that build genuine confidence using spoken Chinese, not just recognition of written text.
            </p>
            <p>
              Every program is designed to be accessible to international employees, with instruction supported in
              English, so learners can focus on the business scenarios that matter most to their role.
            </p>
          </div>
        </Container>
      </Section>

      <ConsultationCTA />
    </>
  );
}
