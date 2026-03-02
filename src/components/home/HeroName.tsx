import { useState } from 'react';
import { motion } from 'motion/react';
import { VariableProximity } from '@/components/animations/VariableProximity';

export function HeroName() {
  const [hovered, setHovered] = useState(false);

  return (
    <h1
      className="text-5xl font-semibold tracking-tight text-foreground flex items-center cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <VariableProximity text="Shreerang Bhavsar" radius={70} falloff="gaussian" />
      <motion.span
        initial={{ opacity: 0, x: -4 }}
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -4 }}
        transition={{ duration: 0.2 }}
        className="text-sm text-muted ml-3 font-mono"
      >
        – builder
      </motion.span>
    </h1>
  );
}
