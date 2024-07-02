import axios from "axios";
import { getMovies } from "../slices/movieSlice";

const key = "374ca72f94e839d20650b216894720a8";
export const API = `https://api.themoviedb.org/3/`;

export function getMovie(path, page) {
  return async (dispatch) => {
    let { data } = await axios.get(`${API}/movie/${path}`, {
      params: {
        api_key: key,
        language: "ru-RU",
        page: page,
      },
    });
    dispatch(getMovies(data.results));
  };
}
