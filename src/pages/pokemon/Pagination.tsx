import React from 'react'
import { Button, Box } from '@mui/material'

interface PaginationProps {
  previous: string | null
  next: string | null
  onPageChange: (url: string) => void
}

const Pagination: React.FC<PaginationProps> = ({
  previous,
  next,
  onPageChange,
}) => {
  const handleNextPageChange = (url: string | null) => {
    if (url) {
      onPageChange(url)
    }
  }

  const handlePreviousPageChange = (url: string | null) => {
    if (url) {
      onPageChange(url)
    }
  }

  return (
    <Box display='flex' justifyContent='center' my={4}>
      <Button
        onClick={() => handlePreviousPageChange(previous)}
        disabled={!previous}
        variant='outlined'
        color='primary'
        sx={{ mr: 2 }}
      >
        Prev
      </Button>

      <Button
        onClick={() => handleNextPageChange(next)}
        disabled={!next}
        variant='outlined'
        color='primary'
      >
        Next
      </Button>
    </Box>
  )
}

export default Pagination
