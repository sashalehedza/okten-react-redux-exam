import axios from 'axios'
import { pokemonBaseUrl, urls } from '../constants/urls'
import { IUser } from '../models/IUser'
import { IPost } from '../models/IPost'
import { IComment } from '../models/IComment'
import { PokemonRespons, PokemonsRespons } from '../models/IPokemon'

const axiosInstance = axios.create({
  // baseURL: baseUrl,
  baseURL: pokemonBaseUrl,
  headers: {},
})

export const userService = {
  getAll: async () => {
    const response = await axiosInstance.get<IUser[]>(urls.users.base)
    return response.data
  },
}

export const postService = {
  getAll: async () => {
    let response = await axiosInstance.get<IPost[]>(urls.posts.base)
    return response.data
  },
  getByUserId: async (userId: number) => {
    let response = await axiosInstance.get<IPost[]>(
      `${urls.posts.byUserId(userId)}`
    )
    return response.data
  },
}

export const commentService = {
  getAll: async () => {
    let response = await axiosInstance.get<IComment[]>(urls.comments.base)
    return response.data
  },
  getByPostId: async (postId: number) => {
    let response = await axiosInstance.get<IComment[]>(
      `${urls.comments.byPostId(postId)}`
    )
    return response.data
  },
}

export const pokemonService = {
  getAll: async (url: string) => {
    let response = await axiosInstance.get<PokemonsRespons>(url)
    return response.data
  },
  getByName: async (name: string) => {
    let response = await axiosInstance.get<PokemonRespons>(
      `${urls.pokemons.byName(name)}`
    )
    return response.data
  },
  getByType: async (type: string) => {
    let response = await axiosInstance.get<PokemonsRespons>(
      `${urls.pokemons.byType(type)}`
    )
    return response.data
  },
  getByAbility: async (ability: string) => {
    let response = await axiosInstance.get<PokemonsRespons>(
      `${urls.pokemons.byAbility(ability)}`
    )
    return response.data
  },
  getForms: async (url: string) => {
    let response = await axiosInstance.get<PokemonRespons>(url)
    return response.data
  },
}
