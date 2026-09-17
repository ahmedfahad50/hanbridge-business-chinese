import Link from "next/link";
import { Icon, type IconName } from "@/components/icons";
import type { Program } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const programIcons: Record<string, IconName> = {
  "general-business-chinese": "globe",
  "sales-chinese": "handshake",
  "marketing-chinese": "megaphone",
  "customer-service-chinese": "headset",
  "technical-support-chinese": "wrench",
  "procurement-supply-chain-chinese": "truck",
  "executive-business-chinese": "crown",
};

export function ProgramCard({ program, compact }: { program: Program; compact?: boolean }) {
  const icon = programIcons[program.slug] ?? "briefcase";

  return (
    <Link
      href={`/programs/${program.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-ink-950/5"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
        <Icon name={icon} className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-serif text-lg text-ink-950">{program.title}</h3>
      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-400">{program.audience}</p>
      <p className={cn("mt-3 text-sm leading-relaxed text-ink-600", compact && "line-clamp-3")}>
        {program.summary}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 group-hover:gap-2.5 transition-all">
        Learn more
        <Icon name="arrowRight" className="h-4 w-4" />
      </span>
    </Link>
  );
}
