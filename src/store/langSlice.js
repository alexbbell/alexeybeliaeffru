import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name: 'lanswitch',
    initialState: {
        lang: 'en',
        selectedPage: {
            selectedPage: 1
        } 
    },
            

    reducers: {
        switchLang(state, action) {
            state.lang = action.payload;
   
         },
         switchPage(state, action) {
            state.selectedPage = action.payload
         }

    },
});

export const {switchLang, switchPage} = langSlice.actions;

export default langSlice.reducer;

