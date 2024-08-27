import React from 'react'
import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'

const HeaderComponent = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color='inherit'>
          <NavLink
            to='/'
            style={({ isActive }) => ({
              textDecoration: 'none',
              color: isActive ? 'red' : 'white',
            })}
          >
            Home
          </NavLink>
        </Button>
        <Button color='inherit'>
          <NavLink
            to='/pokemons'
            style={({ isActive }) => ({
              textDecoration: 'none',
              color: isActive ? 'red' : 'white',
            })}
          >
            Pokemons
          </NavLink>
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderComponent
