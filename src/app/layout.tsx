import { Inter, Playfair_Display } from 'next/font/google';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Ayaan Javed | Web Developer',
  description: 'The professional portfolio for Ayaan Javed.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} bg-background text-dark font-sans`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}