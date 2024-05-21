import { Button } from '@mui/material'
import React from 'react'

const EachCity = ({cityName,key}) => {
  return (  
    <Button key={key} variant='text' 
    sx={{
        fontSize:"20px",
        height:"50px",
    }}
    >{cityName}</Button>
  )
}

export default EachCity
