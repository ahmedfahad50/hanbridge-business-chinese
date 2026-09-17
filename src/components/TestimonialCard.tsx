import type { ClientPlaceholder } from "@/lib/site-config";
import { PlaceholderCard } from "@/components/PlaceholderCard";

export function TestimonialCard({ testimonial }: { testimonial: ClientPlaceholder }) {
  if (testimonial.isPlaceholder) {
    return <PlaceholderCard label={testimonial.label} icon="star" aspect="wide" />;
  }
  return null;
}
