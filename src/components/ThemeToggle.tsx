
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import { useTheme } from '@/contexts/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Toggle 
      pressed={theme === 'light'} 
      onPressedChange={toggleTheme}
      aria-label="Toggle theme"
      className="w-10 h-10 rounded-full bg-lending-card border-lending-border hover:bg-lending-primary/20 transition-all duration-300"
    >
      {theme === 'dark' ? 
        <Sun className="h-4 w-4 text-lending-primary" /> : 
        <Moon className="h-4 w-4 text-lending-primary" />
      }
    </Toggle>
  );
};

export default ThemeToggle;
