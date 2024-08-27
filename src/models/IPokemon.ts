export type IPokemons = {
  count: number
  next: string
  previous: string
  results: Pokemon[]
}

export type IPokemon = {
  name: string
  abilities: [
    {
      ability: {
        name: string
        url: string
      }
      is_hidden: boolean
      slot: number
    }
  ]
  base_experience: number
  cries: {
    latest: string
    legacy: string
  }
  forms: Array<{ name: string; url: string }>
  game_indices: [
    {
      game_index: number
      version: {
        name: string
        url: string
      }
    }
  ]
  held_items: []
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: []
  past_abilities: []
  past_types: []
  species: {
    name: string
    url: string
  }
  sprites: {
    back_default: string
    back_female: string
    back_shiny: string
    back_shiny_female: string
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
  }
  stats: Array<{
    base_stat: number
    effort: number
    stat: {
      name: string
      url: string
    }
  }>
}

export type Sprites = Record<string, string>

export type Pokemon = {
  name: string
  url: string
}

export type PokemonsState = {
  response: IPokemons
  loading: boolean
  pokemon: IPokemon | null
  sprites: Sprites
}
