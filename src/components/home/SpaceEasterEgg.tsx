import { useTheme } from '@/hooks/useTheme';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useEffect, useState } from 'react';

export function SpaceEasterEgg() {
  const { theme } = useTheme();
  const reducedMotion = useReducedMotion();
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: number; delay: string; duration: string }[]>([]);

  useEffect(() => {
    if (theme === 'space' && !reducedMotion) {
      const newStars = Array.from({ length: 60 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1,
        delay: `${Math.random() * 5}s`,
        duration: `${Math.random() * 3 + 2}s`,
      }));
      setStars(newStars);
    }
  }, [theme, reducedMotion]);

  if (theme !== 'space') return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Moon */}
      <div 
        className="absolute top-24 right-[10%] w-16 h-16 rounded-full"
        style={{
          boxShadow: 'inset -12px -8px 0 2px #cbd5e1',
          filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.2))'
        }}
      />

      {/* Twinkling Stars */}
      {!reducedMotion && stars.map(star => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: 0.1,
            animation: `twinkle ${star.duration} ease-in-out infinite alternate`,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
}
