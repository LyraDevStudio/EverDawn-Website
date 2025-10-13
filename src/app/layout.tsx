import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import { siteConfig } from '@/config/site';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.slogan}`,
  description: siteConfig.description,
  keywords: ['minecraft', 'oneblock', 'serveur', 'everdawn', 'magie', 'feerique', 'communaute', 'aventure'],
  authors: [{ name: 'Everdawn Team' }],
  creator: 'Everdawn',
  publisher: 'Everdawn',
  metadataBase: new URL('https://everdawn.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://everdawn.fr',
    title: `${siteConfig.name} - ${siteConfig.slogan}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Serveur Minecraft OneBlock`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - ${siteConfig.slogan}`,
    description: siteConfig.description,
    images: ['/og-image.jpg'],
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
    // Ajouter Google Search Console verification si necessaire
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${poppins.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-ivory text-slate-text">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
