import { LineCoords } from './types'

interface TooltipConnectorProps {
  lineCoords: LineCoords
  color: string
}

export default function TooltipConnector({ lineCoords, color }: TooltipConnectorProps) {
  return (
    <svg
      className="tooltip-connector"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 99,
      }}
    >
      <line
        x1={lineCoords.startX}
        y1={lineCoords.startY}
        x2={lineCoords.endX}
        y2={lineCoords.endY}
        stroke={color}
        strokeWidth="2"
        strokeDasharray="4 4"
        className="connector-line"
      />
      <circle
        cx={lineCoords.startX}
        cy={lineCoords.startY}
        r="4"
        fill={color}
        className="connector-dot-start"
      />
      <circle
        cx={lineCoords.endX}
        cy={lineCoords.endY}
        r="4"
        fill={color}
        className="connector-dot-end"
      />
    </svg>
  )
}
