import { useContext } from 'react';
import { ThemeContext } from '../contexts/themeContextValue';

function useTheme() {
  return useContext(ThemeContext);
}

export default useTheme;