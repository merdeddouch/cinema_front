import { Button } from '@mui/material'
import React from 'react'
import './cityListStyle.css'
const EachCity = ({cityName,url_link,handlClick,id,currentCityActive}) => {
  
  return (  
    <Button variant='text' 
    id={id}
    onClick={() => handlClick(url_link,id)}
    className={`btn_costum ${id === currentCityActive ? 'ActiveCity' : ''}`}
    >{cityName}</Button>
  )
}

export default EachCity
