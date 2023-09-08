import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies : null,
        popularMovies : null,
        trailerVideo : null,
        topRatedMovies : null,
        upComingMovies : null,
        trendingMovies : null,
    },
    reducers :{
        addNowPlayingMovies : (state,action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state,action) => {
             state.popularMovies = action.payload;
        },
        addTrailerVideo : (state,action) => {
            state.trailerVideo = action.payload;
        },
        addTopRated : (state,action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies : (state,action) => {
            state.upComingMovies = action.payload;
        },
        addTrendingMovies :(state,action) => {
            state.trendingMovies = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRated, addUpcomingMovies,addTrendingMovies} = movieSlice.actions;
export default movieSlice.reducer;