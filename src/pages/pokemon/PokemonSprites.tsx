import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { pokemonActions } from '../../redux/slices/pokemonSlice'
import {
  Box,
  CircularProgress,
  Grid,
  Typography,
  CardMedia,
} from '@mui/material'

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
    return (
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        minHeight='50vh'
      >
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box>
      <Typography variant='h6' component='h2' gutterBottom align='center'>
        Pokemon Sprites
      </Typography>
      <Grid container spacing={2} justifyContent='center'>
        {Object.entries(sprites).map(([key, spriteUrl]) =>
          spriteUrl ? (
            <Grid item key={key}>
              <CardMedia
                component='img'
                src={spriteUrl}
                alt={`Pokemon sprite ${key}`}
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: '8px',
                  boxShadow: 1,
                }}
              />
            </Grid>
          ) : null
        )}
      </Grid>
    </Box>
  )
}
