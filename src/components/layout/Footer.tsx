import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/icons";
import { contactInfo, emailLink, navLinks, primaryNavCta, siteConfig, whatsappLink } from "@/lib/site-config";

const resourceLinks = [
  { label: "Resources", href: "/resources" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Book a Consultation", href: primaryNavCta.href },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-950 text-ink-300">
      <Container className="py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 font-serif text-lg font-semibold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-600 text-sm font-bold text-white">
                H
              </span>
              {siteConfig.name}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">{siteConfig.tagline}</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-400">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-400">Resources</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {resourceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-400">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={emailLink} className="flex items-center gap-2 hover:text-white">
                  <Icon name="mail" className="h-4 w-4 shrink-0" />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <Icon name="whatsapp" className="h-4 w-4 shrink-0" />
                  WhatsApp: {contactInfo.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="wechat" className="h-4 w-4 shrink-0" />
                WeChat: {contactInfo.wechat}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink-800 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Business Chinese Training for Global Teams.</p>
        </div>
      </Container>
    </footer>
  );
}
