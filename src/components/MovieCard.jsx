import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({poster}) => {
  if(!poster) return;
  return (
    <div className='w-36 md:w-48 rounded-sm '>
    <img  src={IMG_CDN_URL + poster} alt="poster"/> 
      
    </div>
  )
}

export default MovieCard
