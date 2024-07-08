import axios from "axios";
import { genres, getMovies, search, setLoading } from "../slices/movieSlice";

const key = "acbae6bf5e4a8680dd07ce2aaf7400ad";
export const API = `https://api.themoviedb.org/3`;

export function getMovie(path, page) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      let { data } = await axios.get(`${API}/movie/${path}`, {
        params: {
          api_key: key,
          language: "ru-RU",
          page: page,
        },
      });
      dispatch(getMovies(data.results));
    } catch (error) {
      console.log(error.message);
      dispatch(setLoading(false));
    }
    dispatch(setLoading(false));
  };
}

export const searchMovie = (title, page) => {
  return async (dispatch) => {
    dispatch(setLoading(true));

    try {
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
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
    dispatch(setLoading(false));
  };
};

export const getGenre = (id, page) => {
  return async (dispatch) => {
    try {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=ru-RU&with_genres=${id}`,
        {
          params: {
            page: page,
          },
        }
      );
      dispatch(genres(data));
    } catch (error) {
      console.log(error);
    }
  };
};
