export default function SectionDivider() {
  return (
    <div style={{
      position: 'relative',
      height: 0,
      overflow: 'visible',
      pointerEvents: 'none',
      zIndex: 10,
    }}>
      {/* Outer wide glow */}
      <div style={{
        position: 'absolute',
        top: -28,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        height: 56,
        background: 'radial-gradient(ellipse at 50% 50%, rgba(34,244,189,0.09) 0%, transparent 68%)',
      }} />

      {/* Inner tighter glow */}
      <div style={{
        position: 'absolute',
        top: -12,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60%',
        height: 24,
        background: 'radial-gradient(ellipse at 50% 50%, rgba(34,244,189,0.18) 0%, transparent 70%)',
      }} />

      {/* The bright line itself */}
      <div style={{
        position: 'absolute',
        top: -0.75,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '84%',
        height: 1.5,
        background: 'linear-gradient(90deg, transparent 0%, rgba(34,244,189,0.35) 15%, rgba(34,244,189,0.85) 40%, rgba(34,244,189,1) 50%, rgba(34,244,189,0.85) 60%, rgba(34,244,189,0.35) 85%, transparent 100%)',
        borderRadius: 99,
      }} />

      {/* Centre spark */}
      <div style={{
        position: 'absolute',
        top: -2,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 80,
        height: 4,
        background: 'radial-gradient(ellipse at 50% 50%, rgba(34,244,189,0.9) 0%, transparent 100%)',
        borderRadius: 99,
      }} />
    </div>
  )
}
