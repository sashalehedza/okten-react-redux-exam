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
    console.log('response.data', response)

    return response
  }
)

export const fetchPokemonByNamePage = createAsyncThunk(
  'pokemons/fetchPokemonByNamePage',
  async (id: string) => {
    const response = await pokemonService.getByNamePage(id)
    console.log('response.data', response)

    return response
  }
)

export const fetchPokemonsByType = createAsyncThunk(
  'pokemons/fetchPokemonsByType',
  async (type: string) => {
    const response = await pokemonService.getByType(type)

    const transformedData = response.pokemon.map((item: any) => ({
      name: item.pokemon.name,
      url: item.pokemon.url,
    }))

    console.log('response.data', transformedData)

    return transformedData
  }
)

export const fetchPokemonsByAbility = createAsyncThunk(
  'pokemons/fetchPokemonsByAbility',
  async (ability: string) => {
    const response = await pokemonService.getByAbility(ability)
    console.log('response.data', response)

    const transformedData = response.pokemon.map((item: any) => ({
      name: item.pokemon.name,
      url: item.pokemon.url,
    }))

    return transformedData
  }
)

export const pokemonForms = createAsyncThunk(
  'pokemons/pokemonForms',
  async (url: string) => {
    const response = await pokemonService.getForms(url)
    return response
  }
)
