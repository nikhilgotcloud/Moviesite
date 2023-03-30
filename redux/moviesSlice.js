import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const OMDB_API_URL = 'https://www.omdbapi.com/';
const OMDB_API_KEY = 'd946fac1';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (searchTerm) => {
  const response = await axios.get(`${OMDB_API_URL}?s=${searchTerm}&apikey=${OMDB_API_KEY}&type=movie`);
  return response.data;
});


const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    search: '',
    
    data: [],
    loading: false,
    error: null,
  },
  
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
      
      // console.log("step 1", action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.Search || [];
        state.error = action.payload.Error || null;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.data = [];
        state.error = action.payload || 'An error occurred while fetching movies';
        console.log("rejected ")
      })
      ;
  },
});






export const { setSearch } = moviesSlice.actions;


export default moviesSlice.reducer;

