import { OrbitInfo, TooltipPosition } from './types';

interface OrbitTooltipProps {
  orbit: OrbitInfo;
  position: TooltipPosition;
}

export default function OrbitTooltip({ orbit, position }: OrbitTooltipProps) {
  return (
    <div
      className={`orbit-tooltip ${position}`}
      style={
        {
          '--tooltip-color': orbit.color,
        } as React.CSSProperties
      }
    >
      <h3>{orbit.category}</h3>
      <ul>
        {Object.entries(orbit.info).map(([key, value]) => (
          <li key={key}>
            <span className="info-key">{key}:</span>
            <span className="info-value">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
