import { Container } from "@/components/ui/Container";
import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden bg-ink-950 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 10%, rgba(39,157,149,0.3), transparent 45%), radial-gradient(circle at 90% 30%, rgba(39,157,149,0.2), transparent 40%)",
        }}
      />
      <Container className="relative py-16 sm:py-20">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">{eyebrow}</p>
        )}
        <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl">{title}</h1>
        {description && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-200">{description}</p>}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </div>
  );
}
