import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMoviesSuggestion = () => {
  const { movieName, moviesResult } = useSelector((store) => store.gpt);
  
  
  if (!movieName) return null;

  return (
    <div className='bg-black/95 '>
      {movieName && <div className='relative overflow-x-scroll'>
        {
          movieName.map((movie, index) => (
            <MovieList
              key={movie}
              title={movie}
              movies={moviesResult[index]}
            />
          ))
        }
      </div>
      }
    </div>

  )
}

export default GptMoviesSuggestion
