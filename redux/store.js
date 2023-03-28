import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import seriesReducer from "./seriesSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    series: seriesReducer,
  },
});

export default store;

