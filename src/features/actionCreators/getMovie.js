import axios from "axios";
import { genres, getAllMovies, getMovies, search } from "../slices/movieSlice";
import { useDispatch } from "react-redux";

const key = "acbae6bf5e4a8680dd07ce2aaf7400ad";
export const API = `https://api.themoviedb.org/3`;

export function getAllMovie(path, page) {
  return async (dispatch) => {
    let { data } = await axios.get(`${API}/movie/${path}`, {
      params: {
        api_key: key,
        language: "ru-RU",
        page: page,
      },
    });
    dispatch(getAllMovies(data.results));
  };
}

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

export const getGenre = (id, page) => {
  return async (dispatch) => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=ru-RU&with_genres=${id}`,
      {
        params: {
          page: page,
        },
      }
    );
    dispatch(genres(data));
  };
};
