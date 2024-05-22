import { Card, CardContent, CardHeader, Grid,Divider } from '@mui/material'
import {React,useContext} from 'react'
import ListofCinemaInCity from './ListofCinemaInCity';
import { cities_cinema_context } from '../../contex/contexApp'

const CinemaHome = () => {
  const {error,loading,cinemasInCity} = useContext(cities_cinema_context);
  return (
    <Card>
        <CardHeader title="Cinemas" className='cardHeader' 
        style={{ backgroundColor: 'lightblue' }}/>
        <CardContent>
          <ListofCinemaInCity cinemasInCity={cinemasInCity}></ListofCinemaInCity>
            <Divider></Divider>
            <Grid>
            </Grid>
        </CardContent>

    </Card>
  )
}

export default CinemaHome
