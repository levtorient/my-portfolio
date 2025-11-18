import { OrbitInfo } from './types'

interface OrbitRingProps {
  orbit: OrbitInfo
  index: number
  isActive: boolean
  totalOrbits: number
  mousePos: { x: number; y: number }
  onMouseEnter: (index: number, event: React.MouseEvent) => void
  onMouseLeave: () => void
}

export default function OrbitRing({
  orbit,
  index,
  isActive,
  totalOrbits,
  mousePos,
  onMouseEnter,
  onMouseLeave,
}: OrbitRingProps) {
  const offsetX = mousePos.x * orbit.gravityFactor
  const offsetY = mousePos.y * orbit.gravityFactor

  return (
    <div
      key={orbit.category}
      className={`orbit-ring main-orbit ${isActive ? 'active' : ''}`}
      style={{
        width: orbit.radius * 2,
        height: orbit.radius * 2,
        borderColor: orbit.color,
        borderStyle: orbit.borderStyle,
        transform: `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`,
        animation: `rotate ${orbit.rotationDuration}s linear infinite ${
          orbit.rotationDirection === -1 ? 'reverse' : ''
        }`,
        zIndex: totalOrbits - index,
      }}
      onMouseEnter={(e) => onMouseEnter(index, e)}
      onMouseLeave={onMouseLeave}
    >
      <button
        className={`satellite-dot ${isActive ? 'active' : ''}`}
        style={{
          '--dot-color': orbit.color,
        } as React.CSSProperties}
        aria-label={`View ${orbit.category} information`}
      >
        <span className="dot-icon">{orbit.icon}</span>
        <span className="dot-pulse"></span>
      </button>
    </div>
  )
}
