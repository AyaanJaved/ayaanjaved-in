import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import './globals.css';
import { interFont, playfairFont } from './fonts';
import GoogleAnalytics from './components/GoogleAnalytics';

export const metadata: Metadata = {
  metadataBase: new URL('https://ayaanjaved.com'),
  title: {
    default: 'Ayaan Javed - Software Engineer, Musician & Traveller',
    template: '%s | Ayaan Javed'
  },
  description: 'Android Developer transitioning to Software Engineer, specializing in Android AOSP development. Passionate about system-level programming, mobile development, and creating impactful software solutions.',
  keywords: [
    'Ayaan Javed',
    'software engineer',
    'Android developer',
    'AOSP developer',
    'mobile development',
    'system programming',
    'musician',
    'traveller',
    'portfolio',
    'FAANG',
    'software engineering',
    'Android AOSP',
    'mobile software',
    'system development',
    'Java',
    'Kotlin',
  ],
  authors: [{ name: 'Ayaan Javed' }],
  creator: 'Ayaan Javed',
  publisher: 'Ayaan Javed',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ayaanjaved.com',
    title: 'Ayaan Javed - Software Engineer, Musician & Traveller',
    description: 'Android Developer transitioning to Software Engineer, specializing in Android AOSP development. Passionate about system-level programming and mobile development.',
    siteName: 'Ayaan Javed Portfolio',
    images: [
      {
        url: '/ayaan_cutout.png',
        width: 1200,
        height: 630,
        alt: 'Ayaan Javed - Software Engineer',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayaan Javed - Software Engineer, Musician & Traveller',
    description: 'Android Developer transitioning to Software Engineer, specializing in Android AOSP development. Passionate about system-level programming and mobile development.',
    images: ['/ayaan_cutout.png'],
    creator: '@ayaanjaved',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION_CODE
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
        <GoogleAnalytics />
        <Navbar />
        {children}
      </body>
    </html>
  );
}