import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
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
