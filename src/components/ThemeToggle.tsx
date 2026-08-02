'use client';

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`p-2 rounded-full transition-colors duration-300 focus:outline-none ${
        isDark
          ? 'bg-[#282420] text-[#F6F3EF] hover:bg-[#35302B]'
          : 'bg-[#EFEBE6] text-[#35302B] hover:bg-[#8C8275] hover:text-[#F6F3EF]'
      } ${className}`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-[#F6F3EF]" />
        ) : (
          <Moon className="w-4 h-4 text-[#35302B]" />
        )}
      </motion.div>
    </button>
  );
}
