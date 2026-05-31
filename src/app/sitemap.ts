import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://4cnmims.in',
      lastModified: new Date(),
    },
    {
      url: 'https://4cnmims.in/events',
      lastModified: new Date(),
    },
    {
      url: 'https://4cnmims.in/team',
      lastModified: new Date(),
    },
    {
      url: 'https://4cnmims.in/about',
      lastModified: new Date(),
    },
  ];
}
