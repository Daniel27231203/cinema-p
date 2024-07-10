import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneVideosMovie } from "../../features/actionCreators/getMovie";
import scss from "./Trailer.module.scss";

function Trailer(props) {
  const dispatch = useDispatch();

  const { video } = useSelector((s) => s.movie);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getOneVideosMovie(id, "/videos"));
  }, [id]);
  console.log(video);
  return video?.results?.length ? (
    <section id={scss.video}>
      <div className="container">
        <h2>Трейлер</h2>
        <div className={scss.tariler}>
          {video?.results?.map((el, index) => (
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
  ) : null;
}

export default Trailer;
