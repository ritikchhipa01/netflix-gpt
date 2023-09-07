import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({poster}) => {
    // console.log(movies)
    // console.log("m" ,movies[0]?.title);
  return (
    <div className='w-48'>
    <img  src={IMG_CDN_URL + poster} alt="poster"/> 
      
    </div>
  )
}

export default MovieCard
