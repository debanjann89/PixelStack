'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Sync state with DOM on mount
  useEffect(() => {
    const isLight = document.documentElement.classList.contains('light');
    setTheme(isLight ? 'light' : 'dark');
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.add('light');
      localStorage.setItem('pixelstack-theme', 'light');
      setTheme('light');
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('pixelstack-theme', 'dark');
      setTheme('dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl bg-zinc-950/40 border border-white/5 hover:border-primary/20 text-zinc-400 hover:text-white transition-all cursor-pointer flex items-center justify-center"
      aria-label="Toggle Color Theme"
      title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {theme === 'dark' ? (
        <Sun className="h-4.5 w-4.5 text-primary animate-pulse" />
      ) : (
        <Moon className="h-4.5 w-4.5 text-primary" />
      )}
    </button>
  );
}
