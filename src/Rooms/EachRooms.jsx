import React, { useContext, useEffect, useState } from 'react';
import { CardHeader, Card, Grid, CardContent, Stack } from '@mui/material';
import { fetchProjectionsForEachRoom } from '../api/api';
import { cities_cinema_context } from '../contex/contexApp';
import CoverMovie from './CoverMovie'

const EachRooms = ({ room_projections, room_name, id }) => {
  const { currentCinemaActive } = useContext(cities_cinema_context);
  const [projections, setProjections] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(`Rendering EachRooms for room: ${room_name}`);

  const getProjectionsForEachRoom = async (url) => {
    try {
      const data = await fetchProjectionsForEachRoom(url);
      console.log(`URL for room ${room_name}:`, url);
      setProjections(data._embedded.projections);
      setLoading(false);
    } catch (error) {
      console.log(`Errors while fetching for room ${room_name}: ${error}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    let newUrl = room_projections.replace('{', '').replace('}', '') + "=p";
    getProjectionsForEachRoom(newUrl);
  }, [currentCinemaActive,room_projections]);

  const src = projections[0]?.movie?.cover;
  const imageUrl = src ? `/images/${src}.jpg` : null;
console.log(projections[0])
  return (
    <Grid key={id} item md={6}>
      <Card>
        <CardHeader title={room_name} color='primary' />
        <CardContent>
          <Stack>
            {loading ? (
              <p>Loading...</p>
            ) : (
              imageUrl&&(<CoverMovie room_name={room_name} imageUrl={imageUrl} ></CoverMovie>) )}
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default EachRooms;
