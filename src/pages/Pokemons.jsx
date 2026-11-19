import { useState, useEffect } from 'react';
import Card from '../components/Card';
import { listarPokemons } from '../services/api';

function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    async function carregar() {
      try {
        const dados = await listarPokemons(12);
        setPokemons(dados);
      } catch (e) {
        setErro(
          e.message === 'Failed to fetch'
            ? 'Falha na conexão. Verifique sua internet.'
            : e.message
        );
      } finally {
        setCarregando(false);
      }
    }

    carregar();
  }, []);

  if (carregando) {
    return (
      <div className="flex flex-col items-center gap-3 py-8" role="status">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />
        <p className="text-gray-600 dark:text-gray-300">Carregando...</p>
      </div>
    );
  }

  if (erro) {
    return (
      <div
        role="alert"
        className="p-4 border rounded-lg bg-red-100 text-red-800 border-red-300"
      >
        {erro}
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Pokémons</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {pokemons.map((p) => (
          <Card key={p.id} titulo={p.name}>
            <img
              src={p.sprites.other['official-artwork'].front_default}
              alt={p.name}
              className="w-full h-32 object-contain"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              #{p.id}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Pokemons;