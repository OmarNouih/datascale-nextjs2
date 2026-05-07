import { SITE_URL, IS_PROD } from '@/lib/seo'

export default function robots() {
  if (!IS_PROD) {
    return {
      rules: [{ userAgent: '*', disallow: '/' }],
    }
  }
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
