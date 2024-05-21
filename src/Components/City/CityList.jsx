import React from 'react'
import EachCity from './EachCity';

const CityList = ({cities}) => {
  return (
    cities.map((city,index) => {
      return <EachCity cityName={city.name} key={index}  ></EachCity>
    })

  )
}

export default CityList
