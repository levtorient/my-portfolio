import { BlankOrbit } from './types';

interface BlankOrbitRingProps {
  orbit: BlankOrbit;
  index: number;
  mousePos: { x: number; y: number };
}

export default function BlankOrbitRing({
  orbit,
  index,
  mousePos,
}: BlankOrbitRingProps) {
  const offsetX = mousePos.x * orbit.gravityFactor;
  const offsetY = mousePos.y * orbit.gravityFactor;

  return (
    <div
      key={`blank-${index}`}
      className={`orbit-ring blank-orbit ${orbit.className || ''}`}
      style={
        {
          width: orbit.radius * 2,
          height: orbit.radius * 2,
          borderColor: orbit.color,
          borderStyle: orbit.borderStyle,
          borderWidth: orbit.borderWidth,
          opacity: orbit.opacity,
          transform: `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`,
          animation: `rotate ${orbit.rotationDuration}s linear infinite ${
            orbit.rotationDirection === -1 ? 'reverse' : ''
          }`,
          '--dash-color': orbit.color,
          color: orbit.color,
        } as React.CSSProperties
      }
    />
  );
}
