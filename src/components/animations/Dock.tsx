import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface DockProps {
  children: React.ReactNode;
  className?: string;
  panelHeight?: number;
}

export function Dock({ children, className = '', panelHeight = 40 }: DockProps) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={`flex items-end gap-2 rounded-2xl border border-border bg-nav-bg backdrop-blur-md px-2 pb-2 ${className}`}
      style={{ height: panelHeight + 16 }}
    >
      {React.Children.map(children, (child) => (
        <DockItem mouseX={mouseX}>{child}</DockItem>
      ))}
    </motion.div>
  );
}

interface DockItemProps {
  children: React.ReactNode;
  mouseX: any;
  baseItemSize?: number;
  magnification?: number;
}

function DockItem({ children, mouseX, baseItemSize = 40, magnification = 50 }: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [baseItemSize, baseItemSize + magnification, baseItemSize]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      className="flex items-center justify-center rounded-full bg-surface border border-border overflow-hidden"
    >
      {children}
    </motion.div>
  );
}
