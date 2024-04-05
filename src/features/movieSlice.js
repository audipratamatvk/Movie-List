import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  isAPIPending: false,
  isAPISuccess: false,
  errorMessage: '',
  movies: []
}

export const fetchMovies = createAsyncThunk('counter/fetchProvinces', async ({ query }) => {
  let URL = "https://www.omdbapi.com/?s=" + query + "&apikey=e8d5bbba"
  let response = await axios.get(URL)
  return response.data
})

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.isAPIPending = true
        state.errorMessage = ''
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        let movies = action.payload.Search
        state.isAPIPending = false
        state.isAPISuccess = true
        state.errorMessage = ''
        state.movies = [...movies]
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.isAPIPending = false
        state.isAPISuccess = false
        state.errorMessage = action.error.message
      })
  }
})

export default movieSlice.reducer