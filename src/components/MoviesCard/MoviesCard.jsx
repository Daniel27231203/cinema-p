import React from "react";
import scss from "./MoviesCard.module.scss";
import { useSelector } from "react-redux";

function MoviesCard({ el }) {
  return (
    <div className={scss.moviesCard}>
      <img
        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`}
        alt="image"
      />
      <h1>{el.title}</h1>
      <span>{el.release_date}</span>
    </div>
  );
}

export default MoviesCard;
