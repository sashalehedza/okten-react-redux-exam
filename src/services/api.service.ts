import axios from 'axios'
import { pokemonBaseUrl, urls } from '../constants/urls'
import { PokemonRespons, PokemonsRespons, Pokemon } from '../models/IPokemon'

const axiosInstance = axios.create({
  baseURL: pokemonBaseUrl,
  headers: {},
})

export const pokemonService = {
  getAll: async (url: string) => {
    let response = await axiosInstance.get<PokemonsRespons>(url)
    return response.data
  },
  getByName: async (name: string) => {
    let response = await axiosInstance.get<Pokemon>(
      `${urls.pokemons.byName(name)}`
    )
    return response.data
  },
  getByNamePage: async (name: string) => {
    let response = await axiosInstance.get<PokemonRespons>(
      `${urls.pokemons.byName(name)}`
    )
    return response.data
  },
  getByType: async (type: string) => {
    let response = await axiosInstance.get(`${urls.pokemons.byType(type)}`)
    return response.data
  },
  getByAbility: async (ability: string) => {
    let response = await axiosInstance.get(
      `${urls.pokemons.byAbility(ability)}`
    )
    return response.data
  },
  getForms: async (url: string) => {
    let response = await axiosInstance.get<PokemonRespons>(url)
    return response.data
  },
}
