import React, { useEffect } from "react";
import scss from "./Detail.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneMovie } from "../../features/actionCreators/getMovie";

function Detail(props) {
  const dispatch = useDispatch();

  const { detail } = useSelector((s) => s.movie);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getOneMovie(id));
    dispatch(getOneMovie(id, "/videos"));
  }, [id]);

  console.log(detail, "deta");
  return (
    <section id={scss.detail}>
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
