import { useAppSelector } from '../../redux/store'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'

const PokemonsList = () => {
  const {
    response: { results: pokemons },
  } = useAppSelector((state) => state.pokemonSlice)

  const pokemonDetail = (name: string) => {
    window.location.href = `/pokemon/${name}`
  }

  return (
    <Box>
      <Typography variant='h4' component='h2' gutterBottom align='center'>
        Pokemons
      </Typography>
      <Grid container spacing={3}>
        {pokemons?.map((pokemon) => (
          <Grid item xs={12} sm={6} md={4} key={pokemon.name}>
            <Card>
              <CardMedia
                component='img'
                image={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`}
                alt={pokemon.name}
              />
              <CardContent>
                <Typography variant='h6' component='div'>
                  {pokemon.name}
                </Typography>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={() => pokemonDetail(pokemon.name)}
                  sx={{ mt: 1 }}
                >
                  Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default PokemonsList
