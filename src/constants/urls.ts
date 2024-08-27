const pokemonBaseUrl = 'https://pokeapi.co/api/v2'

const urls = {
  pokemons: {
    base: '/pokemon',
    byName: (name: string): string => pokemonBaseUrl + `/pokemon/${name}`,
    byType: (type: string): string => pokemonBaseUrl + `/type/${type}`,
    byAbility: (ability: string): string =>
      pokemonBaseUrl + `/ability/${ability}`,
  },
}

export { pokemonBaseUrl, urls }
