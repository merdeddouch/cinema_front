import React, { useState,useEffect } from 'react'
import { Stack, Card, Grid, CardHeader, CardContent } from '@mui/material'
import CityList from '../City/CityList'
import { fetchCities } from '../../api/api'
const Citys = () => {
    const [cities,setCities] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState([]);


    useEffect(() => {
      const getCities = async () => {
        try {
          const data = await fetchCities();
          setCities(data._embedded.cities);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setError(error);
          setLoading(false);
        }
      }
      getCities();
    }, []);


  return (
    <Card>          
        <CardHeader title="City" className='cardHeader' 
              style={{ backgroundColor: 'lightblue' }}>        
      </CardHeader>
        <CardContent >
                <Stack>
                <CityList cities={cities}></CityList>
                </Stack>
      </CardContent>
    </Card>
  )
}

export default Citys
