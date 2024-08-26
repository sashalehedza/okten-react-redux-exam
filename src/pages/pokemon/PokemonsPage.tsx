import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { pokemonActions } from '../../redux/slices/pokemonSlice'
import PokemonsList from './PokemonsList'
import Pagination from './Pagination'

const PokemonsPage = () => {
  const dispatch = useAppDispatch()
  const [search, setSearch] = useState('')
  const [filterType, setFilterType] = useState('')
  const [filterAbility, setFilterAbility] = useState('')

  const {
    loading,
    response: { count, next, previous },
  } = useAppSelector((state) => state.pokemonSlice)

  useEffect(() => {
    dispatch(pokemonActions.fetchPokemons('https://pokeapi.co/api/v2/pokemon'))
  }, [dispatch])

  const handleSearch = () => {
    if (search) {
      dispatch(pokemonActions.fetchPokemonByName(search.toLowerCase()))
    }
  }

  const handleFilterByType = () => {
    if (filterType) {
      dispatch(pokemonActions.fetchPokemonsByType(filterType.toLowerCase()))
    }
  }

  const handleFilterByAbility = () => {
    if (filterAbility) {
      dispatch(
        pokemonActions.fetchPokemonsByAbility(filterAbility.toLowerCase())
      )
    }
  }

  const onPageChange = (url: string) => {
    dispatch(pokemonActions.fetchPokemons(url))
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className='App'>
      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Search Pokemon by name'
      />
      <button onClick={handleSearch}>Search</button>

      <input
        type='text'
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        placeholder='Filter by type'
      />
      <button onClick={handleFilterByType}>Filter by Type</button>

      <input
        type='text'
        value={filterAbility}
        onChange={(e) => setFilterAbility(e.target.value)}
        placeholder='Filter by ability'
      />
      <button onClick={handleFilterByAbility}>Filter by Ability</button>

      <PokemonsList />
      <Pagination
        currentPage={1}
        next={next}
        previous={previous}
        onPageChange={onPageChange}
        totalPages={count}
      />
    </div>
  )
}

export default PokemonsPage
