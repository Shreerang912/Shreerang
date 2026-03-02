import { useState, useEffect, useCallback } from 'react';

export type Theme = 'space' | 'dark' | 'light' | 'midnight' | 'amoled' | 'cyberpunk' | 'forest';

export const THEMES: Theme[] = ['space', 'dark', 'light', 'midnight', 'amoled', 'cyberpunk', 'forest'];
const STORAGE_KEY = 'portfolio-theme';

export const useTheme = () => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'space';
    let saved = localStorage.getItem(STORAGE_KEY);
    
    // Migrate old 'aeronautical' theme to 'space'
    if (saved === 'aeronautical') {
      saved = 'space';
      localStorage.setItem(STORAGE_KEY, 'space');
    }
    
    return THEMES.includes(saved as Theme) ? (saved as Theme) : 'space';
  });

  // Listen for theme changes from other components
  useEffect(() => {
    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent<Theme>;
      setThemeState(customEvent.detail);
    };
    window.addEventListener('theme-change', handleThemeChange);
    return () => window.removeEventListener('theme-change', handleThemeChange);
  }, []);

  const setTheme = useCallback((newTheme: Theme | ((prev: Theme) => Theme)) => {
    setThemeState(prev => {
      const nextTheme = typeof newTheme === 'function' ? newTheme(prev) : newTheme;
      if (prev !== nextTheme) {
        // Defer side effects to avoid dispatching events during React render phase
        queueMicrotask(() => {
          localStorage.setItem(STORAGE_KEY, nextTheme);
          document.documentElement.setAttribute('data-theme', nextTheme);
          window.dispatchEvent(new CustomEvent('theme-change', { detail: nextTheme }));
        });
      }
      return nextTheme;
    });
  }, []);

  // Ensure document attribute is set on initial load
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const cycleTheme = useCallback((reverse = false) => {
    setTheme(prev => {
      const idx = THEMES.indexOf(prev);
      const next = reverse
        ? (idx - 1 + THEMES.length) % THEMES.length
        : (idx + 1) % THEMES.length;
      return THEMES[next];
    });
  }, [setTheme]);

  return { theme, setTheme, cycleTheme };
};
