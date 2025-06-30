import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import './globals.css';
import { interFont, playfairFont } from './fonts';

// ... existing code ...

export const metadata: Metadata = {
  metadataBase: new URL('https://ayaanjaved.com'), // Update this with your actual domain
  title: 'Ayaan Javed',
  description: 'Portfolio of Ayaan Javed - Software Engineer, Musician, Traveller',
  keywords: ['Ayaan Javed', 'portfolio', 'software engineer', 'android developer', 'aosp', 'piano'],
  openGraph: {
    title: 'Ayaan Javed',
    description: 'Explore my projects and skills as an aspiring SDE.',
    images: ['/ayaan_cutout.png'],  // Using your actual profile image
    url: 'https://ayaanjaved.com',  // Use your actual site URL
    siteName: 'Ayaan Javed Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayaan Javed',
    description: 'My portfolio showcasing web development projects.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${interFont.className} ${playfairFont.className} bg-background text-dark font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}