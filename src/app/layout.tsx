import type { Metadata, Viewport } from 'next';
import { playfair, inter, literata } from './fonts';
import NavLinks from '@/components/NavLinks';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F7F1E3' },
    { media: '(prefers-color-scheme: dark)', color: '#141110' },
  ],
};

// Resolves and writes the theme before first paint, so there is no flash of the
// wrong theme. Plain inline script, not a React effect - must run before body paint.
const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light'){document.documentElement.dataset.theme=t;}else if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.dataset.theme='dark';}}catch(e){}})();`;

export const metadata: Metadata = {
  title: {
    default: 'Mike Herak',
    template: '%s - Mike Herak',
  },
  description:
    "Essays on whatever I can't stop thinking about - come think along.",
  metadataBase: new URL('https://mikeherak.com'),
  openGraph: {
    title: 'Mike Herak',
    description: "Essays on whatever I can't stop thinking about - come think along.",
    url: 'https://mikeherak.com',
    siteName: 'Mike Herak',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Mike Herak',
    description: "Essays on whatever I can't stop thinking about - come think along.",
  },
  robots: { index: true, follow: true },
  alternates: {
    types: {
      'application/rss+xml': [{ url: '/feed.xml', title: 'Mike Herak' }],
    },
  },
  verification: {
    google: 'TaTEFD_1qmt42jZfPpZXPPX5ArQym-t-UX2BZf6Dj7c',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${literata.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-bg font-body text-fg antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <NavLinks />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
