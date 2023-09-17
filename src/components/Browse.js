
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
import useAzureTranslatorApi from '../hooks/useAzureTranslatorApi';


const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();
  useTrendingMovies();
  useAzureTranslatorApi();
  let gptIsEnable = useSelector(store => store.gpt.showGpt);

  return (
    <div className='bg-black'>
      <Header />
      {gptIsEnable ?
        (<GptSearch />)
        :
        (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )
      }
    </div>
  )
}

export default Browse
