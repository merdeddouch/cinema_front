import React, { useEffect, useState } from 'react'
import { fetchCinemas } from '../../api/api'

const Cinema = () => {
  const [cinemas,setCinema] = useState([]);
  const [loading,setLoding] = useState(true);
  const [errorFetching,setErrorFetching] = useState([]);

  useEffect(() => {
    const getCinemas = async () => {
        try {
          const data = await fetchCinemas()
          console.log(data._embedded.cinemas);
          setCinema(data._embedded.cinemas)
        } catch (error) {
          console.log(`errors while feching : ${error}`);
        }
    }

    getCinemas();
  }, []);



  return (
<div>
            <h1>Cinemas</h1>
            <ul>
                {cinemas.map((cinema,index) => (
                    <li key={index}>{cinema.name}</li>
                ))}
            </ul>
        </div>
  )
}

export default Cinema
