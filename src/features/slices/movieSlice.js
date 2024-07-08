import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detail: {},
  movies: [],
  allMovie: [],
  genre: [],
  search: [],
  loading: false,
  error: "",
};
export const movieSlice = createSlice({
  name: "MOVIE",
  initialState,
  reducers: {
    getAllMovies(state, action) {
      state.allMovie = action.payload;
    },
    getMovies(state, action) {
      state.movies = action.payload;
    },
    search(state, action) {
      state.search = action.payload;
    },
    genres(state, action) {
      state.genre = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    getOne(state, action) {
      state.detail = action.payload;
    },
  },
});

export const { getMovies, search, genres, setLoading, getAllMovies, getOne } =
  movieSlice.actions;

export default movieSlice.reducer;
