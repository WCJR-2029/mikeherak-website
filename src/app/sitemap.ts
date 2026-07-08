import type { MetadataRoute } from 'next';
import { getAllPostMeta } from '@/lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mikeherak.com';
  const posts = getAllPostMeta();

  return [
    {
      url: baseUrl,
      changeFrequency: 'weekly',
    },
    ...posts.map((post) => ({
      url: `${baseUrl}/thoughts/${post.slug}`,
      lastModified: post.date,
    })),
  ];
}
