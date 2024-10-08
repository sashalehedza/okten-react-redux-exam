import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { pokemonActions } from '../../redux/slices/pokemonSlice'
import { PokemonSprites } from './PokemonSprites'
import {
  Box,
  Card,
  CardMedia,
  CircularProgress,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'

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
    <Container maxWidth='sm' sx={{ mt: 4 }}>
      <Card>
        <Box p={3} textAlign='center'>
          <Typography variant='h4' component='h2' gutterBottom>
            {pokemon.name}
          </Typography>
          <CardMedia
            component='img'
            height='200'
            image={pokemon.sprites.front_default ?? ''}
            alt={pokemon.name}
            sx={{ maxWidth: '150px', margin: 'auto' }}
          />
          <Box mt={3}>
            <PokemonSprites url={pokemon.forms[0].url} />
          </Box>

          <Box mt={3}>
            <Typography variant='h6'>Abilities</Typography>
            <List>
              {pokemon.abilities.map((ability, index) => (
                <ListItem key={index}>
                  <ListItemText primary={ability.ability.name} />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box mt={3}>
            <Typography variant='h6'>Stats</Typography>
            <List>
              {pokemon.stats.map((stat, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={`${stat.stat.name}: ${stat.base_stat}`}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box mt={3}>
            <Typography variant='h6'>Types</Typography>
            <List>
              {pokemon.types.map((type, index) => (
                <ListItem key={index}>
                  <ListItemText primary={type.type.name} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Card>
    </Container>
  )
}

export default PokemonDetail
