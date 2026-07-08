import type { Metadata, Viewport } from 'next';
import { playfair, inter } from './fonts';
import NavLinks from '@/components/NavLinks';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#F7F1E3',
};

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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-bg font-body text-fg antialiased">
        <NavLinks />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
