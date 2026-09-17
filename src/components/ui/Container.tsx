import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return <Tag className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}>{children}</Tag>;
}

export function Section({
  children,
  className,
  id,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "muted" | "ink";
}) {
  const toneClasses =
    tone === "muted" ? "bg-ink-50" : tone === "ink" ? "bg-ink-950 text-white" : "bg-[var(--background)]";
  return (
    <section id={id} className={cn("py-16 sm:py-24", toneClasses, className)}>
      {children}
    </section>
  );
}

export function Eyebrow({ children, light }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={cn(
        "mb-3 text-xs font-semibold uppercase tracking-[0.16em]",
        light ? "text-brand-300" : "text-brand-600"
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "font-serif text-3xl leading-tight tracking-tight sm:text-4xl",
          light ? "text-white" : "text-ink-950"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", light ? "text-ink-200" : "text-ink-600")}>
          {description}
        </p>
      )}
    </div>
  );
}
