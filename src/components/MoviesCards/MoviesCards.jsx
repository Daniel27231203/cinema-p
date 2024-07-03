import React, { useState } from "react";
import { Link } from "react-router-dom";
import scss from "./MovieCards.module.scss";
import { useSelector } from "react-redux";
import MoviesCard from "../MoviesCard/MoviesCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const [newValidate, setNewValidate] = useState(true);
  const [popValidate, setpopValidate] = useState(false);
  const [watchValidate, setwatchValidate] = useState(false);
  const [recValidate, setrecValidate] = useState(false);
  const [topValidate, settopValidate] = useState(false);

  const { movies } = useSelector((s) => s.movie);

  const newMovie = movies.filter((el) => el.release_date.includes("2024"));
  const watch = movies.filter((el) => el.video == true);
  const reck = movies.filter((el) => el.genre_ids.some((e) => e == 27));
  const top = movies.filter((el) => el.vote_average > 7.0);

  let settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

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
          <div className="">
            {newValidate ? (
              newMovie.length ? (
                <div className={scss.MoviePopularCardsBlock}>
                  <Slider {...settings}>
                    {newMovie.map((el) => (
                      <MoviesCard el={el} key={el.id} />
                    ))}
                  </Slider>
                </div>
              ) : (
                <img
                  className={scss.MoviePopularCardsBlockNoMovie}
                  src="https://cdn0.iconfinder.com/data/icons/movie-basic-colored/48/Cinema_Movie_Basics_Artboard_47-512.png"
                  alt=""
                />
              )
            ) : null}
            {popValidate ? (
              movies.length ? (
                <div className={scss.MoviePopularCardsBlock}>
                  <Slider {...settings}>
                    {movies.map((el) => (
                      <MoviesCard el={el} key={el.id} />
                    ))}
                  </Slider>
                </div>
              ) : (
                <img
                  className={scss.MoviePopularCardsBlockNoMovie}
                  src="https://cdn0.iconfinder.com/data/icons/movie-basic-colored/48/Cinema_Movie_Basics_Artboard_47-512.png"
                  alt=""
                />
              )
            ) : null}
            {watchValidate ? (
              watch.length ? (
                <div className={scss.MoviePopularCardsBlock}>
                  <Slider {...settings}>
                    {watch.map((el) => (
                      <MoviesCard el={el} key={el.id} />
                    ))}
                  </Slider>
                </div>
              ) : (
                <img
                  className={scss.MoviePopularCardsBlockNoMovie}
                  src="https://cdn0.iconfinder.com/data/icons/movie-basic-colored/48/Cinema_Movie_Basics_Artboard_47-512.png"
                  alt=""
                />
              )
            ) : null}
            {topValidate ? (
              top.length ? (
                <div className={scss.MoviePopularCardsBlock}>
                  <Slider {...settings}>
                    {top.map((el) => (
                      <MoviesCard el={el} key={el.id} />
                    ))}
                  </Slider>
                </div>
              ) : (
                <img
                  className={scss.MoviePopularCardsBlockNoMovie}
                  src="https://cdn0.iconfinder.com/data/icons/movie-basic-colored/48/Cinema_Movie_Basics_Artboard_47-512.png"
                  alt=""
                />
              )
            ) : null}
            {recValidate ? (
              reck.length ? (
                <div className={scss.MoviePopularCardsBlock}>
                  <Slider {...settings}>
                    {reck.map((el) => (
                      <MoviesCard el={el} key={el.id} />
                    ))}
                  </Slider>
                </div>
              ) : (
                <img
                  className={scss.MoviePopularCardsBlockNoMovie}
                  src="https://cdn0.iconfinder.com/data/icons/movie-basic-colored/48/Cinema_Movie_Basics_Artboard_47-512.png"
                  alt=""
                />
              )
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePopularCards;
