import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movie = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovie = useSelector((store) => store.movies?.popularMovies);
  console.log(popularMovie)
  // console.log(movie);
  return movie && (
    <div className='bg-black'>
      <div className=" -mt-52 pl-6 relative z-[100]">
        <MovieList title={"Now Playing"} movies={movie} />
        <MovieList title={"Popular"} movies={popularMovie} />
        <MovieList title={"Top Rated"} movies={movie} />
        <MovieList title={"Trending"} movies={movie} />
      </div>
    </div>
  )
}

export default SecondaryContainer
