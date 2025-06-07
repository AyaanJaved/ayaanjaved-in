import {Inter, Playfair_Display} from 'next/font/google';

const inter = Inter(
  {
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
  }
)

const playfair = Playfair_Display(
  {
    subsets: ['latin'],
    variable: '--font-serif',
    display: 'swap',
  }
)

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en' className={`${inter.variable} ${playfair.variable}`}>
      <body className='bg-background text-dark font-sans'>
        {children}
      </body>
    </html>
  )
}