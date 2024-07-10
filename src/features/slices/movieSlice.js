import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videos: [],
  detail: {},
  movies: [],
  allMovie: [],
  genre: [],
  search: [],
  video: [],
  actors: [],
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
    getOneVideo(state, action) {

      state.video = action.payload;
    },
    getActor(state, action) {
      state.actors = action.payload;
    },
  },
});

export const {
  getMovies,
  search,
  genres,
  setLoading,
  getAllMovies,
  getOne,

  getActor,

  getOneVideo,
} = movieSlice.actions;

export default movieSlice.reducer;
