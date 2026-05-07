export const SITE_URL = (process.env.NEXT_PUBLIC_APP_URL || 'https://datascalebusiness.io').replace(/\/$/, '')

// Treat any non-canonical domain as a preview/test deploy and exclude it from indexing.
const PROD_HOSTS = new Set(['datascalebusiness.io', 'www.datascalebusiness.io'])
let host = ''
try { host = new URL(SITE_URL).host } catch {}
export const IS_PROD = PROD_HOSTS.has(host)

export const seoRobots = IS_PROD
  ? { index: true, follow: true, googleBot: { index: true, follow: true } }
  : { index: false, follow: false, googleBot: { index: false, follow: false, noimageindex: true } }
