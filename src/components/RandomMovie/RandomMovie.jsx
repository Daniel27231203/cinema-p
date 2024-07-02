import React from "react";
import scss from "./RandomMovie.module.scss";
import Header from "../Header/Header";

const RandomMovie = () => {
  return (
    <div
      className={scss.RandomMovie}
      style={{
        backgroundImage:
          "url(" + "https://i.ytimg.com/vi/lSO3yftqSdA/maxresdefault.jpg" + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
    </div>
  );
};

export default RandomMovie;
