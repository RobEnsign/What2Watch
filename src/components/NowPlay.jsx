import React, { useState, useEffect } from "react";
import "./NowPlay.css";
import MovieCard from "./MovieCard";

const NowPlay = () => {
  //state variable
  //do this after fetching the data

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //custom function that will get the movies from TMDB
    fetchMovies();
  });

  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=b72849d10fbee53fa44a915851c22141"
    );

    const data = await response.json();

    console.log(data);

    setMovies(data.results);
  };

  return (
    <div className="nowplay_grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default NowPlay;
