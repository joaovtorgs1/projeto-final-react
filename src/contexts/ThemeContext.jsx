import { useState, useEffect } from 'react';
import { ThemeContext } from './themeContextValue';

export function ThemeProvider({ children }) {
  // lê a preferência salva no localStorage (se existir)
  const [tema, setTema] = useState(() => {
    try {
      return localStorage.getItem('tema') || 'light';
    } catch {
      return 'light';
    }
  });

  // aplica a classe "dark" no <html> e salva a preferência
  useEffect(() => {
    document.documentElement.classList.toggle('dark', tema === 'dark');
    try {
      localStorage.setItem('tema', tema);
    } catch {
      // se o localStorage não estiver disponível, ignora
    }
  }, [tema]);

  function alternarTema() {
    setTema((atual) => (atual === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeContext.Provider value={{ tema, alternarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}