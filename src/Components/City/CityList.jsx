import { CardContent } from '@mui/material'
import React from 'react'
import EachCity from './EachCity';

const CityList = () => {
  const citys = ['casa','fes','rabat','kech'];
  return (
    citys.map((city,index) => {
      return <EachCity cityName={city} key={index} ></EachCity>
    })

  )
}

export default CityList
