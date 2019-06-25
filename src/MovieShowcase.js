import React, { Component } from "react";
import MovieCard from "./card-components/MovieCard.js";
import movieData from "./data.js"; //the raw data

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    // map over your movieData array and return the correct
    return movieData.map(movie => {
      return (
        <MovieCard
          title={movie.title}
          IMDBRating={movie.IMDBRating}
          genres={movie.genres}
          poster={movie.poster}
        />
      );
    });
  };

  render() {
    return <div id="movie-showcase">{this.generateMovieCards()}</div>;
  }
}

//MovieCard compnents receive their individual movie information from MovieShowcase as four props: title, IMDBRating, genres, and poster
// Following, the props are passed again to either CardFront or CardBack.
