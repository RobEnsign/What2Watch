import React, { useState, useEffect } from "react";
import "./Home.css";
import MovieCard from "./MovieCard";

const Home = () => {
  //state variable
  //do this after fetching the data

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //custom function that will get the movies from TMDB
    fetchMovies();
  });

  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=b72849d10fbee53fa44a915851c22141"
    );

    const data = await response.json();

    console.log(data);

    setMovies(data.results);
  };

  return (
    <div className="home_grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Home;
