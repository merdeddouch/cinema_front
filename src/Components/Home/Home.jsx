import React, { useState } from 'react'
import {  Grid } from '@mui/material'
import Citys from '../City/Citys'
import CinemaHome from '../Cinema/CinemaHome'
import {cities_cinema_context} from '../../contex/contexApp'

const Home = () => {
  const [cinemasInCity,setCinemaInCity] = useState([]);
  const [cities,setCities] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState([]);
  const [currentCityActive,setCurrentCityActive] = useState(0);
  return (
    <Grid container spacing={2} mt={3} px={2}>
      <cities_cinema_context.Provider value={
        {
          cinemasInCity:cinemasInCity,
          setCinemaInCity:setCinemaInCity,
          cities:cities,
          setCities:setCities,
          loading:loading,
          setLoading:setLoading,
          error:error,
          setError:setError,
          currentCityActive:currentCityActive,
          setCurrentCityActive:setCurrentCityActive
        }

      } >
        <Grid item xs={12} md={4}>
          <Citys></Citys>
        </Grid>
        <Grid item xs={12} md={7}>
          <CinemaHome></CinemaHome>
        </Grid>
        </cities_cinema_context.Provider>
    </Grid>
  )
}

export default Home
