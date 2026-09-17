import type { MetadataRoute } from "next";
import { programs, resourceArticles, siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/corporate-training",
    "/programs",
    "/pricing",
    "/how-it-works",
    "/proof-and-clients",
    "/about",
    "/faq",
    "/contact",
    "/book-consultation",
    "/resources",
    "/privacy-policy",
    "/terms-of-service",
  ];

  const programRoutes = programs.map((p) => `/programs/${p.slug}`);
  const resourceRoutes = resourceArticles.map((r) => `/resources/${r.slug}`);

  const allRoutes = [...staticRoutes, ...programRoutes, ...resourceRoutes];

  return allRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));
}
