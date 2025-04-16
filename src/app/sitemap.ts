import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://pionblanc.fi',
      lastModified: new Date(),
    },
    {
      url: 'https://pionblanc.fi/about',
      lastModified: new Date(),
    },
    {
      url: 'https://pionblanc.fi/contact_us',
      lastModified: new Date(),
    },
    {
      url: 'https://pionblanc.fi/catalogue',
      lastModified: new Date(),
    },
    {
      url: 'https://pionblanc.fi/privacy',
      lastModified: new Date(),
    }
  ]
}