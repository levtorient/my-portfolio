import { useEffect, useState, useRef } from 'react';
import { FloatingIcon } from './types';
import { techIcons } from './data';
import FloatingIconItem from './FloatingIcon';
import './FloatingIcons.css';

export default function FloatingIcons() {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const generateIcons = () => {
      const iconCount = 30;
      const newIcons: FloatingIcon[] = [];

      for (let i = 0; i < iconCount; i++) {
        const hasComet = Math.random() < 0.2;
        const cometAngle = Math.random() * Math.PI * 2;
        newIcons.push({
          id: i,
          icon: techIcons[Math.floor(Math.random() * techIcons.length)],
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 10 + Math.random() * 14,
          duration: 8 + Math.random() * 12,
          delay: Math.random() * -10,
          opacity: 0.1 + Math.random() * 0.2,
          offsetX: 0,
          offsetY: 0,
          hasComet,
          cometAngle,
          cometSpeed: hasComet ? 0.15 + Math.random() * 0.1 : 0,
        });
      }

      setIcons(newIcons);
    };

    generateIcons();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      setIcons((prevIcons) =>
        prevIcons.map((icon) => {
          let newX = icon.x;
          let newY = icon.y;
          let newAngle = icon.cometAngle;

          // Move comet icons in their direction
          if (icon.hasComet) {
            newX += Math.cos(icon.cometAngle) * icon.cometSpeed;
            newY += Math.sin(icon.cometAngle) * icon.cometSpeed;

            // Check if off-screen and respawn
            if (newX < -10 || newX > 110 || newY < -10 || newY > 110) {
              newAngle = Math.random() * Math.PI * 2;
              // Spawn from opposite edge based on new direction
              if (Math.cos(newAngle) > 0) {
                newX = -5;
              } else {
                newX = 105;
              }
              if (Math.sin(newAngle) > 0) {
                newY = -5 + Math.random() * 50;
              } else {
                newY = 55 + Math.random() * 50;
              }
            }
          }

          const iconX = (newX / 100) * window.innerWidth;
          const iconY = (newY / 100) * window.innerHeight;

          const dx = mousePos.current.x - iconX;
          const dy = mousePos.current.y - iconY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const maxDistance = 400;
          const attractionStrength = Math.max(
            0,
            (maxDistance - distance) / maxDistance
          );

          const pullStrength = Math.pow(attractionStrength, 1.5) * 120;
          const targetOffsetX =
            distance > 0 ? (dx / distance) * pullStrength : 0;
          const targetOffsetY =
            distance > 0 ? (dy / distance) * pullStrength : 0;

          const newOffsetX =
            icon.offsetX + (targetOffsetX - icon.offsetX) * 0.08;
          const newOffsetY =
            icon.offsetY + (targetOffsetY - icon.offsetY) * 0.08;

          return {
            ...icon,
            x: newX,
            y: newY,
            cometAngle: newAngle,
            offsetX: newOffsetX,
            offsetY: newOffsetY,
          };
        })
      );
      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="floating-icons-container">
      {icons.map((item) => (
        <FloatingIconItem key={item.id} item={item} />
      ))}
    </div>
  );
}
