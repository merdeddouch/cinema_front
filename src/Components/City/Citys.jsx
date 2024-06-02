import React, {useEffect, useContext } from 'react'
import { Stack, Card, CardHeader, CardContent } from '@mui/material'
import CityList from '../City/CityList'
import { fetchCinemasByCity, fetchCities } from '../../api/api'
import { cities_cinema_context } from '../../contex/contexApp'
const Citys = () => {

  const {cities,setCities,error,setError,setLoading,loading,setCinemaInCity,currentCityActive,setCurrentCityActive,setCurrentCinemaActive} = useContext(cities_cinema_context);
    useEffect(() => {
      const getCities = async () => {
        try {
          const data = await fetchCities();
          setCities(data._embedded.cities);
          setLoading(false);
        } catch (e) {
          console.log(e);
          setError(error);
          setLoading(false);
        }
      }
      getCities();
    }, []);

    
    const getCinemaByCity = async (url) =>{
      try {
       const data = await fetchCinemasByCity(url);
       setCinemaInCity(data._embedded.cinemas);
      } catch (error) {
        console.error(error);
      }
    }



  const handClick = (url,key) =>{
    getCinemaByCity(url);
    setCurrentCityActive(key);
    setCurrentCinemaActive(0);
  }

  
  return (
    <Card>          
        <CardHeader title="City" className='cardHeader' 
              style={{ backgroundColor: 'lightblue' }}>        
      </CardHeader>
        <CardContent >
                <Stack>
                <CityList handleClick={handClick} currentCityActive={currentCityActive} cities={cities}></CityList>
                </Stack>
      </CardContent>
    </Card>
  )
}

export default Citys
