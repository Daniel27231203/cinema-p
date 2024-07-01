import React, { useEffect } from "react";
import scss from "./Home.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../features/actionCreators/getMovie";

function Home(props) {
  const dispatch = useDispatch();

  const { movies } = useSelector((s) => s.movie);

  useEffect(() => {
    dispatch(getMovie("popular"));
  }, []);
  console.log(movies);
  return <div>home</div>;
}

export default Home;
