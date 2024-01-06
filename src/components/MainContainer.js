import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useTrailerVideo } from '../hooks/useTrailerVideo';


const MainContainer = () => {
  

  // const MovieCategory =  ["nowPlayingMovies", "popularMovies",  "trailerVideo", "topRatedMovies",  "upComingMovies",  "trendingMovies"];
  function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  // const mov = useSelector((store) => store.movies);
  if (!movies) return;


  const randomValue = randomNumber(0, movies.length);

  const mainMovie = movies[randomValue];



  return (
    mainMovie &&
    <div className='pt-[5vh] md:pt-0 bg-black flex flex-col-reverse md:block'>
      <VideoTitle title={mainMovie.original_title} overview={mainMovie.overview} />
      <VideoBackground movieId={mainMovie.id} />
    </div>
  )
}

export default MainContainer
