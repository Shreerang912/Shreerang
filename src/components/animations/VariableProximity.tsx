import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface VariableProximityProps {
  text: string;
  className?: string;
  radius?: number;
  falloff?: 'linear' | 'gaussian';
}

export function VariableProximity({ text, className = '', radius = 70, falloff = 'gaussian' }: VariableProximityProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number | null; y: number | null }>({ x: null, y: null });
  const [letterPositions, setLetterPositions] = useState<{ x: number; y: number }[]>([]);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const updatePositions = () => {
      const positions = letterRefs.current.map((ref) => {
        if (!ref) return { x: 0, y: 0 };
        const rect = ref.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };
      });
      setLetterPositions(positions);
    };

    updatePositions();
    window.addEventListener('resize', updatePositions);
    return () => window.removeEventListener('resize', updatePositions);
  }, [text]);

  const calculateWeight = (index: number) => {
    if (mousePosition.x === null || mousePosition.y === null || !letterPositions[index]) return 400;

    const dx = mousePosition.x - letterPositions[index].x;
    const dy = mousePosition.y - letterPositions[index].y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > radius) return 400;

    let factor = 0;
    if (falloff === 'gaussian') {
      factor = Math.exp(-(distance * distance) / (2 * (radius / 2) * (radius / 2)));
    } else {
      factor = 1 - distance / radius;
    }

    // Map factor (0 to 1) to font weight (400 to 800)
    return 400 + factor * 400;
  };

  return (
    <div ref={containerRef} className={`flex flex-wrap ${className}`}>
      {text.split('').map((char, i) => {
        const weight = calculateWeight(i);
        return (
          <motion.span
            key={i}
            ref={(el) => (letterRefs.current[i] = el)}
            className="inline-block transition-all duration-100 ease-out"
            style={{
              fontWeight: weight,
              fontVariationSettings: `"wght" ${weight}`,
              whiteSpace: char === ' ' ? 'pre' : 'normal',
            }}
          >
            {char}
          </motion.span>
        );
      })}
    </div>
  );
}
