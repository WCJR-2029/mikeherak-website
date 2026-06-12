import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: {
    default: 'Mike Herak | Organizational Intelligence Libraries',
    template: '%s | Mike Herak',
  },
  description: 'Transform tribal knowledge into defensible competitive advantage. Build Organizational Intelligence Libraries that make AI tools understand YOUR methodology.',
  keywords: ['organizational intelligence', 'knowledge management', 'AI optimization', 'tribal knowledge', 'competitive advantage', 'business consulting'],
  authors: [{ name: 'Mike Herak' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Mike Herak - Organizational Intelligence Libraries',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
