const BASE = typeof window !== 'undefined'
  ? ''
  : (process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000')

export async function fetchPosts({ limit = 100 } = {}) {
  try {
    const params = new URLSearchParams({
      'where[status][equals]': 'published',
      sort: '-publishedAt',
      limit: String(limit),
      depth: '1',
    })
    const res = await fetch(`${BASE}/api/posts?${params}`, { next: { revalidate: 60 } })
    if (!res.ok) return []
    const data = await res.json()
    return data.docs || []
  } catch {
    return []
  }
}

export async function fetchPostBySlug(slug) {
  try {
    const params = new URLSearchParams({
      'where[slug][equals]': slug,
      'where[status][equals]': 'published',
      limit: '1',
      depth: '1',
    })
    const res = await fetch(`${BASE}/api/posts?${params}`, { next: { revalidate: 60 } })
    if (!res.ok) return null
    const data = await res.json()
    return data.docs?.[0] || null
  } catch {
    return null
  }
}
