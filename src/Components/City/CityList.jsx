import React from 'react'
import EachCity from './EachCity';

const CityList = ({cities,handleClick,currentCityActive}) => {
  return (
    cities.map((city,index) => {
      return <EachCity  cityName={city.name} key={index} id={index} currentCityActive={currentCityActive} url_link={city._links.cinemas.href} handlClick={handleClick}></EachCity>
    })

  )
}

export default CityList
