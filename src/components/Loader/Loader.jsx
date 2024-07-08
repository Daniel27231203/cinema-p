import React from "react";

import scss from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={scss.loading}>
      <span class={scss.loader}></span>
    </div>
  );
};

export default Loader;
<span class="loader"></span>;
