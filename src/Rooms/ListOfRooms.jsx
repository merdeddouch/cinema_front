import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import { cities_cinema_context } from '../contex/contexApp';
import EachRooms from './EachRooms';

const ListOfRooms = () => {
  const { roomsInCinema } = useContext(cities_cinema_context);
  return (
    <Grid container spacing={1}>
      {roomsInCinema?.map((room, index) => (
          <EachRooms key={index}  room_name={room.name} />
      ))}
    </Grid>
  );
};

export default ListOfRooms;
