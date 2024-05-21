import React from 'react'
import { Stack, Card, Grid, CardHeader, CardContent } from '@mui/material'
import CityList from '../City/CityList'
import Citys from '../City/Citys'

const Home = () => {
  return (
    <Grid container spacing={2}>

        <Grid item xs={12} md={4}>
          <Citys></Citys>
        </Grid>
        <Grid item xs={12} md={7}>
          Cinemas
        </Grid>
    </Grid>
  )
}

export default Home
