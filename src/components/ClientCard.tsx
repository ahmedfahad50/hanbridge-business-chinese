import type { ClientPlaceholder } from "@/lib/site-config";
import { PlaceholderCard } from "@/components/PlaceholderCard";

export function ClientCard({ client }: { client: ClientPlaceholder }) {
  if (client.isPlaceholder) {
    return <PlaceholderCard label={client.label} icon="building" />;
  }
  return null;
}
