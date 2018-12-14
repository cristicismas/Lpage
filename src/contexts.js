import React from 'react';
import { THEMES } from './constants/themes';

export const ThemeContext = React.createContext({
  theme: THEMES.DARK,
  toggleTheme: () => {}
});
