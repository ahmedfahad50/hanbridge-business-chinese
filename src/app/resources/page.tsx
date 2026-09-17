import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section, Container } from "@/components/ui/Container";
import { Icon } from "@/components/icons";
import { resourceArticles } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Resources",
  description: "Practical articles on Business Chinese for sales, customer service, procurement and international teams.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Business Chinese Resources"
        description="Practical guidance for international teams working with Chinese clients, suppliers and colleagues."
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resourceArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/resources/${article.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-ink-950/5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Icon name="layers" className="h-5 w-5" />
                </div>
                <h2 className="mt-4 font-serif text-lg text-ink-950">{article.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{article.teaser}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 group-hover:gap-2.5 transition-all">
                  Read more
                  <Icon name="arrowRight" className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
