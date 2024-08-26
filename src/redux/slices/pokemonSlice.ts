import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export type Pokemon = {
  name: string
  url: string
}

type PokemonsResponse = {
  count: number
  next: string
  previous: string
  results: Pokemon[]
}

export type PokemonsState = {
  response: PokemonsResponse
  loading: boolean
  error: string | null
}

const initialState: PokemonsState = {
  response: { results: [], count: 0, next: '', previous: '' },
  loading: false,
  error: null,
}

const fetchPokemons = createAsyncThunk<PokemonsResponse, string>(
  'pokemons/fetchPokemons',
  async (url) => {
    const response = await axios.get<PokemonsResponse>(url)

    console.log(response.data)

    return response.data
  }
)

const fetchPokemonByName = createAsyncThunk<Pokemon, string>(
  'pokemons/fetchPokemonByName',
  async (name) => {
    const response = await axios.get<Pokemon>(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    )

    console.log(response.data)

    return response.data
  }
)

const fetchPokemonsByType = createAsyncThunk<PokemonsResponse, string>(
  'pokemons/fetchPokemonsByType',
  async (type) => {
    const response = await axios.get<PokemonsResponse>(
      `https://pokeapi.co/api/v2/type/${type}`
    )

    console.log(response.data)

    return response.data
  }
)

const fetchPokemonsByAbility = createAsyncThunk<PokemonsResponse, string>(
  'pokemons/fetchPokemonsByAbility',
  async (ability) => {
    const response = await axios.get<PokemonsResponse>(
      `https://pokeapi.co/api/v2/ability/${ability}`
    )

    console.log(response.data)

    return response.data
  }
)

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchPokemons.fulfilled, (state, { payload }) => {
        state.response = payload
        state.loading = false
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch pokemons'
      })
      .addCase(fetchPokemonByName.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchPokemonByName.fulfilled, (state, { payload }) => {
        state.response = {
          results: [payload],
          count: 1,
          next: '',
          previous: '',
        }
        state.loading = false
      })
      .addCase(fetchPokemonByName.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch pokemon by name'
      })
      .addCase(fetchPokemonsByType.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchPokemonsByType.fulfilled, (state, { payload }) => {
        state.response = payload
        state.loading = false
      })
      .addCase(fetchPokemonsByType.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch pokemons by type'
      })
      .addCase(fetchPokemonsByAbility.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchPokemonsByAbility.fulfilled, (state, { payload }) => {
        state.response = payload
        state.loading = false
      })
      .addCase(fetchPokemonsByAbility.rejected, (state, action) => {
        state.loading = false
        state.error =
          action.error.message || 'Failed to fetch pokemons by ability'
      })
  },
})

export const pokemonActions = {
  ...pokemonSlice.actions,
  fetchPokemons,
  fetchPokemonByName,
  fetchPokemonsByType,
  fetchPokemonsByAbility,
}
