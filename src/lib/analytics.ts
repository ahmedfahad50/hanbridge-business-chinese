// GA4 is only loaded when NEXT_PUBLIC_GA_MEASUREMENT_ID is set (see .env.example).
// No tracking ID is hardcoded here — nothing fires until the business supplies one.

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

type Gtag = (...args: unknown[]) => void;

function getGtag(): Gtag | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as typeof window & { gtag?: Gtag }).gtag;
}

export function trackPageView(path: string) {
  if (!GA_MEASUREMENT_ID) return;
  getGtag()?.("event", "page_view", { page_path: path });
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (!GA_MEASUREMENT_ID) return;
  getGtag()?.("event", name, params);
}
