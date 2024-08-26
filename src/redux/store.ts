import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { userSlice } from './slices/userSlice'
import { postSlice } from './slices/postSlice'
import { commentSlice } from './slices/commentSlice'
import { pokemonSlice } from './slices/pokemonSlice'

export const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer,
    postSlice: postSlice.reducer,
    commentSlice: commentSlice.reducer,
    pokemonSlice: pokemonSlice.reducer,
  },
})

export const useAppSelector =
  useSelector.withTypes<ReturnType<typeof store.getState>>()
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()
