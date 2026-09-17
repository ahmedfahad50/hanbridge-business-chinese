import { Icon, type IconName } from "@/components/icons";

export function PlaceholderCard({
  label,
  icon = "shield",
  aspect = "square",
}: {
  label: string;
  icon?: IconName;
  aspect?: "square" | "wide";
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-ink-300 bg-ink-50/60 p-6 text-center ${
        aspect === "square" ? "aspect-square" : "aspect-[4/3]"
      }`}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink-400 ring-1 ring-ink-200">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <p className="text-sm font-medium text-ink-500">{label}</p>
    </div>
  );
}
