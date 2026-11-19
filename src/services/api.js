const BASE_URL = 'https://pokeapi.co/api/v2';

async function requisitar(caminho) {
  const resposta = await fetch(`${BASE_URL}${caminho}`);

  // o fetch não lança erro em 404/500, então checamos manualmente
  if (!resposta.ok) {
    throw new Error(`Erro ${resposta.status} ao acessar a API.`);
  }

  return resposta.json();
}

export async function listarPokemons(limite = 12) {
  const lista = await requisitar(`/pokemon?limit=${limite}`);
  // a lista traz só nome e url, então buscamos os detalhes de cada um
  return Promise.all(lista.results.map((p) => requisitar(`/pokemon/${p.name}`)));
}

export function buscarPokemon(nome) {
  return requisitar(`/pokemon/${nome.toLowerCase()}`);
}