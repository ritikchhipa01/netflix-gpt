
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies';
import { usePopularMovies } from '../hooks/usePopularMovies';
import { useTopRated } from '../hooks/useTopRated';
import { useUpcomingMovies } from '../hooks/useUpcomingMovies';
import { useTrendingMovies } from '../hooks/useTrendingMovies';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();
  useTrendingMovies();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {/* 
       MainContainer
         -VideoBackground
         -videoTitle
       SecondaryContainer
         -MovieArray * N
            -MovieCards * N
       */}
    </div>
  )
}

export default Browse
