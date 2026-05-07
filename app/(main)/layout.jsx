import { Manrope, Space_Grotesk } from 'next/font/google'
import { LanguageProvider } from '@/lib/i18n/LanguageContext'
import Script from 'next/script'
import { SITE_URL, seoRobots } from '@/lib/seo'

import '../globals.css'

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
    'Data Scale Business designs performance systems that connect data, market attention and execution for companies in Morocco and Africa.',
  keywords: [
    'Data Scale Business',
    'Business Intelligence Morocco',
    'Data Engineering Casablanca',
    'Data-driven marketing Morocco',
    'Digital transformation Morocco',
    'Performance systems',
  ],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Data Scale Business | Performance systems from data to action',
    description:
      'Data strategy, analytics, BI and marketing activation united in one performance system.',
    url: SITE_URL,
    siteName: 'Data Scale Business',
    locale: 'en_US',
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
      'Data strategy, analytics, BI and marketing activation united in one performance system.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  robots: seoRobots,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
              url: SITE_URL,
              logo: `${SITE_URL}/logo.png`,
              description:
                'Business Intelligence, data engineering, analytics and marketing activation for companies in Morocco and Africa.',
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JHRK820N2P"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JHRK820N2P');
        `}</Script>
      </head>
      <body className={`${sans.variable} ${display.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
