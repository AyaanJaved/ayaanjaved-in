import type { Metadata } from 'next';
import './globals.css';
import { inter } from './fonts';

export const metadata: Metadata = {
  title: 'Ayaan Javed - Creative Developer',
  description: 'Software Developer, Electronic Musician, Global Traveler',
  icons: {
    icon: '/Devanagari_Letter_अ.svg',
    shortcut: '/Devanagari_Letter_अ.svg',
    apple: '/Devanagari_Letter_अ.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}