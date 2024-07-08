import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  genre: [],
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
    genres(state, action) {
      state.genre = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { getMovies, search, genres, setLoading } = movieSlice.actions;
export default movieSlice.reducer;
