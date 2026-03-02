import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';
import { Palette } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

export function FloatingNav() {
  const { cycleTheme } = useTheme();

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
      <button
        onClick={() => cycleTheme()}
        className="p-2 text-muted hover:text-foreground rounded-full hover:bg-surface transition-colors focus-visible:ring-2 focus-visible:ring-accent outline-none"
        aria-label="Cycle theme"
      >
        <Palette className="w-4 h-4" />
      </button>
    </nav>
  );
}
