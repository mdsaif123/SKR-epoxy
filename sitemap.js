import servicesData from "@/data/servicesData";

export default function sitemap() {
  const baseUrl = "https://www.yourbrand.com"; // apna domain

  const staticPages = [
    { url: `${baseUrl}/`, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/gallery`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.8 },
  ];

  const servicePages = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    priority: 0.9,
  }));

  return [...staticPages, ...servicePages];
}