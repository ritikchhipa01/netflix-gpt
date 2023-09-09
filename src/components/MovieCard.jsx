import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({poster}) => {
    
  return (
    <div className='w-48'>
    <img  src={IMG_CDN_URL + poster} alt="poster"/> 
      
    </div>
  )
}

export default MovieCard
