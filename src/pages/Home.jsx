import { Link } from 'react-router-dom';
import Card from '../components/Card';

function Home() {
  return (
    <Card titulo="Bem-vindo à Pokédex">
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Projeto final em construção, feito com React, React Router, Tailwind
        CSS e a PokeAPI. Use o menu para navegar.
      </p>
      <Link
        to="/pokemons"
        className="inline-block px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium"
      >
        Ver Pokémons
      </Link>
    </Card>
  );
}

export default Home;