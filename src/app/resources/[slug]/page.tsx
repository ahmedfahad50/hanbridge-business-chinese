import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { Section, Container } from "@/components/ui/Container";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Icon } from "@/components/icons";
import { resourceArticles } from "@/lib/site-config";

export function generateStaticParams() {
  return resourceArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata(props: PageProps<"/resources/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const article = resourceArticles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.teaser,
    alternates: { canonical: `/resources/${article.slug}` },
  };
}

export default async function ResourceArticlePage(props: PageProps<"/resources/[slug]">) {
  const { slug } = await props.params;
  const article = resourceArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <>
      <PageHeader eyebrow="Resources" title={article.title} description={article.teaser} />

      <Section>
        <Container className="max-w-2xl">
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-ink-300 bg-ink-50/60 p-10 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink-400 ring-1 ring-ink-200">
              <Icon name="layers" className="h-6 w-6" />
            </span>
            <p className="font-medium text-ink-600">Full article coming soon.</p>
            <p className="text-sm text-ink-500">
              This resource center is being built out — check back soon, or contact us with a specific question.
            </p>
          </div>
        </Container>
      </Section>

      <ConsultationCTA />
    </>
  );
}
