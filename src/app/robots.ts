import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/about', '/contact_us', '/catalogue', '/privacy'],
      disallow: '/private/',
    },
    sitemap: 'https://pionblanc.fi/sitemap.xml',
  }
}