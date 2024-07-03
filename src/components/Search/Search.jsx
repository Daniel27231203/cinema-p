import scss from "./Search.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { searchMovie } from "../../features/actionCreators/getMovie";
import MoviesCard from "../MoviesCard/MoviesCard";
const Search = () => {
  const { search } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  console.log(search, "search");

  return (
    <div className={scss.search}>
      <div className={scss.content}>
        <div className={scss.text}>
          <h3>Поиск по сайту</h3>
          <p>На нашем сайте вы найдете подходящие вам фильмы и сериалы</p>
        </div>
        <input
          type="text"
          placeholder="Поиск..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch(searchMovie(e.target.value, 1));
            }
          }}
        />
      </div>
      <div className={scss.cards}>
        {search?.map((el, idx) => (
          <MoviesCard key={idx} el={el} />
        ))}
      </div>
    </div>
  );
};

export default Search;
