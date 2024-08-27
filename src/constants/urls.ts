const baseUrl = 'https://jsonplaceholder.typicode.com'
const pokemonBaseUrl = 'https://pokeapi.co/api/v2'

const urls = {
  users: {
    base: '/users',
    byId: (id: number): string => urls.users.base + `${id}`,
  },
  posts: {
    base: '/posts',
    byId: (id: number): string => urls.posts.base + `${id}`,
    byUserId: (id: number): string => urls.posts.base + `?userId=${id}`,
  },
  comments: {
    base: '/comments',
    byId: (id: number): string => urls.comments.base + `${id}`,
    byPostId: (id: number): string => urls.comments.base + `?postId=${id}`,
  },
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

export { urls, baseUrl, pokemonBaseUrl }
