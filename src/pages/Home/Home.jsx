import React, { useEffect } from "react";
import scss from "./Home.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../features/actionCreators/getMovie";

import SliderMovie from "../../components/SliderMovie/SliderMovie";
import MoviePopularCards from "../../components/MoviesCards/MoviesCards";
import Search from "../../components/Search/Search";


function Home(props) {
  const dispatch = useDispatch();

  const { movies } = useSelector((s) => s.movie);

  useEffect(() => {
    dispatch(getMovie("popular", 5));
  }, []);

  return (
    <div id="home">
      <div className="container">
        <div className="home">
          <section>
            <Search />
          </section>
          <section>
            <MoviePopularCards />
          </section>
          <section>
            <center>
              <SliderMovie />
            </center>
        </div>
      </div>
    </div>
  );
}

export default Home;
