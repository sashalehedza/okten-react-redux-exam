import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderComponent from '../components/header/HeaderComponent'
import FooterComponent from '../components/footer/FoootetComponent'
import { Box } from '@mui/material'

const MainLayout = () => {
  return (
    <Box>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </Box>
  )
}

export default MainLayout
