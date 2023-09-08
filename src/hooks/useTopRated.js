import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRated} from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";


export const useTopRated = () => {

  const dispatch = useDispatch();
  const getTopRated = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=1', API_OPTIONS)
    const data = await response.json();
    // console.log(data.results)

    dispatch(addTopRated(await data.results));
  };

  useEffect(() => {
    getTopRated();
  }, [])
}