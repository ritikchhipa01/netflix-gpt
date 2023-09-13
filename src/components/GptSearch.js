import React from 'react'
import GptSearchBar from './GptSearchBar';
import "../App.css";
import GptMoviesSuggestion from './GptMoviesSuggestion';
import { useSelector } from 'react-redux';
const GptSearch = () => {
    const isGptMovies = useSelector((store) => store.gpt.movieName);
    return (
        <div className='banner bg-fixed'>
            <div className={` flex justify-center ${!isGptMovies ? " h-screen" : "h-[50vh]"} w-screen text-black `}>
                <GptSearchBar />

            </div>
            <div className='-mt-[54]'>
                <GptMoviesSuggestion />
            </div>
        </div>
    )
}

export default GptSearch;
