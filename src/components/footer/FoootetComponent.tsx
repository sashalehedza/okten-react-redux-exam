import React from 'react'
import { Box, Typography } from '@mui/material'

const FooterComponent = () => {
  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        textAlign: 'center',
        padding: '16px',
        width: '100%',
      }}
    >
      <Typography variant='body1'>sashalehedza</Typography>
    </Box>
  )
}

export default FooterComponent
