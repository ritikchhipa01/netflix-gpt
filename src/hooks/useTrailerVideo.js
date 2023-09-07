import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";


export const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();
    
    //fetch video details
    const MovieUrl = async () => {
        const youtubeKey = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
        const data = await youtubeKey.json();
        

        const filterData = await data?.results?.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : data.results[0];
        
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        MovieUrl();
    }, []);
}