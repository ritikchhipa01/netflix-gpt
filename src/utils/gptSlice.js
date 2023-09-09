const { createSlice } = require("@reduxjs/toolkit");

const gptSlice = createSlice({
    name : "gptSlic",
    initialState : {
         showGpt : null,
    },
    reducers : {
        toggleGptSearchView : (state,action) =>  {
            state.showGpt = !state.showGpt;
        }
    }     

})

export const {toggleGptSearchView} = gptSlice.actions;

export default gptSlice.reducer;