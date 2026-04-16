import Link from 'next/link'

export default function BrandLogo({ href = '/', mode = 'header', className = '' }) {
  const height = mode === 'hero' ? 44 : 32
  return (
    <Link href={href} style={{ display: 'inline-flex', alignItems: 'center' }} className={className}>
      <img
        src="/logo main.png"
        alt="Data Scale Business"
        style={{ height, width: 'auto', display: 'block' }}
      />
    </Link>
  )
}
