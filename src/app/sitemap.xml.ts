import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://hesham.badr.neuronovate.consulting";
  const pages = [
    "",
    "#about",
    "#trust",
    "#case-studies",
    "#testimonials",
    "#contact",
  ];

  const urls = pages.map(
    (path) =>
      `<url><loc>${baseUrl}/${path}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>`
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.join("\n  ")}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
} 