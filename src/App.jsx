import React, { Fragment } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainRoutes from "./Routes/MainRoutes";

function App() {
  return (
    <Fragment>
      <Header />
      <MainRoutes />
      <Footer />
    </Fragment>
  );
}

export default App;
