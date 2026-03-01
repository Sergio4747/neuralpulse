// src/lib/seo.ts
// SEO utilities for NeuralPulse

export interface SeoData {
  title: string;
  titleEs?: string;
  description: string;
  descriptionEs?: string;
  image?: string;
  imageAlt?: string;
  slug?: string;
  canonical?: string;
  keywords?: string[];
  type?: 'website' | 'article';
  author?: string;
  datePublished?: string;
  dateModified?: string;
  category?: string;
  noindex?: boolean;
}

export const SITE = {
  name: 'NeuralPulse',
  tagline: 'AI & Innovation Intelligence',
  taglineEs: 'Inteligencia en IA e Innovación',
  url: 'https://neuralpulse.io',
  twitter: '@NeuralPulseHQ',
  logo: 'https://neuralpulse.io/logo.png',
  defaultImage: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80',
};

export function buildTitle(title: string, site = SITE.name): string {
  return `${title} | ${site}`;
}

export function buildCanonical(slug: string): string {
  return `${SITE.url}/articulo/${slug}`;
}

export function calcReadingTime(content: string): number {
  const words = content.replace(/<[^>]+>/g, '').split(/\s+/).filter(Boolean).length;
  return Math.ceil(words / 200);
}

export function buildArticleSchema(data: {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  author: string;
  authorTitle?: string;
  datePublished: string;
  dateModified?: string;
  slug: string;
  keywords?: string[];
  category?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: data.title.substring(0, 110),
    description: data.description,
    image: {
      '@type': 'ImageObject',
      url: data.image,
      caption: data.imageAlt,
    },
    author: {
      '@type': 'Person',
      name: data.author,
      jobTitle: data.authorTitle || 'Correspondent',
      worksFor: {
        '@type': 'NewsMediaOrganization',
        name: SITE.name,
        url: SITE.url,
      },
    },
    publisher: {
      '@type': 'NewsMediaOrganization',
      name: SITE.name,
      url: SITE.url,
      logo: {
        '@type': 'ImageObject',
        url: SITE.logo,
      },
    },
    url: buildCanonical(data.slug),
    mainEntityOfPage: buildCanonical(data.slug),
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
    keywords: data.keywords?.join(', '),
    articleSection: data.category,
    inLanguage: ['en', 'es'],
    isAccessibleForFree: true,
  };
}

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    description: SITE.tagline,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsMediaOrganization',
    name: SITE.name,
    url: SITE.url,
    logo: { '@type': 'ImageObject', url: SITE.logo },
    sameAs: [
      `https://twitter.com/${SITE.twitter.replace('@', '')}`,
      `https://linkedin.com/company/neuralpulse`,
    ],
    publishingPrinciples: `${SITE.url}/about/editorial-policy`,
    description: SITE.tagline,
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatDateEs(date: Date): string {
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatISODate(date: Date): string {
  return date.toISOString().split('T')[0];
}
