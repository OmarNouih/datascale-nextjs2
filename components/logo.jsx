export default function Logo({ size = 30 }) {
  const height = Math.round(size * 1.45)
  return (
    <img
      src="/logo main.png"
      alt="Data Scale Business"
      style={{ height, width: 'auto', display: 'block' }}
    />
  )
}
