import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  search: [],
  loading: false,
  error: "",
};
export const movieSlice = createSlice({
  name: "MOVIE",
  initialState,
  reducers: {
    getMovies(state, action) {
      state.movies = action.payload;
    },
    search(state, action) {
      state.search = action.payload;
    },
  },
});

export const { getMovies, search } = movieSlice.actions;
export default movieSlice.reducer;
