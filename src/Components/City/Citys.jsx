import React from 'react'
import { Stack, Card, Grid, CardHeader, CardContent } from '@mui/material'
import CityList from '../City/CityList'

const Citys = () => {
    
  return (
    <Card>          
        <CardHeader title="City" className='cardHeader' 
              style={{ backgroundColor: 'lightblue' }}>        
      </CardHeader>
        <CardContent >
                <Stack>
                <CityList></CityList>
                </Stack>
      </CardContent>
    </Card>
  )
}

export default Citys
