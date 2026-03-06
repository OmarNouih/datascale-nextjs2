import './globals.css'

export const metadata = {
  title: 'Data Scale Business | Data. AI. BI.',
  description: 'Spécialistes en Business Intelligence, Data Engineering et IA à Casablanca, Maroc.',
  keywords: ['Business Intelligence', 'Data', 'IA', 'Maroc', 'Casablanca', 'Power BI'],
  openGraph: {
    title: 'Data Scale Business Morocco',
    description: 'Spécialistes en Business Intelligence, Data Engineering et IA au Maroc.',
    url: 'https://datascalebusiness.io',
    siteName: 'Data Scale Business',
    locale: 'fr_MA',
    type: 'website',
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
      </head>
      <body>{children}</body>
    </html>
  )
}
