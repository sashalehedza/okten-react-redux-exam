const pokemonBaseUrl = 'https://pokeapi.co/api/v2'

const urls = {
  pokemons: {
    base: '/pokemon',
    byId: (id: number): string => pokemonBaseUrl + `/pokemon/${id}`,
    byName: (name: string): string => pokemonBaseUrl + `/pokemon/${name}`,
    byType: (type: string): string => pokemonBaseUrl + `/type/${type}`,
    byAbility: (ability: string): string =>
      pokemonBaseUrl + `/ability/${ability}`,
    forms: (url: string): string => pokemonBaseUrl + url,
  },
}

export { pokemonBaseUrl, urls }
