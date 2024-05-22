import { Button } from '@mui/material'
import React from 'react'
import './cinemaStyle.css'


const EachCinema = ({cinema}) => {
  return (
    <Button disableElevation className='cinemaInCityOption' variant='contained' size='medium'>
      {cinema}
    </Button>
  )
}

export default EachCinema
