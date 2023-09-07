
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies';
import { usePopularMovies } from '../hooks/usePopularMovies';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();

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
