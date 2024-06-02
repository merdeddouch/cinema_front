import { Card, CardContent, CardHeader, Grid,Divider } from '@mui/material'
import {React,useContext,useEffect} from 'react'
import ListofCinemaInCity from './ListofCinemaInCity';
import { cities_cinema_context } from '../../contex/contexApp'
import { fetchRoomsInCinema } from '../../api/api';
import ListOfRooms from '../../Rooms/ListOfRooms';

const CinemaHome = () => {
  const {error,loading,cinemasInCity,roomsInCinema,setRoomsInCinema} = useContext(cities_cinema_context);


  const getRoomsIncinema = async (url) => {
    try {
        const data = await fetchRoomsInCinema(url);
        // console.log(data._embedded)
        setRoomsInCinema(data._embedded.rooms)
    } catch (error) {
      console.error("error from cinemaHome fitch" + error)
    }
  }

useEffect(() => {
  if(roomsInCinema?.length == 0) {
    // initial rooms 
    getRoomsIncinema("http://localhost:8080/cinemas/1/rooms");
  }
}, []);

  return (
    <Card>
        <CardHeader title="Cinemas" className='cardHeader' 
        style={{ backgroundColor: 'lightblue' }}/>
        <CardContent>
          <ListofCinemaInCity cinemasInCity={cinemasInCity} getRoomsIncinema={getRoomsIncinema}></ListofCinemaInCity>
            <Divider></Divider>
            <ListOfRooms></ListOfRooms>
        </CardContent>

    </Card>
  )
}

export default CinemaHome
