import { Playfair_Display, Inter, Literata } from 'next/font/google';

export const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-display',
  display: 'swap',
});

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans-custom',
  display: 'swap',
});

export const literata = Literata({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-text',
  display: 'swap',
});
