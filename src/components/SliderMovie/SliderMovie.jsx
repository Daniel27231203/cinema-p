import React from "react";
import { useSelector } from "react-redux";
import scss from "./Slider.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

function SliderMovie(props) {
  const { movies } = useSelector((s) => s.movie);
  let nav = useNavigate();

  let settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  let genre = movies.filter((el) => el.genre_ids.map((e) => e == 16));

  console.log(genre, "genre");
  console.log(movies);

  return (
    <div className={scss.sliderMovie}>
      <Slider {...settings}>
        {movies.map((el) => (
          <div>
            <div className={scss.sliderMovieBlock}>
              <img
                src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`}
                alt=""
              />
              <div className={scss.sliderText}>
                <div className="">
                  <h1>{el.title}</h1>
                  <span></span>
                </div>
                <div className="">
                  <h4></h4>
                  <h4></h4>
                  <h4></h4>
                  <h4></h4>
                </div>
                <p>{el.overview.slice(0, 100)}</p>
                <button
                  onClick={() => {
                    nav("/detail");
                  }}
                >
                  Смотреть
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderMovie;
