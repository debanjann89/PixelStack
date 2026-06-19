import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin', // Prevent indexing of the admin panel
    },
    sitemap: 'https://pixelstack.agency/sitemap.xml',
  };
}
