import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';
import { cormorant, lora, jetbrainsMono } from './fonts';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ThemeScript from './components/ThemeScript';
import Reveal from './components/Reveal';

export const metadata: Metadata = {
  title: 'Ayaan Javed',
  description:
    "Software engineer working on Android internals — platform software, infotainment systems, and fleet tracking at Euler Motors.",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${cormorant.variable} ${lora.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body>
        <Suspense fallback={null}>
          <Nav />
        </Suspense>
        <main>
          <Reveal>{children}</Reveal>
        </main>
        <Footer />
      </body>
    </html>
  );
}
