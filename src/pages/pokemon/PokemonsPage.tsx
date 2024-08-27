import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { pokemonActions } from '../../redux/slices/pokemonSlice'
import PokemonsList from './PokemonsList'
import Pagination from './Pagination'

import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  CircularProgress,
} from '@mui/material'

const PokemonsPage = () => {
  const dispatch = useAppDispatch()
  const [search, setSearch] = useState('')
  const [filterType, setFilterType] = useState('')
  const [filterAbility, setFilterAbility] = useState('')

  const {
    loading,
    response: { next, previous },
  } = useAppSelector((state) => state.pokemonSlice)

  useEffect(() => {
    dispatch(pokemonActions.fetchPokemons('https://pokeapi.co/api/v2/pokemon'))
  }, [dispatch])

  const handleSearch = () => {
    if (search) {
      dispatch(pokemonActions.fetchPokemonByName(search.toLowerCase()))
    } else {
      dispatch(
        pokemonActions.fetchPokemons('https://pokeapi.co/api/v2/pokemon')
      )
    }
  }

  const handleFilterByType = () => {
    if (filterType) {
      dispatch(pokemonActions.fetchPokemonsByType(filterType.toLowerCase()))
    } else {
      dispatch(
        pokemonActions.fetchPokemons('https://pokeapi.co/api/v2/pokemon')
      )
    }
  }

  const handleFilterByAbility = () => {
    if (filterAbility) {
      dispatch(
        pokemonActions.fetchPokemonsByAbility(filterAbility.toLowerCase())
      )
    } else {
      dispatch(
        pokemonActions.fetchPokemons('https://pokeapi.co/api/v2/pokemon')
      )
    }
  }

  const onPageChange = (url: string) => {
    dispatch(pokemonActions.fetchPokemons(url))
  }

  if (loading) {
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
    <Container maxWidth='md'>
      <Box my={4}>
        <Typography variant='h4' component='h1' gutterBottom align='center'>
          Pokemon Search and Filter
        </Typography>
      </Box>

      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label='Search Pokemon by name'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button
            variant='contained'
            color='primary'
            onClick={handleSearch}
            fullWidth
          >
            Search
          </Button>
        </Grid>

        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            label='Filter by type'
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button
            variant='contained'
            color='secondary'
            onClick={handleFilterByType}
            fullWidth
          >
            Filter by Type
          </Button>
        </Grid>

        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            label='Filter by ability'
            value={filterAbility}
            onChange={(e) => setFilterAbility(e.target.value)}
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button
            variant='contained'
            color='secondary'
            onClick={handleFilterByAbility}
            fullWidth
          >
            Filter by Ability
          </Button>
        </Grid>
      </Grid>

      <PokemonsList />
      <Pagination next={next} previous={previous} onPageChange={onPageChange} />
    </Container>
  )
}

export default PokemonsPage
