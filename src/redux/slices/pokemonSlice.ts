import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import {
  PokemonRespons,
  PokemonsRespons,
  PokemonsState,
} from '../../models/IPokemon'

const initialState: PokemonsState = {
  response: { results: [], count: 0, next: '', previous: '' },
  loading: false,
  pokemon: null,
  sprites: {},
}

const fetchPokemons = createAsyncThunk<PokemonsRespons, string>(
  'pokemons/fetchPokemons',
  async (url) => {
    const response = await axios.get<PokemonsRespons>(url)
    console.log('response.data', response.data)
    return response.data
  }
)

const fetchPokemonByName = createAsyncThunk<PokemonRespons, string>(
  'pokemons/fetchPokemonByName',
  async (id) => {
    const response = await axios.get<PokemonRespons>(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    )
    return response.data
  }
)

const fetchPokemonsByType = createAsyncThunk<PokemonRespons, string>(
  'pokemons/fetchPokemonsByType',
  async (type) => {
    const response = await axios.get<PokemonRespons>(
      `https://pokeapi.co/api/v2/type/${type}`
    )

    console.log(response.data)

    return response.data
  }
)

const fetchPokemonsByAbility = createAsyncThunk<PokemonRespons, string>(
  'pokemons/fetchPokemonsByAbility',
  async (ability) => {
    const response = await axios.get<PokemonRespons>(
      `https://pokeapi.co/api/v2/ability/${ability}`
    )

    console.log(response.data)

    return response.data
  }
)

const pokemonForms = createAsyncThunk<PokemonRespons, string>(
  'pokemons/pokemonForms',
  async (url) => {
    const response = await axios.get<PokemonRespons>(url)
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
      })
      .addCase(fetchPokemons.fulfilled, (state, { payload }) => {
        state.response = payload
        state.loading = false
      })
      .addCase(fetchPokemons.rejected, (state) => {
        state.loading = false
      })
      .addCase(fetchPokemonByName.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchPokemonByName.fulfilled, (state, { payload }) => {
        state.pokemon = payload
        state.loading = false
      })
      .addCase(fetchPokemonByName.rejected, (state) => {
        state.loading = false
      })
      .addCase(pokemonForms.pending, (state) => {
        state.loading = true
      })
      .addCase(pokemonForms.fulfilled, (state, { payload }) => {
        state.sprites = payload.sprites
        state.loading = false
      })
      .addCase(pokemonForms.rejected, (state) => {
        state.loading = false
      })
  },
})

export const pokemonActions = {
  ...pokemonSlice.actions,
  fetchPokemons,
  fetchPokemonByName,
  fetchPokemonsByType,
  fetchPokemonsByAbility,
  pokemonForms,
}
