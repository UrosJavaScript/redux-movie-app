import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/movieApiKey';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
    const response = await movieApi
            .get(`?apiKey=${APIKey}&s=${term}&type=movie`);
        return response.data;
});

export const fetchAsyncSeries = createAsyncThunk('series/fetchAsyncSeries', async (term) => {
    const response = await movieApi
            .get(`?apiKey=${APIKey}&s=series&type=movie`);
        return response.data;
});

export const fetchAsyncShowDetailsMovies = createAsyncThunk('movies/fetchAsyncShowDetailsMovies', async (id) => {
    const response = await movieApi
            .get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
        return response.data;
});
 

const initialState = {
    movies: {},
    series: {},
    showMovies: {},
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovieShow: (state) => {
            state.showMovies = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('Pending');
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log('Fetched success Movies!');
            return { ...state, movies: payload };
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('Rejected!!!!!!');
        },
        [fetchAsyncSeries.fulfilled]: (state, {payload}) => {
            console.log('Fetched success Series!');
            return { ...state, series: payload };
        },
        [fetchAsyncShowDetailsMovies.fulfilled]: (state, {payload}) => {
            console.log('Fetched success Details!');
            return { ...state, showMovies: payload };
        },
    }
});

export const { removeSelectedMovieShow } = movieSlice.actions;

// prikaz svih filmova sa APIJA preko reducera
export const getAllMovies = (state) => state.movies.movies;

// prikaz svih serija
export const getAllSeries = (state) => state.movies.series;

// prikaz detalja za odabrani film
export const getShowDetails = (state) => state.movies.showMovies;

export default movieSlice.reducer;