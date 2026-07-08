import { getAllPostMeta, getPost } from '@/lib/posts';

const SITE_URL = 'https://www.mikeherak.com';
const SITE_TITLE = 'Mike Herak';
const SITE_DESCRIPTION = "Essays on whatever I can't stop thinking about - come think along.";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toRfc822(dateStr: string): string {
  return new Date(dateStr).toUTCString();
}

export async function GET() {
  const postsMeta = getAllPostMeta();
  const posts = await Promise.all(postsMeta.map((p) => getPost(p.slug)));

  const items = posts
    .filter((p): p is NonNullable<typeof p> => p !== null)
    .map((post) => {
      const url = `${SITE_URL}/thoughts/${post.slug}`;
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${toRfc822(post.date)}</pubDate>
      <description>${escapeXml(post.description ?? '')}</description>
      <content:encoded><![CDATA[${post.contentHtml}]]></content:encoded>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
