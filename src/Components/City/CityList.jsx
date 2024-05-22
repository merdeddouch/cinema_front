import React from 'react'
import EachCity from './EachCity';

const CityList = ({cities,handleClick}) => {
  return (
    cities.map((city,index) => {
      return <EachCity  cityName={city.name} key={index} url_link={city._links.cinemas.href} handlClick={handleClick}></EachCity>
    })

  )
}

export default CityList
