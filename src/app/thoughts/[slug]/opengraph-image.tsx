import { ImageResponse } from 'next/og';
import { getPost, getAllSlugs } from '@/lib/posts';

export const runtime = 'nodejs';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Mike Herak';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  const title = post?.title ?? 'Mike Herak';
  const description = post?.description ?? "Writing about whatever I can't stop thinking about.";
  // Truncate to fit the card without cutting a word in half: trim back to the
  // last whole word, drop any trailing punctuation, then add an ellipsis.
  const descDisplay =
    description.length > 140
      ? description.slice(0, 140).replace(/\s+\S*$/, '').replace(/[\s.,:;\-–—]+$/, '') + '…'
      : description;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0d0d0d',
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 5,
              textTransform: 'uppercase',
              color: '#c8a96e',
            }}
          >
            Mike Herak &middot; Thoughts
          </div>
          <div
            style={{
              width: 64,
              height: 4,
              backgroundColor: '#c8a96e',
              marginTop: 28,
              marginBottom: 44,
            }}
          />
          <div
            style={{
              display: 'flex',
              fontSize: 66,
              fontWeight: 700,
              color: '#f5f0e8',
              lineHeight: 1.1,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          {description ? (
            <div
              style={{
                display: 'flex',
                marginTop: 28,
                fontSize: 28,
                color: '#9a948c',
                lineHeight: 1.4,
                maxWidth: 940,
              }}
            >
              {descDisplay}
            </div>
          ) : null}
        </div>

        <div style={{ display: 'flex', fontSize: 26, color: '#6b6560' }}>mikeherak.com</div>
      </div>
    ),
    { ...size },
  );
}
