import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from "../MovieCard/MovieCard"
import "./MovieListing.css"

const MovieListing = () => {
  const movies = useSelector((state)=>state.movies)
  
  return (
  <div className ="movie-wrapper">
    <div className = "movie-list">
      <h2>Movies</h2>
      {
        movies.map(movie => (
          <MovieCard key={movie.id} data={movie}/>
        ))
      }
    </div>
  </div>
  );
};

export default MovieListing;
