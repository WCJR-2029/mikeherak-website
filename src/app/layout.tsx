import type { Metadata } from 'next';
import { playfair, inter } from './fonts';
import NavLinks from '@/components/NavLinks';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Mike Herak',
    template: '%s — Mike Herak',
  },
  description:
    "Marine. Percussionist. Fortune 100 ops leader turned independent mind. Writing about whatever I can't stop thinking about.",
  metadataBase: new URL('https://mikeherak.com'),
  openGraph: {
    title: 'Mike Herak',
    description: "Writing about whatever I can't stop thinking about.",
    url: 'https://mikeherak.com',
    siteName: 'Mike Herak',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Mike Herak',
    description: "Writing about whatever I can't stop thinking about.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-bg font-body text-fg antialiased">
        <NavLinks />
        {children}
      </body>
    </html>
  );
}
