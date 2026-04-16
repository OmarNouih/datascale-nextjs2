import { Manrope, Space_Grotesk } from 'next/font/google'

import './globals.css'

const sans = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
})

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
})

export const metadata = {
  title: {
    default: 'Data Scale Business | Performance systems from data to action',
    template: '%s',
  },
  description:
    "Data Scale Business conçoit des systèmes de performance qui relient donnée, attention et exécution pour les entreprises au Maroc et en Afrique.",
  keywords: [
    'Data Scale Business',
    'Business Intelligence Maroc',
    'Data Engineering Casablanca',
    'Marketing data-driven Maroc',
    'Transformation digitale Maroc',
    'Performance systems',
  ],
  metadataBase: new URL('https://datascalebusiness.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Data Scale Business | Performance systems from data to action',
    description:
      'Stratégie data, analyse, BI et activation marketing réunies dans un seul système de performance.',
    url: 'https://datascalebusiness.io',
    siteName: 'Data Scale Business',
    locale: 'fr_MA',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Data Scale Business',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Scale Business | Performance systems from data to action',
    description:
      'Stratégie data, analyse, BI et activation marketing réunies dans un seul système de performance.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@500;600;700;800;900&family=Playfair+Display:wght@700;800;900&family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Data Scale Business',
              url: 'https://datascalebusiness.io',
              logo: 'https://datascalebusiness.io/logo.png',
              description:
                'Business Intelligence, data engineering, analytics et activation marketing pour les entreprises au Maroc et en Afrique.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Casablanca',
                addressCountry: 'MA',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+212-671-370-001',
                contactType: 'customer service',
                availableLanguage: ['French', 'Arabic', 'English'],
              },
              sameAs: [
                'https://www.linkedin.com/company/datascalebusiness',
                'https://twitter.com/datascalebusiness',
              ],
            }),
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-JHRK820N2P" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JHRK820N2P');
            `,
          }}
        />
      </head>
      <body className={`${sans.variable} ${display.variable}`}>{children}</body>
    </html>
  )
}
