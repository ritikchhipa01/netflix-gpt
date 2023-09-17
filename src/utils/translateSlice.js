import { createSlice } from "@reduxjs/toolkit";


const translateSlice = createSlice(
  {
    name: 'translate',
    initialState: {
      language: "en",
      translatedText: null,
      title: null,
      overview: null,
    },
    reducers: {
      addtranslatedText: (state, action) => {
        state.translatedText = action.payload
      },
      addTitle: (state, action) => {
        state.title = action.payload;
      },
      addOverview: (state, action) => {
        state.overview = action.payload;
      },
      addlanguage : (state,action) => {
        state.language = action.payload;
      }
    }

  }
)

export const { addtranslatedText, addTitle, addOverview, addlanguage } = translateSlice.actions;

export default translateSlice.reducer;