import type { ClientPlaceholder } from "@/lib/site-config";
import { PlaceholderCard } from "@/components/PlaceholderCard";

const structure = [
  "Company Challenge",
  "Training Requirement",
  "Customized Solution",
  "Training Format",
  "Business Scenario",
  "Result / Feedback",
];

export function CaseStudyCard({ caseStudy }: { caseStudy: ClientPlaceholder }) {
  if (!caseStudy.isPlaceholder) return null;

  return (
    <div className="rounded-2xl border border-dashed border-ink-300 bg-ink-50/60 p-6 sm:p-8">
      <PlaceholderCard label={caseStudy.label} icon="chart" aspect="wide" />
      <div className="mt-6 flex flex-wrap gap-2">
        {structure.map((item) => (
          <span
            key={item}
            className="rounded-full border border-ink-200 bg-white px-3 py-1 text-xs font-medium text-ink-500"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
