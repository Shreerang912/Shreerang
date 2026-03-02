import React from 'react';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { MOTION } from '@/lib/constants';

interface PageWrapperProps {
  children: React.ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  const location = useLocation();
  const reducedMotion = useReducedMotion();

  const variants = {
    initial: {
      opacity: 0,
      y: reducedMotion ? 0 : 16,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: reducedMotion ? 0 : -16,
    },
  };

  return (
    <motion.main
      key={location.pathname}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: MOTION.duration.page, ease: MOTION.ease.default }}
      className="min-h-screen pt-32 pb-24 px-6 lg:px-12 max-w-5xl mx-auto w-full"
    >
      {children}
    </motion.main>
  );
}
