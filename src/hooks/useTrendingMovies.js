import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrendingMovies} from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";


export const useTrendingMovies = () => {

  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/trending/movie/week?&page=1', API_OPTIONS)
    const data = await response.json();
   
    dispatch(addTrendingMovies(await data.results));
  };

  useEffect(() => {
    getTrendingMovies();
  }, [])
}