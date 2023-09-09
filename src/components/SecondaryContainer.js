import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movie = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovie = useSelector((store) => store.movies?.popularMovies);
  const TopRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upComingMovies);
  const TrendingMovies = useSelector((store) => store.movies?.trendingMovies);
 
  
  return movie && (
    <div className='bg-black'>
      <div className=" -mt-52 pl-6 relative z-[100]">
        <MovieList title={"Now Playing"} movies={movie} />
        <MovieList title={"Popular"} movies={popularMovie} />
        <MovieList title={"Top Rated"} movies={TopRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
        <MovieList title={"Trending"} movies={TrendingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer
