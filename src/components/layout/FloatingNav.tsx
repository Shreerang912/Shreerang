import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Palette } from 'lucide-react';
import { useTheme, THEMES } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

export function FloatingNav() {
  const { theme, setTheme } = useTheme();
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsThemeOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 p-1.5 rounded-full border border-border bg-nav-bg backdrop-blur-md shadow-sm">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            cn(
              "relative px-4 py-2 text-sm font-medium rounded-full transition-colors",
              isActive ? "text-foreground" : "text-muted hover:text-foreground"
            )
          }
        >
          {({ isActive }) => (
            <>
              <span className="relative z-10">{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 rounded-full bg-surface border border-border shadow-sm"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </>
          )}
        </NavLink>
      ))}
      <div className="w-px h-6 bg-border mx-1" />
      
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsThemeOpen(!isThemeOpen)}
          className="p-2 text-muted hover:text-foreground rounded-full hover:bg-surface transition-colors focus-visible:ring-2 focus-visible:ring-accent outline-none"
          aria-label="Select theme"
        >
          <Palette className="w-4 h-4" />
        </button>
        
        <AnimatePresence>
          {isThemeOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 top-full mt-2 w-40 py-1 rounded-xl border border-border bg-surface shadow-lg overflow-hidden"
            >
              {THEMES.map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    setTheme(t);
                    setIsThemeOpen(false);
                  }}
                  className={cn(
                    "w-full text-left px-4 py-2 text-sm transition-colors",
                    theme === t 
                      ? "bg-accent/10 text-accent font-medium" 
                      : "text-muted hover:bg-background hover:text-foreground"
                  )}
                >
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
