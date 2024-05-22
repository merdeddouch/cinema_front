import { Stack } from '@mui/material'
import React from 'react'
import EachCinema from './EachCinema'

const ListofCinemaInCity = ({cinemasInCity}) => {
  return (
    <Stack direction={"row"} spacing={1} m={2}>
      {
        cinemasInCity.map((cinema,index) =>{
            return <EachCinema cinema={cinema.name} key={index}></EachCinema>
        })
      }
    </Stack>
  )
}

export default ListofCinemaInCity
