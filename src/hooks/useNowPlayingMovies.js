import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";


export const useNowPlayingMovies = () => {

  const dispatch = useDispatch();
  const getNowPlayingMovie = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTIONS)
    const data = await response.json();
    

    dispatch(addNowPlayingMovies(await data.results));
  };

  useEffect(() => {
    getNowPlayingMovie();
  }, [])
}