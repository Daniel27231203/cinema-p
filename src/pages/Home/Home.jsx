import React, { useEffect } from "react";
import scss from "./Home.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../features/actionCreators/getMovie";
import MoviesCards from "../../components/MoviesCards/MoviesCards";

function Home(props) {
  const dispatch = useDispatch();

  const { movies } = useSelector((s) => s.movie);

  useEffect(() => {
    dispatch(getMovie("popular"));
  }, []);

  return (
    <div id="home">
      <div className="container">
        <div className="home">
          <section>
            <MoviesCards />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
