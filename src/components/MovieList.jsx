import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if(!movies) return;
  
  return (
    <div className="px-6">
        <h1 className="text-white py-4 text-xl md:text-3xl">{title}</h1>
    <div className="flex overflow-x-scroll no-scrollbar">
      <div className="flex gap-5">
        {movies.map((movie) => (
          <MovieCard key={movie.id} poster={movie?.poster_path} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default MovieList;
