// contexts/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { type theme, type ThemeContextType, type themeStyles } from '../types/themes.types';
import { THEMES, themeStyle } from '../styles/theme.styles';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<theme>(THEMES.SOFT_LIGHT as theme);
  const [styles, setStyles] = useState<themeStyles>(themeStyle[THEMES.SOFT_LIGHT as theme]);

  useEffect(() => {
    setStyles(themeStyle[currentTheme]);
    // Apply global body styles
    document.body.style.backgroundColor = themeStyle[currentTheme].background;
    document.body.style.color = themeStyle[currentTheme].text;
  }, [currentTheme]);

  const toggleTheme = (themeId: theme): void => {
    if (themeStyle[themeId]) {
      setCurrentTheme(themeId);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, styles, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};