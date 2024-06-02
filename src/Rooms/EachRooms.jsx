import { CardHeader, Card,Grid } from '@mui/material'
import React from 'react'

const EachRooms = ({room_name,key}) => {
  return (
    <Grid key={key} item md={6}>
      <Card>
        <CardHeader title={room_name}  color='primary'></CardHeader>
      </Card>
    </Grid>
  )
}

export default EachRooms
