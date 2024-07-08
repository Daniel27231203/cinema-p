import axios from "axios";

import {
  genres,
  getAllMovies,
  getMovies,
  getOne,
  search,
  setLoading,
} from "../slices/movieSlice";

const key = "acbae6bf5e4a8680dd07ce2aaf7400ad";
export const API = `https://api.themoviedb.org/3`;

export function getAllMovie(path, page) {
  return async (dispatch) => {
    let { data } = await axios.get(`${API}/${path}`, {
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

export const getGenre = (id, page, or) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/${or}?api_key=${key}&language=ru-RU&with_genres=${id}`,
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
    dispatch(setLoading(false));
  };
};
// ! DETAIL FUNC
export function getOneMovie(id, videos) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      let { data } = await axios.get(`${API}/movie/${id}${videos}`, {
        params: {
          api_key: key,
          language: "ru-RU",
        },
      });
      dispatch(getOne(data));
    } catch (error) {
      console.log(error.message);
      dispatch(setLoading(false));
    }
    dispatch(setLoading(false));
  };
}
