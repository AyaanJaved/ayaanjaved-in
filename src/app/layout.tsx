import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

// 1. Configure the Inter font to use a CSS variable
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// 2. Configure the Playfair_Display font to use a CSS variable
const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

// 3. Update the site metadata for better SEO
export const metadata: Metadata = {
  title: 'Ayaan Javed | Software Engineer',
  description: 'The personal portfolio of Ayaan Javed, a passionate software engineer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 4. Apply the font variables to the <html> tag
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      {/* 5. Apply default font and colors to the <body> tag */}
      <body className="font-sans bg-background text-dark">
        {children}
      </body>
    </html>
  );
}