const { createSlice } = require("@reduxjs/toolkit");

const gptSlice = createSlice({
    name : "gptSlice",
    initialState : {
         showGpt : false,
         movieName : null,
         moviesResult : null,
    },
    reducers : {
        toggleGptSearchView : (state,action) =>  {
            state.showGpt = !state.showGpt;
        },
        addGptMoviesResult : (state,action) => {
            const {movieName , moviesResult} = action.payload;
            state.movieName = movieName;
            state.moviesResult = moviesResult;
        }
    }     

})

export const {toggleGptSearchView, addGptMoviesResult} = gptSlice.actions;

export default gptSlice.reducer;