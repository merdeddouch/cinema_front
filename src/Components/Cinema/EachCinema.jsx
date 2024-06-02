import { Button,Card } from '@mui/material'
import React,{useContext} from 'react'
import './cinemaStyle.css'
import { cities_cinema_context } from '../../contex/contexApp'


const EachCinema = ({cinema,id,url_roomsInCinema,getRoomsIncinema}) => {



  const {setCurrentCinemaActive,currentCinemaActive} = useContext(cities_cinema_context);
  const handleClickCinema = (vr_id) =>{
    setCurrentCinemaActive(vr_id)
    getRoomsIncinema(url_roomsInCinema)
    //console.log(`currentCinema: ${currentCinemaActive}`);
  }

  return (
    <Button disableElevation className={`cinemaInCityOption ${(id == currentCinemaActive)? "CinemaActive" :''}`} variant='contained' size='medium' id={id} onClick={() => handleClickCinema(id)}>
      {cinema}
    </Button>
  )
}

export default EachCinema
