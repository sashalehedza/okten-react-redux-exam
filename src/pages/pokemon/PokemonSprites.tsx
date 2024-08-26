import { FC, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../redux/store'

import { pokemonActions } from '../../redux/slices/pokemonSlice'

type PokemonSpritesProps = {
  url: string
}

export const PokemonSprites: FC<PokemonSpritesProps> = ({ url }) => {
  const dispatch = useAppDispatch()

  const sprites = useAppSelector((state) => state.pokemonSlice.sprites)

  useEffect(() => {
    try {
      if (url) {
        dispatch(pokemonActions.pokemonForms(url))
      }
    } catch (error) {
      console.error('Error fetching Pokemon detail:', error)
    }
  }, [dispatch, url])

  if (!sprites) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>Pokemon Sprites</h2>
      <ul>
        {Object.entries(sprites).map(([key, url]) =>
          url ? (
            <li key={key}>
              <img
                src={url}
                alt={'Pokemon sprite'}
                style={{ width: '100px', height: '100px' }}
              />
            </li>
          ) : null
        )}
      </ul>
    </div>
  )
}
