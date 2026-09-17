"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Icon, type IconName } from "@/components/icons";
import { cn } from "@/lib/utils";

type Slide = {
  icon: IconName;
  title: string;
  caption: string;
  gradient: string;
};

const slides: Slide[] = [
  {
    icon: "handshake",
    title: "Sales Communication",
    caption: "Practical Mandarin for customer-facing sales conversations",
    gradient: "from-brand-700 via-brand-600 to-brand-900",
  },
  {
    icon: "truck",
    title: "Supplier Communication",
    caption: "Confident language for procurement and supplier negotiations",
    gradient: "from-ink-800 via-ink-900 to-brand-950",
  },
  {
    icon: "headset",
    title: "Customer Service",
    caption: "Clear, professional responses for Chinese-speaking customers",
    gradient: "from-brand-600 via-brand-800 to-ink-950",
  },
  {
    icon: "users",
    title: "Business Meetings",
    caption: "Lead and participate in meetings with Chinese partners",
    gradient: "from-ink-900 via-brand-900 to-brand-700",
  },
  {
    icon: "layers",
    title: "Customized Training",
    caption: "Programs built around your team's real workplace scenarios",
    gradient: "from-brand-800 via-ink-900 to-ink-950",
  },
  {
    icon: "clock",
    title: "2-Day Course Design",
    caption: "Customized training course design takes just 2 days",
    gradient: "from-ink-950 via-brand-900 to-brand-600",
  },
];

export function ImageSlideshow() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((i: number) => {
    setIndex((i + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[420px] overflow-hidden rounded-3xl shadow-2xl shadow-ink-950/20 ring-1 ring-black/5"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Business Chinese training scenarios"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.title}
          className={cn(
            "absolute inset-0 flex flex-col justify-between bg-gradient-to-br p-8 text-white transition-opacity duration-700 ease-out",
            slide.gradient,
            i === index ? "opacity-100" : "opacity-0"
          )}
          aria-hidden={i !== index}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
            <Icon name={slide.icon} className="h-7 w-7" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
              {String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </p>
            <h3 className="mt-2 font-serif text-2xl leading-snug">{slide.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80">{slide.caption}</p>
          </div>
        </div>
      ))}

      <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 pb-5">
        {slides.map((slide, i) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show slide: ${slide.title}`}
            aria-current={i === index}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === index ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
            )}
          />
        ))}
      </div>
    </div>
  );
}
