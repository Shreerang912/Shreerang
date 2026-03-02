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
        className="absolute top-24 right-[10%] w-32 h-32 rounded-full bg-slate-200 transition-all duration-1000"
        style={{
          boxShadow: '0 0 60px 10px rgba(255, 255, 255, 0.15), inset -10px -10px 20px rgba(0,0,0,0.3)',
          background: 'radial-gradient(circle at 30% 30%, #ffffff, #cbd5e1)'
        }}
      >
        {/* Craters */}
        <div className="absolute top-6 left-6 w-6 h-6 rounded-full bg-slate-400/30 shadow-inner" />
        <div className="absolute top-12 left-16 w-8 h-8 rounded-full bg-slate-400/20 shadow-inner" />
        <div className="absolute bottom-8 left-10 w-4 h-4 rounded-full bg-slate-400/30 shadow-inner" />
        <div className="absolute top-8 right-8 w-3 h-3 rounded-full bg-slate-400/20 shadow-inner" />
      </div>

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
