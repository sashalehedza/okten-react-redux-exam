import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import { Provider } from 'react-redux'
import { store } from './redux/store'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'

import HomePage from './pages/HomePage'
import PokemonDetail from './pages/pokemon/PokemonDetail'
import PokemonsPage from './pages/pokemon/PokemonsPage'
import theme from './theme'
import { Typography } from '@mui/material'

let router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Typography variant='h6'>Error!</Typography>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/pokemons',
        element: <PokemonsPage />,
      },
      {
        path: '/pokemon/:id',
        element: <PokemonDetail />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
)
