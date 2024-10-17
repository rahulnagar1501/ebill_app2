import { createContext } from 'react';

export const ThemeContext = createContext({
  theme: 'light', // Default theme
  toggleTheme: () => {}, // Default toggle function
});