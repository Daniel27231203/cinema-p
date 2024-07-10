import React, { useEffect, useState } from "react";
import scss from "./Cartoon.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { getGenre } from "../../features/actionCreators/getMovie";
import MoviesCard from "../../components/MoviesCard/MoviesCard";
import Loader from "../../components/Loader/Loader";

function Cartoon(props) {
  const dispatch = useDispatch();
  const { genre, loading } = useSelector((s) => s.movie);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = genre.total_pages;
  console.log(genre, "results");

  useEffect(() => {
    dispatch(getGenre("16" || "10763", currentPage, "movie"));
  }, [currentPage]);

  let settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  if (loading) return <Loader />;

  return (
    <div id={scss.cartoon}>
      <section id={scss.cartoonUpBlock}>
        <div className="container">
          <div className={scss.cartoonUpBlock}>
            <Slider {...settings}>
              {genre.results?.map((el) => (
                <div className="">
                  <div
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${el.backdrop_path})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                    className={scss.cartoonUpBlockCard}
                  >
                    <img
                      src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`}
                      alt=""
                    />
                    <div className={scss.cartoonUpBlockTitle}>
                      <h1>{el.title}</h1>
                      <p>{el.overview.slice(0, 100)}</p>
                      <button
                        onClick={() => {
                          nav(`/detail/${el.id}`);
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
        </div>
      </section>
      <section id={scss.cartoonFilms}>
        <div className="container">
          <div className={scss.cartoonFilms}>
            <h1>Мульт-Фильмы!</h1>
            <div className={scss.cartoonFilmsCards}>
              {genre.results?.map((el) => (
                <MoviesCard el={el} />
              ))}
              <div
                style={{
                  width: "80%",
                }}
                className=""
              >
                <ResponsivePagination
                  current={currentPage}
                  total={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cartoon;
