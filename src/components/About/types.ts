export interface OrbitInfo {
  category: string
  icon: string
  info: Record<string, string>
  radius: number
  gravityFactor: number
  color: string
  borderStyle: string
  rotationDuration: number
  rotationDirection: number
}

export interface BlankOrbit {
  radius: number
  gravityFactor: number
  color: string
  borderStyle: string
  borderWidth: number
  rotationDuration: number
  rotationDirection: number
  opacity: number
  className?: string
}

export interface LineCoords {
  startX: number
  startY: number
  endX: number
  endY: number
}

export type TooltipPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
