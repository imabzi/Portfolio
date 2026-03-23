import type {Metadata} from 'next';
import { Inter, Playfair_Display, JetBrains_Mono, Exo_2 } from 'next/font/google';
import './globals.css'; // Global styles

const exo2 = Exo_2({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Ayub Banaizade - Portfolio',
  description: 'Creative professional with more than 10 years of experience in visual storytelling, branding, motion graphics, and digital content creation.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${exo2.variable} ${playfair.variable} ${jetbrainsMono.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
