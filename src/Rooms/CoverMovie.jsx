import React from 'react'

const CoverMovie = ({imageUrl,room_name}) => {
  return (
        <img src={imageUrl} width={240} height={350} alt={`${room_name} cover`} />
  )
}

export default CoverMovie
