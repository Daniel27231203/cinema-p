import React from "react";
import scss from "./MoviesCard.module.scss";
import { useNavigate } from "react-router-dom";

function MoviesCard({ el }) {
  let nav = useNavigate();
  return (
    <div
      onClick={() => {
        nav(`/detail/${el.id}`);
      }}
      style={{ position: "relative", cursor: "pointer" }}
    >
      <div className={scss.moviesCard}>
        <img
          src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`}
          alt="image"
        />
        <h1>{el.title || el.name}</h1>
        <span>{el.release_date || el.first_air_date}</span>
      </div>
    </div>
  );
}

export default MoviesCard;
