import { Button } from '@mui/material'
import React from 'react'

const EachCity = ({cityName,url_link,handlClick,}) => {
  return (  
    <Button variant='text' 
    color='primary'
    sx={{
        fontSize:"20px",
        height:"50px",
    }}
    onClick={() => handlClick(url_link)}
    >{cityName}</Button>
  )
}

export default EachCity
