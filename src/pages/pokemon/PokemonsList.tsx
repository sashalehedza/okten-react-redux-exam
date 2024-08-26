import { useAppSelector } from '../../redux/store'

const PokemonsList = () => {
  const {
    response: { results: pokemons },
  } = useAppSelector((state) => state.pokemonSlice)

  const pokemonDetail = (name: string) => {
    window.location.href = `/pokemon/${name}`
  }

  return (
    <>
      <h1 className='mainTitle'>Pokemons</h1>
      <ul className='pokemonsList'>
        {pokemons?.map((pokemon) => (
          <li className='pokemonItem' key={pokemon.name}>
            <img
              className='pokemonImage'
              src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`}
              alt={pokemon.name}
            />
            <span className='pokemonName'>{pokemon.name}</span>
            <button onClick={() => pokemonDetail(pokemon.name)}>Details</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default PokemonsList
