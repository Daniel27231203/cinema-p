import axios from "axios";
import { getMovies, search } from "../slices/movieSlice";

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

export const searchMovie = (title, page) => {
  return async (dispatch) => {
    let { data } = await axios.get(
      `${API}/search/movie?api_key=${key}&query=${title}`,
      {
        params: {
          language: "ru-RU",
          page: page,
        },
      }
    );
    dispatch(search(data.results));
  };
};
