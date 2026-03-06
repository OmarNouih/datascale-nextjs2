import './globals.css'

export const metadata = {
  // ── Basic SEO ──
  title: {
    default: 'Data Scale Business | Data. AI. BI. — Casablanca, Maroc',
    template: '%s'
  },
  description: 'Spécialistes en Business Intelligence, Data Engineering et IA à Casablanca. Nous accompagnons les entreprises au Maroc et en Afrique dans la valorisation de leurs données.',
  keywords: [
    'Business Intelligence Maroc',
    'Data Engineering Casablanca',
    'Power BI Maroc',
    'Tableau Maroc',
    'IA Immobilier Maroc',
    'Data Analytics Maroc',
    'Transformation Digitale Maroc',
    'CFO Immobilier Maroc',
    'Gouvernance Data Afrique',
    'Data Scale Business'
  ],

  // ── Canonical URL ──
  metadataBase: new URL('https://datascalebusiness.io'),
  alternates: {
    canonical: '/',
  },

  // ── Open Graph (Facebook, LinkedIn) ──
  openGraph: {
    title: 'Data Scale Business | Data. AI. BI.',
    description: 'Spécialistes en Business Intelligence, Data Engineering et IA au Maroc et en Afrique.',
    url: 'https://datascalebusiness.io',
    siteName: 'Data Scale Business',
    locale: 'fr_MA',
    type: 'website',
    images: [
      {
        url: '/og-image.png', // add a 1200x630 image in /public
        width: 1200,
        height: 630,
        alt: 'Data Scale Business Morocco',
      }
    ],
  },

  // ── Twitter Card ──
  twitter: {
    card: 'summary_large_image',
    title: 'Data Scale Business | Data. AI. BI.',
    description: 'Spécialistes en Business Intelligence, Data Engineering et IA au Maroc.',
    images: ['/og-image.png'],
  },

  // ── Favicon ──
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  // ── Robots ──
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
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Data Scale Business",
              "url": "https://datascalebusiness.io",
              "logo": "https://datascalebusiness.io/logo.png",
              "description": "Spécialistes en Business Intelligence, Data Engineering et IA au Maroc et en Afrique.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Casablanca",
                "addressCountry": "MA"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+212-671-370-001", 
                "contactType": "customer service",
                "availableLanguage": ["French", "Arabic", "English"]
                },
              "sameAs": [
                "https://www.linkedin.com/company/datascalebusiness",
                "https://twitter.com/datascalebusiness"
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}