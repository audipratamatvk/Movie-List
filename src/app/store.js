import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movieSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    movie: movieReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})