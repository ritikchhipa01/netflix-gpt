import React, { useRef } from 'react'
import openai from '../utils/openAi';
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addGptMoviesResult } from '../utils/gptSlice';
// import env from 'dotenv';

const GptSearchBar = () => {
  const searchText = useRef();
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=`
      + movie +
      `&include_adult=false&language=en-US&page=1`, API_OPTIONS);
    const res = await data.json();

    return res.results;
  }

  const handleGptSearch = async () => {
    console.log(searchText.current.value);

    const gptQuery = "Act as a Movie recommandation system and suggest some movie for the query :" + searchText.current.value + ". only give me name of 5 movies, seprated by comma, like example result. Example result : Jawan, The Meg-2, Terminator, Raja Hindustani, koi mil gaya";

    const gptSearchResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    console.log(gptSearchResults.choices?.[0]?.message?.content.split(","));
    const gptMovies = gptSearchResults.choices?.[0]?.message?.content.split(",");
    //['Chupke Chupke', ' Angoor', ' Jaane Bhi Do Yaaro', ' Chalti Ka Naam Gaadi', ' Gol Maal']

    // for each movie, make a api call using searchMovieTMDB
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [promise, promise, promise, promise, promise,];

    const tmdbResult = await Promise.all(promiseArray);

    // console.log(tmdbResult);
    dispatch(addGptMoviesResult({ movieName: gptMovies, moviesResult: tmdbResult }));
  }
  return (
    <div className="flex w-full justify-center h-fit mt-[8%] py-5">
      <form className="bg-black py-3 px-3 rounded-md "
        onSubmit={(e) => e.preventDefault()}
      >
        <input className='w-[30vw] bg-white py-2 px-4 mr-4 rounded-sm text-lg text-gray-700 outline-none'

          ref={searchText}
          type='text'
          placeholder='what would you like see today?' />
        <button className='bg-red-600 text-black px-4 py-2 rounded-sm' onClick={handleGptSearch}>Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar
