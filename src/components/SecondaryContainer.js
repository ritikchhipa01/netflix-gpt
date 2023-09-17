import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movie = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovie = useSelector((store) => store.movies?.popularMovies);
  const TopRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upComingMovies);
  const TrendingMovies = useSelector((store) => store.movies?.trendingMovies);

  const translatedText = useSelector((store) => store.txt.translatedText);
  // console.log(translatedText)

  return movie && (
    <div className='bg-black '>
      <div className="py-6   md:-mt-48 md:pl-6 relative z-[100]">
        <MovieList title={translatedText ?translatedText[0] : "Now Playing"} movies={movie} />
        <MovieList title={translatedText ?translatedText[1] : "Popular"} movies={popularMovie} />
        <MovieList title={translatedText ?translatedText[2] :"Top Rated"} movies={TopRatedMovies} />
        <MovieList title={translatedText ?translatedText[3] :"Upcoming Movies"} movies={upcomingMovies} />
        <MovieList title={translatedText ?translatedText[4] :"Trending"} movies={TrendingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer
