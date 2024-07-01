import React from "react";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import MainRoutes from "./Routes/MainRoutes";

function App(props) {
  return (
    <div className="app">
      <Header />
      <MainRoutes />

      <Footer />
    </div>
  );
}

export default App;
