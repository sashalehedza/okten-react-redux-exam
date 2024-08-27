import { createSlice } from '@reduxjs/toolkit'

import { PokemonsState } from '../../models/IPokemon'
import {
  fetchPokemons,
  fetchPokemonByName,
  fetchPokemonByNamePage,
  pokemonForms,
  fetchPokemonsByType,
  fetchPokemonsByAbility,
} from '../reducers/pokemon.extra.reducers'

const initialState: PokemonsState = {
  response: { results: [], count: 0, next: '', previous: '' },
  loading: false,
  pokemon: null,
  sprites: {},
}

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
      .addCase(fetchPokemonsByType.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchPokemonsByType.fulfilled, (state, { payload }) => {
        state.response = payload
        state.loading = false
      })
      .addCase(fetchPokemonsByType.rejected, (state) => {
        state.loading = false
      })
      .addCase(fetchPokemonsByAbility.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchPokemonsByAbility.fulfilled, (state, { payload }) => {
        state.response = payload
        state.loading = false
      })
      .addCase(fetchPokemonsByAbility.rejected, (state) => {
        state.loading = false
      })
      .addCase(fetchPokemonByNamePage.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchPokemonByNamePage.fulfilled, (state, { payload }) => {
        state.pokemon = payload
        state.loading = false
      })
      .addCase(fetchPokemonByName.pending, (state) => {
        state.loading = true
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
  fetchPokemonByNamePage,
  fetchPokemonsByType,
  fetchPokemonsByAbility,
  pokemonForms,
}
