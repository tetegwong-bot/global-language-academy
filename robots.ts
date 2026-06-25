import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const disallow = [
    '/dashboard',
    '/dashboard/',
    '/study-planner',
    '/certificate/',
    '/auth/callback',
    '/auth/forgot-password',
    '/api/',
  ];

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow,
      },
    ],
    sitemap: 'https://global-language-acad-o6tf.bolt.host/sitemap.xml',
    host: 'https://global-language-acad-o6tf.bolt.host',
  };
}
