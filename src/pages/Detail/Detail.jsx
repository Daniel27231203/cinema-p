import React from "react";
import scss from "./Detail.module.scss";
function Detail(props) {
  return (
    <section id={scss.detail}>
      <div className="container">
        <div className={scss.detail}></div>
      </div>
    </section>
  );
}

export default Detail;
