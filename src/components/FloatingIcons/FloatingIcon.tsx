import { FloatingIcon as FloatingIconType } from './types';

interface FloatingIconProps {
  item: FloatingIconType;
}

export default function FloatingIconItem({ item }: FloatingIconProps) {
  // Convert angle to degrees and add 180 to point tail opposite to movement direction
  const tailRotation = item.hasComet
    ? (item.cometAngle * 180) / Math.PI + 180
    : 0;

  return (
    <span
      className={`floating-icon ${item.hasComet ? 'floating-icon--comet' : ''}`}
      style={
        {
          left: `${item.x}%`,
          top: `${item.y}%`,
          fontSize: `${item.size}px`,
          animationDuration: `${item.duration}s`,
          animationDelay: `${item.delay}s`,
          opacity: item.hasComet ? 0.4 : item.opacity,
          transform: `translate(${item.offsetX}px, ${item.offsetY}px)`,
          '--comet-tail-rotation': `${tailRotation}deg`,
        } as React.CSSProperties
      }
    >
      {item.icon}
    </span>
  );
}
