import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name: 'lanswitch',
    initialState: {
        lang: 'en',
    },

    reducers: {
        switchLang(state, action) {
            state.lang = action.payload;
   
         },

    },
});

export const {switchLang} = langSlice.actions;
export default langSlice.reducer;

