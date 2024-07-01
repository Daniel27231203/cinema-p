import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
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
  },
});

export const { getMovies } = movieSlice.actions;
export default movieSlice.reducer;
