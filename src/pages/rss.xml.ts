// src/pages/rss.xml.ts
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../lib/seo';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const articles = await getCollection('articles');
  const sorted = articles.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: `${SITE.name} — ${SITE.tagline}`,
    description: 'The world\'s leading source for AI research, technology breakthroughs, and innovation analysis.',
    site: context.site ?? SITE.url,
    items: sorted.map(article => ({
      title: article.data.title,
      pubDate: article.data.date,
      description: article.data.excerpt,
      link: `/articulo/${article.data.slug}`,
      categories: [article.data.category],
      author: article.data.author,
      customData: `
        <media:content
          url="${article.data.image}"
          medium="image"
        />
      `,
    })),
    customData: `
      <language>en-us</language>
      <managingEditor>editorial@neuralpulse.io</managingEditor>
      <webMaster>tech@neuralpulse.io</webMaster>
      <copyright>© ${new Date().getFullYear()} NeuralPulse Media</copyright>
      <ttl>60</ttl>
      <image>
        <url>${SITE.url}/logo.png</url>
        <title>${SITE.name}</title>
        <link>${SITE.url}</link>
      </image>
    `,
  });
}
