import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movieSlice";
import logger from "redux-logger";

const shouldIncludeLogger = process.env.NODE_ENV === "development"

export const store = configureStore({
  reducer: {
    movie: movieReducer
  },
  middleware: (getDefaultMiddleware) =>
    shouldIncludeLogger ? getDefaultMiddleware().concat(logger) : getDefaultMiddleware()
})
