import React, { useEffect } from "react";
import scss from "./Detail.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneMovie } from "../../features/actionCreators/getMovie";

import { FaPlay } from "react-icons/fa6";
import { MdOutlineSaveAlt } from "react-icons/md";

function Detail(props) {
  const dispatch = useDispatch();

  const { detail } = useSelector((s) => s.movie);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getOneMovie(id));
    dispatch(getOneMovie(id, "/videos"));
  }, [id]);

  return (
    <section id={scss.detail}>

      <section
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${detail?.backdrop_path})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          borderImage: "fill 0 linear-gradient(#0003,#000)",
        }}
        id={scss.detailHeader}
      >
        <div className="container">
          <div className={scss.detailHeader}>
            <img
              src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${detail?.poster_path}`}
              alt=""
            />
            <div className={scss.detailHeaderTitle}>
              <h1>{detail?.title}</h1>
              <div className={scss.detailHeaderGanre}>
                {detail.genres.map((el) => (
                  <span key={el.id}>{el.name}</span>
                ))}
              </div>
              <p>{detail?.overview}</p>
              <div className={scss.detailHeaderTitleBtn}>
                <button>
                  Смотреть по подписке <FaPlay />
                </button>
                <button>
                  В избранное{" "}
                  <MdOutlineSaveAlt
                    style={{
                      fontSize: "20px",
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section></section>

      {/* !trailer section */}
      {detail?.results?.length ? (
        <section id={scss.video}>
          <div className="container">
            <h2>Трейлер</h2>
            <div className={scss.tariler}>
              {detail?.results?.map((el, index) => (
                <div key={index} className={scss.videoCard}>
                  <iframe
                    src={`https://www.youtube.com/embed/${el.key}`}
                    title="video"
                    width="800"
                    height="500"
                    frameborder="0"
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}
      {/* !trailer section */}

    </section>
  );
}

export default Detail;
