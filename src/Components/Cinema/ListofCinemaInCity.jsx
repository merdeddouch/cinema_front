import { Stack } from '@mui/material'
import React from 'react'
import EachCinema from './EachCinema'

const ListofCinemaInCity = ({cinemasInCity,getRoomsIncinema}) => {
  return (
    <Stack direction={"row"} spacing={1} m={2}>
      {
        cinemasInCity?.map((cinema,index) =>{
            return <EachCinema cinema={cinema.name} url_roomsInCinema = {cinema._links.rooms.href} key={index} id={index} getRoomsIncinema={getRoomsIncinema}></EachCinema>
        })
      }
    </Stack>
  )
}

export default ListofCinemaInCity
