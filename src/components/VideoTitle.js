
import { useSelector, useDispatch } from 'react-redux';
import { addMovieOverview, addMovieTitle } from '../utils/movieSlice';
import useAzureTCustomOverview from '../hooks/useAzureCustomOverview';
import useAzureTCustom from '../hooks/useAzureCustom';
import { FaPlay } from "react-icons/fa6"
import { AiOutlineInfoCircle } from "react-icons/ai"


const VideoTitle = ({ title, overview, movieId }) => {
    const dispatch = useDispatch();
    const translatedText = useSelector((store) => store.txt.translatedText);
    const storeTitle = useSelector(store => store.movies.movieTitle)
    const storeOverview = useSelector(store => store.movies.movieOverview)
    
    if (!storeTitle) dispatch(addMovieTitle(title));
    if (!storeOverview) dispatch(addMovieOverview(overview));
    useAzureTCustom();
    useAzureTCustomOverview();


    const newTitle = useSelector(store => store.txt.title);
    const newOverview = useSelector(store => store.txt.overview);


    return (
        <div className='px-[5%] md:absolute py-5 bg-gradient-to-r from-black/80 w-screen md:aspect-video flex flex-col  justify-end md:justify-center z-[99]'>
            <h1 className='text-2xl md:text-4xl font-bold text-white  md:mt-0'>
                {newTitle ? newTitle : title}
            </h1>
            <p className='hidden  lg:block md:text-lg py-3 w-1/4 text-white '>
                {newOverview ? newOverview.substring(0,180) + "...." : overview}
            </p>
            <div className='flex gap-5 mt-2 md:mt-0'>
                <button className=' px-4 py-2 flex gap-2 items-center  md:px-14 md:py-3 font-bold text-lg bg-white text-black rounded-md hover:bg-white/80'>
                    <FaPlay />   {translatedText ? translatedText[7] : "Play"}
                </button>
                <button className=' flex items-center gap-2  px-4 py-1  md:px-12 md:py-3 text-lg bg-[#373466]/50 text-white rounded-md hover:bg-[#373736]/70'>
                    <AiOutlineInfoCircle />   {translatedText ? translatedText[8] : "More Info"}
                </button>

            </div>
        </div>
    )
}

export default VideoTitle
