import { NavLink } from 'react-router-dom';
import Button from './Button';
import useTheme from '../hooks/useTheme';

function Header() {
  const { tema, alternarTema } = useTheme();

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm sm:text-base font-medium transition-colors ${
      isActive
        ? 'bg-blue-600 text-white'
        : 'text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700'
    }`;

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <span className="text-xl font-bold text-gray-900 dark:text-white">
          Pokédex App
        </span>
        <nav className="flex flex-wrap items-center gap-2">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/pokemons" className={linkClass}>
            Pokémons
          </NavLink>
          <NavLink to="/sobre" className={linkClass}>
            Sobre
          </NavLink>
          <Button variant="secondary" onClick={alternarTema}>
            {tema === 'light' ? '🌙 Escuro' : '☀️ Claro'}
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Header;