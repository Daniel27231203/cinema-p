import React, { useEffect, useState } from "react";
import scss from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../features/actionCreators/getMovie";
import { MdArrowForwardIos } from "react-icons/md";

const Header = () => {
  const { movies } = useSelector((state) => state.movie);
  let [nextMovie, setNextMovie] = useState(false);
  const dispatch = useDispatch();

  const random = movies[Math.floor(Math.random() * 20)];

  useEffect(() => {
    dispatch(getMovie("popular", 12));
  }, [nextMovie]);
  const navValues = [
    {
      path: "/",
      link: "Главная",
    },
    {
      path: "/movies",
      link: "Фильмы",
    },
    {
      path: "/serial",
      link: "Сериалы",
    },
    {
      path: "/cartoon",
      link: "Мультфильмы",
    },
  ];

  return (
    <>
      {movies.length ? (
        <header
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${random?.backdrop_path})`,

            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            borderImage: "fill 0 linear-gradient(#0003,#000)",
          }}
        >
          <div className="container">
            <div className={scss.Header}>
              <div className={scss.nav}>
                <h1>Movie</h1>
                <nav>
                  {navValues.map((el, ind) => (
                    <NavLink to={el.path} key={ind}>
                      {el.link}
                    </NavLink>
                  ))}
                </nav>
              </div>
              <Link className={scss.user}>
                <FaRegUserCircle />
              </Link>
            </div>
          </div>
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
        </header>
      ) : (
        <h1 style={{ fontSize: "80px", color: "red" }}>loading....</h1>
      )}
    </>
  );
};

export default Header;
