import { useSelector } from "react-redux";
import { useTrailerVideo } from "../hooks/useTrailerVideo"


const VideoBackground = ({ movieId }) => {

    useTrailerVideo(movieId);
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);


    return (
        <div className=" w-screen">
            <iframe
                className=" w-screen aspect-video"
                src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?controls=0&autoplay=1&mute=1&rel=0&loop=1"}
                title="YouTube video player"
            ></iframe>
        </div>
    )
}

export default VideoBackground
