import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { PokemonSprites } from './PokemonSprites'

type SpriteKeys =
  | 'back_default'
  | 'back_female'
  | 'back_shiny'
  | 'back_shiny_female'
  | 'front_default'
  | 'front_female'
  | 'front_shiny'
  | 'front_shiny_female'

type PokemonResponse = {
  name: string
  sprites: Record<SpriteKeys, string | null>
  forms: Array<{ url: string }>
}

const PokemonDetail = () => {
  const { id } = useParams<{ id: string }>()
  const [pokemon, setPokemon] = useState<PokemonResponse | null>(null)
  const [pokemonForms, setPokemonForms] = useState<
    Record<SpriteKeys, string | null>
  >({
    back_default: null,
    back_female: null,
    back_shiny: null,
    back_shiny_female: null,
    front_default: null,
    front_female: null,
    front_shiny: null,
    front_shiny_female: null,
  })

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        const response = await axios.get<PokemonResponse>(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        )
        setPokemon(response.data)
        const { data } = await axios.get<{
          sprites: Record<SpriteKeys, string | null>
        }>(response.data.forms[0].url)

        setPokemonForms(data.sprites)
      } catch (error) {
        console.error('Error fetching Pokemon detail:', error)
      }
    }

    fetchPokemonDetail()
  }, [id])

  if (!pokemon) {
    return <div>Loading...</div>
  }

  console.log('pokemonForms', pokemonForms)

  return (
    <>
      <div>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default ?? ''} alt={pokemon.name} />
        {pokemonForms && <PokemonSprites sprites={pokemonForms} />}
      </div>
    </>
  )
}

export default PokemonDetail
