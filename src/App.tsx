import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { useEffect } from 'react';

import { useTheme } from '@/hooks/useTheme';
import { FloatingNav } from '@/components/layout/FloatingNav';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { SpotlightGradient } from '@/components/home/SpotlightGradient';
import { BackgroundGrid } from '@/components/home/BackgroundGrid';
import { ParticleBackground } from '@/components/home/ParticleBackground';
import { SpaceEasterEgg } from '@/components/home/SpaceEasterEgg';
import { ClickSpark } from '@/components/animations/ClickSpark';
import { FloatingContactBar } from '@/components/contact/FloatingContactBar';

import { Home } from '@/pages/Home';
import { Projects } from '@/pages/Projects';
import { About } from '@/pages/About';
import { Contact } from '@/pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* @ts-ignore */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function AppContent() {
  const { cycleTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 't' || e.key === 'T') {
        if (!e.metaKey && !e.ctrlKey && e.target === document.body) {
          cycleTheme(e.shiftKey);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [cycleTheme]);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent selection:text-background">
      <ClickSpark />
      <BackgroundGrid />
      <ParticleBackground />
      <SpaceEasterEgg />
      <SpotlightGradient />
      
      <FloatingNav />
      <FloatingContactBar />
      
      <AnimatedRoutes />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

