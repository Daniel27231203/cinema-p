import scss from "./RandomMovie.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../features/actionCreators/getMovie";
import React, { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

const RandomMovie = () => {
  const { movies } = useSelector((state) => state.movie);
  let [nextMovie, setNextMovie] = useState(false);
  const dispatch = useDispatch();

  let page = Math.floor(Math.random() * 20);

  useEffect(() => {
    dispatch(getMovie("popular", page));
  }, [nextMovie]);
  const random = movies[Math.floor(Math.random() * 20)];
  return (
    <div
      className={scss.RandomMovie}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${random?.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        borderImage: "fill 0 linear-gradient(#0003,#000)",
      }}
    >
      <section className={scss.random}>
        <div className={scss.detail}>
          <h2>{random?.title}</h2>
          <p>{random?.overview.slice(0, 500)}...</p>
          <div className={scss.btn}>
            <button>Смотреть</button>
          </div>
        </div>
        <h1
          onClick={() => {
            setNextMovie(!nextMovie);
          }}
        >
          <MdArrowForwardIos />
        </h1>
      </section>
    </div>
  );
};

export default RandomMovie;
