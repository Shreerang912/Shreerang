import { useState, useEffect, useCallback } from 'react';

export type Theme = 'aeronautical' | 'dark' | 'light' | 'midnight' | 'amoled' | 'cyberpunk' | 'forest';

export const THEMES: Theme[] = ['aeronautical', 'dark', 'light', 'midnight', 'amoled', 'cyberpunk', 'forest'];
const STORAGE_KEY = 'portfolio-theme';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'aeronautical';
    return (localStorage.getItem(STORAGE_KEY) as Theme) ?? 'aeronautical';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const cycleTheme = useCallback((reverse = false) => {
    setTheme(prev => {
      const idx = THEMES.indexOf(prev);
      const next = reverse
        ? (idx - 1 + THEMES.length) % THEMES.length
        : (idx + 1) % THEMES.length;
      return THEMES[next];
    });
  }, []);

  return { theme, setTheme, cycleTheme };
};
