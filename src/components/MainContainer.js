import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  // const MovieCategory =  ["nowPlayingMovies", "popularMovies",  "trailerVideo", "topRatedMovies",  "upComingMovies",  "trendingMovies"];
  function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;


  const randomValue = randomNumber(0, movies.length);
  const mainMovie = movies[randomValue];


  return (
    <div>
      <VideoTitle title={mainMovie.original_title} overview={mainMovie.overview} />
      <VideoBackground movieId={mainMovie.id} />
    </div>
  )
}

export default MainContainer
