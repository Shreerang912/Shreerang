import { useRef } from 'react';
import { useMousePosition } from '@/hooks/useMousePosition';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function SpotlightGradient() {
  const ref = useRef<HTMLDivElement>(null);
  useMousePosition(ref);
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,var(--spotlight)_0%,transparent_50%)]" />
    );
  }

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background: 'radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), var(--spotlight) 0%, transparent 80%)',
      }}
    />
  );
}
