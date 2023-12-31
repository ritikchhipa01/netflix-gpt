import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies} from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";


export const useUpcomingMovies = () => {

  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?&page=1', API_OPTIONS)
    const data = await response.json();
   

    dispatch(addUpcomingMovies(await data.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, [])
}