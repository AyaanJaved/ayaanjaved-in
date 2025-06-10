import { Inter, Playfair_Display } from 'next/font/google';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ayaan Javed',
  description: 'Trying to make a portfolio here',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${playfair.className} bg-background text-dark font-sans`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}