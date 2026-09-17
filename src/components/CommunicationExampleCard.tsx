import type { ClientPlaceholder } from "@/lib/site-config";
import { Icon } from "@/components/icons";

export function CommunicationExampleCard({ example }: { example: ClientPlaceholder }) {
  if (!example.isPlaceholder) return null;

  return (
    <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-sm">
      <div className="flex items-center gap-1.5 border-b border-ink-100 bg-ink-50 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-300" />
      </div>
      <div className="flex aspect-[4/5] flex-col items-center justify-center gap-3 p-6 text-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink-50 text-ink-400 ring-1 ring-ink-200">
          <Icon name="messageSquare" className="h-5 w-5" />
        </span>
        <p className="text-sm font-medium text-ink-500">{example.label}</p>
      </div>
    </div>
  );
}
