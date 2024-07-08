import scss from "./Home.module.scss";
import SliderMovie from "../../components/SliderMovie/SliderMovie";
import MoviePopularCards from "../../components/MoviesCards/MoviesCards";
import Search from "../../components/Search/Search";
import RandomMovie from "../../components/RandomMovie/RandomMovie";
import Subscription from "../../components/Subscription/Subscription";
function Home() {
  return (
    <>
      <RandomMovie />
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
            </section>
          </div>
        </div>
        <section>
          {/* . */}
          <Subscription />
        </section>
      </div>
    </>
  );
}

export default Home;
