import React, { useEffect, useState } from "react";
import scss from "./Serial.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { getAllMovie, getGenre } from "../../features/actionCreators/getMovie";
import MoviesCard from "../../components/MoviesCard/MoviesCard";
import Loader from "../../components/Loader/Loader";

function Serial(props) {
  const dispatch = useDispatch();
  const { genre, loading } = useSelector((s) => s.movie);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = genre.total_pages;
  console.log(genre, "results");

  useEffect(() => {
    dispatch(
      getGenre(
        "35" ||
          "12" ||
          "10759" ||
          "35" ||
          "80" ||
          "99" ||
          "18" ||
          "10751" ||
          "9648" ||
          "10765" ||
          "10768" ||
          "37" ||
          "16" ||
          "10762",
        currentPage,
        "tv"
      )
    );
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
    <div id={scss.serial}>
      <section id={scss.serialUpBlock}>
        <div className="container">
          <div className={scss.serialUpBlock}>
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
                    className={scss.serialUpBlockCard}
                  >
                    <img
                      src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`}
                      alt=""
                    />
                    <div className={scss.serialUpBlockTitle}>
                      <h1>{el.title}</h1>
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
        </div>
      </section>
      <section id={scss.serialFilms}>
        <div className="container">
          <div className={scss.serialFilms}>
            <h1>Сериалы!</h1>
            <div className={scss.serialFilmsCards}>
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

export default Serial;
