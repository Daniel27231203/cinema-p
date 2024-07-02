import React from "react";
import Home from "../pages/Home/Home";
import Movie from "../pages/Movie/Movie";
import Serial from "../pages/Serial/Serial";
import { Route, Routes } from "react-router-dom";
import Cartoon from "@/pages/Cartoon/Cartoon";

function MainRoutes() {
  const Public = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/movies",
      element: <Movie />,
      id: 2,
    },
    {
      link: "/serial",
      element: <Serial />,
      id: 3,
    },
    {
      link: "/cartoon",
      element: <Cartoon />,
      id: 4,
    },
  ];
  return (
    <div>
      {Public.map((el) => (
        <Routes key={el.id}>
          <Route path={el.link} element={el.element} />
        </Routes>
      ))}
    </div>
  );
}

export default MainRoutes;
