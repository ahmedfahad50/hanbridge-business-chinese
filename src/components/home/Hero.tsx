import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ImageSlideshow } from "@/components/home/ImageSlideshow";
import { heroLabels, siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-ink-950 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(39,157,149,0.35), transparent 45%), radial-gradient(circle at 85% 0%, rgba(39,157,149,0.25), transparent 40%)",
        }}
      />
      <Container className="relative grid grid-cols-1 items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div>
          <div className="mb-6 flex flex-wrap gap-2">
            {heroLabels.map((label) => (
              <Badge key={label} className="border-white/20 bg-white/5 text-white">
                {label}
              </Badge>
            ))}
          </div>

          <h1 className="font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {siteConfig.tagline}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-200">{siteConfig.description}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/book-consultation" size="lg" withArrow>
              Book a Free Consultation
            </Button>
            <Button href="/programs" variant="outline-light" size="lg">
              View Training Programs
            </Button>
            <Button href="/pricing" variant="outline-light" size="lg">
              View Pricing
            </Button>
          </div>
        </div>

        <ImageSlideshow />
      </Container>
    </div>
  );
}
