import { useReducedMotion as useFramerReducedMotion } from 'motion/react';

export const useReducedMotion = () => {
  const shouldReduceMotion = useFramerReducedMotion();
  return shouldReduceMotion;
};
