import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";


export const usePopularMovies = () => {

  const dispatch = useDispatch();
  const getPopularMovie = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?&page=1', API_OPTIONS)
    const data = await response.json();
    

    dispatch(addPopularMovies(await data.results));
  };

  useEffect(() => {
    getPopularMovie();
  }, [])
}