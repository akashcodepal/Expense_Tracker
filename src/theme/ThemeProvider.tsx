import { createContext, useMemo, useState } from 'react';
import { Theme } from './types';
import { darkTheme, lightTheme } from './theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const value = useMemo(() => {
    return {
      toggleTheme,
      theme: isDark ? darkTheme : lightTheme,
      isDark,
    };
  }, [isDark]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
