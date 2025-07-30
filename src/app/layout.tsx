import type { Metadata } from 'next';
import './globals.css';
import { inter } from './fonts';

export const metadata: Metadata = {
  title: 'Ayaan Javed - Creative Developer',
  description: 'Software Developer, Electronic Musician, Global Traveler',
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