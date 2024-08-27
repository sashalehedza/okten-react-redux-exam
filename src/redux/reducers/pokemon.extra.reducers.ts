import { createAsyncThunk } from '@reduxjs/toolkit'
import { pokemonService } from '../../services/api.service'

export const fetchPokemons = createAsyncThunk(
  'pokemons/fetchPokemons',
  async (url: string) => {
    const response = await pokemonService.getAll(url)
    console.log('response.data', response)
    return response
  }
)

export const fetchPokemonByName = createAsyncThunk(
  'pokemons/fetchPokemonByName',
  async (id: string) => {
    const response = await pokemonService.getByName(id)
    return response
  }
)

export const fetchPokemonsByType = createAsyncThunk(
  'pokemons/fetchPokemonsByType',
  async (type: string) => {
    const response = await pokemonService.getByType(type)

    return response
  }
)

export const fetchPokemonsByAbility = createAsyncThunk(
  'pokemons/fetchPokemonsByAbility',
  async (ability: string) => {
    const response = await pokemonService.getByAbility(ability)

    return response
  }
)

export const pokemonForms = createAsyncThunk(
  'pokemons/pokemonForms',
  async (url: string) => {
    const response = await pokemonService.getForms(url)
    return response
  }
)
