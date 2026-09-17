export function buildMailtoLink(to: string, subject: string, lines: Array<[string, string]>) {
  const body = lines
    .filter(([, value]) => value && value.trim().length > 0)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");

  const params = new URLSearchParams({ subject, body });
  return `mailto:${to}?${params.toString()}`;
}
