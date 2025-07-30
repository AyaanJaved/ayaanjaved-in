import { Inter, Montserrat, Roboto, Noto_Nastaliq_Urdu } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['800'],
  display: 'swap',
});

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400'],
  display: 'swap',
});

export const notoNastaliqUrdu = Noto_Nastaliq_Urdu({
  subsets: ['arabic'],
  weight: ['700'],
  display: 'swap',
});