const BASE_URL = "https://pokeapi.co/api/v2"

export const getPokemonByIdOrName = (key) => {
  // https://pokeapi.co/api/v2/pokemon/{id or name}/
  return fetch(`${BASE_URL}/pokemon/${key}`).then(response => response.json()).catch(() => Promise.resolve(null))
}