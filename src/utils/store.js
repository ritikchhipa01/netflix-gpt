import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import moviesReducer from './movieSlice'
import gptReducer from "./gptSlice";
import translateReducer from "./translateSlice"

const store = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt : gptReducer,
        txt : translateReducer,
        
    },
});


export default store;