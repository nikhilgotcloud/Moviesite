import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const OMDB_API_URL = 'https://www.omdbapi.com/';
const OMDB_API_KEY = 'd946fac1';

export const fetchSeries = createAsyncThunk('movies/fetchSeries', async (searchTerm) => {
    const response = await axios.get(`${OMDB_API_URL}?s=${searchTerm}&apikey=${OMDB_API_KEY}&type=series`);
    return response.data;
    // console.log(response)
  });
  
  const seriesSlice = createSlice({
    name: 'series',
    initialState: {
      search: '',
      data: [],
      loading: false,
      error: null,
    },
    reducers: {
      setSearch(state, action) {
        state.search = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
       
        .addCase(fetchSeries.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchSeries.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload.Search || [];
          state.error = action.payload.Error || null;
        })
        .addCase(fetchSeries.rejected, (state, action) => {
          state.loading = false;
          state.data = [];
          state.error = action.payload || 'An error occurred while fetching Shows';
        })
        ;
    },
  });

  export const { setSearch } = seriesSlice.actions;
  export default seriesSlice.reducer;