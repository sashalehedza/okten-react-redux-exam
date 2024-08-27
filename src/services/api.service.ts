import axios from 'axios'
import { pokemonBaseUrl, urls } from '../constants/urls'
import { IPokemon, IPokemons, Pokemon } from '../models/IPokemon'

const axiosInstance = axios.create({
  baseURL: pokemonBaseUrl,
  headers: {},
})

export const pokemonService = {
  getAll: async (url: string) => {
    let response = await axiosInstance.get<IPokemons>(url)
    return response.data
  },
  getByName: async (name: string) => {
    let response = await axiosInstance.get<Pokemon>(
      `${urls.pokemons.byName(name)}`
    )
    return response.data
  },
  getByNamePage: async (name: string) => {
    let response = await axiosInstance.get<IPokemon>(
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
    let response = await axiosInstance.get<IPokemon>(url)
    return response.data
  },
}
