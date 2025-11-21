import { useState, useEffect, useRef } from 'react';
import { TooltipPosition, LineCoords } from './types';
import { blankOrbits, orbitData } from './data';
import ProfileCenter from './ProfileCenter';
import BlankOrbitRing from './BlankOrbitRing';
import OrbitRing from './OrbitRing';
import TooltipConnector from './TooltipConnector';
import OrbitTooltip from './OrbitTooltip';
import './About.css';

export default function About() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeOrbit, setActiveOrbit] = useState<number | null>(null);
  const [tooltipPosition, setTooltipPosition] =
    useState<TooltipPosition>('bottom-right');
  const [lineCoords, setLineCoords] = useState<LineCoords | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const connectorAnimationRef = useRef<number>();

  useEffect(() => {
    let animationId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const maxDistance = 500;
      const attractionStrength = Math.max(
        0,
        (maxDistance - distance) / maxDistance
      );

      targetX = dx * attractionStrength * 0.3;
      targetY = dy * attractionStrength * 0.3;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      setMousePos({ x: currentX, y: currentY });
      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Update connector line position continuously
  useEffect(() => {
    if (activeOrbit === null || !containerRef.current) {
      if (connectorAnimationRef.current) {
        cancelAnimationFrame(connectorAnimationRef.current);
      }
      return;
    }

    const updateConnectorPosition = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();

      // Find the active orbit's icon button
      const orbitRings = containerRef.current.querySelectorAll(
        '.orbit-ring:not(.blank-orbit)'
      );
      const activeRing = orbitRings[activeOrbit] as HTMLElement;
      const iconButton = activeRing?.querySelector(
        '.satellite-dot'
      ) as HTMLElement;

      if (iconButton) {
        const iconRect = iconButton.getBoundingClientRect();
        const dotX = iconRect.left + iconRect.width / 2 - rect.left;
        const dotY = iconRect.top + iconRect.height / 2 - rect.top;

        // Calculate tooltip position relative to container (fixed position on page edges)
        // Connect to nearest corner of tooltip (inner corner closest to orbit)
        const containerRect = containerRef.current.getBoundingClientRect();
        const maxWidth = 1200; // --container-max-width
        const padding = Math.max(40, (window.innerWidth - maxWidth) / 2);
        const tooltipWidth = 280; // min-width of tooltip
        const tooltipHeight = 150; // approximate height

        let endX: number;
        let endY: number;

        switch (tooltipPosition) {
          case 'bottom-right':
            // Connect to top-left corner of tooltip (nearest to orbit)
            endX =
              window.innerWidth - padding - tooltipWidth - containerRect.left;
            endY = window.innerHeight - 40 - tooltipHeight - containerRect.top;
            break;
          case 'bottom-left':
            // Connect to top-right corner of tooltip
            endX = padding + tooltipWidth - containerRect.left;
            endY = window.innerHeight - 40 - tooltipHeight - containerRect.top;
            break;
          case 'top-right':
            // Connect to bottom-left corner of tooltip
            endX =
              window.innerWidth - padding - tooltipWidth - containerRect.left;
            endY = 120 + tooltipHeight - containerRect.top;
            break;
          case 'top-left':
          default:
            // Connect to bottom-right corner of tooltip
            endX = padding + tooltipWidth - containerRect.left;
            endY = 120 + tooltipHeight - containerRect.top;
            break;
        }

        setLineCoords({
          startX: dotX,
          startY: dotY,
          endX,
          endY,
        });
      }

      connectorAnimationRef.current = requestAnimationFrame(
        updateConnectorPosition
      );
    };

    connectorAnimationRef.current = requestAnimationFrame(
      updateConnectorPosition
    );

    return () => {
      if (connectorAnimationRef.current) {
        cancelAnimationFrame(connectorAnimationRef.current);
      }
    };
  }, [activeOrbit, tooltipPosition]);

  const handleDotHover = (index: number | null, event?: React.MouseEvent) => {
    setActiveOrbit(index);

    if (index !== null && event && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Get the orbit ring element to find the actual icon position
      const orbitRing = event.currentTarget as HTMLElement;
      const iconButton = orbitRing.querySelector(
        '.satellite-dot'
      ) as HTMLElement;

      let dotX: number;
      let dotY: number;

      if (iconButton) {
        const iconRect = iconButton.getBoundingClientRect();
        dotX = iconRect.left + iconRect.width / 2 - rect.left;
        dotY = iconRect.top + iconRect.height / 2 - rect.top;
      } else {
        // Fallback to mouse position
        dotX = event.clientX - rect.left;
        dotY = event.clientY - rect.top;
      }

      const isRight = dotX >= centerX;
      const isBottom = dotY >= centerY;

      let position: TooltipPosition;

      if (isBottom && isRight) {
        position = 'bottom-right';
      } else if (isBottom && !isRight) {
        position = 'bottom-left';
      } else if (!isBottom && isRight) {
        position = 'top-right';
      } else {
        position = 'top-left';
      }

      setTooltipPosition(position);
    } else {
      setLineCoords(null);
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="orbital-container" ref={containerRef}>
        <ProfileCenter />

        {blankOrbits.map((orbit, index) => (
          <BlankOrbitRing
            key={`blank-${index}`}
            orbit={orbit}
            index={index}
            mousePos={mousePos}
          />
        ))}

        {orbitData.map((orbit, index) => (
          <OrbitRing
            key={orbit.category}
            orbit={orbit}
            index={index}
            isActive={activeOrbit === index}
            totalOrbits={orbitData.length}
            mousePos={mousePos}
            onMouseEnter={handleDotHover}
            onMouseLeave={() => handleDotHover(null)}
          />
        ))}

        {activeOrbit !== null && lineCoords && (
          <TooltipConnector
            lineCoords={lineCoords}
            color={orbitData[activeOrbit].color}
          />
        )}

        {activeOrbit !== null && (
          <OrbitTooltip
            orbit={orbitData[activeOrbit]}
            position={tooltipPosition}
          />
        )}
      </div>
    </section>
  );
}
