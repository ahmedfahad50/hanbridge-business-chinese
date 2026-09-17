import type { SVGProps } from "react";

export type IconName =
  | "arrowRight"
  | "check"
  | "chevronDown"
  | "menu"
  | "close"
  | "mail"
  | "whatsapp"
  | "wechat"
  | "users"
  | "user"
  | "briefcase"
  | "globe"
  | "target"
  | "clock"
  | "sparkles"
  | "shield"
  | "calendar"
  | "messageSquare"
  | "headset"
  | "wrench"
  | "truck"
  | "crown"
  | "chart"
  | "handshake"
  | "megaphone"
  | "layers"
  | "star"
  | "building"
  | "award"
  | "play"
  | "dot";

const paths: Record<IconName, React.ReactNode> = {
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M20 6 9 17l-5-5" />,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="M18 6 6 18M6 6l12 12" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  whatsapp: (
    <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.6.9-.8 1-.1.2-.3.2-.6.1-.8-.4-1.7-1-2.4-1.8-.6-.7-1-1.3-1.2-1.6-.2-.3 0-.5.1-.6l.4-.5c.1-.1.2-.3.2-.5.1-.2 0-.3 0-.5-.1-.1-.6-1.5-.9-2.1-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.3-.1-.1-.3-.2-.6-.3zM12 3a9 9 0 0 1 7.5 14l1 3.5-3.6-1A9 9 0 1 1 12 3Z" />
  ),
  wechat: (
    <>
      <path d="M9 11.5c-3.3 0-6 2.1-6 4.7 0 1.4.8 2.7 2.1 3.6l-.5 1.7 2-1.1c.7.2 1.5.3 2.4.3h.3a5.1 5.1 0 0 1-.3-1.7c0-3 2.9-5.5 6.5-5.5h.3c-.5-2.1-2.9-3.7-5.8-3.7Z" />
      <path d="M20.5 15.7c0-2.2-2.2-4-5-4s-5 1.8-5 4 2.2 4 5 4c.6 0 1.2-.1 1.7-.3l1.6.9-.4-1.4c1.3-.8 2.1-2 2.1-3.2Z" />
    </>
  ),
  users: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21v-1a8 8 0 0 1 16 0v1" />
    </>
  ),
  briefcase: (
    <>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </>
  ),
  sparkles: (
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
  ),
  shield: <path d="M12 3 4 6v6c0 4.5 3 8 8 9 5-1 8-4.5 8-9V6l-8-3Z" />,
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>
  ),
  messageSquare: <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" />,
  headset: (
    <>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="2" y="13" width="5" height="7" rx="1.5" />
      <rect x="17" y="13" width="5" height="7" rx="1.5" />
      <path d="M20 20v1a3 3 0 0 1-3 3h-3" />
    </>
  ),
  wrench: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2 2.6-2.6Z" />,
  truck: (
    <>
      <rect x="1" y="7" width="14" height="10" rx="1.5" />
      <path d="M15 10h4l3 3v4h-7v-7Z" />
      <circle cx="6" cy="19" r="1.7" />
      <circle cx="17.5" cy="19" r="1.7" />
    </>
  ),
  crown: <path d="M4 18h16l1-9-5 3-4-6-4 6-5-3 1 9Z" />,
  chart: (
    <>
      <path d="M4 20V10M11 20V4M18 20v-7" />
      <path d="M2 20h20" />
    </>
  ),
  handshake: (
    <>
      <path d="m11 13-2.5 2.5a1.7 1.7 0 0 1-2.5-2.3L9 10" />
      <path d="M13 13l2.5 2.5a1.7 1.7 0 0 0 2.5-2.3L15 10" />
      <path d="M2 11l5-4 4 2 4-2 5 4-3 5-3-1.5-3 2-3-2-3 1.5Z" />
    </>
  ),
  megaphone: <path d="M3 10v4a1 1 0 0 0 1 1h2l7 4V5L6 9H4a1 1 0 0 0-1 1Z M15 9a4 4 0 0 1 0 6" />,
  layers: <path d="m12 2 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 17l9 5 9-5" />,
  star: <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2Z" />,
  building: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="8" r="5" />
      <path d="m8.5 12.5-1.5 8 5-2.5 5 2.5-1.5-8" />
    </>
  ),
  play: <path d="M7 4v16l14-8L7 4Z" />,
  dot: <circle cx="12" cy="12" r="4" />,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.75,
  ...props
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
