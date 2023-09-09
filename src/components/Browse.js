
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies';
import { usePopularMovies } from '../hooks/usePopularMovies';
import { useTopRated } from '../hooks/useTopRated';
import { useUpcomingMovies } from '../hooks/useUpcomingMovies';
import { useTrendingMovies } from '../hooks/useTrendingMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';


const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();
  useTrendingMovies();
  const gptIsEnable = useSelector(store => store.gpt.showGpt);
  
  return (
    <div>
      <Header />
      {gptIsEnable ? (<GptSearch/>) :(
      <>
      <MainContainer/>
      <SecondaryContainer/>
      </>
      )
      }
      
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
