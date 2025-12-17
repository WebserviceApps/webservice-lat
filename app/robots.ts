import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.webservice.lat';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Ejemplo: si tuvieras un panel privado, lo bloquearías aquí
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}