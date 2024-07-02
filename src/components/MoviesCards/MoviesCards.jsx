import React, { useState } from "react";
import { Link } from "react-router-dom";
import scss from "./MovieCards.module.scss";
import { useSelector } from "react-redux";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviePopularCards(props) {
  const linksMas = {
    new: {
      value: "New",
      label: "Новинки",
    },
    pop: {
      value: "Popular",
      label: "Популярное",
    },
    wat: {
      value: "Watch",
      label: "Смотрят сейчас",
    },
    re: {
      value: "Reck",
      label: "Рекомендации",
    },
    to: {
      value: "Top",
      label: "Топ 10",
    },
  };

  // ! states
  const [newValidate, setNewValidate] = useState(false);
  const [popValidate, setpopValidate] = useState(false);
  const [watchValidate, setwatchValidate] = useState(false);
  const [recValidate, setrecValidate] = useState(false);
  const [topValidate, settopValidate] = useState(false);

  const { movies } = useSelector((s) => s.movie);

  const newMovie = movies.filter((el) => el.release_date.includes("2024"));
  const watch = movies.filter((el) => el.video == true);
  const reck = movies.filter((el) => el.genre_ids.some((e) => e == 27));
  const top = movies.filter((el) => el.vote_average > 7.0);

  console.log(linksMas);

  return (
    <div id={scss.MoviePopularCards}>
      <div className="container">
        <div className={scss.MoviePopularCards}>
          <div className={scss.MoviePopularCardsHeader}>
            <Link
              onClick={() => {
                setNewValidate(true);
                setpopValidate(false);
                setrecValidate(false);
                settopValidate(false);
                setwatchValidate(false);
              }}
            >
              {linksMas.new.label}
            </Link>
            <Link
              onClick={() => {
                setpopValidate(true);
                setwatchValidate(false);
                setNewValidate(false);
                setrecValidate(false);
                settopValidate(false);
              }}
            >
              {linksMas.pop.label}
            </Link>
            <Link
              onClick={() => {
                setwatchValidate(true);
                setNewValidate(false);
                setpopValidate(false);
                setrecValidate(false);
                settopValidate(false);
              }}
            >
              {linksMas.wat.label}
            </Link>
            <Link
              onClick={() => {
                setrecValidate(true);
                setNewValidate(false);
                setpopValidate(false);
                settopValidate(false);
                setwatchValidate(false);
              }}
            >
              {linksMas.re.label}
            </Link>
            <Link
              onClick={() => {
                settopValidate(true);
                setNewValidate(false);
                setpopValidate(false);
                setrecValidate(false);
                setwatchValidate(false);
              }}
            >
              {linksMas.to.label}
            </Link>
          </div>

          {newValidate ? (
            <div className={scss.MoviePopularCardsBlock}>
              {newMovie.map((el) => (
                <MoviesCard el={el} key={el.id} />
              ))}
            </div>
          ) : null}
          {popValidate ? (
            <div className={scss.MoviePopularCardsBlock}>
              {movies.map((el) => (
                <MoviesCard el={el} key={el.id} />
              ))}
            </div>
          ) : null}
          {watchValidate ? (
            <div className={scss.MoviePopularCardsBlock}>
              {watch.length ? (
                watch.map((el) => <MoviesCard el={el} key={el.id} />)
              ) : (
                <img
                  src="https://static.thenounproject.com/png/2998497-200.png"
                  alt=""
                />
              )}
            </div>
          ) : null}
          {topValidate ? (
            <div className={scss.MoviePopularCardsBlock}>
              {top.map((el) => (
                <MoviesCard el={el} key={el.id} />
              ))}
            </div>
          ) : null}
          {recValidate ? (
            <div className={scss.MoviePopularCardsBlock}>
              {reck.map((el) => (
                <MoviesCard el={el} key={el.id} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default MoviePopularCards;
