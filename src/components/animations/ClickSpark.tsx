import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ClickEvent {
  id: number;
  x: number;
  y: number;
}

export function ClickSpark() {
  const [clicks, setClicks] = useState<ClickEvent[]>([]);
  const sparkCount = 10;
  const sparkRadius = 20;
  const sparkSize = 21;
  const duration = 300;

  const handleClick = useCallback((e: MouseEvent) => {
    const newClick = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };

    setClicks((prev) => [...prev, newClick]);

    setTimeout(() => {
      setClicks((prev) => prev.filter((c) => c.id !== newClick.id));
    }, duration);
  }, []);

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [handleClick]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <AnimatePresence>
        {clicks.map((click) => (
          <motion.div
            key={click.id}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration / 1000, ease: 'easeOut' }}
            className="absolute"
            style={{
              left: click.x,
              top: click.y,
            }}
          >
            {Array.from({ length: sparkCount }).map((_, i) => {
              const angle = (i * (360 / sparkCount) * Math.PI) / 180;
              const x2 = Math.cos(angle) * sparkRadius;
              const y2 = Math.sin(angle) * sparkRadius;

              return (
                <motion.svg
                  key={i}
                  width={sparkSize * 2}
                  height={sparkSize * 2}
                  viewBox={`-${sparkSize} -${sparkSize} ${sparkSize * 2} ${sparkSize * 2}`}
                  className="absolute"
                  style={{
                    left: -sparkSize,
                    top: -sparkSize,
                    transform: `rotate(${i * (360 / sparkCount)}deg)`,
                  }}
                >
                  <motion.line
                    x1="0"
                    y1="0"
                    x2={sparkRadius}
                    y2="0"
                    stroke="var(--accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: `0 ${sparkRadius}`, strokeDashoffset: 0 }}
                    animate={{
                      strokeDasharray: `${sparkRadius} ${sparkRadius}`,
                      strokeDashoffset: -sparkRadius,
                    }}
                    transition={{
                      duration: duration / 1000,
                      ease: 'easeOut',
                    }}
                  />
                </motion.svg>
              );
            })}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
