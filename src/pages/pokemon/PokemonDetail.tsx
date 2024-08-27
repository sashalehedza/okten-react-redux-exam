import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../redux/store'
import { pokemonActions } from '../../redux/slices/pokemonSlice'
import { PokemonSprites } from './PokemonSprites'

const PokemonDetail = () => {
  const { id } = useParams<{ id: string }>()
  const pokemon = useAppSelector((state) => state.pokemonSlice.pokemon)

  const dispatch = useAppDispatch()

  useEffect(() => {
    try {
      if (id) {
        dispatch(pokemonActions.fetchPokemonByNamePage(id))
      }
    } catch (error) {
      console.error('Error fetching Pokemon detail:', error)
    }
  }, [dispatch, id])

  if (!pokemon) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default ?? ''} alt={pokemon.name} />
        <PokemonSprites url={pokemon.forms[0].url} />
      </div>
    </>
  )
}

export default PokemonDetail
