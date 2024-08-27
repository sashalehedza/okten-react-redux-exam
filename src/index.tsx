import ReactDOM from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux'
import { store } from './redux/store'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'

import HomePage from './pages/HomePage'
import PokemonDetail from './pages/pokemon/PokemonDetail'
import PokemonsPage from './pages/pokemon/PokemonsPage'

let router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <h1>Error!</h1>,
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
    <RouterProvider router={router} />
  </Provider>
)
