// src/pages/robots.txt.ts
import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const content = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /drafts
Disallow: /search?

# AI bots - choose your policy
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Google-Extended
Allow: /

# Good bots
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 2

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: LinkedInBot
Allow: /

Sitemap: https://neuralpulse.io/sitemap-index.xml
Host: neuralpulse.io`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain' },
  });
};
