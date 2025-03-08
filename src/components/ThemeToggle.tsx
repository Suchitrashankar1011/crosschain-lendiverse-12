
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
      className="w-10 h-10 rounded-full relative overflow-hidden transition-all duration-300 
        dark:bg-lending-darker dark:hover:bg-lending-primary/30 dark:border-lending-border
        light:bg-white light:hover:bg-lending-primary/10 light:border-gray-200"
    >
      {theme === 'dark' ? (
        <Sun className="h-[18px] w-[18px] text-lending-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all" />
      ) : (
        <Moon className="h-[18px] w-[18px] text-lending-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all" />
      )}
    </Toggle>
  );
};

export default ThemeToggle;
