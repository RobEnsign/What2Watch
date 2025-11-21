import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="Posters"
      />
      <h3>{movie.title}</h3>
      <p>{movie.overview.slice(0, 125) + "..."}</p>
    </div>
  );
};

export default MovieCard;
